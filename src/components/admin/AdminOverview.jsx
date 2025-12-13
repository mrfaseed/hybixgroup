import React, { useState, useEffect } from 'react';
import { FiUsers, FiLayout, FiMessageSquare, FiAlertCircle } from 'react-icons/fi';
import { getFunctions, httpsCallable } from 'firebase/functions';
import '../AdminDashboard.css';

const AdminOverview = ({ messages = [], projects = [] }) => {
    const [userCount, setUserCount] = useState(0);
    const [loadingUsers, setLoadingUsers] = useState(true);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const functions = getFunctions();
                const getUsers = httpsCallable(functions, 'getUsers');
                const result = await getUsers();
                if (result.data && result.data.users) {
                    setUserCount(result.data.users.length);
                }
            } catch (error) {
                console.error("Error fetching user count:", error);
            } finally {
                setLoadingUsers(false);
            }
        };

        fetchUserCount();
    }, []);

    // Calculate real stats
    const activeProjects = projects.filter(p => p.status === 'available').length;
    const pendingMessages = messages.filter(m => !['accepted', 'rejected', 'spam', 'deleted'].includes(m.status)).length;
    const totalMessages = messages.length;

    return (
        <div className="dashboard-grid">
            <div className="stat-card primary">
                <div className="stat-header">
                    <h3>Total Users</h3>
                    <div className="stat-icon"><FiUsers /></div>
                </div>
                <p className="stat-value">{loadingUsers ? '...' : userCount}</p>
                <span className="stat-change neutral">Registered Accounts</span>
            </div>

            <div className="stat-card secondary">
                <div className="stat-header">
                    <h3>Active Projects</h3>
                    <div className="stat-icon"><FiLayout /></div>
                </div>
                <p className="stat-value">{activeProjects}</p>
                <span className="stat-change positive">Currently Live</span>
            </div>

            <div className="stat-card accent">
                <div className="stat-header">
                    <h3>New Inquiries</h3>
                    <div className="stat-icon"><FiAlertCircle /></div>
                </div>
                <p className="stat-value">{pendingMessages}</p>
                <span className="stat-change negative">Need Attention</span>
            </div>

            <div className="stat-card">
                <div className="stat-header">
                    <h3>Total Messages</h3>
                    <div className="stat-icon"><FiMessageSquare /></div>
                </div>
                <p className="stat-value">{totalMessages}</p>
                <span className="stat-change neutral">Lifetime Inquiries</span>
            </div>
        </div>
    );
};

export default AdminOverview;
