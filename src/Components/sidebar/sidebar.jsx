import React from 'react';

const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen bg-pink-50 w-64 shadow-lg">
            <div className="p-4 text-2xl font-bold text-center text-gray-800">
                MERA Bestie
            </div>
            <div className="flex-grow">
                <ul className="space-y-2">
                    <li className="p-2 text-gray-700 hover:bg-pink-200 rounded">
                        <span className="material-icons">dashboard</span> Dashboard
                    </li>
                    <li className="p-2 text-gray-700 hover:bg-pink-200 rounded">
                        <span className="material-icons">list</span> Order List
                    </li>
                    <li className="p-2 text-gray-700 hover:bg-pink-200 rounded">
                        <span className="material-icons">description</span> Order Detail
                    </li>
                    <li className="p-2 text-gray-700 hover:bg-pink-200 rounded">
                        <span className="material-icons">person</span> Customer
                    </li>
                    <li className="p-2 text-gray-700 hover:bg-pink-200 rounded">
                        <span className="material-icons">bar_chart</span> Analytics
                    </li>
                    <li className="p-2 text-gray-700 hover:bg-pink-200 rounded">
                        <span className="material-icons">rate_review</span> Reviews
                    </li>
                    <li className="p-2 text-gray-700 hover:bg-pink-200 rounded">
                        <span className="material-icons">person_outline</span> Customer Detail
                    </li>
                    <li className="p-2 text-gray-700 hover:bg-pink-200 rounded">
                        <span className="material-icons">calendar_today</span> Calendar
                    </li>
                    <li className="p-2 text-gray-700 hover:bg-pink-200 rounded">
                        <span className="material-icons">chat</span> Chat
                    </li>
                    <li className="p-2 text-gray-700 hover:bg-pink-200 rounded">
                        <span className="material-icons">account_balance_wallet</span> Wallet
                    </li>
                </ul>
            </div>
            <div className="p-4">
                <p className="text-center text-gray-600 mb-2">
                    Please, manage your products through the button below.
                </p>
                <button className="w-full bg-pink-300 text-white py-2 rounded hover:bg-pink-400">
                    + Add Product
                </button>
            </div>
            <footer className="text-center text-gray-500 text-sm p-4">
                Mera Bestie Admin Dashboard © 2023
            </footer>
        </div>
    );
};

export default Sidebar;
