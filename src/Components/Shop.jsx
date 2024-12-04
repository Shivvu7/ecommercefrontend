import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Shop = () => {
  const [viewMode, setViewMode] = useState('grid'); // State for toggling between grid and list views

  const categories = [
    {
      name: 'Books',
      img: 'src/Components/Images/img1.jpg', // Replace with your image path
    },
    {
      name: 'Gift Boxes',
      img: 'src/Components/Images/img2.jpg', // Replace with your image path
    },
    {
      name: 'Stationery',
      img: 'src/Components/Images/img4.jpg', // Replace with your image path
    },
  ];

  const products = [
    {
      name: 'Customized Journal',
      price: '₹̶𝟺̶𝟶̶𝟶̶       ₹199',
      img: 'src/Components/Images/img1.jpg', // Replace with your image path
    },
    {
      name: 'Floral Greeting Card Set',
      price: '₹̶𝟺̶𝟶̶𝟶̶      ₹239',
      img: 'src/Components/Images/img2.jpg', // Replace with your image path
    },
    {
      name: 'Premium Leather Diary',
      price: '₹̶𝟺̶𝟶̶𝟶̶      ₹289',
      img: 'src/Components/Images/img3.jpg', // Replace with your image path
    },
    {
      name: 'Eco-Friendly Pen Pack',
      price: '₹̶𝟺̶𝟶̶𝟶̶      ₹324',
      img: 'src/Components/Images/img4.jpg', // Replace with your image path
    },
    {
      name: 'Designer Sticky Notes',
      price: '₹̶𝟺̶𝟶̶𝟶̶      ₹199',
      img: 'src/Components/Images/img2.jpg', // Replace with your image path
    },
    {
      name: 'Handcrafted Notebooks',
      price: '₹̶𝟺̶𝟶̶𝟶̶      ₹190',
      img: 'src/Components/Images/img1.jpg', // Replace with your image path
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-16 text-center"
        style={{
          backgroundImage: "url('src/assets/bg shop.png')", // Replace with your background image
        }}
      >
        <h2 className="text-5xl font-bold text-black">SHOP BY CATEGORY</h2>
        <p className="text-gray-800 mt-4 text-lg">
          Discover our exclusive collections tailored just for you.
        </p>
      </section>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto p-6">
        <h3 className="text-3xl font-bold mb-4">Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Heading Box */}
          <div className="p-6 bg-[#FFD7D7] rounded-lg shadow-lg">
            <p className="text-gray-500 text-sm">Lorem Ipsum</p>
            <h4 className="text-2xl font-bold text-black">Categories</h4>
            <p className="text-gray-700 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Category Boxes */}
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${category.img}')` }}
              ></div>
              <div className="p-4">
                <p className="text-gray-500 text-sm">Lorem Ipsum</p>
                <h4 className="text-xl font-bold text-black">{category.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Filter and Sort Section */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <span>Showing 1 - 15 of 22 results</span>
          <div className="flex gap-4 items-center">
            <button className="bg-gray-200 px-4 py-2 rounded">Filter</button>
            <div>
              <label htmlFor="sort" className="mr-2">Sort by</label>
              <select id="sort" className="border-gray-300 border px-2 py-1 rounded">
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 border rounded ${viewMode === 'grid' ? 'bg-gray-300' : ''}`}
              >
                ▤
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 border rounded ${viewMode === 'list' ? 'bg-gray-300' : ''}`}
              >
                ☰
              </button>
              <button className="p-2 border rounded">|||</button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto p-6">
        <h3 className="text-3xl font-bold mb-4">Products</h3>
        <div
          className={`grid ${
            viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' : ''
          }`}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url('${product.img}')` }}
              />
              <div className="p-4 text-center">
                <h4 className="font-bold text-lg">{product.name}</h4>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-black text-white px-6 py-2 rounded-md">
            Load More
          </button>
        </div>
      </div>

      {/* Banner */}
      <div
        className="relative flex items-center justify-between bg-gray-100 rounded-lg shadow-lg overflow-hidden mt-10 mx-auto max-w-7xl"
        style={{
          height: "250px",
        }}
      >
        <div className="p-6 bg-[#FFD7D7] h-full flex flex-col justify-center w-1/2">
          <h3 className="text-3xl font-bold text-black">Exclusive Festive Collection</h3>
          <p className="text-gray-700 mt-2">
            Discover exciting deals and offers for the festive season!
          </p>
        </div>
        <div
          className="w-1/2 h-full"
          style={{
            backgroundImage:
              "url('src/assets/Rectangle 1242.png')", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Footer */}
      <footer className="bg-[#FFD7D7] py-10 text-black mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-2xl font-bold">MERA Bestie</h4>
            <div className="flex space-x-6 text-2xl mt-4">
              <FaFacebook className="cursor-pointer hover:text-pink-500" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <FaTwitter className="cursor-pointer hover:text-pink-500" />
            </div>
          </div>
          <div className="text-center md:text-right">
            <p>
              Contact Information
              <br />
              3181 Street Name, City, India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
