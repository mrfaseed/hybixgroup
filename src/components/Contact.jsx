import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import {
    FaPaperPlane,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
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

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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
            {/* Animated Tech Background Icons */}
            <div className="tech-background">
                <FaReact className="tech-icon icon-1" />
                <FaNodeJs className="tech-icon icon-2" />
                <FaPython className="tech-icon icon-3" />
                <FaDatabase className="tech-icon icon-4" />
                <FaCode className="tech-icon icon-5" />
                <FaLaptopCode className="tech-icon icon-6" />
                <FaServer className="tech-icon icon-7" />
                <FaMicrochip className="tech-icon icon-8" />
                <SiJavascript className="tech-icon icon-9" />
                <SiTypescript className="tech-icon icon-10" />
            </div>

            <div className="contact-container">
                <div className="section-title">
                    <h2>Contact Us</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="contact-content">
                    {/* Left Side - Contact Info Boxes */}
                    <div className={`contact-info-wrapper ${isVisible ? 'animate-left' : ''}`}>
                        <div className="info-box">
                            <div className="icon-circle">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="info-text">
                                <h3>Address</h3>
                                <p>123 Tech Park, Innovation City, Digital State, 560001</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <div className="icon-circle">
                                <FaEnvelope />
                            </div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <p>hello@hybixgroup.com</p>
                                <p>support@hybixgroup.com</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <div className="icon-circle">
                                <FaPhoneAlt />
                            </div>
                            <div className="info-text">
                                <h3>Phone</h3>
                                <p>+91 98765 43210</p>
                                <p>+91 12345 67890</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className={`contact-form-container ${isVisible ? 'animate-right' : ''}`}>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>

                            <div className="form-group">
                                <label>Your Email</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>

                            <div className="form-group">
                                <label>Your Phone</label>
                                <input type="tel" placeholder="+1 234 567 8900" />
                            </div>

                            <div className="form-group">
                                <label>Your Message</label>
                                <textarea placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message <FaPaperPlane className="plane-icon" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
