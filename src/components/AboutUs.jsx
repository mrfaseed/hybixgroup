import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutUs.css';
import teamImage from '../assets/about_team.png';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Content from Left
            gsap.from(contentRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse"
                }
            });

            // Animate Image from Right
            gsap.from(imageRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="about-hero-section" id="about" ref={sectionRef}>
            <div className="about-container">
                <div className="about-content" ref={contentRef}>
                    <h2 className="about-label">Who We Are</h2>
                    <h1 className="about-headline">
                        Architecting the <br />
                        <span className="gradient-text">Digital Future</span>
                    </h1>
                    <p className="about-description">
                        Hybix Group is a collective of visionaries, developers, and strategists dedicated to transforming complex challenges into elegant digital solutions. We don't just build software; we craft legacies that empower businesses to thrive in an ever-evolving landscape.
                    </p>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Commitment</span>
                        </div>
                    </div>
                </div>

                <div className="about-image-wrapper" ref={imageRef}>
                    <div className="image-backdrop"></div>
                    <img src={teamImage} alt="Hybix Team" className="about-hero-image" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
