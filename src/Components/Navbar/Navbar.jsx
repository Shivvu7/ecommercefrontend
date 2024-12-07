import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from 'lucide-react';
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const userId = sessionStorage.getItem('userId');
  const [name, setName] = useState('');
  const { logout } = useAuth();
  const { fetchUserName } = useAuth();

  useEffect(() => {
    const fetchName = async () => {
      if (userId) {
        try {
          const name = await fetchUserName(userId);
          setName(name);
        } catch (error) {
          console.error('Error fetching user name:', error);
        }
      }
    };
    fetchName();
  }, [userId]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      sessionStorage.removeItem('userId');
      setName('');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const getInitials = (fullName) => {
    const names = fullName.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return fullName[0].toUpperCase();
  };

  if (!userId) {
    return (
      <nav className="bg-white text-black border-b">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
          <div className="h-[60px] flex items-center justify-between text-sm font-normal">
            <Link to="/" className="text-2xl flex items-center">
              <span className="font-['Bodoni_MT'] font-bold text-xl">Mera Bestie</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="hover:text-gray-500">HOME</Link>
              <Link to="/shop" className="hover:text-gray-500">SHOP</Link>
              <Link to="/OccasionsPage" className="hover:text-gray-500">OCCASIONS</Link>
              <Link to="/about" className="hover:text-gray-500">ABOUT</Link>
              <Link to="/contact" className="hover:text-gray-500">CONTACT</Link>
            </div>

            <div className="flex items-center space-x-6">
              <Link to="/login" className="hover:text-gray-500">LOGIN</Link>
              <Link to="/signup" className="hover:text-gray-500">SIGNUP</Link>
              <button
                aria-label="Toggle Menu"
                onClick={toggleMenu}
                className="lg:hidden hover:text-gray-500"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden bg-white py-2 px-4 space-y-2">
              <Link to="/" className="block py-2 hover:text-gray-500">HOME</Link>
              <Link to="/shop" className="block py-2 hover:text-gray-500">SHOP</Link>
              <Link to="/occasions" className="block py-2 hover:text-gray-500">OCCASIONS</Link>
              <Link to="/about" className="block py-2 hover:text-gray-500">ABOUT</Link>
              <Link to="/contact" className="block py-2 hover:text-gray-500">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white text-black border-b">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* Top Navigation */}
        <div className="h-[60px] flex items-center justify-between text-sm font-normal">
          {/* Logo Section */}
          <Link to="/HomePage" className="text-2xl flex items-center">
            <span className="font-['Bodoni_MT'] font-bold text-xl">MERA Bestie</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/HomePage" className="hover:text-gray-500">
              HOME
            </Link>
            <Link to="/shop" className="hover:text-gray-500">
              SHOP
            </Link>
            <Link to="/OccasionsPage" className="hover:text-gray-500">
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
            <button 
              aria-label="Search" 
              className="hover:text-gray-500"
              onClick={toggleSearch}
            >
              <Search className="w-4 h-4 stroke-[2.5] hover:stroke-[3]" />
            </button>
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
                {userId && name ? (
                  <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-medium">
                    {getInitials(name)}
                  </div>
                ) : (
                  <FaUser className="w-4 h-4" />
                )}
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-[120px] bg-white border rounded shadow-lg z-20">
                  {userId && name ? (
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Login
                      </Link>
                      <Link
                        to="/Signup"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Signup
                      </Link>
                    </>
                  )}
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

        {isSearchOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-white p-4 shadow-lg z-50">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        )}

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