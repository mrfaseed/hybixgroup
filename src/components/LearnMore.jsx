import React, { useEffect, useState } from 'react';
import './LearnMore.css';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import {
    FaLayerGroup, FaLightbulb, FaRocket, FaHandshake, FaCheckCircle,
    FaBuilding, FaChartLine, FaRobot, FaArrowRight, FaCogs, FaDatabase, FaShieldAlt
} from 'react-icons/fa';

const LearnMore = () => {
    const location = useLocation();
    const [currentTopic, setCurrentTopic] = useState(null);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // Database of Content
    const contentData = {
        'Enterprise ERP': {
            title: 'Enterprise ERP Solutions',
            subtitle: 'Streamline your operations with a unified, intelligent ERP ecosystem.',
            icon: <FaBuilding />,
            heroColor: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            sections: [
                {
                    title: 'Centralized Operations',
                    content: 'Our Enterprise ERP integrates all facets of your business—from finance and HR to supply chain and customer relations—into a single, cohesive system.',
                    icon: <FaLayerGroup />
                },
                {
                    title: 'Real-Time Insights',
                    content: 'Make data-driven decisions with real-time reporting and analytics dashboards that provide a 360-degree view of your organization\'s health.',
                    icon: <FaChartLine />
                },
                {
                    title: 'Scalable Architecture',
                    content: 'Built on modular microservices, our ERP grows with your business, allowing you to add new functionalities without disrupting core operations.',
                    icon: <FaRocket />
                }
            ],
            features: [
                'Automated Financial Reporting',
                'Inventory & Supply Chain Management',
                'Employee Lifecycle Management (HR)',
                'Integrated CRM System',
                'Regulatory Compliance Tools'
            ]
        },
        'Data Analytics': {
            title: 'Advanced Data Analytics',
            subtitle: 'Transform raw data into actionable intelligence and strategic value.',
            icon: <FaChartLine />,
            heroColor: 'linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)',
            sections: [
                {
                    title: 'Predictive Modeling',
                    content: 'Leverage machine learning algorithms to forecast trends, identifying opportunities and risks before they happen.',
                    icon: <FaBrainIcon />
                },
                {
                    title: 'Big Data Processing',
                    content: 'Seamlessly ingest and process petabytes of structured and unstructured data to uncover hidden patterns and correlations.',
                    icon: <FaDatabase />
                },
                {
                    title: 'Custom Dashboards',
                    content: 'Visualize complex data sets with interactive, user-friendly dashboards tailored to specific departmental needs.',
                    icon: <FaLightbulb />
                }
            ],
            features: [
                'Real-time Data Streaming',
                'Customer Behavior Analysis',
                'Operational Efficiency Metrics',
                'Sales Performance Tracking',
                'Data Warehousing Solutions'
            ]
        },
        'Business Intelligence': {
            title: 'Business Intelligence (BI)',
            subtitle: 'Empower your decision-makers with smart, automated reporting tools.',
            icon: <FaLightbulb />,
            heroColor: 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)',
            sections: [
                {
                    title: 'Smart Reporting',
                    content: 'Automate the generation of critical business reports, reducing manual error and freeing up valuable time for analysis.',
                    icon: <FaFileAltIcon />
                },
                {
                    title: 'KPI Tracking',
                    content: 'Monitor Key Performance Indicators (KPIs) in real-time to ensure alignment with organizational goals and strategies.',
                    icon: <FaCheckCircle />
                },
                {
                    title: 'Data Integration',
                    content: 'Connect data from disparate sources—CRM, ERP, Marketing tools—to create a unified source of truth.',
                    icon: <FaHandshake />
                }
            ],
            features: [
                'Interactive Data Visualization',
                'Ad-hoc Querying',
                'Mobile BI capabilities',
                'Automated Alerts',
                'Executive Scorecards'
            ]
        },
        'Automation': {
            title: 'Intelligent Automation',
            subtitle: 'Accelerate productivity by automating repetitive tasks and workflows.',
            icon: <FaRobot />,
            heroColor: 'linear-gradient(135deg, #be185d 0%, #9d174d 100%)',
            sections: [
                {
                    title: 'Robotic Process Automation (RPA)',
                    content: 'Deploy digital bots to handle high-volume, repetitive tasks with speed and zero error rates.',
                    icon: <FaCogs />
                },
                {
                    title: 'Workflow Orchestration',
                    content: 'Design and execute complex cross-departmental workflows that ensure tasks are routed and completed efficiently.',
                    icon: <FaLayerGroup />
                },
                {
                    title: 'AI-Powered Decisions',
                    content: 'Integrate cognitive services to allow automation tools to handle unstructured data and make basic decisions.',
                    icon: <FaBrainIcon />
                }
            ],
            features: [
                'Document Processing Automation',
                'Customer Onboarding Workflows',
                'Invoice Processing',
                'IT Service Desk Automation',
                'Chatbot Integration'
            ]
        },
        // Default Content (Fallback)
        'Default': {
            title: 'Why Choose Hybix?',
            subtitle: 'Deep dive into our philosophy, technical excellence, and methodology.',
            icon: <FaRocket />,
            heroColor: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            sections: [
                {
                    title: 'Our Philosophy',
                    content: 'We believe technology is about solving real-world problems with elegance. We view every project as a partnership to transform ideas into assets.',
                    icon: <FaLightbulb />
                },
                {
                    title: 'Technical Excellence',
                    content: 'Quality is non-negotiable. Our team adheres to strict coding standards, rigorous testing, and modern architectural patterns.',
                    icon: <FaLayerGroup />
                },
                {
                    title: 'Our Methodology',
                    content: 'We follow an Agile-driven lifecycle that prioritizes adaptability and speed without compromising on quality.',
                    icon: <FaHandshake />
                }
            ],
            features: [
                'Scalable Cloud Architectures',
                'Modern Frontend Frameworks',
                'Robust Backend Systems',
                'AI & Machine Learning',
                'Dedicated Support'
            ]
        }
    };

    // Helper Icons
    function FaBrainIcon() { return <FaLightbulb /> } // Placeholder if FaBrain not imported
    function FaFileAltIcon() { return <FaLayerGroup /> } // Placeholder

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const topic = params.get('topic');
        setCurrentTopic(contentData[topic] || contentData['Default']);
        window.scrollTo(0, 0);
    }, [location]);

    if (!currentTopic) return <div className="loading-state">Loading...</div>;

    return (
        <div className="learn-more-page">
            {/* Dynamic Hero Section */}
            <header className="lm-hero" style={{ background: currentTopic.heroColor }}>
                <div className="lm-hero-content">
                    <div className="lm-hero-icon-wrapper">
                        {currentTopic.icon}
                    </div>
                    <h1 className="lm-hero-title">{currentTopic.title}</h1>
                    <p className="lm-hero-subtitle">
                        {currentTopic.subtitle}
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
                {/* Introduction / Main Content Cards */}
                {currentTopic.sections.map((section, index) => (
                    <motion.div className="lm-note-card" variants={cardVariants} key={index}>
                        <div className="lm-section-header">
                            <div className="lm-icon-box">
                                {section.icon}
                            </div>
                            <h2 className="lm-section-title">{section.title}</h2>
                        </div>
                        <div className="lm-section-content">
                            <p>{section.content}</p>
                        </div>
                    </motion.div>
                ))}

                {/* Features List Section */}
                <motion.div className="lm-note-card highlight-card" variants={cardVariants}>
                    <div className="lm-section-header">
                        <div className="lm-icon-box">
                            <FaCheckCircle />
                        </div>
                        <h2 className="lm-section-title">Key Capabilities</h2>
                    </div>
                    <div className="lm-section-content">
                        <ul className="lm-feature-list">
                            {currentTopic.features.map((feature, index) => (
                                <li key={index}><span className="lm-check"><FaCheckCircle /></span> {feature}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div className="lm-cta-card" variants={cardVariants}>
                    <h2>Ready to get started?</h2>
                    <p>Contact our team to discuss how {currentTopic.title} can transform your business.</p>
                    <Link to="/contact" className="lm-cta-btn">
                        Get in Touch <FaArrowRight />
                    </Link>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default LearnMore;
