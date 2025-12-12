import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiHome, FiUsers, FiSettings, FiLogOut, FiBarChart2, FiGrid } from 'react-icons/fi';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const handleLogout = () => {
        // Implement logout logic here
        window.location.href = '/login';
    };

    return (
        <div className="admin-container">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <h2>Hybix<span>Admin</span></h2>
                </div>

                <nav className="sidebar-nav">
                    <button
                        className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        <FiGrid className="nav-icon" />
                        <span>Overview</span>
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
                        onClick={() => setActiveTab('users')}
                    >
                        <FiUsers className="nav-icon" />
                        <span>Users</span>
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
                        onClick={() => setActiveTab('analytics')}
                    >
                        <FiBarChart2 className="nav-icon" />
                        <span>Analytics</span>
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <FiSettings className="nav-icon" />
                        <span>Settings</span>
                    </button>
                </nav>

                <div className="sidebar-footer">
                    <button className="nav-item logout-btn" onClick={handleLogout}>
                        <FiLogOut className="nav-icon" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="admin-main">
                <header className="main-header">
                    <h1>Dashboard</h1>
                    <div className="user-profile">
                        <div className="avatar">A</div>
                        <span>Admin User</span>
                    </div>
                </header>

                <div className="content-area">
                    {/* Placeholder content based on active tab using conditional rendering for now */}
                    {activeTab === 'overview' && (
                        <div className="dashboard-grid">
                            <div className="stat-card">
                                <h3>Total Users</h3>
                                <p className="stat-value">1,234</p>
                                <span className="stat-change positive">+12% from last month</span>
                            </div>
                            <div className="stat-card">
                                <h3>Revenue</h3>
                                <p className="stat-value">$45,678</p>
                                <span className="stat-change positive">+8% from last month</span>
                            </div>
                            <div className="stat-card">
                                <h3>Active Sessions</h3>
                                <p className="stat-value">342</p>
                                <span className="stat-change neutral">0% from last month</span>
                            </div>
                        </div>
                    )}
                    {activeTab === 'users' && <div className="placeholder-content">Users Management Section</div>}
                    {activeTab === 'analytics' && <div className="placeholder-content">Analytics Section</div>}
                    {activeTab === 'settings' && <div className="placeholder-content">Settings Section</div>}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
