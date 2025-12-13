import React, { useEffect } from 'react';
import './CaseStudies.css';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaUsers, FaGlobe, FaSearch, FaShoppingCart, FaCloud, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CaseStudies = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const studies = [
        {
            id: 1,
            title: "Global E-Commerce Expansion",
            category: "E-Commerce",
            client: "StyleHub International",
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
            icon: <FaShoppingCart />,
            stats: [
                { value: "240%", label: "Sales Growth" },
                { value: "2M+", label: "Monthly Users" },
                { value: "35%", label: "Conversion Rate" }
            ],
            description: "StyleHub needed a scalable solution to handle their rapid global expansion. We migrated them to a headless commerce architecture, improving site performance and enabling localized experiences.",
            tags: ["React", "Shopify Plus", "Node.js"]
        },
        {
            id: 2,
            title: "AI-Powered Financial Analytics",
            category: "FinTech",
            client: "FinWise Solutions",
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
            icon: <FaChartLine />,
            stats: [
                { value: "500ms", label: "Data Processing" },
                { value: "99.9%", label: "Accuracy" },
                { value: "$50M", label: "Assets Managed" }
            ],
            description: "We developed a real-time analytics dashboard powered by machine learning to help FinWise provide instant investment insights to their premium clients.",
            tags: ["Python", "TensorFlow", "React", "AWS"]
        },
        {
            id: 3,
            title: "Telehealth Mobile Platform",
            category: "Healthcare",
            client: "MediConnect",
            image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
            icon: <FaMobileAlt />,
            stats: [
                { value: "15k+", label: "Consultations/Mo" },
                { value: "4.8/5", label: "App Store Rating" },
                { value: "60%", label: "Reduced Wait Times" }
            ],
            description: "MediConnect wanted to bridge the gap between patients and doctors. We built a secure, HIPAA-compliant mobile app featuring video consultations and digital prescription management.",
            tags: ["Flutter", "Firebase", "WebRTC"]
        },
        {
            id: 4,
            title: "Smart Logistics Cloud Migration",
            category: "Logistics",
            client: "TransLogix",
            image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
            icon: <FaCloud />,
            stats: [
                { value: "40%", label: "Cost Savings" },
                { value: "99.99%", label: "Uptime" },
                { value: "Real-time", label: "Tracking" }
            ],
            description: "Legacy systems were slowing TransLogix down. We orchestrated a complete cloud migration to Azure, implementing IoT tracking for their fleet of 5,000+ vehicles.",
            tags: ["Azure", "IoT", ".NET Core"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="case-studies-page">
            {/* Hero Section */}
            <div className="cs-hero">
                <div className="cs-hero-content">
                    <span className="cs-hero-badge">Real Results</span>
                    <h1 className="cs-hero-title">Success Stories</h1>
                    <p className="cs-hero-subtitle">
                        Explore how Hybix Group transforms businesses through innovation, technology, and strategic partnership.
                        Real-world examples of our impact.
                    </p>
                </div>
            </div>

            {/* Case Studies Grid */}
            <motion.div
                className="cs-grid-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {studies.map((study) => (
                    <motion.div key={study.id} className="cs-card" variants={cardVariants}>
                        <div className="cs-card-image-wrapper">
                            <img src={study.image} alt={study.title} className="cs-card-image" />
                            <div className="cs-category-badge">
                                {study.icon} {study.category}
                            </div>
                        </div>
                        <div className="cs-card-content">
                            <h3 className="cs-client-name">{study.client}</h3>
                            <h2 className="cs-card-title">{study.title}</h2>
                            <p className="cs-card-description">{study.description}</p>

                            <div className="cs-card-stats">
                                {study.stats.map((stat, index) => (
                                    <div key={index} className="cs-stat-item">
                                        <span className="cs-stat-value">{stat.value}</span>
                                        <span className="cs-stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="cs-card-footer">
                                <div className="cs-tags">
                                    {study.tags.map((tag, i) => (
                                        <span key={i} className="cs-tag">{tag}</span>
                                    ))}
                                </div>
                                <button className="cs-read-btn">
                                    Read Case Study <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Call to Action */}
            <div className="cs-cta-section">
                <div className="cs-cta-content">
                    <h2>Ready to write your success story?</h2>
                    <p>Join hundreds of businesses that have transformed with Hybix Group.</p>
                    <Link to="/contact" className="cs-cta-btn">Start Your Project</Link>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
