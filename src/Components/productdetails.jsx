import React from 'react';

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src="path/to/your/image.jpg"
              alt="Customized Journal"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-2">Customized Journal</h1>
            <p className="text-xl text-pink-600 mb-4">499 Rs</p>
            <p className="text-gray-700 mb-4">
              Product Short Description goes here. It should be a brief overview of the product features and benefits.
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mb-4">
              <button className="bg-gray-200 px-4 py-2 rounded-l">-</button>
              <input
                type="text"
                value="1"
                className="border-t border-b border-gray-300 text-center w-12"
                readOnly
              />
              <button className="bg-gray-200 px-4 py-2 rounded-r">+</button>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition">
              Add to Cart
            </button>

            {/* Description */}
            <h2 className="text-lg font-semibold mt-6">Description</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Reviews Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Reviews (0)</h2>
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Write a Review
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Example Related Product */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="path/to/related-product.jpg"
                alt="Related Product"
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h3 className="font-semibold">Designer Sticky Notes</h3>
              <p className="text-gray-600">299 Rs</p>
            </div>
            {/* Add more related products as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
 