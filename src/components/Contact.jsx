import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Contact.css';
import {
    FaPaperPlane,
    FaReact,
    FaNodeJs,
    FaPython,
    FaDatabase,
    FaCode,
    FaLaptopCode,
    FaServer,
    FaMicrochip
} from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import contactAnimation from '../assets/contact.lottie';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: location.state?.savedMessage || ''
    });

    useEffect(() => {
        if (currentUser) {
            setFormData(prev => ({
                ...prev,
                name: currentUser.displayName || '',
                email: currentUser.email || ''
            }));
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!currentUser) {
            // Redirect to login and save current location to return back
            const fromLocation = {
                pathname: location.pathname,
                search: location.search,
                hash: '#contact',
                state: { savedMessage: formData.message }
            };
            navigate('/login', { state: { from: fromLocation } });
            return;
        }
        // Handle form submission here (e.g., send data to backend)
        console.log("Form submitted:", formData);
        alert("Message sent successfully!");
        setFormData(prev => ({ ...prev, message: '' })); // Clear message only
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (

        <section className="contact-section" ref={sectionRef} id="contact">
            {/* Animated Background */}
            <div className="contact-background">
                <div className="grid-overlay"></div>
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="floating-particles">
                    {React.useMemo(() => [...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${5 + Math.random() * 10}s`
                            }}
                        ></div>
                    )), [])}
                </div>
            </div>

            <div className="contact-container">
                <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
                    <div className="header-badge">
                        <span className="badge-icon">✉️</span>
                        <span className="badge-text">Get in Touch</span>
                    </div>
                    <h1 className="section-title">
                        Let's Start a <span className="gradient-text">Conversation</span>
                    </h1>
                    <p className="section-subtitle">
                        Have a project in mind? We'd love to hear from you.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Left Side - Lottie Animation */}
                    <div className={`contact-image-wrapper ${isVisible ? 'animate-left' : ''}`}>
                        <div className="image-glow"></div>
                        <div className="lottie-container" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <DotLottieReact
                                src={contactAnimation}
                                loop
                                autoplay
                                style={{ width: '100%', height: '100%', maxWidth: '600px' }}
                            />
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className={`contact-form-container ${isVisible ? 'animate-right' : ''}`}>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={!!currentUser}
                                    style={currentUser ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                                />
                            </div>

                            <div className="form-group">
                                <label>Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={!!currentUser}
                                    style={currentUser ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                                />
                            </div>

                            <div className="form-group">
                                <label>Your Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+1 234 567 8900"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Your Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                <span className="button-text">Send Message</span>
                                <FaPaperPlane className="plane-icon" />
                                <div className="button-glow"></div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default React.memo(Contact);
