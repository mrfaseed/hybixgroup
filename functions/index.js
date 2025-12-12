const functions = require('firebase-functions');
const admin = require('firebase-admin');

if (admin.apps.length === 0) {
    admin.initializeApp();
}

/**
 * Cloud Function to set admin claims for a specific user.
 * Deployed to: httpsCallable('setAdmin')
 */
exports.setAdmin = functions.https.onCall(async (data, context) => {
    // Hardcoded UID as requested
    const targetUid = "QqeSmI7DsHYwIpYb6BiJ0Hhq64H2";

    try {
        // Set the 'admin' custom claim to true
        await admin.auth().setCustomUserClaims(targetUid, { admin: true });

        return {
            success: true,
            message: `Success! User ${targetUid} has been granted admin privileges.`
        };
    } catch (error) {
        console.error("Error setting admin claim:", error);
        throw new functions.https.HttpsError('internal', 'Failed to set admin claim.');
    }
});
