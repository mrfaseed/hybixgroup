const { onCall, HttpsError } = require("firebase-functions/v2/https");
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Initialize admin app if not already initialized
if (admin.apps.length === 0) {
    admin.initializeApp();
}

// Configure Nodemailer with Gmail
// Note: Ensure 'Less secure app access' is enabled or use an App Password
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hybixgroups@gmail.com',
        pass: 'jslj ynok svbm eacl'
    }
});

exports.sendContactEmail = onCall({ cors: true }, async (request) => {
    // Extract data and auth from the v2 request object
    const { data, auth } = request;

    // 1. Auth Check - Ensure user is logged in
    if (!auth) {
        console.error("Auth context missing in v2 request.");
        throw new HttpsError(
            'unauthenticated',
            'You must be logged in to send a message.'
        );
    }

    const uid = auth.uid;
    const db = admin.firestore();

    // 2. Rate Limiting Check
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const limitRef = db.collection('user_contact_limits').doc(uid);

    try {
        await db.runTransaction(async (transaction) => {
            const doc = await transaction.get(limitRef);

            if (doc.exists) {
                const limitData = doc.data();
                if (limitData.lastDate === today) {
                    if (limitData.count >= 5) {
                        throw new HttpsError(
                            'resource-exhausted',
                            'Daily message limit reached. You can only send 5 messages per day.'
                        );
                    }
                    transaction.update(limitRef, { count: admin.firestore.FieldValue.increment(1) });
                } else {
                    // Reset for new day
                    transaction.update(limitRef, { count: 1, lastDate: today });
                }
            } else {
                // First time user sending message
                transaction.set(limitRef, { count: 1, lastDate: today });
            }
        });
    } catch (e) {
        // Re-throw known HttpsErrors, wrap others
        if (e.code === 'resource-exhausted') {
            throw e;
        }
        console.error("Transaction failure:", e);
        throw new HttpsError('internal', 'An error occurred while processing your request.');
    }

    // Log the received data
    console.log("raw data received:", data);

    const payload = data;

    // Payload extraction
    const firstName = payload.firstName || payload.FirstName || 'N/A';
    const lastName = payload.lastName || payload.LastName || 'N/A';
    const email = payload.email || payload.Email || 'No Email Provided';
    const phoneNumber = payload.phoneNumber || payload.PhoneNumber || 'No Phone Provided';
    const message = payload.message || payload.Message || 'No Message';

    const mailOptions = {
        from: '"Hybix Groups" <hybixgroups@gmail.com>',
        to: [
            'faseedmohamed6@gmail.com',
            'imshabanoffl@gmail.com',
            'jegatheesh8055@gmail.com'
        ],
        subject: `📩 New Contact Form Submission – ${firstName} ${lastName}`,
        html: `
    <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
      <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; padding:24px;">

        <h2 style="margin-top:0; color:#1f2937;">New Contact Form Submission</h2>

        <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td style="font-weight:bold; width:120px;">Name</td>
            <td>${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="font-weight:bold;">Email</td>
            <td>
              <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">
                ${email}
              </a>
            </td>
          </tr>
          <tr>
            <td style="font-weight:bold;">Phone</td>
            <td>${phoneNumber || "—"}</td>
          </tr>
        </table>

        <hr style="margin:20px 0; border:none; border-top:1px solid #e5e7eb;" />

        <h3 style="margin-bottom:8px;">Message</h3>
        <p style="white-space:pre-line; color:#374151;">
          ${message}
        </p>

        <hr style="margin:20px 0; border:none; border-top:1px solid #e5e7eb;" />

        <p style="font-size:12px; color:#6b7280;">
          This message was sent from the Hybix Groups contact form.
        </p>

      </div>
    </div>
  `
    };


    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to faseedmohamed6@gmail.com");
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new HttpsError('internal', 'Unable to send email', error);
    }
});
