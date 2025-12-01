import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaArrowRight, FaHome } from 'react-icons/fa';
import './Login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="login-wrapper">
            {/* Animated Background */}
            <div className="login-bg">
                <div className="bg-orb orb-1"></div>
                <div className="bg-orb orb-2"></div>
                <div className="bg-orb orb-3"></div>
                <div className="grid-overlay"></div>
            </div>

            {/* Home Button */}
            <button
                className="floating-home-btn"
                title="Back to Home"
                onClick={() => {
                    if (window.opener) {
                        window.close();
                    } else {
                        window.location.href = '/';
                    }
                }}
            >
                <FaHome />
            </button>

            {/* Main Card */}
            <div className={`auth-card ${isLogin ? 'login-view' : 'signup-view'}`}>

                {/* Left Side - Visual/Brand */}
                <div className="auth-visual">
                    <div className="visual-content">
                        <h2>Hybix<span>Group</span></h2>
                        <p>
                            {isLogin
                                ? "Welcome back to the future of digital innovation."
                                : "Join the revolution. Build something incredible with us."}
                        </p>
                        <div className="visual-glass-card">
                            <div className="glass-line"></div>
                            <div className="glass-line short"></div>
                            <div className="glass-line medium"></div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="auth-form-container">
                    <div className="form-header">
                        <h3>{isLogin ? 'Sign In' : 'Get Started'}</h3>
                        <p className="sub-text">
                            {isLogin ? 'Access your dashboard' : 'Create your free account'}
                        </p>
                    </div>

                    <form className="modern-form" onSubmit={(e) => e.preventDefault()}>
                        {!isLogin && (
                            <div className="input-group slide-in">
                                <label>Full Name</label>
                                <div className="input-wrapper">
                                    <FaUser className="field-icon" />
                                    <input type="text" placeholder="John Doe" required />
                                </div>
                            </div>
                        )}

                        <div className="input-group">
                            <label>Email Address</label>
                            <div className="input-wrapper">
                                <FaEnvelope className="field-icon" />
                                <input type="email" placeholder="name@example.com" required />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <div className="input-wrapper">
                                <FaLock className="field-icon" />
                                <input type="password" placeholder="••••••••" required />
                            </div>
                        </div>

                        {isLogin && (
                            <div className="form-actions">
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <a href="#" className="forgot-link">Forgot password?</a>
                            </div>
                        )}

                        <button type="submit" className="primary-btn">
                            {isLogin ? 'Sign In' : 'Create Account'}
                            <FaArrowRight className="btn-arrow" />
                        </button>

                        <div className="divider">
                            <span>Or continue with</span>
                        </div>

                        <div className="social-actions">
                            <button className="social-btn google"><FaGoogle /> <span>Google</span></button>
                        </div>
                    </form>

                    <div className="auth-footer">
                        <p>
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button className="switch-auth-btn" onClick={toggleForm}>
                                {isLogin ? 'Sign Up' : 'Log In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
