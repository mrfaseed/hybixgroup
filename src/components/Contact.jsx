import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import {
    FaPaperPlane,
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
    const faviconRef = useRef(null);

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

        let ctx;

        // Dynamic import for GSAP
        const initAnimation = async () => {
            try {
                const gsapModule = await import('gsap');
                const ScrollTriggerModule = await import('gsap/ScrollTrigger');
                const gsap = gsapModule.default || gsapModule;
                const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;

                gsap.registerPlugin(ScrollTrigger);

                ctx = gsap.context(() => {
                    gsap.fromTo(faviconRef.current,
                        { rotation: -180 },
                        {
                            rotation: 180,
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: 1,
                            }
                        }
                    );
                }, sectionRef);
            } catch (error) {
                console.error("Failed to load GSAP:", error);
            }
        };

        if (sectionRef.current) {
            initAnimation();
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section className="contact-section" ref={sectionRef} id="contact">
            {/* Animated Background */}
            <div className="contact-background">
                <div className="grid-overlay"></div>
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="floating-particles">
                    {React.useMemo(() => [...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${5 + Math.random() * 10}s`
                            }}
                        ></div>
                    )), [])}
                </div>
            </div>

            <div className="contact-container">
                <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
                    <div className="header-badge">
                        <span className="badge-icon">✉️</span>
                        <span className="badge-text">Get in Touch</span>
                    </div>
                    <h1 className="section-title">
                        Let's Start a <span className="gradient-text">Conversation</span>
                    </h1>
                    <p className="section-subtitle">
                        Have a project in mind? We'd love to hear from you.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Left Side - Favicon with Rotation */}
                    <div className={`contact-image-wrapper ${isVisible ? 'animate-left' : ''}`}>
                        <div className="image-glow"></div>
                        <img
                            ref={faviconRef}
                            src="/favicon1.png"
                            alt="Contact Icon"
                            className="rotating-favicon"
                            loading="lazy"
                        />
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
                                <span className="button-text">Send Message</span>
                                <FaPaperPlane className="plane-icon" />
                                <div className="button-glow"></div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Contact);
