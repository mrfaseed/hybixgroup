import React from 'react';
import { FiLayout, FiEdit2, FiMail, FiPhone, FiXCircle } from 'react-icons/fi';
import '../AdminDashboard.css';

const AdminProjects = ({ projects, initiateEditProject, handleRejectProject }) => {
    return (
        <div className="section-container">
            <div className="table-header">
                <h3>Available Projects</h3>
            </div>
            <div className="projects-grid">
                {projects.filter(p => p.status === 'available').length === 0 ? (
                    <div className="no-messages">
                        <FiLayout size={40} />
                        <p>No active projects available.</p>
                    </div>
                ) : (
                    projects.filter(p => p.status === 'available').map((proj) => (
                        <div key={proj.id} className="project-card">
                            <div className="project-header">
                                <h4>{proj.firstName} {proj.lastName}</h4>
                                <div
                                    className="budget-badge"
                                    onClick={() => initiateEditProject(proj)}
                                    title="Click to edit budget"
                                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                                >
                                    ₹{proj.budget} <FiEdit2 size={12} />
                                </div>
                            </div>
                            <p className="project-desc">{proj.message}</p>
                            <div className="project-meta">
                                <span><FiMail /> {proj.email}</span>
                                <span><FiPhone /> {proj.phoneNumber}</span>
                            </div>
                            <button
                                className="reject-project-btn"
                                onClick={(e) => handleRejectProject(e, proj)}
                                style={{
                                    marginTop: '1rem',
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    color: '#f87171',
                                    border: '1px solid rgba(239, 68, 68, 0.2)',
                                    padding: '0.5rem',
                                    borderRadius: '8px',
                                    width: '100%',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    fontWeight: '600'
                                }}
                            >
                                <FiXCircle /> Reject Project
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminProjects;
