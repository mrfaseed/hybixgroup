import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaArrowRight, FaHome } from 'react-icons/fa';
import './Login.css?v=force_reload';
import { useAuth } from '../context/AuthContext';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import loginAnimation from '../assets/Login.lottie';

const Login = () => {
    const { signup, login, googleLogin, updateUserProfile, currentUser, resetPassword, verifyEmail } = useAuth();

    const [isLogin, setIsLogin] = useState(true);
    const [isResetPassword, setIsResetPassword] = useState(false);
    const [isVerificationPending, setIsVerificationPending] = useState(currentUser && !currentUser.emailVerified);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';

    useEffect(() => {
        let interval;
        if (isVerificationPending && currentUser) {
            interval = setInterval(async () => {
                try {
                    await currentUser.reload();
                    if (currentUser.emailVerified) {
                        setIsVerificationPending(false);
                        navigate(from, { replace: true });
                    }
                } catch (err) {
                    console.error("Error reloading user:", err);
                }
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isVerificationPending, currentUser, navigate, from]);

    useEffect(() => {
        if (currentUser && currentUser.emailVerified) {
            navigate(from, { replace: true });
        } else if (currentUser && !currentUser.emailVerified) {
            // If user is logged in but not verified, show verification pending screen
            setIsVerificationPending(true);
        }
    }, [currentUser, navigate, from]);

    const [signupStep, setSignupStep] = useState(1);

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setIsResetPassword(false);
        setIsVerificationPending(false);
        setSignupStep(1);
        setError('');
        setSuccessMessage('');
        setEmail('');
        setPassword('');
        setName('');
    };

    const handleNextStep = () => {
        setError('');
        if (signupStep === 1) {
            if (!name.trim()) {
                setError('Please enter your full name.');
                return;
            }
            setSignupStep(2);
        } else if (signupStep === 2) {
            if (!email.trim()) {
                setError('Please enter your email address.');
                return;
            }
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError('Please enter a valid email address.');
                return;
            }
            setSignupStep(3);
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!email) {
            setError('Please enter your email address.');
            return;
        }

        const lastResetTime = localStorage.getItem('lastPasswordResetTime');
        const fourHours = 4 * 60 * 60 * 1000;

        if (lastResetTime && Date.now() - lastResetTime < fourHours) {
            setError('You can only request a password reset once every 4 hours.');
            return;
        }

        setLoading(true);
        try {
            await resetPassword(email);
            setSuccessMessage('Email sent successfully to reset your password.');
            localStorage.setItem('lastPasswordResetTime', Date.now());
        } catch (err) {
            setError('Failed to reset password: ' + err.message);
        }
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
        setLoading(true);

        try {
            if (isLogin) {
                const userCredential = await login(email, password, rememberMe);
                if (!userCredential.user.emailVerified) {
                    setIsVerificationPending(true);
                    setLoading(false);
                    return;
                }
                navigate(from, { replace: true });
            } else {
                const userCredential = await signup(email, password);
                if (name) {
                    await updateUserProfile(name);
                }
                await verifyEmail(userCredential.user);
                setIsVerificationPending(true);
            }
        } catch (err) {
            setError('Failed to ' + (isLogin ? 'log in' : 'create an account') + ': ' + err.message);
        }

        setLoading(false);
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await googleLogin();
            navigate(from, { replace: true });
        } catch (err) {
            setError('Failed to log in with Google: ' + err.message);
        }
        setLoading(false);
    };

    return (
        <div className="login-wrapper">
            {/* Animated Background */}


            {/* Home Button */}
            <button
                className="home-icon-btn"
                onClick={() => navigate('/')}
                title="Back to Home"
            >
                <FaHome size={64} />
            </button>

            {/* Main Card */}
            <div className={`auth-card ${isLogin ? 'login-view' : 'signup-view'}`}>

                {/* Left Side - Visual/Brand */}
                <div className="auth-visual">
                    <div className="visual-content">
                        <h2>Hybix<span>Group</span></h2>
                        <p>
                            {isVerificationPending
                                ? "Please verify your email to continue."
                                : isResetPassword
                                    ? "Don't worry, we've got you covered."
                                    : isLogin
                                        ? "Welcome back to the future of digital innovation."
                                        : "Join the revolution. Build something incredible with us."}
                        </p>
                        <div className="lottie-container">
                            <DotLottieReact
                                src={loginAnimation}
                                loop
                                autoplay
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="auth-form-container">
                    <div className="form-header">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h3>
                                {isVerificationPending
                                    ? 'Verify Account'
                                    : isResetPassword
                                        ? 'Reset Password'
                                        : isLogin ? 'Sign In' : 'Get Started'}
                            </h3>
                            {isLogin && (
                                <button
                                    onClick={() => navigate('/admin-login')}
                                    className="admin-login-link"
                                    title="Admin Login"
                                >
                                    Admin Login
                                </button>
                            )}
                        </div>
                        <p className="sub-text">
                            {isVerificationPending
                                ? 'We have sent a verification link to your email.'
                                : isResetPassword
                                    ? 'Enter your email to receive a reset link'
                                    : isLogin ? 'Access your dashboard' : 'Create your free account'}
                        </p>
                        {error && <div className="error-message" style={{ color: 'red', marginTop: '10px', fontSize: '0.9rem' }}>{error}</div>}
                        {successMessage && <div className="success-message" style={{ color: 'green', marginTop: '10px', fontSize: '0.9rem' }}>{successMessage}</div>}
                    </div>

                    {isVerificationPending ? (
                        <div className="verification-pending-container" style={{ textAlign: 'center', padding: '20px 0' }}>
                            <div className="spinner" style={{ margin: '0 auto 20px', width: '40px', height: '40px', border: '4px solid rgba(255, 255, 255, 0.3)', borderTopColor: '#3b82f6' }}></div>
                            <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>
                                Click the link sent to <strong>{email || (currentUser && currentUser.email)}</strong> to verify your account.
                            </p>
                            <p style={{ color: '#ffffffff', fontSize: '0.9rem' }}>
                                Once verified, you will be automatically redirected.
                            </p>
                            <button
                                className="switch-auth-btn"
                                onClick={() => window.location.reload()}
                                style={{ marginTop: '20px' }}
                            >
                                I've verified my email
                            </button>
                        </div>
                    ) : isResetPassword ? (
                        <form className="modern-form" onSubmit={handleForgotPassword}>
                            <div className="input-group">
                                <label>Email Address</label>
                                <div className="input-wrapper">
                                    <FaEnvelope className="field-icon" />
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="primary-btn" disabled={loading}>
                                {loading ? <div className="spinner"></div> : 'Send Reset Link'}
                                {!loading && <FaArrowRight className="btn-arrow" />}
                            </button>

                            <div className="auth-footer" style={{ marginTop: '20px' }}>
                                <p>
                                    Remember your password?
                                    <button className="switch-auth-btn" onClick={() => { setIsResetPassword(false); setError(''); setSuccessMessage(''); }}>
                                        Back to Login
                                    </button>
                                </p>
                            </div>
                        </form>
                    ) : (
                        <form className="modern-form" onSubmit={handleSubmit}>
                            {/* Login Form (Single Step) */}
                            {isLogin && (
                                <>
                                    <div className="input-group">
                                        <label>Email Address</label>
                                        <div className="input-wrapper">
                                            <FaEnvelope className="field-icon" />
                                            <input
                                                type="email"
                                                placeholder="name@example.com"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label>Password</label>
                                        <div className="input-wrapper">
                                            <FaLock className="field-icon" />
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-actions">
                                        <label className="remember-me">
                                            <input
                                                type="checkbox"
                                                checked={rememberMe}
                                                onChange={(e) => setRememberMe(e.target.checked)}
                                            />
                                            <span>Remember me</span>
                                        </label>
                                        <span className="forgot-link" onClick={() => { setIsResetPassword(true); setError(''); setSuccessMessage(''); }}>Forgot password?</span>
                                    </div>

                                    <button type="submit" className="primary-btn" disabled={loading}>
                                        {loading ? 'Processing...' : 'Sign In'}
                                        {!loading && <FaArrowRight className="btn-arrow" />}
                                    </button>
                                </>
                            )}

                            {/* Signup Form (Multi-Step) */}
                            {!isLogin && (
                                <>
                                    {signupStep === 1 && (
                                        <div className="input-group slide-in">
                                            <label>Full Name</label>
                                            <div className="input-wrapper">
                                                <FaUser className="field-icon" />
                                                <input
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    autoFocus
                                                />
                                            </div>
                                            <button type="button" className="primary-btn" onClick={handleNextStep} style={{ marginTop: '10px' }}>
                                                Next <FaArrowRight className="btn-arrow" />
                                            </button>
                                        </div>
                                    )}

                                    {signupStep === 2 && (
                                        <div className="input-group slide-in">
                                            <label>Email Address</label>
                                            <div className="input-wrapper">
                                                <FaEnvelope className="field-icon" />
                                                <input
                                                    type="email"
                                                    placeholder="name@example.com"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    autoFocus
                                                />
                                            </div>
                                            <button type="button" className="primary-btn" onClick={handleNextStep} style={{ marginTop: '10px' }}>
                                                Next <FaArrowRight className="btn-arrow" />
                                            </button>
                                        </div>
                                    )}

                                    {signupStep === 3 && (
                                        <div className="input-group slide-in">
                                            <label>Password</label>
                                            <div className="input-wrapper">
                                                <FaLock className="field-icon" />
                                                <input
                                                    type="password"
                                                    placeholder="••••••••"
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    autoFocus
                                                />
                                            </div>
                                            <button type="submit" className="primary-btn" disabled={loading} style={{ marginTop: '10px' }}>
                                                {loading ? <div className="spinner"></div> : 'Verify Account'}
                                                {!loading && <FaArrowRight className="btn-arrow" />}
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}

                            <div className="divider">
                                <span>Or continue with</span>
                            </div>

                            <div className="social-actions">
                                <button type="button" className="social-btn google" onClick={handleGoogleSignIn} disabled={loading}>
                                    <FaGoogle /> <span>Google</span>
                                </button>
                            </div>
                        </form>
                    )}

                    {!isResetPassword && !isVerificationPending && (
                        <div className="auth-footer">
                            <p>
                                {isLogin ? "Don't have an account?" : "Already have an account?"}
                                <button className="switch-auth-btn" onClick={toggleForm}>
                                    {isLogin ? 'Sign Up' : 'Log In'}
                                </button>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
