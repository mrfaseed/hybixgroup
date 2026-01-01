import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaStar, FaRocket } from 'react-icons/fa';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import catAnimation from '../assets/Running Cat.lottie?url';
import scooterAnimation from '../assets/John and the haverboard.lottie?url';
import './CompanyTheme.css';
import './CustomerReviews.css';

const reviews = [
    {
        id: 1,
        name: "Chandra Bhagavan",
        role: "Riya Beauty Parlour.",
        rating: 4,
        review: "We approached Hybix Group for our business website and they handled everything smoothly. The communication was clear, changes were done quickly, and the final output looked clean and professional.",
        avatar: "CB",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        date: "2 weeks ago"
    },
    {
        id: 2,
        name: "Russel",
        rating: 4,
        review: "Overall a very good experience. They understood what we actually needed instead of overcomplicating things. Delivery was on time and the quality met our expectations.",
        avatar: "R",
        color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        date: "3 weeks ago"
    },
    {
        id: 3,
        name: "Vignesh  Kumar",
        rating: 4,
        review: "I had some specific requirements and the team was patient enough to work through all of them. The end result was simple, functional, and easy to use.",
        avatar: "VK",
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        date: "1 month ago"
    },
    {
        id: 4,
        name: "Siva Balan",
        rating: 3,
        review: "The work was good and the team was responsive whenever I had questions. A few things took extra time, but overall the project turned out well.",
        avatar: "SB",
        color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        date: "1 month ago"
    },
    {
        id: 5,
        name: "Imran Cuts",
        role: "Editor, Imran Cuts",
        rating: 4,
        review: "They paid attention to small details and didn’t rush the work. I liked how they suggested improvements instead of just doing the bare minimum.",
        avatar: "IC",
        color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        date: "2 months ago"
    },
    {
        id: 6,
        name: "Swathi",
        rating: 4,
        review: "The team explained things clearly even though I’m not very technical. Everything works properly and support after delivery was also helpful.",
        avatar: "W",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        date: "2 months ago"
    },
    {
        id: 7,
        name: "Vidhya",
        rating: 3,
        review: "Good service overall. They listened to feedback and made changes when needed. A decent experience and the output matched what we discussed.",
        avatar: "V",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        date: "2 months ago"
    },
    {
        id: 8,
        name: "Mohan",
        rating: 3,
        review: "The project was handled professionally and updates were shared regularly. There were a few delays, but nothing major.",
        avatar: "M",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        date: "2 months ago"
    },
    {
        id: 9,
        name: "Riya Tatoo Studios",
        rating: 5,
        review: "Really happy with the final result. The design looks modern and works smoothly. We’ve already started getting good feedback from customers.",
        avatar: "RTS",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        date: "2 months ago"
    },
    {
        id: 10,
        name: "Mohan Kumar",
        rating: 5,
        review: "Everything from discussion to delivery was smooth. They understood our idea quickly and converted it into something practical and clean.",
        avatar: "MK",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        date: "2 months ago"
    }
];

const StarRating = ({ rating }) => (
    <div className="stars-container">
        {[...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`star-icon ${index < rating ? 'filled' : 'empty'}`}
            />
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

            </div>

            <div className="rating-section">
                <StarRating rating={review.rating} />
                <div className="rating-badge">
                    <span className="rating-value">{review.rating}.0</span>
                    <span className="rating-scale">/ 5</span>
                </div>
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
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 350; // Approx card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const handleStartProject = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/contact');
        }
    };

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
                    What Our <span className="gradient-text">Clients Say ?</span>
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
                {/* Navigation Buttons */}
                {!isMobile && (
                    <>
                        <button
                            className="nav-btn prev-btn"
                            onClick={() => scroll('left')}
                            aria-label="Scroll Left"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            className="nav-btn next-btn"
                            onClick={() => scroll('right')}
                            aria-label="Scroll Right"
                        >
                            <FaChevronRight />
                        </button>
                    </>
                )}

                <div className="reviews-row" ref={scrollContainerRef}>
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

                {/* Cat Animation Track */}
                <div className="cat-track">
                    <div className="cat-wrapper">
                        <div className="cat-container">
                            <DotLottieReact
                                src={catAnimation}
                                loop
                                autoplay
                                className="cat-lottie"
                            />
                        </div>
                        <div className="scooter-container">
                            <DotLottieReact
                                src={scooterAnimation}
                                loop
                                autoplay
                                className="scooter-lottie"
                            />
                        </div>
                    </div>
                </div>

                <div className="cta-content">
                    <h2 className="cta-title">Ready to Join Our Success Stories?</h2>
                    <p className="cta-subtitle">Let's create something amazing together</p>
                    <button className="cta-button" onClick={handleStartProject}>
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
