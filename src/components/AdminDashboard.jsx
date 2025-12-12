import React, { useState } from 'react';
import {
    FiHome, FiUsers, FiSettings, FiLogOut, FiBarChart2,
    FiGrid, FiMessageSquare, FiFileText, FiBriefcase, FiBell, FiSearch
} from 'react-icons/fi';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const handleLogout = () => {
        // Implement logout logic here
        window.location.href = '/login';
    };

    const navItems = [
        { id: 'overview', label: 'Overview', icon: <FiGrid /> },
        { id: 'users', label: 'Users', icon: <FiUsers /> },
        { id: 'analytics', label: 'Analytics', icon: <FiBarChart2 /> },
        { id: 'messages', label: 'Messages', icon: <FiMessageSquare /> },
        { id: 'reports', label: 'Reports', icon: <FiFileText /> },
        { id: 'team', label: 'Team', icon: <FiBriefcase /> },
        { id: 'settings', label: 'Settings', icon: <FiSettings /> },
    ];

    return (
        <div className="admin-container">
            {/* Extended Sidebar */}
            <aside className="admin-sidebar">
                <div className="sidebar-brand">
                    <div className="brand-logo">H</div>
                    <h2>Hybix<span>Admin</span></h2>
                </div>

                <div className="user-profile-sidebar">
                    <div className="avatar">A</div>
                    <div className="user-info">
                        <span className="user-name">Admin User</span>
                        <span className="user-role">Super Admin</span>
                    </div>
                </div>

                <div className="sidebar-section-label">Main Menu</div>
                <nav className="sidebar-nav">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-label">{item.label}</span>
                            {activeTab === item.id && <div className="active-indicator" />}
                        </button>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <button className="nav-item logout-btn" onClick={handleLogout}>
                        <span className="nav-icon"><FiLogOut /></span>
                        <span className="nav-label">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="admin-main">
                <div className="content-header">
                    <div className="header-title">
                        <h1>{navItems.find(i => i.id === activeTab)?.label}</h1>
                        <p>Welcome back, here's what's happening today.</p>
                    </div>
                    <div className="header-actions">
                        <div className="search-bar">
                            <FiSearch className="search-icon" />
                            <input type="text" placeholder="Search..." />
                        </div>
                        <button className="icon-btn">
                            <FiBell />
                            <span className="notification-dot"></span>
                        </button>
                    </div>
                </div>

                <div className="content-scrollable">
                    {/* Dynamic Content based on active tab */}
                    {activeTab === 'overview' && (
                        <div className="dashboard-grid">
                            <div className="stat-card primary">
                                <div className="stat-header">
                                    <h3>Total Users</h3>
                                    <div className="stat-icon"><FiUsers /></div>
                                </div>
                                <p className="stat-value">1,234</p>
                                <span className="stat-change positive">+12% from last month</span>
                            </div>
                            <div className="stat-card secondary">
                                <div className="stat-header">
                                    <h3>Total Revenue</h3>
                                    <div className="stat-icon"><FiBarChart2 /></div>
                                </div>
                                <p className="stat-value">$45,678</p>
                                <span className="stat-change positive">+8% from last month</span>
                            </div>
                            <div className="stat-card accent">
                                <div className="stat-header">
                                    <h3>Active Sessions</h3>
                                    <div className="stat-icon"><FiGrid /></div>
                                </div>
                                <p className="stat-value">342</p>
                                <span className="stat-change neutral">0% from last month</span>
                            </div>
                            <div className="stat-card">
                                <div className="stat-header">
                                    <h3>Pending Issues</h3>
                                    <div className="stat-icon"><FiFileText /></div>
                                </div>
                                <p className="stat-value">23</p>
                                <span className="stat-change negative">-2 from yesterday</span>
                            </div>
                        </div>
                    )}

                    {activeTab === 'users' && (
                        <div className="section-container">
                            <div className="table-header">
                                <h3>User Management</h3>
                                <button className="add-btn">Add User</button>
                            </div>
                            <div className="placeholder-table">
                                <p>User list content goes here...</p>
                            </div>
                        </div>
                    )}

                    {/* Generic Placeholder for other tabs */}
                    {!['overview', 'users'].includes(activeTab) && (
                        <div className="placeholder-content">
                            <div className="placeholder-icon">
                                {navItems.find(i => i.id === activeTab)?.icon}
                            </div>
                            <h3>{navItems.find(i => i.id === activeTab)?.label}</h3>
                            <p>This module is currently under development.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
