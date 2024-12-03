import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../Components/Images/3dc47f30-3ee7-11ef-ad24-fdf8ff2fca7f.jpg";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              About UNIVOC
            </span>
            <span className="text-gray-700">: Empowering Through Education</span>
          </h1>
        </div>

        {/* About Sections */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* About UNIVOC Section */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About UNIVOC</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              UNIVOC is dedicated to setting global standards in vocational education and integrating industry needs. As a fast-growing provider of skilling and manpower solutions in India, we focus on equipping individuals with the skills necessary for today's job market.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of outsourcing industry experts ensures our programs are both <span className="text-red-500 font-semibold">practical and aligned with real-world demands.</span>
            </p>
          </div>

          {/* Why Us Section */}
          <div
            data-aos="fade-left"
            className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Us?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our client-centric approach sets us apart. We take the time to deeply understand each client's unique challenges and needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Feel the difference with personalized solutions and dedicated service at <span className="text-red-500 font-semibold">Hanover</span> and <span className="text-red-500 font-semibold">Tyke.</span>
            </p>
          </div>

          {/* Objective Section */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg lg:col-span-2"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Objective</h2>
            <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
              <li>To facilitate and create a pool of qualified job-ready resources.</li>
              <li>To provide flexibility to students by means of pre-defined single/multiple entry and multiple exit points.</li>
              <li>To ensure adequate knowledge and skills for making students work-ready at each exit point of the program.</li>
              <li>To address the issues of unemployment and Industry requirements in the state through a meaningful industry-academia partnership by adopting Dual System of training.</li>
              <li>To integrate NSQF and international specifications within the undergraduate level of higher education in order to enhance employability of the graduates in meeting global workforce requirements.</li>
            </ul>
          </div>

          {/* Vision Section */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              Expand access to work-integrated education on a broad scale, developing job-ready programs that create meaningful career opportunities for individuals across diverse social and geographic backgrounds.
            </p>
          </div>

          {/* Mission Section */}
          <div
            data-aos="fade-left"
            className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Commit to empowering youth through skill-integrated education that enhances employability and nurtures entrepreneurship.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-16 text-center">
          <img
            src={image}
            alt="UNIVOC"
            className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
          />
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Shaping Futures
            </span>
            <span className="text-gray-700">, Building Skills</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;