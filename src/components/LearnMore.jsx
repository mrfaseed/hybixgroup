import React from 'react';
import './LearnMore.css';
import { motion } from 'framer-motion';
import { FaLayerGroup, FaLightbulb, FaRocket, FaHandshake, FaCheckCircle } from 'react-icons/fa';

const LearnMore = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // Custom refined easing
            }
        }
    };

    return (
        <div className="learn-more-page">
            {/* Hero Section */}
            <header className="lm-hero">
                <div className="lm-hero-content">
                    <h1 className="lm-hero-title">Beyond the Surface</h1>
                    <p className="lm-hero-subtitle">
                        Deep dive into Hybix Group's philosophy, methodology, and the technological standards that define our excellence.
                    </p>
                </div>
            </header>

            {/* Main Content Area */}
            <motion.div
                className="lm-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Section 1: Core Philosophy */}
                <motion.div className="lm-note-card" variants={cardVariants}>
                    <div className="lm-section-header">
                        <div className="lm-icon-box">
                            <FaLightbulb />
                        </div>
                        <h2 className="lm-section-title">Our Philosophy</h2>
                    </div>
                    <div className="lm-section-content">
                        <p>
                            At Hybix Group, we believe that technology is not just about writing code; it's about solving real-world problems with elegance and efficiency. We view every project as a partnership, a journey we undertake together to transform abstract ideas into tangible digital assets.
                        </p>
                        <div className="lm-highlight-box">
                            "We don't just build software; we engineer experiences that drive growth and engagement."
                        </div>
                        <p>
                            Our approach is rooted in transparency and collaboration. We demystify the development process, ensuring that you, our partner, are involved and informed at every decisive stage.
                        </p>
                    </div>
                </motion.div>

                {/* Section 2: Technical Excellence */}
                <motion.div className="lm-note-card" variants={cardVariants}>
                    <div className="lm-section-header">
                        <div className="lm-icon-box">
                            <FaLayerGroup />
                        </div>
                        <h2 className="lm-section-title">Technical Excellence</h2>
                    </div>
                    <div className="lm-section-content">
                        <p>
                            Quality is non-negotiable. Our engineering team adheres to strict coding standards, rigorous testing protocols, and modern architectural patterns. We leverage a diverse and powerful technology stack designed for scalability and performance.
                        </p>
                        <ul className="lm-feature-list">
                            <li><span className="lm-check"><FaCheckCircle /></span> Scalable Cloud Architectures</li>
                            <li><span className="lm-check"><FaCheckCircle /></span> Modern Frontend Frameworks (React, Next.js)</li>
                            <li><span className="lm-check"><FaCheckCircle /></span> Robust Backend Systems (Node.js, Python)</li>
                            <li><span className="lm-check"><FaCheckCircle /></span> AI & Machine Learning Integration</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Section 3: The Methodology */}
                <motion.div className="lm-note-card" variants={cardVariants}>
                    <div className="lm-section-header">
                        <div className="lm-icon-box">
                            <FaRocket />
                        </div>
                        <h2 className="lm-section-title">Our Methodology</h2>
                    </div>
                    <div className="lm-section-content">
                        <p>
                            We follow an Agile-driven development lifecycle that prioritizes adaptability and speed without compromising quality. This iterative process allows us to incorporate feedback rapidly and ensure the final product aligns perfectly with your evolving business needs.
                        </p>
                        <p>
                            From the initial blueprint to the final deployment and beyond, our dedicated support teams stand by to ensure your digital infrastructure remains resilient and up-to-date.
                        </p>
                    </div>
                </motion.div>

                {/* Section 4: Partnership */}
                <motion.div className="lm-note-card" variants={cardVariants}>
                    <div className="lm-section-header">
                        <div className="lm-icon-box">
                            <FaHandshake />
                        </div>
                        <h2 className="lm-section-title">A Lasting Partnership</h2>
                    </div>
                    <div className="lm-section-content">
                        <p>
                            Our relationship doesn't end at launch. We are committed to your long-term success. Through continuous monitoring, performance optimization, and strategic consulting, we act as your extended technology arm, ready to tackle future challenges.
                        </p>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default LearnMore;
