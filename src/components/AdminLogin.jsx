import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaLock, FaEnvelope, FaKey, FaArrowRight, FaHome } from 'react-icons/fa';
import './AdminLogin.css';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const AdminLogin = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        



        try {
            // 2️⃣ Firebase login
            await login(email, password);

            // 3️⃣ Firestore admin check
            const adminRef = doc(db, "admins", email);
            const snap = await getDoc(adminRef);

            if (!snap.exists()) {
                setError("Unauthorized: You are NOT an admin.");
                setLoading(false);
                return;
            }

            // 4️⃣ Set admin session flag
            sessionStorage.setItem("isAdminAuthenticated", "true");

            // 5️⃣ Redirect
            navigate("/admin-dashboard");

        } catch (err) {
            setError("Failed to log in: " + err.message);
        }

        setLoading(false);
    };

    return (
        <div className="admin-login-wrapper">

            {/* Home Icon */}
            <button
                className="admin-home-btn"
                onClick={() => navigate('/')}
                title="Back to Home"
            >
                <FaHome size={48} />
            </button>

            <div className="admin-card">

                {/* Header */}
                <div className="admin-header">
                    <FaShieldAlt className="admin-shield" />
                    <h2>Admin <span className="highlight">Access</span></h2>
                    <p>Restricted Area — Authorized Personnel Only</p>
                </div>

                {/* Form */}
                <form className="admin-form" onSubmit={handleAdminLogin}>
                    {error && (
                        <div className="admin-error">
                            {error}
                        </div>
                    )}

                    <div className="admin-input-group">
                        <label>Email Address</label>
                        <div className="admin-input-wrapper">
                            <FaEnvelope className="admin-field-icon" />
                            <input
                                type="email"
                                placeholder="admin@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="admin-input-group">
                        <label>Password</label>
                        <div className="admin-input-wrapper">
                            <FaLock className="admin-field-icon" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                

                    <button type="submit" className="admin-submit-btn" disabled={loading}>
                        {loading ? "Authenticating..." : "Access Admin Panel"}
                        {!loading && <FaArrowRight className="admin-arrow" />}
                    </button>

                    <button
                        type="button"
                        className="admin-back-btn"
                        onClick={() => navigate('/login')}
                    >
                        Return to User Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
