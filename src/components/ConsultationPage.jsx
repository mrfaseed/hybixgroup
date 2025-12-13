import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaVideo, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './ConsultationPage.css';

const ConsultationPage = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        type: 'video', // video, phone, in-person
        topic: 'General Inquiry',
        notes: ''
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (currentUser) {
            setFormData(prev => ({
                ...prev,
                name: currentUser.displayName || '',
                email: currentUser.email || ''
            }));
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!formData.name || !formData.email || !formData.date || !formData.time) {
            setError('Please fill in all required fields.');
            setLoading(false);
            return;
        }

        try {
            await addDoc(collection(db, 'consultations'), {
                ...formData,
                status: 'pending',
                createdAt: serverTimestamp(),
                userId: currentUser ? currentUser.uid : 'anonymous'
            });
            setSubmitted(true);
        } catch (err) {
            console.error('Error scheduling consultation:', err);
            setError('Failed to schedule. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="consultation-page">
                <div className="consultation-background-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>
                <div className="consultation-container">
                    <div className="success-message">
                        <FaCheckCircle className="success-icon" />
                        <h2>Consultation Scheduled!</h2>
                        <p>We have received your request. A confirmation email will be sent to {formData.email} shortly.</p>
                        <Link to="/" className="home-link">Return to Home</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="consultation-page">
            <div className="consultation-background-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>

            <div className="consultation-container">
                <div className="consultation-header">
                    <h1>Schedule a Consultation</h1>
                    <p>Book a time with our experts to discuss your project.</p>
                </div>

                {error && <div className="error-message" style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</div>}

                <form className="consultation-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="form-input"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Time</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                className="form-input"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="type">Consultation Type</label>
                        <select
                            id="type"
                            name="type"
                            className="form-select"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option value="video">Video Call (Google Meet/Zoom)</option>
                            <option value="phone">Phone Call</option>
                            <option value="in-person">In-Person Meeting</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="notes">Project Details / Notes</label>
                        <textarea
                            id="notes"
                            name="notes"
                            className="form-textarea"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Tell us a bit about what you'd like to discuss..."
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Scheduling...' : 'Confirm Schedule'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ConsultationPage;
