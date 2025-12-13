import React from 'react';
import { FiUsers, FiBarChart2, FiGrid, FiFileText } from 'react-icons/fi';
import '../AdminDashboard.css';

const AdminOverview = () => {
    return (
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
    );
};

export default AdminOverview;
