import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bg-animation"></div>
            <div className="footer-container">
                {/* Column 1: Company Info & 3D Element */}
                <div className="footer-col brand-col">
                    <div className="logo-section">
                        <div className="cube-wrapper">
                            <div className="cube">
                                <div className="face front"></div>
                                <div className="face back"></div>
                                <div className="face right"></div>
                                <div className="face left"></div>
                                <div className="face top"></div>
                                <div className="face bottom"></div>
                            </div>
                        </div>
                        <h2 className="footer-logo">Hybix Group</h2>
                    </div>
                    <p className="footer-desc">
                        Pioneering the future of digital innovation. We craft immersive web experiences, robust software, and cutting-edge AI solutions.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h3 className="footer-title">Company</h3>
                    <ul className="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">News & Media</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div className="footer-col">
                    <h3 className="footer-title">Solutions</h3>
                    <ul className="footer-links">
                        <li><Link to="/solutions/web-development">Web Development</Link></li>
                        <li><Link to="/solutions/mobile-apps">Mobile Apps</Link></li>
                        <li><Link to="/solutions/enterprise-software">Enterprise Software</Link></li>
                        <li><Link to="/solutions/ai-machine-learning">AI & Machine Learning</Link></li>
                        <li><Link to="/solutions/cloud-infrastructure">Cloud Infrastructure</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div className="footer-col contact-col">
                    <h3 className="footer-title">Get in Touch</h3>
                    <ul className="contact-info">
                        <li>
                            <div className="icon-box"><MdPhone /></div>
                            <div className="contact-details">
                                <span>+91 6383721027</span>
                                <span className="sub-text">24/7 open</span>
                            </div>
                        </li>
                        <li>
                            <div className="icon-box"><MdEmail /></div>
                            <div className="contact-details">
                                <span>hybixgroup@gmail.com</span>
                                <span className="sub-text">Online Support</span>
                            </div>
                        </li>
                        <li>
                            <div className="icon-box"><MdLocationOn /></div>
                            <div className="contact-details">
                                <span>64/116 colony ,</span>
                                <span className="sub-text">Aruppukottai road,Virudhunagar</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; 2025 Hybix Group. All Rights Reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
