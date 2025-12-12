import React, { Suspense } from 'react';
const HybixLogoAnimated = React.lazy(() => import('./HybixLogoAnimated'));
import { useNavigate } from 'react-router-dom';
const FloatingTechBackground = React.lazy(() => import('./FloatingTechBackground'));
const RotatingGlobe = React.lazy(() => import('./RotatingGlobe'));
import './HomeCity.css';
import { FaArrowRight, FaPlay, FaCode, FaMobileAlt, FaBrain, FaCloud } from 'react-icons/fa';

export default function HomeCity() {
    const navigate = useNavigate();

    const handleStartBuilding = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/contact');
        }
    };

    return (
        <section className="hero-root">
            <div className="hero-glow"></div>
            <div className="hero-globes-container">
                <Suspense fallback={null}>
                    <RotatingGlobe className="hero-globe1 globe-left" />
                    <RotatingGlobe className="hero-globe2 globe-right" />
                </Suspense>
            </div>
            <Suspense fallback={null}>
                <FloatingTechBackground />
            </Suspense>

            <div className="hero-container">
                {/* 1. Headline */}
                <h1 className="hero-title">
                    Future of
                    <span className="text-gradient"> Digital Solutions</span>
                </h1>

                {/* 2. Logo in the middle */}
                <div className="hero-logo-center">
                    <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
                        <HybixLogoAnimated />
                    </Suspense>
                </div>

                {/* 3. Subtext */}
                <p className="hero-description">
                    We engineer premium web applications, scalable mobile solutions,
                    and intelligent AI platforms that define the next generation of business.
                </p>

                {/* 4. Buttons */}
                <div className="hero-cta-group">
                    <button className="btn-primary" onClick={handleStartBuilding}>
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
