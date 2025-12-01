import React from 'react';
import { FaChevronRight, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const NavbarDropdown = ({ item, activeDropdown }) => {
    const [activeSolution, setActiveSolution] = React.useState(0);

    // Reset active solution when dropdown opens or item changes
    React.useEffect(() => {
        setActiveSolution(0);
    }, [item.id, activeDropdown]);

    return (
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
    );
};

export default React.memo(NavbarDropdown);
