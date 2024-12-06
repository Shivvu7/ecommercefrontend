import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-6 bg-pink-100">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="mb-6">Mr. Samuels, Welcome back to Meta Bestie Admin!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg">Total Orders</h2>
                    <p className="text-2xl">75</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg">Total Delivered</h2>
                    <p className="text-2xl">357</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg">Total Downloaded</h2>
                    <p className="text-2xl">65</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg">Total Revenue</h2>
                    <p className="text-2xl">12800 K</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg">Pie Chart</h2>
                    {/* Pie chart component goes here */}
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg">Chart Order</h2>
                    {/* Chart order component goes here */}
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Save Report</button>
                </div>
            </div>

            <div className="bg-white p-4 rounded shadow mb-6">
                <h2 className="text-lg">Total Revenue</h2>
                {/* Total revenue chart goes here */}
            </div>

            <div className="bg-white p-4 rounded shadow mb-6">
                <h2 className="text-lg">Customer Map</h2>
                {/* Customer map component goes here */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg">Customer Review</h2>
                    {/* Customer review components go here */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
