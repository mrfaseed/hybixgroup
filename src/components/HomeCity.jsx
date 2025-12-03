import React from 'react';
import HybixLogoAnimated from './HybixLogoAnimated';
import './HomeCity.css';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';

export default function HomeCity() {
    return (
        <section className="hero-section">
            {/* X-Shaped Glow Background */}
            <div className="hero-background">
                <div className="intro-flash"></div>
                <div className="x-glow-container">
                    <div className="x-bar bar-1"></div>
                    <div className="x-bar bar-2"></div>
                </div>
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
