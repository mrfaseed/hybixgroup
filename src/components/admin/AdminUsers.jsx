import React, { useState, useEffect } from 'react';
import { FiUsers, FiTrash2 } from 'react-icons/fi';
import { getFunctions, httpsCallable } from 'firebase/functions';
import '../AdminDashboard.css';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const functions = getFunctions();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoadingUsers(true);
        try {
            const getUsers = httpsCallable(functions, 'getUsers');
            const result = await getUsers();
            setUsers(result.data.users);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoadingUsers(false);
        }
    };

    const handleDeleteUser = async (uid) => {
        if (!window.confirm("Are you sure you want to delete this user? This cannot be undone.")) return;

        try {
            const deleteUser = httpsCallable(functions, 'deleteUserAccount');
            await deleteUser({ uid });
            setUsers(users.filter(u => u.uid !== uid));
            alert("User deleted successfully.");
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Failed to delete user: " + error.message);
        }
    };

    return (
        <div className="section-container">
            <div className="table-header">
                <h3>User Management</h3>
                <button className="add-btn" onClick={fetchUsers} disabled={loadingUsers}>
                    {loadingUsers ? 'Loading...' : 'Refresh List'}
                </button>
            </div>

            <div className="users-list-container">
                {loadingUsers ? (
                    <div className="loading-state" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                        Loading users...
                    </div>
                ) : users.length === 0 ? (
                    <div className="no-messages" style={{ padding: '2rem', textAlign: 'center' }}>
                        <FiUsers size={40} />
                        <p>No users found.</p>
                    </div>
                ) : (
                    <div className="users-table-wrapper">
                        <table className="users-table">
                            <thead>
                                <tr>
                                    <th>User Info</th>
                                    <th>Created At</th>
                                    <th>Last Login</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.uid}>
                                        <td>
                                            <div className="user-cell-info">
                                                <div className="user-avatar-small">
                                                    {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
                                                </div>
                                                <div className="user-text">
                                                    <span className="user-name">{user.displayName || 'No Name'}</span>
                                                    <span className="user-email">{user.email}</span>
                                                    <span className="user-uid" style={{ fontSize: '0.7rem', opacity: 0.5 }}>ID: {user.uid}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{user.creationTime ? new Date(user.creationTime).toLocaleDateString() : 'N/A'}</td>
                                        <td>{user.lastSignInTime ? new Date(user.lastSignInTime).toLocaleDateString() : 'Never'}</td>
                                        <td>
                                            <button
                                                className="delete-user-btn"
                                                onClick={() => handleDeleteUser(user.uid)}
                                                style={{
                                                    background: 'rgba(239, 68, 68, 0.1)',
                                                    color: '#f87171',
                                                    border: '1px solid rgba(239, 68, 68, 0.2)',
                                                    padding: '0.4rem 0.8rem',
                                                    borderRadius: '6px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.4rem',
                                                    fontSize: '0.85rem'
                                                }}
                                            >
                                                <FiTrash2 /> Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminUsers;
