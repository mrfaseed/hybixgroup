import React from 'react';
import HybixLogoAnimated from './HybixLogoAnimated';
import './HomeCity.css';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';

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
            </div>
        </section>
    );
}
