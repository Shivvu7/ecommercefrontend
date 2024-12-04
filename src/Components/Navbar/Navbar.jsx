import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from 'lucide-react';
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

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
    <nav className="bg-white text-black border-b">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* Top Navigation */}
        <div className="h-[60px] flex items-center justify-between text-sm font-normal">
          {/* Search Icon */}
          <div className="flex items-center">
            <button aria-label="Search" className="hover:text-gray-500">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Logo Section */}
          <Link to="/HomePage" className="text-2xl flex items-center space-x-2">
            <span className="font-bold text-xl">MERA Bestie</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/HomePage" className="hover:text-gray-500">
              HOME
            </Link>
            <Link to="/shop" className="hover:text-gray-500">
              SHOP
            </Link>
            <Link to="/occasions" className="hover:text-gray-500">
              OCCASIONS
            </Link>
            <Link to="/about" className="hover:text-gray-500">
              ABOUT
            </Link>
            <Link to="/contact" className="hover:text-gray-500">
              CONTACT
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-6">
            <Link to="/cart" className="hover:text-gray-500"> 
            <button aria-label="Cart" className="hover:text-gray-500">
              <FaShoppingCart className="w-4 h-4" />
            </button></Link>
            <button aria-label="Wishlist" className="hover:text-gray-500">
              <FaHeart className="w-4 h-4" />
            </button>
            <div className="relative">
              <button
                aria-label="Profile"
                onClick={toggleProfileMenu}
                className="hover:text-gray-500 flex items-center"
              >
                <FaUser className="w-4 h-4" />
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-[120px] bg-white border rounded shadow-lg">
                  <Link
                    to="/login"
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
            <Link to="/" className="block py-2 hover:text-gray-500">
              HOME
            </Link>
            <Link to="/shop" className="block py-2 hover:text-gray-500">
              SHOP
            </Link>
            <Link to="/occasions" className="block py-2 hover:text-gray-500">
              OCCASIONS
            </Link>
            <Link to="/about" className="block py-2 hover:text-gray-500">
              ABOUT
            </Link>
            <Link to="/contact" className="block py-2 hover:text-gray-500">
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}