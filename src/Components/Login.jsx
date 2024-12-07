import React, { useState } from "react";
import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(emailOrMobile, password);
      if (response === 'Login successful') {
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="w-full max-w-md bg-[#FFD7D7] shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg text-gray-700">Email or Mobile Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-2 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300 text-lg"
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300">
            <FaFacebook />
          </button>
          <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300">
            <FaGoogle />
          </button>
          <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition duration-300">
            <FaTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;