import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const { pathname } = useLocation();

    // Automatically scroll to top on route change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            const scroll = `${totalScroll / windowHeight}`;
            const progress = Number(scroll);

            setScrollProgress(progress);

            if (totalScroll > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Calculate stroke offset
    // Circumference = 2 * PI * r
    const radius = 24; // slightly smaller than half width to account for stroke
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - scrollProgress * circumference;

    return (
        <div
            className={`scroll-to-top-container ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <svg className="progress-ring" viewBox="0 0 60 60">
                <circle
                    className="progress-ring__circle-track"
                    stroke="#e2e8f0"
                    strokeWidth="4"
                    fill="transparent"
                    r={radius}
                    cx="30"
                    cy="30"
                />
                <circle
                    className="progress-ring__circle"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    fill="white"
                    r={radius}
                    cx="30"
                    cy="30"
                    style={{
                        strokeDasharray: `${circumference} ${circumference}`,
                        strokeDashoffset: strokeDashoffset
                    }}
                />
            </svg>
            <div className="arrow-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 19V5" />
                    <path d="M5 12l7-7 7 7" />
                </svg>
            </div>
        </div>
    );
};

export default ScrollToTop;
