const { onCall, HttpsError } = require("firebase-functions/v2/https");
const admin = require('firebase-admin');


// Initialize admin app if not already initialized
if (admin.apps.length === 0) {
  admin.initializeApp();
}

// Email sending removed as per request (account disabled)
// Messages are stored in Firestore 'messages' collection

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

  // Save to Firestore 'messages' collection
  try {
    await db.collection('messages').add({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      uid: uid || 'anonymous',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      read: false
    });

    // Return success immediately after saving to DB
    return { success: true, message: 'Message sent successfully' };

  } catch (dbError) {
    console.error("Error saving message to Firestore:", dbError);
    throw new HttpsError('internal', 'Unable to save message details.');
  }
});

exports.getUsers = onCall({ cors: true }, async (request) => {
  // 1. Auth Check
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be logged in.');
  }

  try {
    const listUsersResult = await admin.auth().listUsers(1000);
    const users = listUsersResult.users.map(userRecord => ({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      photoURL: userRecord.photoURL,
      creationTime: userRecord.metadata.creationTime,
      lastSignInTime: userRecord.metadata.lastSignInTime,
    }));
    return { users };
  } catch (error) {
    console.error("Error listing users:", error);
    throw new HttpsError('internal', 'Unable to list users.');
  }
});

exports.deleteUserAccount = onCall({ cors: true }, async (request) => {
  // 1. Auth Check
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be logged in to delete accounts.');
  }

  const { uid } = request.data;
  if (!uid) {
    throw new HttpsError('invalid-argument', 'The function must be called with a "uid".');
  }

  try {
    await admin.auth().deleteUser(uid);
    return { success: true, message: `User ${uid} deleted successfully.` };
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new HttpsError('internal', 'Unable to delete user.');
  }
});
