import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    return (
        <div className="bg-pink-100 flex items-center justify-between p-4">
            <input
                type="text"
                placeholder="Search here"
                className="border rounded-lg p-2 w-1/2"
            />
            <div className="flex items-center space-x-4">
                <button className="text-blue-500">
                    <i className="fas fa-comments"></i>
                </button>
                <button className="text-blue-500">
                    <i className="fas fa-camera"></i>
                </button>
                <button className="text-blue-500">
                    <i className="fas fa-trash"></i>
                </button>
                <button className="text-blue-500">
                    <i className="fas fa-bell"></i>
                </button>
                <span className="text-gray-700">Hello, Samantha</span>
                <img
                    src="path/to/profile-pic.jpg"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                />
            </div>
        </div>
    );
};

export default Navbar;
