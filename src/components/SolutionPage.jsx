import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SolutionPage.css';

const SolutionPage = () => {
    const { solutionType } = useParams();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, [solutionType]);

    const solutions = {
        'web-development': {
            title: 'Web Development',
            subtitle: 'Building Modern, Scalable Web Applications',
            description: 'Transform your digital presence with cutting-edge web solutions that combine stunning design with powerful functionality.',
            icon: '🌐',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            features: [
                {
                    title: 'Responsive Design',
                    description: 'Beautiful, mobile-first designs that work flawlessly across all devices and screen sizes.',
                    icon: '📱'
                },
                {
                    title: 'Performance Optimized',
                    description: 'Lightning-fast load times and smooth interactions for exceptional user experience.',
                    icon: '⚡'
                },
                {
                    title: 'SEO Friendly',
                    description: 'Built with best practices to ensure maximum visibility in search engines.',
                    icon: '🔍'
                },
                {
                    title: 'Scalable Architecture',
                    description: 'Future-proof solutions that grow with your business needs.',
                    icon: '📈'
                }
            ],
            technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
            benefits: [
                'Increased user engagement and conversion rates',
                'Reduced bounce rates with fast loading times',
                'Better search engine rankings',
                'Lower maintenance costs with clean code',
                'Seamless integration with existing systems'
            ]
        },
        'mobile-apps': {
            title: 'Mobile Apps',
            subtitle: 'Native & Cross-Platform Mobile Solutions',
            description: 'Create powerful mobile experiences that engage users and drive business growth on iOS and Android platforms.',
            icon: '📱',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            features: [
                {
                    title: 'Cross-Platform Development',
                    description: 'Build once, deploy everywhere with React Native and Flutter technologies.',
                    icon: '🔄'
                },
                {
                    title: 'Native Performance',
                    description: 'Smooth, responsive apps that feel natural on every platform.',
                    icon: '🚀'
                },
                {
                    title: 'Offline Capability',
                    description: 'Apps that work seamlessly even without internet connection.',
                    icon: '📡'
                },
                {
                    title: 'Push Notifications',
                    description: 'Keep users engaged with timely, personalized notifications.',
                    icon: '🔔'
                }
            ],
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
            benefits: [
                'Reach millions of users on iOS and Android',
                'Cost-effective cross-platform development',
                'Faster time to market',
                'Consistent user experience across platforms',
                'Easy updates and maintenance'
            ]
        },
        'enterprise-software': {
            title: 'Enterprise Software',
            subtitle: 'Scalable Solutions for Growing Businesses',
            description: 'Empower your organization with robust enterprise software that streamlines operations and drives efficiency.',
            icon: '🏢',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            features: [
                {
                    title: 'Custom ERP Systems',
                    description: 'Tailored enterprise resource planning solutions for your unique business needs.',
                    icon: '⚙️'
                },
                {
                    title: 'Data Analytics',
                    description: 'Powerful insights and reporting tools to make data-driven decisions.',
                    icon: '📊'
                },
                {
                    title: 'Workflow Automation',
                    description: 'Automate repetitive tasks and optimize business processes.',
                    icon: '🤖'
                },
                {
                    title: 'Security & Compliance',
                    description: 'Enterprise-grade security with industry compliance standards.',
                    icon: '🔒'
                }
            ],
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Microservices', 'Docker', 'Kubernetes'],
            benefits: [
                'Improved operational efficiency',
                'Better resource management',
                'Enhanced collaboration across teams',
                'Reduced operational costs',
                'Scalable infrastructure for growth'
            ]
        },
        'ai-machine-learning': {
            title: 'AI & Machine Learning',
            subtitle: 'Intelligent Solutions for Tomorrow',
            description: 'Harness the power of artificial intelligence and machine learning to unlock new possibilities and competitive advantages.',
            icon: '🤖',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            features: [
                {
                    title: 'Predictive Analytics',
                    description: 'Forecast trends and make proactive business decisions with AI-powered insights.',
                    icon: '🔮'
                },
                {
                    title: 'Natural Language Processing',
                    description: 'Build intelligent chatbots and text analysis systems.',
                    icon: '💬'
                },
                {
                    title: 'Computer Vision',
                    description: 'Image recognition and visual data processing solutions.',
                    icon: '👁️'
                },
                {
                    title: 'Recommendation Systems',
                    description: 'Personalized user experiences with smart recommendation engines.',
                    icon: '🎯'
                }
            ],
            technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face'],
            benefits: [
                'Automated decision-making processes',
                'Enhanced customer personalization',
                'Improved operational efficiency',
                'Competitive advantage through innovation',
                'Data-driven insights and predictions'
            ]
        },
        'cloud-infrastructure': {
            title: 'Cloud Infrastructure',
            subtitle: 'Secure, Scalable Cloud Solutions',
            description: 'Build and deploy applications on robust cloud infrastructure that scales with your business needs.',
            icon: '☁️',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            features: [
                {
                    title: 'Cloud Migration',
                    description: 'Seamless transition of your applications and data to the cloud.',
                    icon: '🔄'
                },
                {
                    title: 'Auto-Scaling',
                    description: 'Automatically scale resources based on demand and traffic.',
                    icon: '📈'
                },
                {
                    title: 'Disaster Recovery',
                    description: 'Robust backup and recovery solutions for business continuity.',
                    icon: '🛡️'
                },
                {
                    title: 'Cost Optimization',
                    description: 'Optimize cloud spending with smart resource management.',
                    icon: '💰'
                }
            ],
            technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'CI/CD'],
            benefits: [
                'Reduced infrastructure costs',
                'Improved reliability and uptime',
                'Global scalability and reach',
                'Enhanced security and compliance',
                'Faster deployment and innovation'
            ]
        }
    };

    const solution = solutions[solutionType] || solutions['web-development'];

    return (
        <div className="solution-page">
            {/* Hero Section */}
            <section className={`solution-hero ${isVisible ? 'visible' : ''}`} style={{ background: solution.gradient }}>
                <div className="hero-content">
                    <div className="hero-icon">{solution.icon}</div>
                    <h1 className="hero-title">{solution.title}</h1>
                    <p className="hero-subtitle">{solution.subtitle}</p>
                    <p className="hero-description">{solution.description}</p>
                    <div className="hero-cta">
                        <button className="cta-primary">Get Started</button>
                        <button className="cta-secondary">Learn More</button>
                    </div>
                </div>
                <div className="hero-decoration">
                    <div className="floating-element element-1"></div>
                    <div className="floating-element element-2"></div>
                    <div className="floating-element element-3"></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="solution-features">
                <div className="section-header">
                    <h2>Key Features</h2>
                    <p>Powerful capabilities designed to drive your success</p>
                </div>
                <div className="features-grid">
                    {solution.features.map((feature, index) => (
                        <div key={index} className={`feature-card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technologies Section */}
            <section className="solution-technologies">
                <div className="section-header">
                    <h2>Technologies We Use</h2>
                    <p>Cutting-edge tools and frameworks</p>
                </div>
                <div className="tech-tags">
                    {solution.technologies.map((tech, index) => (
                        <span key={index} className={`tech-tag ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.05}s` }}>
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="solution-benefits">
                <div className="section-header">
                    <h2>Business Benefits</h2>
                    <p>Why choose our {solution.title.toLowerCase()} solutions</p>
                </div>
                <div className="benefits-list">
                    {solution.benefits.map((benefit, index) => (
                        <div key={index} className={`benefit-item ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="benefit-icon">✓</div>
                            <p>{benefit}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="solution-cta">
                <div className="cta-content">
                    <h2>Ready to Get Started?</h2>
                    <p>Let's discuss how we can help transform your business</p>
                    <div className="cta-buttons">
                        <button className="btn-primary">Schedule a Consultation</button>
                        <Link to="/" className="btn-secondary">Back to Home</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionPage;
