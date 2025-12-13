import React from 'react';
import '../AdminDashboard.css';

const AdminRejected = ({ messages, handleAction }) => {
    return (
        <div className="section-container">
            <div className="table-header">
                <h3>Rejected / Spam</h3>
            </div>
            <div className="rejected-list">
                {messages.filter(m => ['rejected', 'spam', 'deleted'].includes(m.status)).map(msg => (
                    <div key={msg.id} className="rejected-item">
                        <div className="rejected-info">
                            <strong>{msg.firstName} {msg.lastName}</strong>
                            <span>{msg.email}</span>
                        </div>
                        <div className="rejected-status">
                            <span className={`status-badge ${msg.status}`}>{msg.status}</span>
                            <button className="restore-btn" onClick={() => handleAction(msg, 'new')}>
                                Restore
                            </button>
                        </div>
                    </div>
                ))}
                {messages.filter(m => ['rejected', 'spam', 'deleted'].includes(m.status)).length === 0 && (
                    <p className="text-muted">No rejected items.</p>
                )}
            </div>
        </div>
    );
};

export default AdminRejected;
