import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiBriefcase, FiMapPin, FiClock, FiArrowRight, FiUsers, FiCpu } from 'react-icons/fi';
import './CompanyTheme.css';
import './Careers.css';

const jobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        department: "Engineering",
        location: "Remote / New York",
        type: "Full-time",
        icon: <FiCpu />,
        description: "We are looking for an experienced Frontend Developer to lead our web application initiatives."
    },
    {
        id: 2,
        title: "UX/UI Designer",
        department: "Design",
        location: "London, UK",
        type: "Full-time",
        icon: <FiUsers />,
        description: "Join our creative team to design intuitive and beautiful user experiences for our global clients."
    },
    {
        id: 3,
        title: "AI Research Scientist",
        department: "R&D",
        location: "San Francisco, CA",
        type: "Full-time",
        icon: <FiCpu />,
        description: "Push the boundaries of what's possible with Artificial Intelligence and Machine Learning."
    },
    {
        id: 4,
        title: "Product Manager",
        department: "Product",
        location: "Remote",
        type: "Contract",
        icon: <FiBriefcase />,
        description: "Drive the product vision and strategy for our next-generation software solutions."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50 }
    }
};

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiX, FiUpload, FiGithub, FiLinkedin } from 'react-icons/fi';

const ApplyModal = ({ job, onClose }) => {
    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="modal-content"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                <button className="close-modal-btn" onClick={onClose}>
                    <FiX />
                </button>

                <div className="modal-header">
                    <h2>Apply for <span className="highlight-text">{job.title}</span></h2>
                    <p>{job.location} • {job.type}</p>
                </div>

                <form className="apply-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" required />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="+1 (555) 000-0000" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Resume/CV</label>
                        <div className="file-upload-wrapper">
                            <input type="file" id="resume-upload" className="file-input" accept=".pdf,.doc,.docx" required />
                            <label htmlFor="resume-upload" className="file-upload-label">
                                <FiUpload className="upload-icon" />
                                <span>Upload Resume (PDF, DOC)</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Portfolio / LinkedIn</label>
                        <div className="input-with-icon">
                            <FiLinkedin className="input-icon" />
                            <input type="url" placeholder="https://linkedin.com/in/..." />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Cover Letter</label>
                        <textarea rows="4" placeholder="Tell us why you're a great fit..."></textarea>
                    </div>

                    <button type="submit" className="submit-application-btn">
                        Submit Application
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
};

const Careers = () => {
    const navigate = useNavigate();
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <div className="careers-page-container">
            <div className="careers-hero">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="careers-title"
                >
                    Join Our <span className="highlight-text">Mission</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="careers-subtitle"
                >
                    Build the future with us. We're always looking for passionate people to join our growing team.
                </motion.p>
            </div>

            <motion.div
                className="careers-grid-wrapper"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {jobs.map((job) => (
                    <motion.div
                        key={job.id}
                        className="career-card"
                        variants={itemVariants}
                    >
                        <div className="card-top">
                            <div className="icon-wrapper">
                                {job.icon}
                            </div>
                            <span className="job-type-badge">{job.type}</span>
                        </div>

                        <h3 className="card-title">{job.title}</h3>

                        <div className="card-meta">
                            <div className="meta-item">
                                <FiBriefcase className="meta-icon" />
                                <span>{job.department}</span>
                            </div>
                            <div className="meta-item">
                                <FiMapPin className="meta-icon" />
                                <span>{job.location}</span>
                            </div>
                        </div>

                        <p className="card-desc">{job.description}</p>

                        <button className="card-btn" onClick={() => setSelectedJob(job)}>
                            Apply Now <FiArrowRight className="btn-icon" />
                        </button>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedJob && (
                    <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Careers;
