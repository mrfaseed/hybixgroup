import React from 'react';
import HybixLogoAnimated from './HybixLogoAnimated';
import './HomeCity.css';
import { FaArrowRight, FaInfoCircle, FaCode, FaMobileAlt, FaBrain, FaCloud } from 'react-icons/fa';

export default function HomeCity() {
    return (
        <section className="hero-section">
            <div className="hero-background">
                <div className="intro-flash-overlay"></div>
                <img src="/fav-logo.svg" alt="" className="static-bg-light" />
            </div>

            {/* Content Area */}
            <div className="hero-content">
                <div className="logo-wrapper">
                    <HybixLogoAnimated />
                </div>

                <div className="hero-text">
                    <h1 className="hero-headline">
                        Innovating the Future of <br />
                        <span className="highlight-text">Digital Solutions</span>
                    </h1>
                    <p className="hero-subtext">
                        We build premium web applications, mobile solutions, and AI-driven platforms designed to scale and succeed.
                    </p>
                </div>

                <div className="hero-buttons">
                    <button className="btn-hero btn-primary">
                        <span>Get Started</span>
                        <FaArrowRight className="btn-icon" />
                    </button>
                    <button className="btn-hero btn-secondary">
                        <span>Learn More</span>
                        <FaInfoCircle className="btn-icon" />
                    </button>
                </div>

                <div className="trust-badges">
                    <div className="trust-item">
                        <FaCode /> <span>Web Apps</span>
                    </div>
                    <div className="trust-item">
                        <FaMobileAlt /> <span>Mobile</span>
                    </div>
                    <div className="trust-item">
                        <FaBrain /> <span>AI Solutions</span>
                    </div>
                    <div className="trust-item">
                        <FaCloud /> <span>Cloud</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
