import React, { useState, Suspense } from 'react';
import {
    FiGrid, FiMessageSquare, FiLayout, FiTrash2, FiUsers,
    FiBarChart2, FiFileText, FiBriefcase, FiSettings, FiLogOut,
    FiSearch, FiMenu, FiX
} from 'react-icons/fi';
import './AdminDashboard.css';
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc, addDoc, serverTimestamp } from "firebase/firestore";

// Lazy load sub-modules
const AdminOverview = React.lazy(() => import('./admin/AdminOverview'));
const AdminMessages = React.lazy(() => import('./admin/AdminMessages'));
const AdminProjects = React.lazy(() => import('./admin/AdminProjects'));
const AdminRejected = React.lazy(() => import('./admin/AdminRejected'));
const AdminUsers = React.lazy(() => import('./admin/AdminUsers'));

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [projects, setProjects] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);

    // Modal State
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [budgetModalOpen, setBudgetModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [budgetInput, setBudgetInput] = useState('');
    const [processingId, setProcessingId] = useState(null);

    // Subscribe to messages
    React.useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate() || new Date()
            }));
            setMessages(msgs);
            setUnreadCount(msgs.filter(m => !m.read && !['accepted', 'rejected', 'spam', 'deleted'].includes(m.status)).length);
        });
        return () => unsubscribe();
    }, []);

    // Subscribe to projects
    React.useEffect(() => {
        const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setProjects(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate() || new Date()
            })));
        });
        return () => unsubscribe();
    }, []);

    const handleAction = async (msg, status, budget = null) => {
        setProcessingId(msg.id);
        try {
            const msgRef = doc(db, "messages", msg.id);

            if (status === 'accepted') {
                await addDoc(collection(db, "projects"), {
                    ...msg,
                    status: 'available',
                    budget: budget,
                    originalMessageId: msg.id,
                    projectCreatedAt: serverTimestamp()
                });
            }

            await updateDoc(msgRef, { status: status, read: true });

            setBudgetModalOpen(false);
            setBudgetInput('');
            setSelectedMessage(null);
        } catch (error) {
            console.error("Error processing action:", error);
            alert("Action failed. Please try again.");
        } finally {
            setProcessingId(null);
        }
    };

    const handleRejectProject = async (e, project) => {
        if (e && e.stopPropagation) e.stopPropagation();
        if (!window.confirm("Are you sure you want to reject this project?")) return;

        setProcessingId(project.id);
        try {
            let messageUpdated = false;
            if (project.originalMessageId) {
                try {
                    const msgRef = doc(db, "messages", project.originalMessageId);
                    await updateDoc(msgRef, { status: 'rejected' });
                    messageUpdated = true;
                } catch (err) {
                    console.warn("Original message not found.");
                }
            }

            if (!messageUpdated) {
                const { id, originalMessageId, projectCreatedAt, status, ...projectData } = project;
                await addDoc(collection(db, "messages"), {
                    ...projectData,
                    status: 'rejected',
                    rejectedAt: serverTimestamp(),
                    isRestoredProject: true
                });
            }

            await deleteDoc(doc(db, "projects", project.id));
        } catch (error) {
            console.error("Error rejecting project:", error);
            alert("Failed to reject: " + error.message);
        } finally {
            setProcessingId(null);
        }
    };

    const handleUpdateBudget = async () => {
        if (!editingProject) return;
        try {
            const projectRef = doc(db, "projects", editingProject.id);
            await updateDoc(projectRef, { budget: budgetInput });
            setBudgetModalOpen(false);
            setEditingProject(null);
            setBudgetInput('');
        } catch (error) {
            console.error("Error updating budget:", error);
            alert("Failed to update budget.");
        }
    };

    const initiateAccept = (msg) => {
        setSelectedMessage(msg);
        setEditingProject(null);
        setBudgetInput('');
        setBudgetModalOpen(true);
    };

    const initiateEditProject = (project) => {
        setEditingProject(project);
        setSelectedMessage(null);
        setBudgetInput(project.budget || '');
        setBudgetModalOpen(true);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            window.location.href = "/login";
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const navItems = [
        { id: 'overview', label: 'Overview', icon: <FiGrid /> },
        { id: 'messages', label: 'Messages', icon: <FiMessageSquare /> },
        { id: 'projects', label: 'Available Projects', icon: <FiLayout /> },
        { id: 'rejected', label: 'Rejected / Spam', icon: <FiTrash2 /> },
        { id: 'users', label: 'Users', icon: <FiUsers /> },
        { id: 'analytics', label: 'Analytics', icon: <FiBarChart2 /> },
        { id: 'reports', label: 'Reports', icon: <FiFileText /> },
        { id: 'team', label: 'Team', icon: <FiBriefcase /> },
        { id: 'settings', label: 'Settings', icon: <FiSettings /> },
    ];

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="admin-container">
            {/* Mobile Header */}
            <header className="mobile-header">
                <div className="mobile-brand">
                    <div className="brand-logo">H</div>
                    <h2>Hybix<span>Group</span></h2>
                </div>
                <button className="menu-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </header>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div className="sidebar-overlay" onClick={() => setIsMobileMenuOpen(false)} />
            )}

            {/* Sidebar */}
            <aside className={`admin-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-header-mobile">
                    <button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>
                        <FiX />
                    </button>
                </div>
                <div className="sidebar-brand">
                    <div className="brand-logo">H</div>
                    <h2>Hybix<span>Group</span></h2>
                </div>

                <div className="sidebar-search">
                    <FiSearch className="sidebar-search-icon" />
                    <input type="text" placeholder="Search..." />
                </div>

                <div className="sidebar-section-label">Main Menu</div>
                <nav className="sidebar-nav">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(item.id);
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-label">{item.label}</span>
                            {item.id === 'messages' && unreadCount > 0 && (
                                <span className="nav-badge">{unreadCount}</span>
                            )}
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
                <div className="content-scrollable">
                    <div className="page-header">
                        <h1>{navItems.find(i => i.id === activeTab)?.label}</h1>
                        <p className="page-subtitle">Welcome back, here's what's happening today.</p>
                    </div>

                    <Suspense fallback={<div className="loading-state">Loading section...</div>}>
                        {activeTab === 'overview' && <AdminOverview messages={messages} projects={projects} />}
                        {activeTab === 'messages' && (
                            <AdminMessages
                                messages={messages}
                                unreadCount={unreadCount}
                                initiateAccept={initiateAccept}
                                handleAction={handleAction}
                            />
                        )}
                        {activeTab === 'projects' && (
                            <AdminProjects
                                projects={projects}
                                initiateEditProject={initiateEditProject}
                                handleRejectProject={handleRejectProject}
                            />
                        )}
                        {activeTab === 'rejected' && (
                            <AdminRejected
                                messages={messages}
                                handleAction={handleAction}
                            />
                        )}
                        {activeTab === 'users' && <AdminUsers />}
                        {/* Placeholders for other tabs */}
                        {['analytics', 'reports', 'team', 'settings'].includes(activeTab) && (
                            <div className="section-container placeholder-table">
                                <p>This module is coming soon.</p>
                            </div>
                        )}
                    </Suspense>

                    {/* Shared Budget Modal */}
                    {budgetModalOpen && (
                        <div className="message-modal-overlay">
                            <div className="budget-modal">
                                <h3>{editingProject ? 'Update Budget' : 'Accept Project'}</h3>
                                <p>
                                    {editingProject
                                        ? 'Change the estimated budget for this project.'
                                        : 'Please enter the estimated budget for this project.'}
                                </p>
                                <div className="budget-input-group">
                                    <span style={{ fontSize: '1.2rem', color: '#94a3b8' }}>₹</span>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        value={budgetInput}
                                        onChange={(e) => setBudgetInput(e.target.value)}
                                        autoFocus
                                    />
                                </div>
                                <div className="modal-actions">
                                    <button
                                        className="cancel-btn"
                                        onClick={() => {
                                            setBudgetModalOpen(false);
                                            setBudgetInput('');
                                            setEditingProject(null);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="confirm-btn"
                                        onClick={() => {
                                            if (editingProject) {
                                                handleUpdateBudget();
                                            } else {
                                                handleAction(selectedMessage, 'accepted', budgetInput);
                                            }
                                        }}
                                        disabled={!budgetInput}
                                    >
                                        {editingProject ? 'Update' : 'Confirm & Add Project'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
