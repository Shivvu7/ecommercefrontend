import React from "react";
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
const CartItems = () => {
  const items = [
    { id: 1, name: "Product Name", price: 199, quantity: 1,image:img2},
    { id: 2, name: "Product Name", price: 199, quantity: 1,image:img3},
    { id: 3, name: "Product Name", price: 199, quantity: 1, image:img4},
  ];

  return (
    <div className="bg-gray-100 p-6">
       
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white p-4 shadow-sm rounded-md mb-4"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-md"><img src={item.image} alt={item.name}></img></div>
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">Lorem ipsum</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Rs. {item.price.toFixed(2)}</span>
            <div className="flex items-center border px-2 py-1 rounded-md">
              <button className="px-2 text-lg font-semibold">-</button>
              <input
                type="text"
                value={item.quantity}
                readOnly
                className="w-8 text-center border-none outline-none"
              />
              <button className="px-2 text-lg font-semibold">+</button>
            </div>
            <span className="font-medium">Rs. {(item.price * item.quantity).toFixed(2)}</span>
            <button className="text-red-500"><FontAwesomeIcon icon={faTrash}  /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
