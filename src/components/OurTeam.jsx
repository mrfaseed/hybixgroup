import React from 'react';
import './CompanyTheme.css';
import './OurTeam.css';

const teamMembers = [
    {
        id: 1,
        name: "Alex Morgan",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        bio: "Visionary leader with 15+ years in tech innovation."
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "CTO",
        image: "https://images.unsplash.com/photo-1573496359-136d4755be36?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        bio: "Expert in AI architecture and scalable systems."
    },
    {
        id: 3,
        name: "James Wilson",
        role: "Head of Design",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        bio: "Award-winning designer passionate about user experience."
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        bio: "Full-stack wizard specializing in React and Node.js."
    },
    {
        id: 5,
        name: "David Kim",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        bio: "Bridging the gap between business needs and tech solutions."
    },
    {
        id: 6,
        name: "Olivia Taylor",
        role: "Marketing Director",
        image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        bio: "Creative strategist driving brand growth and engagement."
    }
];

const OurTeam = () => {
    return (
        <div className="company-page-container">
            <div className="orb orb-blue"></div>
            <div className="orb orb-purple"></div>
            <div className="orb orb-cyan"></div>

            <div className="page-content">
                <h1 className="page-title">Meet Our Team</h1>
                <p className="page-subtitle">
                    The brilliant minds behind Hybix Group. We are a diverse team of innovators, creators, and problem solvers.
                </p>

                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="glass-card team-card">
                            <div className="member-image-wrapper">
                                <img src={member.image} alt={member.name} className="member-image" />
                                <div className="member-overlay">
                                    <div className="social-icons">
                                        {/* Placeholder icons */}
                                        <span>in</span>
                                        <span>tw</span>
                                    </div>
                                </div>
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                                <p className="member-bio">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
