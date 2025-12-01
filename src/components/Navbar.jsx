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

const NavbarMobile = React.lazy(() => import('./NavbarMobile'));
const NavbarDropdown = React.lazy(() => import('./NavbarDropdown'));

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
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

    const toggleMobileMenu = React.useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
        setActiveDropdown(null);
        setIsSearchOpen(false);
    }, []);

    // Desktop Hover Handlers
    const handleMouseEnter = React.useCallback((id) => {
        if (window.innerWidth > 1024) {
            setActiveDropdown(id);
        }
    }, []);

    const handleMouseLeave = React.useCallback(() => {
        if (window.innerWidth > 1024) {
            setActiveDropdown(null);
        }
    }, []);



    // Mobile Click Handler
    const handleMobileDropdownToggle = React.useCallback((id) => {
        setActiveDropdown(prev => (prev === id ? null : id));
    }, []);

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
                                {activeDropdown === item.id && (
                                    <React.Suspense fallback={<div className="dropdown-container visible" style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
                                        <NavbarDropdown
                                            item={item}
                                            activeDropdown={activeDropdown}
                                        />
                                    </React.Suspense>
                                )}
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
            {isMobileMenuOpen && (
                <React.Suspense fallback={null}>
                    <NavbarMobile
                        isMobileMenuOpen={isMobileMenuOpen}
                        navItems={navItems}
                        activeDropdown={activeDropdown}
                        handleMobileDropdownToggle={handleMobileDropdownToggle}
                        mobileMenuRef={mobileMenuRef}
                    />
                </React.Suspense>
            )}
        </>
    );
};

export default React.memo(Navbar);


