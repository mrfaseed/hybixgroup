import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './CustomerReviews.css';

const reviews = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO, TechVision Inc.",
        rating: 5,
        review: "Hybix Group transformed our digital presence completely. Their innovative solutions and professional approach exceeded all our expectations. The team's dedication to excellence is truly remarkable.",
        avatar: "SJ",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        date: "2 weeks ago"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Founder, StartupHub",
        rating: 5,
        review: "Working with Hybix Group was an absolute pleasure. They delivered a cutting-edge solution that perfectly aligned with our vision. Their expertise in modern technologies is unmatched.",
        avatar: "MC",
        color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        date: "3 weeks ago"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Marketing Director, BrandCo",
        rating: 5,
        review: "The level of creativity and technical excellence Hybix Group brings to the table is outstanding. They turned our complex requirements into an elegant, user-friendly solution.",
        avatar: "ER",
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        date: "1 month ago"
    },
    {
        id: 4,
        name: "David Thompson",
        role: "CTO, InnovateLabs",
        rating: 5,
        review: "Exceptional service and remarkable results! Hybix Group's team demonstrated deep technical knowledge and creative problem-solving skills throughout our project.",
        avatar: "DT",
        color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        date: "1 month ago"
    },
    {
        id: 5,
        name: "Lisa Anderson",
        role: "Product Manager, FutureTech",
        rating: 5,
        review: "Hybix Group delivered beyond our wildest expectations. Their attention to detail and commitment to quality is evident in every aspect of their work. Highly recommended!",
        avatar: "LA",
        color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        date: "2 months ago"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Director, GlobalSolutions",
        rating: 5,
        review: "A truly professional team that understands both business needs and technical excellence. Hybix Group's innovative approach helped us achieve our goals faster than anticipated.",
        avatar: "JW",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        date: "2 months ago"
    }
];

const StarRating = React.memo(({ rating }) => (
    <div className="stars-container">
        {[...Array(5)].map((_, index) => (
            <span
                key={index}
                className={`star ${index < rating ? 'filled' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                ★
            </span>
        ))}
    </div>
));

const ReviewCard = React.memo(({ review, isVisible, isActive, onToggle, setKey }) => (
    <div
        className={`review-card ${isVisible ? 'visible' : ''} ${isActive ? 'expanded' : ''}`}
        onClick={onToggle}
    >
        <div className="card-glow"></div>
        <div className="card-header">
            <div className="avatar" style={{ background: review.color }}>
                <span className="avatar-text">{review.avatar}</span>
                <div className="avatar-ring"></div>
            </div>
            <div className="reviewer-info">
                <h3 className="reviewer-name">{review.name}</h3>
                <p className="reviewer-role">{review.role}</p>
            </div>
            <div className="review-date">{review.date}</div>
        </div>
        <div className="rating-section">
            <StarRating rating={review.rating} />
            <span className="rating-text">{review.rating}.0</span>
        </div>
        <p className="review-text">{review.review}</p>
        <div className="card-footer">
            <div className="verified-badge">
                <span className="verified-icon">✓</span>
                <span className="verified-text">Verified Client</span>
            </div>
            <div className="expand-indicator">
                {isActive ? '−' : '+'}
            </div>
        </div>
        <div className="card-decoration decoration-1"></div>
        <div className="card-decoration decoration-2"></div>
    </div>
));

const CustomerReviews = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const marqueeContainerRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Manual scroll handlers for mouse
    const handleMouseDown = useCallback((e) => {
        setIsDragging(true);
        setStartX(e.pageX - marqueeContainerRef.current.offsetLeft);
        setScrollLeft(marqueeContainerRef.current.scrollLeft);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - marqueeContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        marqueeContainerRef.current.scrollLeft = scrollLeft - walk;
    }, [isDragging, startX, scrollLeft]);

    // Touch handlers for mobile
    const handleTouchStart = useCallback((e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - marqueeContainerRef.current.offsetLeft);
        setScrollLeft(marqueeContainerRef.current.scrollLeft);
    }, []);

    const handleTouchMove = useCallback((e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - marqueeContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        marqueeContainerRef.current.scrollLeft = scrollLeft - walk;
    }, [isDragging, startX, scrollLeft]);

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleCardToggle = useCallback((id) => {
        setActiveCard(prev => (prev === id ? null : id));
    }, []);

    const particles = useMemo(() => [...Array(20)].map((_, i) => (
        <div
            key={i}
            className="particle"
            style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
            }}
        ></div>
    )), []);

    return (
        <div className="customer-reviews-section">
            {/* Animated Background */}
            <div className="reviews-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="floating-particles">
                    {particles}
                </div>
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
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Happy Clients</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">4.9/5</div>
                        <div className="stat-label">Average Rating</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">98%</div>
                        <div className="stat-label">Satisfaction Rate</div>
                    </div>
                </div>
            </div>

            {/* Reviews Marquee with Manual Scroll */}
            <div
                className="reviews-marquee-container"
                ref={marqueeContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="reviews-marquee">
                    {['set1', 'set2', 'set3', 'set4'].map((setKey) => (
                        reviews.map(review => (
                            <ReviewCard
                                key={`${setKey}-${review.id}`}
                                review={review}
                                isVisible={isVisible}
                                isActive={activeCard === review.id}
                                onToggle={() => handleCardToggle(review.id)}
                            />
                        ))
                    ))}
                </div>
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
        </div>
    );
};

export default CustomerReviews;
