import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaChevronDown, FaSearch, FaArrowRight, FaPhoneAlt, FaCode, FaMobileAlt, FaPaintBrush, FaBullhorn, FaCloud, FaShoppingCart, FaLink, FaBrain, FaServer, FaShieldAlt, FaUserTie, FaBuilding, FaChartLine, FaLightbulb, FaRobot, FaChevronRight, FaCheckCircle, FaInfoCircle, FaBriefcase, FaBlog, FaFileAlt, FaBook, FaUsers, FaHeadset } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';

const navItems = [
    {
        id: 1,
        title: 'Services',
        type: 'mega',
        description: 'Comprehensive digital solutions tailored for your business growth.',
        links: [
            { name: 'Web Development', icon: <FaCode /> },
            { name: 'App Development', icon: <FaMobileAlt /> },
            { name: 'UI/UX Design', icon: <FaPaintBrush /> },
            { name: 'SEO Optimization', icon: <BiSearchAlt /> },
            { name: 'Digital Marketing', icon: <FaBullhorn /> },
            { name: 'Cloud Solutions', icon: <FaCloud /> },
            { name: 'E-commerce', icon: <FaShoppingCart /> },
            { name: 'Blockchain', icon: <FaLink /> },
            { name: 'AI & ML', icon: <FaBrain /> },
            { name: 'DevOps', icon: <FaServer /> },
            { name: 'Cyber Security', icon: <FaShieldAlt /> },
            { name: 'IT Consulting', icon: <FaUserTie /> }
        ]
    },
    {
        id: 2,
        title: 'Solutions',
        type: 'mega-solutions',
        description: 'Strategic innovations for success.',
        links: [
            {
                name: 'Enterprise ERP',
                description: 'A complete modular ERP system to manage finance, HR, inventory, CRM, and operations.',
                features: ['Finance & Accounting', 'HR & Payroll', 'Inventory & Supply Chain', 'CRM & Sales Module'],
                icon: <FaBuilding />
            },
            {
                name: 'Data Analytics',
                description: 'Modern analytics tools for dashboards, insights, and predictive decision-making.',
                features: ['Real-time dashboards', 'Predictive analytics', 'Data warehousing', 'Custom visualization'],
                icon: <FaChartLine />
            },
            {
                name: 'Business Intelligence',
                description: 'Smart BI tools with reporting, KPI tracking, and insights.',
                features: ['Automated reports', 'KPI dashboards', 'Data integration', 'Business insights'],
                icon: <FaLightbulb />
            },
            {
                name: 'Automation',
                description: 'Automate workflows using RPA, AI, and integrations.',
                features: ['RPA bots', 'Workflow automation', 'AI/ML automation', 'API integrations'],
                icon: <FaRobot />
            }
        ]
    },
    {
        id: 3,
        title: 'Company',
        type: 'mega-solutions',
        description: 'Discover our vision and team.',
        links: [
            {
                name: 'About Us',
                description: 'Learn about our mission, vision, values, and the story behind Hybix Group.',
                features: ['Our Mission', 'Our Team', 'Our Journey', 'Our Values'],
                icon: <FaInfoCircle />,
                buttonText: 'Learn More'
            },
            {
                name: 'Careers',
                description: 'Explore job opportunities and join our growing team.',
                features: ['Open Positions', 'Work Culture', 'Employee Benefits', 'Internship Programs'],
                icon: <FaBriefcase />,
                buttonText: 'View Jobs'
            },
            {
                name: 'Blog',
                description: 'Read insights, articles, and updates from our team.',
                features: ['Latest Articles', 'Tech Insights', 'Industry News', 'Product Updates'],
                icon: <FaBlog />,
                buttonText: 'Visit Blog'
            },
            {
                name: 'Press',
                description: 'Access company announcements, media kits, and press coverage.',
                features: ['Media Resources', 'Press Releases', 'Brand Assets', 'Contact PR Team'],
                icon: <FaBullhorn />,
                buttonText: 'Press Kit'
            }
        ]
    },
    {
        id: 4,
        title: 'Resources',
        type: 'mega-solutions',
        description: 'Insights and expert guides.',
        links: [
            {
                name: 'Case Studies',
                description: 'Real-world success stories and results we’ve delivered for clients.',
                features: ['Client Success Stories', 'Industry Solutions', 'Before & After Results', 'ROI Improvements'],
                icon: <FaFileAlt />,
                buttonText: 'View Case Studies'
            },
            {
                name: 'Documentation',
                description: 'Developer-friendly docs with API references and integration guides.',
                features: ['API Reference', 'Integration Guides', 'Tutorials', 'Release Notes'],
                icon: <FaBook />,
                buttonText: 'Open Docs'
            },
            {
                name: 'Community',
                description: 'Join our community for discussions, events, and contributions.',
                features: ['Forums', 'Discord/Slack Groups', 'Developer Events', 'Open Source Contributions'],
                icon: <FaUsers />,
                buttonText: 'Join Community'
            },
            {
                name: 'Support',
                description: 'Get help with products, troubleshooting, and customer service.',
                features: ['Help Center', 'Contact Support', 'FAQs', 'System Status'],
                icon: <FaHeadset />,
                buttonText: 'Get Support'
            }
        ]
    }
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSolution, setActiveSolution] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);
    const navRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle click outside to close dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If mobile menu is open, do not close dropdowns when clicking inside the mobile menu
            if (isMobileMenuOpen && mobileMenuRef.current && mobileMenuRef.current.contains(event.target)) {
                return;
            }

            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null);
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Focus search input when opened
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            setTimeout(() => searchInputRef.current.focus(), 100);
        }
    }, [isSearchOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
        setIsSearchOpen(false);
    };

    // Desktop Hover Handlers
    const handleMouseEnter = (id) => {
        if (window.innerWidth > 1024) {
            setActiveDropdown(id);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 1024) {
            setActiveDropdown(null);
        }
    };

    // Reset active solution when dropdown opens
    useEffect(() => {
        if (activeDropdown === 2 || activeDropdown === 3 || activeDropdown === 4) {
            setActiveSolution(0);
        }
    }, [activeDropdown]);

    // Mobile Click Handler
    const handleMobileDropdownToggle = (id) => {
        setActiveDropdown(prev => (prev === id ? null : id));
    };

    // Scroll locking for mobile menu
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <a href="/">
                            <h1>Hybix<span>Group</span></h1>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-menu-desktop">
                        {navItems.map((item) => (
                            <div
                                key={item.id}
                                className="nav-item-wrapper"
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`nav-item ${activeDropdown === item.id ? 'active' : ''}`}>
                                    <span className="nav-link">
                                        {item.title} <FaChevronDown className={`chevron ${activeDropdown === item.id ? 'rotate' : ''}`} />
                                    </span>
                                </div>

                                {/* Mega Menu / Dropdown Content */}
                                <div className={`dropdown-container ${item.type === 'mega' ? 'mega-menu' : 'standard-dropdown'} ${activeDropdown === item.id ? 'visible' : ''}`}>
                                    <div className="dropdown-wrapper">
                                        {item.type === 'mega' ? (
                                            <div className="mega-menu-content">
                                                <div className="mega-menu-header">
                                                    <h3>Explore Our {item.title}</h3>
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="mega-menu-grid">
                                                    {item.links.map((link, index) => (
                                                        <a key={index} href="#" className="mega-link-item">
                                                            <span className="mega-icon">{link.icon}</span>
                                                            <span className="mega-text">{link.name}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : item.type === 'mega-solutions' ? (
                                            <div className="mega-solutions-wrapper">
                                                <div className="solutions-list">
                                                    {item.links.map((link, index) => (
                                                        <div
                                                            key={index}
                                                            className={`solution-item ${activeSolution === index ? 'active' : ''}`}
                                                            onMouseEnter={() => setActiveSolution(index)}
                                                        >
                                                            <span>{link.name}</span>
                                                            <FaChevronRight className={`solution-arrow ${activeSolution === index ? 'visible' : ''}`} />
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="solutions-content-panel">
                                                    <div className="solution-detail fade-in" key={activeSolution}>
                                                        <div className="solution-header">
                                                            <span className="solution-big-icon">{item.links[activeSolution].icon}</span>
                                                            <h3>{item.links[activeSolution].name}</h3>
                                                        </div>
                                                        <p className="solution-desc">{item.links[activeSolution].description}</p>
                                                        <div className="solution-features-list">
                                                            {item.links[activeSolution].features.map((feature, i) => (
                                                                <div key={i} className="feature-item">
                                                                    <FaCheckCircle className="feature-icon" />
                                                                    <span>{feature}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="solution-action">
                                                            <a href="#" className="solution-btn">
                                                                {item.links[activeSolution].buttonText || 'Learn More'} <FaArrowRight className="btn-arrow" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="standard-dropdown-content">
                                                <div className="dropdown-header">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <ul className="dropdown-list">
                                                    {item.links.map((link, index) => (
                                                        <li key={index}>
                                                            <a href="#">{link} <FaArrowRight className="link-arrow" /></a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="navbar-actions">
                        {/* Search Bar */}
                        <div className={`search-wrapper ${isSearchOpen ? 'active' : ''}`}>
                            <div className="search-icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                                <FaSearch />
                            </div>
                            <div className="search-input-container">
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search..."
                                    className="search-input"
                                />
                            </div>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div ref={mobileMenuRef} className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    {/* Mobile Search & Contact */}
                    <div className="mobile-top-actions">
                        <div className="mobile-search-container">
                            <FaSearch className="mobile-search-icon" />
                            <input type="text" placeholder="Search..." className="mobile-search-input" />
                        </div>
                        <a href="/contact" className="mobile-contact-btn">
                            <FaPhoneAlt />
                        </a>
                    </div>

                    {navItems.map((item) => (
                        <div key={item.id} className="mobile-nav-group">
                            <div
                                className={`mobile-nav-header ${activeDropdown === item.id ? 'active' : ''}`}
                                onClick={() => handleMobileDropdownToggle(item.id)}
                            >
                                <span className="mobile-nav-title">{item.title}</span>
                                <FaChevronDown className={`mobile-chevron ${activeDropdown === item.id ? 'rotate' : ''}`} />
                            </div>
                            <div
                                className={`mobile-nav-body ${activeDropdown === item.id ? 'open' : ''}`}
                            >
                                <div className="mobile-links-grid">
                                    {item.type === 'mega' || item.type === 'mega-solutions' ? (
                                        item.links.map((link, index) => (
                                            <a key={index} href="#" className="mobile-link-item">
                                                {link.name}
                                            </a>
                                        ))
                                    ) : (
                                        item.links.map((link, index) => (
                                            <a key={index} href="#" className="mobile-link-item">
                                                {link}
                                            </a>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;


