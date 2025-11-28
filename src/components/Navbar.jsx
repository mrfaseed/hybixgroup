import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaChevronDown, FaSearch, FaArrowRight, FaPhoneAlt, FaCode, FaMobileAlt, FaPaintBrush, FaBullhorn, FaCloud, FaShoppingCart, FaLink, FaBrain, FaServer, FaShieldAlt, FaUserTie } from 'react-icons/fa';
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
        type: 'dropdown',
        description: 'Strategic innovations for success.',
        links: ['Enterprise ERP', 'Data Analytics', 'Business Intelligence', 'Automation']
    },
    {
        id: 3,
        title: 'Company',
        type: 'dropdown',
        description: 'Discover our vision and team.',
        links: ['About Us', 'Careers', 'Blog', 'Press']
    },
    {
        id: 4,
        title: 'Resources',
        type: 'dropdown',
        description: 'Insights and expert guides.',
        links: ['Case Studies', 'Documentation', 'Community', 'Support']
    }
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);
    const navRef = useRef(null);

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
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null);
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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

    // Mobile Click Handler
    const handleMobileDropdownToggle = (id) => {
        setActiveDropdown(prev => (prev === id ? null : id));
    };

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
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
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
                                <span>{item.title}</span>
                                <FaChevronDown className={`mobile-chevron ${activeDropdown === item.id ? 'rotate' : ''}`} />
                            </div>
                            <div
                                className="mobile-nav-body"
                                style={{ maxHeight: activeDropdown === item.id ? '800px' : '0px' }}
                            >
                                <div className="mobile-links-grid">
                                    {item.type === 'mega' ? (
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


