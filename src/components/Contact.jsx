import React, { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import './Contact.css'
import SEO from './SEO';
import emailAnimation from '../assets/Email.lottie?url';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  // Prefill data from Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Attempt to split display name
        const displayName = currentUser.displayName || '';
        const parts = displayName.trim().split(' ');
        const firstName = parts[0] || '';
        const lastName = parts.slice(1).join(' ') || '';

        setFormData(prev => ({
          ...prev,
          firstName: firstName,
          lastName: lastName,
          email: currentUser.email || ''
        }));
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear status message when user types
    if (statusMessage) setStatusMessage(null);
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If not logged in, redirect to login/signup with prefilled data
    if (!user) {
      navigate('/login', {
        state: {
          mode: 'signup',
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          from: '/contact' // Optional: redirect back here after login if desired
        }
      });
      return;
    }

    if (!isFormValid) return;

    setIsLoading(true);
    setStatusMessage(null);

    try {
      // Direct Firestore write to bypass Cloud Function issues
      const { addDoc, collection, serverTimestamp } = await import("firebase/firestore");
      const { db } = await import("../firebase");

      await addDoc(collection(db, "messages"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
        uid: user ? user.uid : 'anonymous',
        createdAt: serverTimestamp(),
        read: false
      });

      setIsSent(true);
      setStatusMessage({ type: 'success', text: 'Message successfully sent!' });

      // Reset after animation
      setTimeout(() => {
        setIsSent(false);
        setStatusMessage(null);
        setFormData(prev => ({
          ...prev,
          message: '',
          phoneNumber: ''
        }));
      }, 5000);

    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage({ type: 'error', text: "Failed to send message. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact-section" className="contact-page-wrapper">
      <SEO
        title="Contact Us"
        description="Connect with Hybix Group for inquiries about Enterprise ERP, Data Analytics, App Development, and more. We are here to help."
        keywords="contact hybix, hybix support, hire hybix, software consultation, tech inquiry"
      />
      <div className="contact-container">

        {/* Left Side: Form */}
        <div className="contact-form-section">
          <h1 className="contact-title">Contact us</h1>
          <a
            href="https://chat.whatsapp.com/HmpBFZjaoC7DC46CNlR3cD"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#25D366',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              marginBottom: '30px',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Join our WhatsApp Group
          </a>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>FIRST NAME</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>
              <div className="form-group">
                <label>LAST NAME</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  readOnly={!!user} // Only read-only if user is logged in
                  disabled={!!user} // Only disabled if user is logged in
                  title={user ? "Email cannot be changed" : "Enter your email"}
                  className="contact-input"
                  style={user ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                />
              </div>
              <div className="form-group">
                <label>PHONE NUMBER</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>WHAT DO YOU HAVE IN MIND</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact-textarea"
                placeholder="Please enter query..."
              ></textarea>
            </div>

            <div style={{ position: 'relative', width: 'fit-content' }}>
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={!isFormValid || isLoading}
                style={{ minWidth: '150px' }}
              >
                {isLoading ? (
                  <div className="elegant-loader">
                    <motion.div className="loader-dot" animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0 }} />
                    <motion.div className="loader-dot" animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} />
                    <motion.div className="loader-dot" animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} />
                  </div>
                ) : (
                  <span>Submit</span>
                )}
              </button>

              <AnimatePresence>
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`status-message ${statusMessage.type}`}
                  >
                    {statusMessage.text}
                  </motion.div>
                )}

                {isSent && (
                  <motion.div
                    initial={{ opacity: 1, x: 0, y: 0, scale: 0.5, rotate: 0 }}
                    animate={{
                      x: 600,
                      y: -100,
                      rotate: 45,
                      scale: [1, 1.5, 0.5],
                      opacity: 0
                    }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 10,
                      pointerEvents: 'none',
                      color: '#437dc3'
                    }}
                  >
                    <FaPaperPlane size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </form>
        </div>

        {/* Right Side: Visual/Lottie */}
        <div className="contact-visual-section">
          <DotLottieReact
            src={emailAnimation}
            loop
            autoplay
            className="contact-lottie"
          />
        </div>

      </div>
    </div>
  );
};

export default Contact;
