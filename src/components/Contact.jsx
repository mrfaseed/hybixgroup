import React, { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import './Contact.css'
import emailAnimation from '../assets/Email.lottie';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return; // double check

    setIsSent(true);
    // Reset after animation
    setTimeout(() => {
      setIsSent(false);
      setFormData({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Message: ''
      });
    }, 3500);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">

        {/* Left Side: Form */}
        <div className="contact-form-section">
          <h1 className="contact-title">Contact us</h1>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>FIRST NAME</label>
                <input
                  type="text"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>
              <div className="form-group">
                <label>LAST NAME</label>
                <input
                  type="text"
                  name="LastName"
                  value={formData.LastName}
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
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>
              <div className="form-group">
                <label>PHONE NUMBER</label>
                <input
                  type="tel"
                  name="PhoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>WHAT DO YOU HAVE IN MIND</label>
              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                className="contact-textarea"
                placeholder="Please enter query..."
              ></textarea>
            </div>

            <div style={{ position: 'relative', width: 'fit-content' }}>
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={!isFormValid}
              >
                <span>Submit</span>
              </button>

              <AnimatePresence>
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
