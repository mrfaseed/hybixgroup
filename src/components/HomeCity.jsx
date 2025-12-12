import React from 'react';
import HybixLogoAnimated from './HybixLogoAnimated';
import FloatingTechBackground from './FloatingTechBackground';
import './HomeCity.css';
import { FaArrowRight, FaPlay, FaCode, FaMobileAlt, FaBrain, FaCloud } from 'react-icons/fa';

export default function HomeCity() {
    return (
        <section className="hero-root">
            <div className="hero-glow"></div>
            <FloatingTechBackground />

            <div className="hero-container">
                {/* 1. Headline */}
                <h1 className="hero-title">
                    Future of
                    <span className="text-gradient"> Digital Solutions</span>
                </h1>

                {/* 2. Logo in the middle */}
                <div className="hero-logo-center">
                    <HybixLogoAnimated />
                </div>

                {/* 3. Subtext */}
                <p className="hero-description">
                    We engineer premium web applications, scalable mobile solutions,
                    and intelligent AI platforms that define the next generation of business.
                </p>

                {/* 4. Buttons */}
                <div className="hero-cta-group">
                    <button className="btn-primary">
                        Start Building <FaArrowRight />
                    </button>
                    <button className="btn-secondary">
                        <FaPlay className="icon-tiny" /> Watch Demo
                    </button>
                </div>

                {/* Optional: Bottom Trust Icons (Small & Subtle) */}
                <div className="hero-trust-row">
                    <span><FaCode /> Web</span>
                    <span><FaMobileAlt /> Mobile</span>
                    <span><FaBrain /> AI</span>
                    <span><FaCloud /> Cloud</span>
                </div>
            </div>
        </section>
    );
}
