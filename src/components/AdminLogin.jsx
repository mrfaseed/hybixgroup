import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaLock, FaUserSecret, FaKey } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './AdminLogin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Security Check (Hardcoded for demonstration of "Highly Secured" request)
        // In a real app, this should be validated on the backend via Custom Claims
        const ADMIN_SECRET = "HYBIX-ADMIN-2025";

        if (secretKey !== ADMIN_SECRET) {
            setError('Invalid Security Clearance Code');
            setLoading(false);
            return;
        }

        try {
            await login(email, password);
            // If successful and key is correct, redirect to dashboard
            // We store a session flag to verify "Admin" access level in the protected route
            sessionStorage.setItem('isAdminAuthenticated', 'true');
            navigate('/admin-dashboard');
        } catch (err) {
            setError('Authentication Failed: ' + err.message);
        }
        setLoading(false);
    };

    return (
        <div className="admin-login-container">
            <div className="security-overlay"></div>

            <div className="admin-login-box">
                <div className="admin-header">
                    <div className="shield-icon-wrapper">
                        <FaShieldAlt className="shield-icon" />
                    </div>
                    <h2>Admin <span className="highlight-red">Portal</span></h2>
                    <p>Restricted Access Only</p>
                </div>

                <form onSubmit={handleAdminLogin} className="admin-form">
                    {error && <div className="security-alert">{error}</div>}

                    <div className="input-field-group">
                        <FaUserSecret className="input-icon" />
                        <input
                            type="email"
                            placeholder="Admin Identifier"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-field-group">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-field-group key-field">
                        <FaKey className="input-icon" />
                        <input
                            type="password"
                            placeholder="Security Clearance Code"
                            value={secretKey}
                            onChange={(e) => setSecretKey(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="admin-submit-btn" disabled={loading}>
                        {loading ? 'Authenticating...' : 'Access Dashboard'}
                    </button>

                    <button
                        type="button"
                        className="back-to-home-btn"
                        onClick={() => navigate('/login')}
                    >
                        Return to Public Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
