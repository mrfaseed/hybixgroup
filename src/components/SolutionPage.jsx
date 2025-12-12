import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SolutionPage.css';

import {
    SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiTypescript, SiTailwindcss,
    SiFlutter, SiSwift, SiKotlin, SiFirebase, SiRedux,
    SiFigma, SiAdobexd, SiSketch, SiInvision,
    SiGoogleanalytics, SiSemrush, SiYoast,
    SiFacebook, SiGoogleads, SiMailchimp, SiHubspot, SiCanva, SiHootsuite,
    SiGooglecloud, SiTerraform, SiKubernetes, SiDocker,
    SiShopify, SiWoocommerce, SiMagento, SiStripe, SiPaypal, SiBigcommerce,
    SiEthereum, SiSolidity, SiIpfs,
    SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiOpenai, SiKeras,
    SiJenkins, SiGitlab, SiAnsible, SiPrometheus,
    SiKalilinux, SiWireshark
} from 'react-icons/si';
import { FaGlobe, FaMobileAlt, FaSearch, FaBullhorn, FaCloud, FaShoppingCart, FaLink, FaBrain, FaInfinity, FaShieldAlt, FaBriefcase, FaCode, FaTools, FaDatabase, FaServer } from 'react-icons/fa';
import favicon from '../assets/favicon.png';

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
                { title: 'Responsive Design', description: 'Beautiful, mobile-first designs that work flawlessly across all devices.', icon: '📱' },
                { title: 'Performance Optimized', description: 'Lightning-fast load times and smooth interactions.', icon: '⚡' },
                { title: 'SEO Friendly', description: 'Built with best practices for maximum visibility.', icon: '🔍' },
                { title: 'Scalable Architecture', description: 'Future-proof solutions that grow with your business.', icon: '📈' },
                { title: 'Secure Infrastructure', description: 'Advanced security measures to protect your data and users.', icon: '🔒' },
                { title: 'Custom CMS', description: 'Easy-to-use content management systems tailored to your needs.', icon: '🛠️' }
            ],
            technologies: [
                { name: 'React', icon: <SiReact /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'Vue.js', icon: <SiVuedotjs /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
            ],
            benefits: ['Increased user engagement', 'Reduced bounce rates', 'Better search rankings', 'Lower maintenance costs', 'Seamless integration']
        },
        'app-development': {
            title: 'App Development',
            subtitle: 'Native & Cross-Platform Mobile Solutions',
            description: 'Create powerful mobile experiences that engage users and drive business growth on iOS and Android platforms.',
            icon: '📱',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            features: [
                { title: 'Cross-Platform', description: 'Build once, deploy everywhere with React Native and Flutter.', icon: '🔄' },
                { title: 'Native Performance', description: 'Smooth, responsive apps that feel natural.', icon: '🚀' },
                { title: 'Offline Capability', description: 'Apps that work seamlessly without internet.', icon: '📡' },
                { title: 'Push Notifications', description: 'Keep users engaged with timely updates.', icon: '🔔' },
                { title: 'App Store Optimization', description: 'Strategies to rank higher in app stores.', icon: '⭐' },
                { title: 'Real-time Analytics', description: 'Track user behavior and app performance instantly.', icon: '📊' }
            ],
            technologies: [
                { name: 'React Native', icon: <SiReact /> },
                { name: 'Flutter', icon: <SiFlutter /> },
                { name: 'Swift', icon: <SiSwift /> },
                { name: 'Kotlin', icon: <SiKotlin /> },
                { name: 'Firebase', icon: <SiFirebase /> },
                { name: 'Redux', icon: <SiRedux /> }
            ],
            benefits: ['Reach millions of users', 'Cost-effective development', 'Faster time to market', 'Consistent experience', 'Easy updates']
        },
        'ui-ux-design': {
            title: 'UI/UX Design',
            subtitle: 'Designing Intuitive & Engaging Experiences',
            description: 'We craft user-centric designs that are not only visually stunning but also intuitive and easy to navigate.',
            icon: '🎨',
            gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
            features: [
                { title: 'User Research', description: 'Understanding your users to build what they need.', icon: '👥' },
                { title: 'Wireframing', description: 'Blueprinting the structure of your application.', icon: '📐' },
                { title: 'Prototyping', description: 'Interactive mockups to visualize the final product.', icon: '🖥️' },
                { title: 'Visual Design', description: 'Creating beautiful interfaces that delight users.', icon: '✨' },
                { title: 'Interaction Design', description: 'Designing meaningful interactions and animations.', icon: '👆' },
                { title: 'Usability Testing', description: 'Validating designs with real users for best results.', icon: '🧪' }
            ],
            technologies: [
                { name: 'Figma', icon: <SiFigma /> },
                { name: 'Adobe XD', icon: <SiAdobexd /> },
                { name: 'Sketch', icon: <SiSketch /> },
                { name: 'InVision', icon: <SiInvision /> },
                { name: 'Zeplin', icon: <FaTools /> },
                { name: 'Principle', icon: <FaTools /> }
            ],
            benefits: ['Higher conversion rates', 'Increased customer satisfaction', 'Reduced development costs', 'Brand loyalty', 'Competitive advantage']
        },
        'seo-optimization': {
            title: 'SEO Optimization',
            subtitle: 'Boosting Your Visibility & Traffic',
            description: 'Improve your search engine rankings and drive organic traffic to your website with our expert SEO strategies.',
            icon: '🔍',
            gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
            features: [
                { title: 'Keyword Research', description: 'Targeting the right terms for your business.', icon: '🔑' },
                { title: 'On-Page SEO', description: 'Optimizing content and structure for search engines.', icon: '📄' },
                { title: 'Technical SEO', description: 'Improving site speed, mobile-friendliness, and indexing.', icon: '⚙️' },
                { title: 'Link Building', description: 'Building authority through high-quality backlinks.', icon: '🔗' },
                { title: 'Content Strategy', description: 'Creating content that ranks and engages.', icon: '📝' },
                { title: 'Local SEO', description: 'Ranking higher in local search results.', icon: '📍' }
            ],
            technologies: [
                { name: 'Google Analytics', icon: <SiGoogleanalytics /> },
                { name: 'SEMrush', icon: <SiSemrush /> },
                { name: 'Ahrefs', icon: <FaSearch /> },
                { name: 'Moz', icon: <FaSearch /> },
                { name: 'Screaming Frog', icon: <FaSearch /> },
                { name: 'Yoast', icon: <SiYoast /> }
            ],
            benefits: ['Increased organic traffic', 'Better brand visibility', 'Higher credibility', 'Long-term results', 'Cost-effective marketing']
        },
        'digital-marketing': {
            title: 'Digital Marketing',
            subtitle: 'Accelerating Your Business Growth',
            description: 'Reach your target audience and achieve your business goals with our comprehensive digital marketing solutions.',
            icon: '📢',
            gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
            features: [
                { title: 'Social Media', description: 'Engaging your audience on their favorite platforms.', icon: '📱' },
                { title: 'Content Marketing', description: 'Creating valuable content that attracts and converts.', icon: '✍️' },
                { title: 'Email Marketing', description: 'Nurturing leads and building customer relationships.', icon: '📧' },
                { title: 'PPC Advertising', description: 'Driving targeted traffic with paid search campaigns.', icon: '💰' },
                { title: 'Influencer Marketing', description: 'Leveraging authorities to promote your brand.', icon: '🤝' },
                { title: 'Video Marketing', description: 'Captivating audiences with visual storytelling.', icon: '🎥' }
            ],
            technologies: [
                { name: 'Facebook Ads', icon: <SiFacebook /> },
                { name: 'Google Ads', icon: <SiGoogleads /> },
                { name: 'Mailchimp', icon: <SiMailchimp /> },
                { name: 'HubSpot', icon: <SiHubspot /> },
                { name: 'Canva', icon: <SiCanva /> },
                { name: 'Hootsuite', icon: <SiHootsuite /> }
            ],
            benefits: ['Measurable results', 'Targeted reach', 'Improved brand awareness', 'Higher ROI', 'Customer loyalty']
        },
        'cloud-solutions': {
            title: 'Cloud Solutions',
            subtitle: 'Secure, Scalable Cloud Infrastructure',
            description: 'Build and deploy applications on robust cloud infrastructure that scales with your business needs.',
            icon: '☁️',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            features: [
                { title: 'Cloud Migration', description: 'Seamless transition of your applications and data.', icon: '🔄' },
                { title: 'Auto-Scaling', description: 'Automatically scale resources based on demand.', icon: '📈' },
                { title: 'Disaster Recovery', description: 'Robust backup and recovery solutions.', icon: '🛡️' },
                { title: 'Cost Optimization', description: 'Optimize cloud spending with smart management.', icon: '💰' },
                { title: 'Serverless Computing', description: 'Run code without provisioning or managing servers.', icon: '☁️' },
                { title: 'Multi-Cloud', description: 'Strategies for using multiple cloud providers.', icon: '🌐' }
            ],
            technologies: [
                { name: 'AWS', icon: <FaCloud /> },
                { name: 'Azure', icon: <FaCloud /> },
                { name: 'Google Cloud', icon: <SiGooglecloud /> },
                { name: 'Terraform', icon: <SiTerraform /> },
                { name: 'Kubernetes', icon: <SiKubernetes /> },
                { name: 'Docker', icon: <SiDocker /> }
            ],
            benefits: ['Reduced infrastructure costs', 'Improved reliability', 'Global scalability', 'Enhanced security', 'Faster deployment']
        },
        'e-commerce': {
            title: 'E-commerce',
            subtitle: 'Building Online Stores That Sell',
            description: 'Launch and grow your online business with our custom e-commerce solutions designed for sales and performance.',
            icon: '🛒',
            gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
            features: [
                { title: 'Custom Storefronts', description: 'Unique designs that reflect your brand identity.', icon: '🏪' },
                { title: 'Payment Integration', description: 'Secure and seamless payment processing.', icon: '💳' },
                { title: 'Inventory Management', description: 'Efficiently track and manage your stock.', icon: '📦' },
                { title: 'Mobile Commerce', description: 'Optimized shopping experience for mobile users.', icon: '📱' },
                { title: 'Abandoned Cart', description: 'Recovery strategies to boost sales.', icon: '🛒' },
                { title: 'Product Recommendations', description: 'AI-driven suggestions to increase AOV.', icon: '💡' }
            ],
            technologies: [
                { name: 'Shopify', icon: <SiShopify /> },
                { name: 'WooCommerce', icon: <SiWoocommerce /> },
                { name: 'Magento', icon: <SiMagento /> },
                { name: 'Stripe', icon: <SiStripe /> },
                { name: 'PayPal', icon: <SiPaypal /> },
                { name: 'BigCommerce', icon: <SiBigcommerce /> }
            ],
            benefits: ['Global reach', '24/7 availability', 'Lower operational costs', 'Personalized shopping', 'Data-driven insights']
        },
        'blockchain': {
            title: 'Blockchain',
            subtitle: 'Decentralized Solutions for the Future',
            description: 'Leverage the power of blockchain technology to build secure, transparent, and efficient decentralized applications.',
            icon: '🔗',
            gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
            features: [
                { title: 'Smart Contracts', description: 'Automated, self-executing contracts on the blockchain.', icon: '📜' },
                { title: 'DApps Development', description: 'Building decentralized applications for various use cases.', icon: '📱' },
                { title: 'DeFi Solutions', description: 'Financial services built on blockchain technology.', icon: '💰' },
                { title: 'NFT Marketplaces', description: 'Platforms for buying, selling, and trading NFTs.', icon: '🖼️' },
                { title: 'Supply Chain', description: 'Transparent tracking and tracing of goods.', icon: '🚚' },
                { title: 'Tokenization', description: 'Converting assets into digital tokens.', icon: '🪙' }
            ],
            technologies: [
                { name: 'Ethereum', icon: <SiEthereum /> },
                { name: 'Solidity', icon: <SiSolidity /> },
                { name: 'Web3.js', icon: <FaCode /> },
                { name: 'Hyperledger', icon: <FaLink /> },
                { name: 'IPFS', icon: <SiIpfs /> },
                { name: 'Truffle', icon: <FaTools /> }
            ],
            benefits: ['Enhanced security', 'Transparency & trust', 'Reduced intermediaries', 'Immutability', 'Efficiency']
        },
        'ai-ml': {
            title: 'AI & Machine Learning',
            subtitle: 'Intelligent Solutions for Tomorrow',
            description: 'Harness the power of artificial intelligence and machine learning to unlock new possibilities and competitive advantages.',
            icon: '🤖',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            features: [
                { title: 'Predictive Analytics', description: 'Forecast trends and make proactive decisions.', icon: '🔮' },
                { title: 'NLP', description: 'Build intelligent chatbots and text analysis systems.', icon: '💬' },
                { title: 'Computer Vision', description: 'Image recognition and visual data processing.', icon: '👁️' },
                { title: 'Recommendation Engines', description: 'Personalized user experiences.', icon: '🎯' },
                { title: 'Fraud Detection', description: 'Identify and prevent fraudulent activities.', icon: '🛡️' },
                { title: 'Process Automation', description: 'Automate repetitive tasks intelligently.', icon: '⚙️' }
            ],
            technologies: [
                { name: 'Python', icon: <SiPython /> },
                { name: 'TensorFlow', icon: <SiTensorflow /> },
                { name: 'PyTorch', icon: <SiPytorch /> },
                { name: 'Scikit-learn', icon: <SiScikitlearn /> },
                { name: 'OpenAI', icon: <SiOpenai /> },
                { name: 'Keras', icon: <SiKeras /> }
            ],
            benefits: ['Automated decision-making', 'Enhanced personalization', 'Improved efficiency', 'Innovation', 'Data insights']
        },
        'devops': {
            title: 'DevOps',
            subtitle: 'Streamlining Development & Operations',
            description: 'Accelerate your software delivery lifecycle with our DevOps practices, ensuring faster, more reliable releases.',
            icon: '♾️',
            gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            features: [
                { title: 'CI/CD Pipelines', description: 'Automated build, test, and deployment workflows.', icon: '🚀' },
                { title: 'Infrastructure as Code', description: 'Managing infrastructure through code.', icon: '💻' },
                { title: 'Monitoring & Logging', description: 'Real-time visibility into system performance.', icon: '📊' },
                { title: 'Containerization', description: 'Efficient application packaging and deployment.', icon: '📦' },
                { title: 'Configuration Mgmt', description: 'Automated configuration of servers and systems.', icon: '⚙️' },
                { title: 'Security Ops', description: 'Integrating security into the DevOps pipeline.', icon: '🔒' }
            ],
            technologies: [
                { name: 'Jenkins', icon: <SiJenkins /> },
                { name: 'GitLab CI', icon: <SiGitlab /> },
                { name: 'Docker', icon: <SiDocker /> },
                { name: 'Kubernetes', icon: <SiKubernetes /> },
                { name: 'Ansible', icon: <SiAnsible /> },
                { name: 'Prometheus', icon: <SiPrometheus /> }
            ],
            benefits: ['Faster time to market', 'Higher quality releases', 'Improved collaboration', 'Stable environments', 'Efficiency']
        },
        'cyber-security': {
            title: 'Cyber Security',
            subtitle: 'Protecting Your Digital Assets',
            description: 'Safeguard your business against evolving cyber threats with our comprehensive security solutions and assessments.',
            icon: '🛡️',
            gradient: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
            features: [
                { title: 'Vulnerability Assessment', description: 'Identifying and addressing security weaknesses.', icon: '🔍' },
                { title: 'Penetration Testing', description: 'Simulating attacks to test defenses.', icon: '⚔️' },
                { title: 'Security Audits', description: 'Comprehensive review of security policies and controls.', icon: '📋' },
                { title: 'Incident Response', description: 'Rapid reaction to security breaches.', icon: '🚨' },
                { title: 'Cloud Security', description: 'Securing cloud infrastructure and data.', icon: '☁️' },
                { title: 'Compliance', description: 'Ensuring adherence to industry regulations.', icon: '📜' }
            ],
            technologies: [
                { name: 'Kali Linux', icon: <SiKalilinux /> },
                { name: 'Metasploit', icon: <FaShieldAlt /> },
                { name: 'Wireshark', icon: <SiWireshark /> },
                { name: 'Burp Suite', icon: <FaTools /> },
                { name: 'Snort', icon: <FaShieldAlt /> },
                { name: 'Nmap', icon: <FaSearch /> }
            ],
            benefits: ['Data protection', 'Regulatory compliance', 'Business continuity', 'Brand reputation', 'Peace of mind']
        },
        'it-consulting': {
            title: 'IT Consulting',
            subtitle: 'Strategic Technology Guidance',
            description: 'Navigate the complex technology landscape with our expert consulting services tailored to your business goals.',
            icon: '💼',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            features: [
                { title: 'Digital Transformation', description: 'Modernizing your business with technology.', icon: '🚀' },
                { title: 'IT Strategy', description: 'Aligning technology with business objectives.', icon: '🎯' },
                { title: 'System Integration', description: 'Connecting disparate systems for seamless flow.', icon: '🔗' },
                { title: 'Tech Assessment', description: 'Evaluating your current technology stack.', icon: '📊' },
                { title: 'Process Optimization', description: 'Improving efficiency through technology.', icon: '⚡' },
                { title: 'Cyber Security Strategy', description: 'Developing a roadmap for secure operations.', icon: '🛡️' }
            ],
            technologies: [
                { name: 'Enterprise Arch.', icon: <FaBriefcase /> },
                { name: 'Cloud Strategy', icon: <FaCloud /> },
                { name: 'Agile', icon: <FaInfinity /> },
                { name: 'Data Governance', icon: <FaDatabase /> },
                { name: 'Risk Management', icon: <FaShieldAlt /> }
            ],
            benefits: ['Strategic alignment', 'Operational efficiency', 'Cost reduction', 'Innovation', 'Risk mitigation']
        }
    };

    const solution = solutions[solutionType] || solutions['web-development'];

    return (
        <div className="solution-page">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className={`solution-hero ${isVisible ? 'visible' : ''}`}>
                <div className="hero-background-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>

                    {/* Floating Tech Stack Background */}
                    <div className="hero-floating-icons">
                        <SiReact className="float-icon icon-1" />
                        <SiNextdotjs className="float-icon icon-2" />
                        <SiTypescript className="float-icon icon-3" />
                        <SiNodedotjs className="float-icon icon-4" />
                        <SiPython className="float-icon icon-5" />
                        <SiFlutter className="float-icon icon-6" />
                        <SiDocker className="float-icon icon-7" />
                        <SiKubernetes className="float-icon icon-8" />
                        <SiGooglecloud className="float-icon icon-9" />
                        <SiFirebase className="float-icon icon-10" />
                        <SiFigma className="float-icon icon-11" />
                        <SiTailwindcss className="float-icon icon-12" />
                        <SiRedux className="float-icon icon-13" />
                        <SiEthereum className="float-icon icon-14" />
                        <SiOpenai className="float-icon icon-15" />
                        <SiJenkins className="float-icon icon-16" />
                        <SiVuedotjs className="float-icon icon-17" />
                        <SiSwift className="float-icon icon-18" />
                        <SiKotlin className="float-icon icon-19" />
                        <SiTerraform className="float-icon icon-20" />
                    </div>
                </div>

                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-icon">{solution.icon}</span>
                            <span className="badge-text">Premium Solutions</span>
                        </div>
                        <h1 className="hero-title">
                            {solution.title.split(' ').map((word, i) => (
                                <span key={i} className="title-word">{word} </span>
                            ))}
                        </h1>
                        <p className="hero-subtitle">{solution.subtitle}</p>
                        <p className="hero-description">{solution.description}</p>
                        <div className="hero-cta">
                            <button className="cta-primary">Get Started</button>
                            <Link to="/learn-more" className="cta-secondary">Learn More</Link>
                        </div>
                    </div>

                    <div className="hero-visuals">
                        <div className="visual-container">
                            <div className="arc-wrapper">
                                <div className="rotating-arc arc-1"></div>
                                <div className="rotating-arc arc-2"></div>
                                <div className="rotating-arc arc-3"></div>
                                <div className="logo-container">
                                    <img src={favicon} alt="Hybix Logo" className="hero-logo" />
                                </div>
                            </div>
                            <div className="floating-card card-1">
                                <span className="card-icon">🚀</span>
                                <span className="card-text">High Performance</span>
                            </div>
                            <div className="floating-card card-2">
                                <span className="card-icon">🛡️</span>
                                <span className="card-text">Secure</span>
                            </div>
                            <div className="floating-card card-3">
                                <span className="card-icon">💡</span>
                                <span className="card-text">Innovative</span>
                            </div>
                        </div>
                    </div>
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
                            <span className="tech-icon">{tech.icon}</span>
                            <span className="tech-name">{tech.name}</span>
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

export default React.memo(SolutionPage);
