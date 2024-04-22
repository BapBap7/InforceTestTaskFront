import React from 'react';
import { logout } from '../api/auth';

function Dashboard() {
    const handleLogout = () => {
        logout();
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
