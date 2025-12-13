import React from 'react';
import { FiMessageSquare, FiCheckCircle, FiAlertOctagon, FiTrash2 } from 'react-icons/fi';
import '../AdminDashboard.css';

const AdminMessages = ({ messages, unreadCount, initiateAccept, handleAction }) => {
    return (
        <div className="section-container">
            <div className="table-header">
                <h3>Inbox Recieved</h3>
                <div className="message-stats">
                    <span className="unread-tag">{unreadCount} New Inquiries</span>
                </div>
            </div>

            <div className="messages-grid">
                {messages.filter(m => !['accepted', 'rejected', 'spam', 'deleted'].includes(m.status)).length === 0 ? (
                    <div className="no-messages">
                        <FiMessageSquare size={40} />
                        <p>No new messages.</p>
                    </div>
                ) : (
                    messages.filter(m => !['accepted', 'rejected', 'spam', 'deleted'].includes(m.status)).map((msg) => (
                        <div key={msg.id} className="message-card">
                            <div className="msg-card-header">
                                <div className="msg-avatar">
                                    {msg.firstName?.charAt(0)}{msg.lastName?.charAt(0)}
                                </div>
                                <div className="msg-info">
                                    <h4>{msg.firstName} {msg.lastName}</h4>
                                    <span className="msg-email">{msg.email}</span>
                                </div>
                                <span className="msg-date">{msg.createdAt.toLocaleDateString()}</span>
                            </div>

                            <div className="msg-card-body">
                                <p>{msg.message}</p>
                            </div>

                            <div className="msg-card-actions">
                                <button
                                    className="action-btn-sm accept"
                                    onClick={(e) => { e.stopPropagation(); initiateAccept(msg); }}
                                >
                                    <FiCheckCircle /> Accept
                                </button>
                                <button
                                    className="action-btn-sm spam"
                                    onClick={(e) => { e.stopPropagation(); handleAction(msg, 'spam'); }}
                                >
                                    <FiAlertOctagon /> Spam
                                </button>
                                <button
                                    className="action-btn-sm delete"
                                    onClick={(e) => { e.stopPropagation(); handleAction(msg, 'deleted'); }}
                                >
                                    <FiTrash2 /> Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminMessages;
