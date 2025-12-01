import React from 'react';
import './CompanyTheme.css';
import './NewsMedia.css';

const newsItems = [
    {
        id: 1,
        title: "Hybix Group Announces Series B Funding",
        date: "October 15, 2025",
        category: "Press Release",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        excerpt: "We are thrilled to announce that we have secured $50M in Series B funding to accelerate our AI research."
    },
    {
        id: 2,
        title: "The Future of Web Development in 2026",
        date: "September 28, 2025",
        category: "Blog",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        excerpt: "Explore the emerging trends that will shape the digital landscape in the coming year."
    },
    {
        id: 3,
        title: "Hybix Wins 'Best Tech Startup' Award",
        date: "August 10, 2025",
        category: "Awards",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        excerpt: "Recognition for our innovative approach to solving complex business problems."
    }
];

const NewsMedia = () => {
    return (
        <div className="company-page-container">
            <div className="orb orb-cyan"></div>
            <div className="orb orb-purple"></div>

            <div className="page-content">
                <h1 className="page-title">News & Media</h1>
                <p className="page-subtitle">
                    Latest updates, press releases, and insights from the Hybix Group team.
                </p>

                <div className="news-grid">
                    {newsItems.map((item) => (
                        <div key={item.id} className="glass-card news-card">
                            <div className="news-image-wrapper">
                                <img src={item.image} alt={item.title} className="news-image" />
                                <span className="news-category">{item.category}</span>
                            </div>
                            <div className="news-content">
                                <span className="news-date">{item.date}</span>
                                <h3 className="news-title">{item.title}</h3>
                                <p className="news-excerpt">{item.excerpt}</p>
                                <a href="#" className="read-more">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsMedia;
