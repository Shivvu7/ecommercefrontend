import React from "react";
import Footer from "../Footer";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect } from 'react';

// Function to keep server connection alive
const useKeepAlive = () => {
  useEffect(() => {
    const keepAliveInterval = setInterval(async () => {
      try {
        await fetch('https://ecommercebackend-8gx8.onrender.comkeep-alive');
      } catch (error) {
        console.error('Keep-alive request failed:', error);
      }
    }, 15000); // 15 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(keepAliveInterval);
  }, []);
};

const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute  inset-0 z-0">
          <div className="relative w-full h-full">
            <img
              src="https://cdn.wallpapersafari.com/89/8/lybQgH.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
           
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto max-w-4xl px-4">
          <div className="bg-pink-100/90 p-8 md:p-12 rounded-lg backdrop-blur-sm">
            <h1
              className="mb-6 text-4xl md:text-5xl font-serif text-center"
              style={{ fontFamily:"-moz-initial" }}
            >
              Revolutionizing Gift Giving
            </h1>
            <p className="mb-8 text-gray-700 text-center max-w-2xl mx-auto" style={{ fontFamily: "Poppins, Arial, sans-serif" }}>
            A world of unique gifts for every moment and milestone
            </p>
            <div className="text-center">
              <button className="bg-white text-black hover:bg-gray-50 px-8 py-2 rounded uppercase text-sm tracking-wider">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Products</h2>
            <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64">
                <img
                  src="https://i.pinimg.com/originals/96/24/6e/96246e3c133e6cb5ae4c7843f9e45b22.jpg"
                  alt="Stationery Items"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-pink-100">
                <h3 className="text-xl font-semibold mb-2">Stationary Items</h3>
                <p className="text-gray-600 text-sm">
                  Ante mus blandit sapien sociosqu per consequat ad.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64">
                <img
                  src="https://up.yimg.com/ib/th?id=OIP.g4rG30id9Ui1e-2ZBR_1twHaFq&pid=Api&rs=1&c=1&qlt=95&w=149&h=114"
                  alt="Couple Gift Items"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-pink-100">
                <h3 className="text-xl font-semibold mb-2">
                  Couple Gift Items
                </h3>
                <p className="text-gray-600 text-sm">
                  Ante mus blandit sapien sociosqu per consequat ad.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64">
                <img
                  src={img2}
                  alt="Greeting Cards"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-pink-100">
                <h3 className="text-xl font-semibold mb-2">Greeting Cards</h3>
                <p className="text-gray-600 text-sm">
                  Ante mus blandit sapien sociosqu per consequat ad.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.EYAqW5p_HzCoXKq1dXvGyQHaFj&pid=Api&P=0&h=180"
                  alt="Gift Items"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-pink-100">
                <h3 className="text-xl font-semibold mb-2">Gift Items</h3>
                <p className="text-gray-600 text-sm">
                  Ante mus blandit sapien sociosqu per consequat ad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.RNJBshhRJcxPoSt2Slj5bAHaEK&pid=Api&P=0&h=180"
            alt="Vision background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-xl">
            <div className="bg-pink-100/90 p-8 md:p-12 rounded-lg backdrop-blur-sm">
              <h2 className="text-4xl font-bold mb-6">Vision</h2>
              <p className="text-gray-700 mb-8">
                Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
                aptent dapibus metus maecenas consequat. Elementum interdum a
                semper. Netus nullam eros nisi volutpat nibh ex ultricies.
                Pharetra sagittis sit aliquet at. Magna nam platea justo.
              </p>
              <button className="bg-black text-white hover:bg-gray-900 px-6 py-2 rounded uppercase text-sm font-medium tracking-wider">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Design Section */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Creative Designs
                  <br />
                  for Every Occasion
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl">
                  Penatibus sem vitae mollis luctus mi tellus. Maximus eu
                  eleifend aptent dapibus metus maecenas consequat. Elementum
                  interdum a semper. Netus nullam eros nisi volutpat nibh ex
                  ultricies. Pharetra sagittis sit aliquet at. Magna nam platea
                  justo.
                </p>
                <button className="bg-black text-white hover:bg-gray-900 px-8 py-2 rounded uppercase text-sm font-medium tracking-wider">
                  Read More
                </button>
              </div>
              {/* 
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={img1}
                    alt="Minimalist bedroom design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={img2}
                    alt="Pink stationery items"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden col-span-2">
                  <img
                    src= {img3}
                    alt="Christmas decorations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>*/}
            </div>  

            {/* Right Content - Large Image with Video Button */}
            <div className="relative">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.5jNS8o1X89ckN414RYqZggHaEK&pid=Api&P=0&h=180"
                alt="Modern living room"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg">
                <div className="bg-black rounded-full p-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </div>
                <div className="text-sm">
                  <div className="text-gray-500">Watch</div>
                  <div className="font-medium">Video-tour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Creations Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Creations</h2>
            <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Product Categories */}
            <div className="text-center">
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src= "https://res.cloudinary.com/dugcmkito/image/upload/v1671648147/03_What_is_an_e_commerce_shopping_cart_a81bc3023b.png"
                  alt="Personalized Gifts"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Product Categories</h3>
              <p className="text-gray-600">Personalized Gifts</p>
            </div>

            {/* Customer Stories */}
            <div className="text-center">
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src= "https://www.ringcentral.com/us/en/blog/wp-content/uploads/2021/03/Untitled-design-1-1.png"
                  alt="John's Wedding Gift Set"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Stories</h3>
              <p className="text-gray-600">John's Wedding Gift Set</p>
            </div>

            {/* Best-Selling Items */}
            <div className="text-center">
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src= {img3}
                  alt="Premium Leather Journal"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Best-Selling Items</h3>
              <p className="text-gray-600">Premium Leather Journal</p>
            </div>
          </div>

          <div className="text-center">
            <Link to={"/shop"}
            > 
            <button className="bg-black text-white hover:bg-gray-900 px-12 py-3 rounded text-lg font-bold uppercase tracking-wider">
              Shop Now!!
            </button></Link>
          </div>
        </div>
      </section>

      {/* Events & Pop-Ups Section */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="relative">
            {/* Background Image Container */}
            <div className="rounded-lg overflow-hidden">
              <img
                src=  "https://wallpapercave.com/wp/wp7488376.jpg"
                alt="Guitarist performing"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute top-1/2 right-8 -translate-y-1/2 bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-lg">
              <h2 className="text-4xl font-bold mb-6">Events & Pop-Ups</h2>
              <p className="text-gray-600 mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <button className="bg-black text-white hover:bg-gray-900 px-8 py-2 rounded uppercase text-sm font-medium tracking-wider">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
