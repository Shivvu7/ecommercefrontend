import React from "react";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';


const RecentlyViewed = () => {
  const products = [
    { id: 1, name: "Customized Journal", price: 199 ,image:img1},
    { id: 2, name: "Floral Greeting Card Set", price: 289,image:img2 },
    { id: 3, name: "Premium Leather Diary", price: 289,image:img3 },
    { id: 4, name: "Eco-Friendly Pen Pack", price: 289,image:img4 },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <h3 className="text-xl font-semibold mb-4">Recently Viewed Products</h3>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow-sm rounded-md flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-gray-300 rounded-md mb-2"><img 
      src={product.image} 
      alt={product.name} 
      className="w-full h-full object-cover rounded-md" 
    /></div>
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-gray-500">Rs. {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
