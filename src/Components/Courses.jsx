import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LearnMore from "./LearnMore";

const Courses = () => {
  const courses = [
    {
      id: "1",
      title: "B.Voc in Optometry",
      description: "Develop skills in eye care and vision science",
      fullDescription: `Learn the essential skills needed to become an optometrist. This comprehensive course covers everything from basic eye anatomy to advanced vision correction techniques.

      What you'll learn:
      - Eye anatomy and physiology
      - Vision testing procedures
      - Optical dispensing
      - Contact lens fitting
      - Ocular disease detection
      - Patient care and management`,
      duration: "3 years",
      students: 1500,
      level: "Undergraduate",
      price: 399,
      monthlyPrice: 33.25,
      image: "/placeholder1.svg?height=600&width=800",
      instructor: "Dr. Jane Smith",
      rating: 4.8,
      totalReviews: 245,
    },
    {
      id: "2",
      title: "B.Voc in Hotel Management",
      description: "Master the art of hospitality and hotel operations",
      fullDescription: `Dive deep into the world of hospitality management and learn to run successful hotel operations.

      What you'll learn:
      - Front office operations
      - Food and beverage management
      - Housekeeping operations
      - Hotel accounting
      - Customer service excellence
      - Event planning and management`,
      duration: "3 years",
      students: 1200,
      level: "Undergraduate",
      price: 499,
      monthlyPrice: 41.58,
      image: "/placeholder2.svg?height=600&width=800",
      instructor: "Prof. John Doe",
      rating: 4.9,
      totalReviews: 189,
    },
    {
      id: "3",
      title: "B.Voc in Production Technology",
      description: "Become an expert in modern manufacturing processes",
      fullDescription: `Master both theoretical and practical aspects of production technology and manufacturing processes.

      What you'll learn:
      - Manufacturing processes
      - Quality control techniques
      - Industrial automation
      - Supply chain management
      - Lean manufacturing principles
      - CAD/CAM technologies`,
      duration: "3 years",
      students: 980,
      level: "Undergraduate",
      price: 599,
      monthlyPrice: 49.92,
      image: "/placeholder3.svg?height=600&width=800",
      instructor: "Dr. Alice Johnson",
      rating: 4.7,
      totalReviews: 156,
    },
  ];

  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handlePrevSlide = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLearnMore = (course) => {
    setSelectedCourse(course);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  if (selectedCourse) {
    return <LearnMore course={selectedCourse} onBack={handleBackToCourses} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Skilling to Empower
            </span>
            <span className="text-gray-700">
              {" "}
              and Shaping Futures, Building Skills
            </span>
          </h1>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 ${
                index === currentCourseIndex
                  ? "ring-2 ring-blue-500 shadow-xl"
                  : "shadow-lg"
              }`}
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
              }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mb-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {course.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{course.duration}</span>
                </div>
                <div className="text-lg font-semibold">
                  Eligibility: 12th Pass/Equivalent
                </div>
                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => handleLearnMore(course)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            onClick={handlePrevSlide}
            aria-label="Previous course"
          >
            <FaChevronLeft />
          </button>
          <button
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            onClick={handleNextSlide}
            aria-label="Next course"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Personalization
            </span>
            <span className="text-gray-700">
              . Just for them, just from you.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Courses;

