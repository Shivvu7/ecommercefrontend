"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image objects with profession labels
  const images = [
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "Chef in professional kitchen",
      profession: "Culinary Arts",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "Doctor with microscope",
      profession: "Healthcare",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "Engineer at work",
      profession: "Engineering",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "IT professional",
      profession: "Information Technology",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "Business professional",
      profession: "Business Management",
    },
  ];

  useEffect(() => {
    // Set up the interval for automatic sliding
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-blue-600 overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-blue-200">Earn,</span>{" "}
          <span className="text-white">Learn,</span>{" "}
          <span className="text-gray-200">Grow</span>
        </h1>

        <p className="max-w-3xl text-lg md:text-xl mb-8">
          We create industry-ready talent through advanced learning, skilling,
          and certification, leveraging Univoc's expertise, in partnership with
          universities, corporates, and governments.
        </p>

        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition-colors duration-300">
          EXPLORE MORE
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentImageIndex === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
