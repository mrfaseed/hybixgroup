import React from 'react';
import ColorBends from './ColorBends';
import HybixLogoAnimated from './HybixLogoAnimated';
import './HomeCity.css';

export default function HomeCity() {
    return (
        <div className="hero-container">
            {/* Background Layer with ColorBends */}
            <div className="hero-background">
                <ColorBends
                    colors={["#000000", "#000000", "#0a0a2e", "#1e3a8a", "#3b82f6"]} // Black base with blue accents
                    rotation={0}
                    speed={0.5}
                    scale={5}
                    frequency={0.5}
                    warpStrength={1.5}
                    mouseInfluence={0.2}
                    parallax={0.1}
                    noise={0}
                    transparent={false}
                />
            </div>

            {/* Content Area */}
            <div className="hero-content">
                <HybixLogoAnimated />
            </div>
        </div>
    );
}
