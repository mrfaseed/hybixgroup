import React from 'react';
import { FaSearch, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';

const NavbarMobile = ({
    isMobileMenuOpen,
    navItems,
    activeDropdown,
    handleMobileDropdownToggle,
    mobileMenuRef
}) => {
    return (
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
    );
};

export default React.memo(NavbarMobile);
