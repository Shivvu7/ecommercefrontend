import React, { useState } from "react";

const VoucherSection = () => {
  const [voucher, setVoucher] = useState("");

  return (
    <div className="bg-pink-100 p-4 md:p-6 shadow-md rounded-md">
      <h3 className="text-base md:text-lg font-semibold mb-2">
        Do you have a voucher?
      </h3>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter the code"
          value={voucher}
          onChange={(e) => setVoucher(e.target.value)}
          className="flex-grow border p-2 rounded-md outline-none text-sm md:text-base"
        />
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm md:text-base">
          Redeem
        </button>
      </div>
      <div className="text-gray-600 space-y-2 text-sm md:text-base">
        <p>Subtotal: Rs. 597.00</p>
        <p>Shipping: Rs. 0.00</p>
        <h4 className="text-base md:text-lg font-semibold">Total: Rs. 597.00</h4>
      </div>
      <button className="bg-black text-white w-full py-2 rounded-md mt-4 text-sm md:text-base">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default VoucherSection;
