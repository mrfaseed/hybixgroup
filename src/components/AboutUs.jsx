import React, { useEffect, useState, useRef } from 'react';
import './AboutUs.css';
import { FaRocket, FaLightbulb, FaUsers, FaHandshake, FaGlobe, FaAward, FaCogs } from 'react-icons/fa';
import aboutTeamImg from '../assets/about_team.png';
import aboutMissionImg from '../assets/about_mission.png';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    /* CountUp Animation Logic */
    const useCountUp = (end, duration = 2000, trigger) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!trigger) {
                setCount(0); // Reset when not triggered if desired, or keep as is
                return;
            }

            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }, [trigger, end, duration]);

        return count;
    };

    const StatItem = ({ stat }) => {
        const numValue = parseInt(stat.value.replace(/\D/g, ''));
        const suffix = stat.value.replace(/[0-9]/g, '');

        return (
            <div className={`stat-item ${statsVisible ? 'visible' : ''}`}>
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">
                    <Counter end={numValue} suffix={suffix} trigger={statsVisible} />
                </h3>
                <p className="stat-label">{stat.label}</p>
            </div>
        );
    };

    // Simple Re-usable Counter Component
    const Counter = ({ end, suffix, trigger }) => {
        const [count, setCount] = useState(0);
        const hasAnimated = useRef(false);

        useEffect(() => {
            if (!trigger || hasAnimated.current) return;

            hasAnimated.current = true;
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out quart
                const ease = 1 - Math.pow(1 - progress, 4);

                setCount(Math.floor(ease * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };
            requestAnimationFrame(animate);
        }, [trigger, end]);

        return (
            <span style={{ display: 'inline-block', minWidth: '100px' }}>
                {count}{suffix}
            </span>
        );
    };

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        window.scrollTo(0, 0);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll Reveal Hook
    const useScrollReveal = (threshold = 0.1) => {
        const ref = useRef(null);
        const [isRevealed, setIsRevealed] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsRevealed(true);
                        observer.disconnect();
                    }
                },
                { threshold }
            );

            if (ref.current) observer.observe(ref.current);
            return () => observer.disconnect();
        }, [threshold]);

        return [ref, isRevealed];
    };

    const [storyRef, storyVisible] = useScrollReveal();
    const [missionRef, missionVisible] = useScrollReveal();
    const [statsRef, statsVisible] = useScrollReveal();

    const stats = [
        { label: 'Years Experience', value: '2+', icon: <FaCogs /> },
        { label: 'Projects Completed', value: '15+', icon: <FaRocket /> },

        { label: 'Global Partners', value: '5+', icon: <FaGlobe /> },
    ];

    const values = [
        { title: 'Innovation', desc: 'Constantly pushing boundaries and exploring new technologies.', icon: <FaLightbulb /> },
        { title: 'Integrity', desc: 'Building trust through transparency and honest relationships.', icon: <FaHandshake /> },
        { title: 'Excellence', desc: 'Delivering superior quality in every project we undertake.', icon: <FaAward /> },
        { title: 'Collaboration', desc: 'Working together to achieve extraordinary results.', icon: <FaUsers /> },
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-bg" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
                <div className="about-hero-content">
                    <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
                        Empowering <span className="highlight">Digital Transformation</span>
                    </h1>
                    <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
                        We are a team of visionaries, creators, and engineers dedicated to building the future of technology.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="about-story" ref={storyRef}>
                <div className="story-container">
                    <div className={`story-content ${storyVisible ? 'visible' : ''}`}>
                        <h2 className="section-title">Our Story</h2>
                        <div className="story-text">
                            <p>
                                Founded with a vision to bridge the gap between complex technology and business success, Hybix Group has evolved from a small collective of passionate developers into a global solutions provider.
                            </p>
                            <p>
                                We believe in the power of technology to solve real-world problems. Our journey is defined by a relentless pursuit of innovation, a commitment to quality, and a deep understanding of our clients' needs.
                            </p>
                            <p>
                                Today, we stand at the forefront of the digital revolution, helping businesses explore new possibilities and achieve sustainable growth through custom software, AI, and strategic consulting.
                            </p>
                        </div>
                    </div>
                    <div className={`story-visual interactive-collage ${storyVisible ? 'visible' : ''}`}>
                        {/* Image Layer */}
                        <div className="collage-images">
                            <div className="img-wrapper main-img">
                                <img src={aboutTeamImg} alt="Our Team Collaborating" />
                                <div className="img-overlay"></div>
                            </div>
                            <div className="img-wrapper secondary-img">
                                <img src={aboutMissionImg} alt="Our Mission" />
                                <div className="img-overlay"></div>
                            </div>
                        </div>

                        {/* Floating Cards Layer */}
                        <div className="collage-floats">
                            <div className="visual-card card-1 float-animation">
                                <div className="icon-box"><FaGlobe /></div>
                                <div className="card-text">
                                    <span className="count">15+</span>
                                    <span className="label">Countries Served</span>
                                </div>
                            </div>
                            <div className="visual-card card-2 float-animation delay-1">
                                <div className="icon-box"><FaRocket /></div>
                                <div className="card-text">
                                    <span className="count">200%</span>
                                    <span className="label">Growth Rate</span>
                                </div>
                            </div>
                            <div className="visual-card card-3 float-animation delay-2">
                                <div className="icon-box"><FaUsers /></div>
                                <div className="card-text">
                                    <span className="count">50+</span>
                                    <span className="label">Expert Minds</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background */}
                        <div className="collage-deco circle-1"></div>
                        <div className="collage-deco circle-2"></div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="about-values" ref={missionRef}>
                <div className={`values-header ${missionVisible ? 'visible' : ''}`}>
                    <h2 className="section-title">Our Mission & Values</h2>
                    <p>The core principles that drive every decision we make.</p>
                </div>
                <div className="values-grid">
                    {values.map((val, index) => (
                        <div
                            key={index}
                            className={`value-card ${missionVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="value-icon-wrapper">{val.icon}</div>
                            <h3>{val.title}</h3>
                            <p>{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Statistics Parallax Strip */}
        </div>
    );
};

export default AboutUs;
