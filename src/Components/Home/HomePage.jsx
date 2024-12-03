import React from 'react';
import { FaGift, FaCamera, FaSearch, FaHeart, FaPlay } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-pink-50 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Revolutionizing Gift Giving
          </h1>
          <p className="mb-8 text-gray-600">
            Porttitor sem vitae mollis lectus ut tellus. Maximus eu eleifend tellus egestas mollis malesuada consequat. Elementum interdum a tempus vitae ipsum ut. Sed tempus nulla eu purus. Pretium sagittis et integer at. Magna non potest justo.
          </p>
          <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded">
            Learn More
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Products</h2>
          <p className="mb-12 text-center text-gray-600">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy text.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square bg-pink-100 p-6 flex items-center justify-center">
                <FaSearch className="h-12 w-12 text-gray-600" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Stationery Items</h3>
                <p className="text-sm text-gray-600">
                  Ante nunc blandit sapien quis diam ut consequat vel
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square bg-red-500 p-6 flex items-center justify-center">
                <FaHeart className="h-12 w-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Couple Gift Items</h3>
                <p className="text-sm text-gray-600">
                  Ante nunc blandit sapien quis diam ut consequat vel
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square bg-green-100 p-6 flex items-center justify-center">
                <FaGift className="h-12 w-12 text-gray-600" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Greeting Cards</h3>
                <p className="text-sm text-gray-600">
                  Ante nunc blandit sapien quis diam ut consequat vel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-r from-purple-400 to-pink-400 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="text-white">
              <h2 className="mb-6 text-3xl font-bold">Vision</h2>
              <p className="mb-8">
                Porttitor sem vitae mollis lectus ut tellus. Maximus eu eleifend tellus egestas mollis malesuada consequat. Elementum interdum a tempus vitae ipsum ut. Sed tempus nulla eu purus. Pretium sagittis et integer at. Magna non potest justo.
              </p>
              <button className="bg-white text-black hover:bg-gray-100 px-4 py-2 rounded">
                Learn More
              </button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-white/10 shadow-xl flex items-center justify-center">
                <FaCamera className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Designs Section */}
      <section className="bg-pink-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-4">Creative Designs</h2>
              <h3 className="text-2xl font-semibold mb-4">for Every Occasion</h3>
              <p className="text-gray-600 mb-8">
                Porttitor sem vitae mollis lectus ut tellus. Maximus eu eleifend tellus egestas mollis malesuada consequat.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder.svg" alt="Interior design" className="rounded-lg w-full h-48 object-cover" />
              <img src="/placeholder.svg" alt="Stationery" className="rounded-lg w-full h-48 object-cover" />
              <img src="/placeholder.svg" alt="Flowers" className="rounded-lg w-full h-48 object-cover" />
              <img src="/placeholder.svg" alt="Home decor" className="rounded-lg w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Creations Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Creations</h2>
          <p className="text-gray-600 mb-12">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy text.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <img src="/placeholder.svg" alt="Product Categories" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold">Product Categories</h3>
              <p className="text-sm text-gray-600">Shop products by category</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg" alt="Customer Stories" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold">Customer Stories</h3>
              <p className="text-sm text-gray-600">Read what our customers say</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg" alt="Best-Selling Items" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold">Best-Selling Items</h3>
              <p className="text-sm text-gray-600">Our most popular products</p>
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800">
            SHOP NOW!
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-pink-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Events and Pop-ups" 
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Events & Pop-Ups</h2>
              <p className="text-gray-600 mb-6">
                Join us at our upcoming events and pop-up shops! Get a chance to see our products in person and meet our creative team.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;