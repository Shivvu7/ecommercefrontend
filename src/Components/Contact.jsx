import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 transition-all duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 text-transparent bg-clip-text">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Reach out to us for any queries or
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 px-6 rounded-xl font-medium hover:from-pink-600 hover:to-pink-800 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div
            className="bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-pink-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 234 567 8901</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-pink-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-pink-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">1234 Example St, City, Country</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9f1b1a1b1!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 transition-all duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 text-transparent bg-clip-text">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-2">
            We're here to answer any questions you may have about our programs
            and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;