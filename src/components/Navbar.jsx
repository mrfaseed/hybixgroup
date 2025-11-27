import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaChevronDown, FaSearch } from 'react-icons/fa';

const navItems = [
    {
        id: 1,
        title: 'Services',
        description: 'We offer a wide range of digital solutions tailored to your needs.',
        links: ['Web Development', 'App Development', 'UI/UX Design', 'SEO Optimization']
    },
    {
        id: 2,
        title: 'Solutions',
        description: 'Innovative strategies to help your business grow and succeed.',
        links: ['Enterprise ERP', 'Cloud Solutions', 'Data Analytics', 'Cybersecurity']
    },
    {
        id: 3,
        title: 'Company',
        description: 'Learn more about our mission, vision, and the team behind Hybix.',
        links: ['About Us', 'Careers', 'Blog', 'Press']
    },
    {
        id: 4,
        title: 'Resources',
        description: 'Access our latest case studies, whitepapers, and guides.',
        links: ['Case Studies', 'Documentation', 'Community', 'Support']
    }
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null); // Reset dropdowns when toggling menu
    };

    const handleMouseEnter = (id) => {
        if (window.innerWidth > 768) {
            setActiveDropdown(id);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 768) {
            setActiveDropdown(null);
        }
    };

    const handleMobileItemClick = (id) => {
        if (activeDropdown === id) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(id);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h1>Hybix<span>Group</span></h1>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-menu-desktop">
                    {navItems.map((item) => (
                        <div
                            key={item.id}
                            className="nav-item"
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="nav-link">
                                {item.title} <FaChevronDown className={`chevron ${activeDropdown === item.id ? 'rotate' : ''}`} />
                            </span>

                            {/* Desktop Dropdown (Scroll Down Effect) */}
                            <div className={`dropdown-content ${activeDropdown === item.id ? 'active' : ''}`}>
                                <div className="dropdown-inner">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <ul>
                                        {item.links.map((link, index) => (
                                            <li key={index}><a href="#">{link}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Animated Search Bar */}
                    <div className={`search-container ${isSearchOpen ? 'active' : ''}`}>
                        <input type="text" placeholder="Search..." className="search-input" />
                        <button className="search-btn" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu Drawer */}
                <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        {/* Mobile Search */}
                        <div className="mobile-search">
                            <input type="text" placeholder="Search..." />
                            <button><FaSearch /></button>
                        </div>

                        {navItems.map((item) => (
                            <div key={item.id} className="mobile-nav-item">
                                <div
                                    className="mobile-nav-header"
                                    onClick={() => handleMobileItemClick(item.id)}
                                >
                                    <span>{item.title}</span>
                                    <FaChevronDown className={`mobile-chevron ${activeDropdown === item.id ? 'rotate' : ''}`} />
                                </div>

                                {/* Mobile Accordion (Scroll Down Effect) */}
                                <div
                                    className={`mobile-dropdown-content ${activeDropdown === item.id ? 'expanded' : ''}`}
                                    style={{ maxHeight: activeDropdown === item.id ? '500px' : '0px' }}
                                >
                                    <div className="mobile-dropdown-inner">
                                        <p>{item.description}</p>
                                        <ul>
                                            {item.links.map((link, index) => (
                                                <li key={index}><a href="#">{link}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
