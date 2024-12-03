import React from "react";
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItems = () => {
  const items = [
    { id: 1, name: "Product Name", price: 199, quantity: 1, image: img2 },
    { id: 2, name: "Product Name", price: 199, quantity: 1, image: img3 },
    { id: 3, name: "Product Name", price: 199, quantity: 1, image: img4 },
  ];

  return (
    <div className="bg-pink-100 p-4 md:p-6 space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow-sm rounded-md space-y-4 md:space-y-0"
        >
          {/* Product Info Section */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-md flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm md:text-base">
                {item.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-500">Lorem ipsum</p>
            </div>
          </div>

          {/* Price and Quantity Section */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <span className="font-medium text-sm md:text-base">
              Rs. {item.price.toFixed(2)}
            </span>
            <div className="flex items-center border px-2 py-1 rounded-md">
              <button className="px-2 text-sm md:text-lg font-semibold">-</button>
              <input
                type="text"
                value={item.quantity}
                readOnly
                className="w-8 text-center text-xs md:text-sm border-none outline-none"
              />
              <button className="px-2 text-sm md:text-lg font-semibold">+</button>
            </div>
            <span className="font-medium text-sm md:text-base">
              Rs. {(item.price * item.quantity).toFixed(2)}
            </span>
            <button className="text-red-500">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
