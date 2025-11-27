import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1: Company Info */}
                <div className="footer-col">
                    <h2 className="footer-logo">Hybix Group</h2>
                    <p className="footer-desc">
                        Hybix Group — Leading IT company offering custom software, web, mobile app, and digital solutions for businesses and career-oriented IT training.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><FaFacebookF /></a>
                        <a href="#" className="social-icon"><FaTwitter /></a>
                        <a href="#" className="social-icon"><FaLinkedinIn /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                    </div>
                </div>

                {/* Column 2: Useful Links */}
                <div className="footer-col">
                    <h3 className="footer-title">Useful Links</h3>
                    <ul className="footer-links">
                        <li><a href="#">About Company</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Column 3: Our Services */}
                <div className="footer-col">
                    <h3 className="footer-title">Our Services</h3>
                    <ul className="footer-links">
                        <li><a href="#">Software Development</a></li>
                        <li><a href="#">Website Development</a></li>
                        <li><a href="#">Mobile App Development</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Artificial Intelligence</a></li>
                        <li><a href="#">Cloud Solution</a></li>
                        <li><a href="#">IoT Solutions</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact Information */}
                <div className="footer-col">
                    <h3 className="footer-title">Contact Information</h3>
                    <ul className="contact-info">
                        <li>
                            <MdPhone className="contact-icon" />
                            <span>+91 95143 22444</span>
                        </li>
                        <li>
                            <MdPhone className="contact-icon" />
                            <span>+91 95143 22445</span>
                        </li>
                        <li>
                            <MdEmail className="contact-icon" />
                            <span>hybixgroup@gmail.com</span>
                        </li>
                        <li>
                            <MdLocationOn className="contact-icon" />
                            <span>153/2 North Veli Street, Simmakkal, Madurai-01</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Hybix Group. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
