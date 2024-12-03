import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, GraduationCap, ChevronDown } from "lucide-react";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="max-w-[980px] mx-auto px-4 lg:px-0">
        {/* Top Navigation */}
        <div className="h-[44px] flex items-center justify-between text-xs font-normal">
          {/* Logo Section */}
          <Link to="/" className="text-2xl flex items-center space-x-2">
            <GraduationCap className="w-5 h-5" />
            <span className="font-bold text-xl">UNIVOC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className="hover:text-gray-500">
              ABOUT US
            </Link>
            <Link to="/courses" className="hover:text-gray-500">
              COURSES
            </Link>
            <Link to="/jobsection" className="hover:text-gray-500">
              HR SECTION
            </Link>
            <Link to="/Contact" className="hover:text-gray-500">
              CONTACT US
            </Link>
            <div className="relative group">
              <Link
                to="/HomePage"
                className="hover:text-gray-500 flex items-center"
              >
                HomePage <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-6">
            <button aria-label="Search" className="hover:text-gray-500">
              <Search className="w-4 h-4" />
            </button>
            <div className="relative">
              <button
                aria-label="Profile"
                onClick={toggleProfileMenu}
                className="hover:text-gray-500 flex items-center"
              >
                <FaUser className="w-5 h-5" />
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-[120px] bg-white border rounded shadow-lg">
                  <Link
                    to="/Login"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
            <button
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="lg:hidden hover:text-gray-500"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white py-2 px-4 space-y-2">
            <Link to="/about" className="block py-2 hover:text-gray-500">
              ABOUT US
            </Link>
            <Link to="/courses" className="block py-2 hover:text-gray-500">
              COURSES
            </Link>
            <Link to="/jobsection" className="block py-2 hover:text-gray-500">
              JOB SECTION
            </Link>
            <Link to="/studentlife" className="block py-2 hover:text-gray-500">
              STUDENT LIFE
            </Link>
            <Link to="/HomePage" className="block py-2 hover:text-gray-500">
              HomePage
            </Link>
          </div>
        )}

        {/* Promo Section */}
        <div className="mt-4 text-center bg-white-700">
          Navigate your future with confidence. Find your perfect course match
          today!{" "}
          <Link to="/explore" className="text-blue-600 hover:underline">
            Explore now &gt;
          </Link>
        </div>
      </div>
    </nav>
  );
}
