import React, { useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';

const AdminSetup = () => {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleMakeMyselfAdmin = async () => {
        setLoading(true);
        setStatus('Processing...');

        try {
            // Initialize the callable function
            const setAdminFunction = httpsCallable(functions, 'setAdmin');

            // Call the function - no arguments needed as UID is hardcoded in backend per request
            const result = await setAdminFunction();

            setStatus(result.data.message);
            console.log("Admin Claim Result:", result);

            // Force token refresh to pick up new claims immediately
            // import { auth } from '../firebase' must be available if we want to do this automatically
            // But we'll just advise the user to re-login or refresh
            alert("Admin claim set! Please sign out and sign back in to refresh your token.");

        } catch (error) {
            console.error("Error calling setAdmin:", error);
            setStatus(`Error: ${error.message}`);
        }
        setLoading(false);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px', maxWidth: '400px', background: '#f9f9f9' }}>
            <h3>Admin Role Setup</h3>
            <p><strong>Target UID:</strong> QqeSmI7DsHYwIpYb6BiJ0Hhq64H2</p>

            <button
                onClick={handleMakeMyselfAdmin}
                disabled={loading}
                style={{
                    background: '#2563eb',
                    color: 'white',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    width: '100%'
                }}
            >
                {loading ? 'Setting Permissions...' : 'Grant Admin Privileges'}
            </button>

            {status && (
                <div style={{ marginTop: '15px', padding: '10px', background: status.includes('Error') ? '#fee2e2' : '#dcfce7', borderRadius: '4px', fontSize: '0.9rem' }}>
                    {status}
                </div>
            )}
        </div>
    );
};

export default AdminSetup;
