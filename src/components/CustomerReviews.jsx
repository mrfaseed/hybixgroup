import React, { useState, useEffect, useRef } from 'react';
import './CompanyTheme.css';
import './CustomerReviews.css';

const reviews = [
    {
        id: 1,
        name: "Chandra Bhagavan",
        role: "Riya Beauty Parlour.",
        rating: 4,
        review: "Hybix Group transformed our digital presence completely. Their innovative solutions and professional approach exceeded all our expectations. The team's dedication to excellence is truly remarkable.",
        avatar: "CB",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        date: "2 weeks ago"
    },
    {
        id: 2,
        name: "Russel",
        rating: 4,
        review: "Working with Hybix Group was an absolute pleasure. They delivered a cutting-edge solution that perfectly aligned with our vision. Their expertise in modern technologies is unmatched.",
        avatar: "R",
        color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        date: "3 weeks ago"
    },
    {
        id: 3,
        name: "Vignesh  Kumar",
        rating: 4.5,
        review: "The level of creativity and technical excellence Hybix Group brings to the table is outstanding. They turned our complex requirements into an elegant, user-friendly solution.",
        avatar: "VK",
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        date: "1 month ago"
    },
    {
        id: 4,
        name: "Siva Balan",
        rating: 5,
        review: "Exceptional service and remarkable results! Hybix Group's team demonstrated deep technical knowledge and creative problem-solving skills throughout our project.",
        avatar: "SB",
        color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        date: "1 month ago"
    },
    {
        id: 5,
        name: "Imran Cuts",
        role: "Editor, Imran Cuts",
        rating: 5,
        review: "Hybix Group delivered beyond our wildest expectations. Their attention to detail and commitment to quality is evident in every aspect of their work. Highly recommended!",
        avatar: "IC",
        color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        date: "2 months ago"
    },
    {
        id: 6,
        name: "Swathi",
        rating: 5,
        review: "A truly professional team that understands both business needs and technical excellence. Hybix Group's innovative approach helped us achieve our goals faster than anticipated.",
        avatar: "W",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        date: "2 months ago"
    },
    {
        id: 7,
        name: "Vidhya",
        rating: 5,
        review: "A truly professional team that understands both business needs and technical excellence. Hybix Group's innovative approach helped us achieve our goals faster than anticipated.",
        avatar: "V",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        date: "2 months ago"
    },
    {
        id: 8,
        name: "Mohan",
        rating: 5,
        review: "A truly professional team that understands both business needs and technical excellence. Hybix Group's innovative approach helped us achieve our goals faster than anticipated.",
        avatar: "M",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        date: "2 months ago"
    },
    {
        id: 9,
        name: "Riya Tatoo Studios",
        rating: 5,
        review: "A truly professional team that understands both business needs and technical excellence. Hybix Group's innovative approach helped us achieve our goals faster than anticipated.",
        avatar: "RTS",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        date: "2 months ago"
    },
    {
        id: 10,
        name: "Mohan Kumar",
        rating: 5,
        review: "A truly professional team that understands both business needs and technical excellence. Hybix Group's innovative approach helped us achieve our goals faster than anticipated.",
        avatar: "MK",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        date: "2 months ago"
    }
];

const StarRating = ({ rating }) => (
    <div className="stars-container">
        {[...Array(5)].map((_, index) => (
            <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
        ))}
    </div>
);

const ReviewCard = ({ review, isExpanded, onToggle }) => {
    return (
        <div
            className={`review-card ${isExpanded ? 'expanded' : ''}`}
            onClick={onToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onToggle(e);
                }
            }}
            aria-expanded={isExpanded}
            aria-label={`Review by ${review.name}`}
        >
            <div className="card-header">
                <div className="avatar" style={{ background: review.color }}>
                    {review.avatar}
                </div>
                <div className="reviewer-info">
                    <h3 className="reviewer-name">{review.name}</h3>
                    <p className="reviewer-role">{review.role}</p>
                </div>
                {/* Mobile Expand Visual Cue */}
                <div className="expand-indicator">
                    {isExpanded ? '−' : '+'}
                </div>
            </div>

            <div className="rating-section">
                <StarRating rating={review.rating} />
                <span className="rating-text">{review.rating}.0</span>
            </div>

            <div className="review-content-wrapper">
                <p className="review-text">{review.review}</p>
            </div>

            <div className="card-footer">
                <div className="verified-badge">
                    <span className="verified-icon">✓</span>
                    <span>Verified Client</span>
                </div>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>{review.date}</span>
            </div>
        </div>
    );
};

// Custom Hook for Number Counter Animation
const useCountUp = (end, duration = 2000, decimals = 0, shouldStart = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth animation (easeOutQuart)
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

            const currentCount = easeOutQuart * end;
            setCount(currentCount);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, shouldStart]);

    return count.toFixed(decimals);
};

// Hook for Intersection Observer (Scroll Trigger)
const useOnScreen = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect(); // Trigger once
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, options]);

    return [ref, isVisible];
};

// Counter Component to simplify usage
const Counter = ({ end, duration, decimals = 0, suffix = '', prefix = '' }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 }); // Start when 10% visible
    const value = useCountUp(end, duration, decimals, isVisible);

    return <span ref={ref}>{prefix}{value}{suffix}</span>;
};

const CustomerReviews = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [expandedId, setExpandedId] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [showAllReviews, setShowAllReviews] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Handle clicking outside to collapse on mobile
        const handleClickOutside = (event) => {
            if (!event.target.closest('.review-card')) {
                setExpandedId(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('resize', checkMobile);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const visibleReviews = (isMobile && !showAllReviews)
        ? reviews.slice(0, 2)
        : reviews;

    const handleCardToggle = (e, id) => {
        e.stopPropagation(); // Stop trigger of document click listener
        setExpandedId(prev => (prev === id ? null : id));
    };

    return (
        <section id="customerreview" className="customer-reviews-section">
            <div className="reviews-background">
                {/* Background reserved for styles */}
            </div>

            {/* Header Section */}
            <div className={`reviews-header ${isVisible ? 'visible' : ''}`}>
                <div className="header-badge">
                    <span className="badge-icon">⭐</span>
                    <span className="badge-text">Customer Testimonials</span>
                </div>
                <h1 className="reviews-title">
                    What Our <span className="gradient-text">Clients Say</span>
                </h1>
                <p className="reviews-subtitle">
                    Discover why businesses trust Hybix Group to transform their digital presence
                </p>

                <div className="stats-container">
                    <div className="stat-item">
                        <div className="stat-number">
                            <Counter end={15} duration={2500} suffix="+" />
                        </div>
                        <div className="stat-label">Happy Clients</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">
                            <Counter end={4.9} duration={2000} decimals={1} suffix="/5" />
                        </div>
                        <div className="stat-label">Average Rating</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">
                            <Counter end={98} duration={2200} suffix="%" />
                        </div>
                        <div className="stat-label">Satisfaction Rate</div>
                    </div>
                </div>
            </div>

            {/* New Responsive Card Layout */}
            <div className="reviews-grid-container">
                <div className="reviews-row">
                    {visibleReviews.map(review => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                            isExpanded={expandedId === review.id}
                            onToggle={(e) => handleCardToggle(e, review.id)}
                        />
                    ))}
                </div>

                {isMobile && !showAllReviews && (
                    <div className="view-more-container">
                        <button
                            className="view-more-button"
                            onClick={() => setShowAllReviews(true)}
                        >
                            More Reviews
                        </button>
                    </div>
                )}
            </div>

            {/* Call to Action */}
            <div className={`reviews-cta ${isVisible ? 'visible' : ''}`}>
                <div className="cta-content">
                    <h2 className="cta-title">Ready to Join Our Success Stories?</h2>
                    <p className="cta-subtitle">Let's create something amazing together</p>
                    <button className="cta-button">
                        <span className="button-text">Start Your Project</span>
                        <span className="button-icon">→</span>
                        <div className="button-glow"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
