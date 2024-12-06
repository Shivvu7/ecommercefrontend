import React from 'react';
import Dashboard from './Components/dashboard/dasboard';
import Sidebar from './Components/sidebar/sidebar';
import Navbar from './Components/adminnavbar/navbar';

const AdminDashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="flex-1">
                    <Dashboard />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
