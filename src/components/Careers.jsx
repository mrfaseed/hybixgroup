import React from 'react';
import './CompanyTheme.css';
import './Careers.css';

const jobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        department: "Engineering",
        location: "Remote / New York",
        type: "Full-time",
        description: "We are looking for an experienced Frontend Developer to lead our web application initiatives."
    },
    {
        id: 2,
        title: "UX/UI Designer",
        department: "Design",
        location: "London, UK",
        type: "Full-time",
        description: "Join our creative team to design intuitive and beautiful user experiences for our global clients."
    },
    {
        id: 3,
        title: "AI Research Scientist",
        department: "R&D",
        location: "San Francisco, CA",
        type: "Full-time",
        description: "Push the boundaries of what's possible with Artificial Intelligence and Machine Learning."
    },
    {
        id: 4,
        title: "Product Manager",
        department: "Product",
        location: "Remote",
        type: "Contract",
        description: "Drive the product vision and strategy for our next-generation software solutions."
    }
];

const Careers = () => {
    return (
        <div className="company-page-container">
            <div className="orb orb-blue"></div>
            <div className="orb orb-purple"></div>

            <div className="page-content">
                <h1 className="page-title">Join Our Mission</h1>
                <p className="page-subtitle">
                    Build the future with us. We're always looking for passionate people to join our growing team.
                </p>

                <div className="careers-grid">
                    {jobs.map((job) => (
                        <div key={job.id} className="glass-card job-card">
                            <div className="job-header">
                                <h3 className="job-title">{job.title}</h3>
                                <span className="job-type">{job.type}</span>
                            </div>
                            <div className="job-meta">
                                <span className="job-dept">{job.department}</span>
                                <span className="job-loc">{job.location}</span>
                            </div>
                            <p className="job-desc">{job.description}</p>
                            <button className="apply-btn">Apply Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Careers;
