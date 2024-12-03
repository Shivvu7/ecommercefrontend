import React, { useState } from "react";

const VoucherSection = () => {
  const [voucher, setVoucher] = useState("");

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h3 className="text-lg font-semibold mb-2">Do you have a voucher?</h3>
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter the code"
          value={voucher}
          onChange={(e) => setVoucher(e.target.value)}
          className="flex-grow border p-2 rounded-md outline-none"
        />
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Redeem
        </button>
      </div>
      <div className="text-gray-600 space-y-2">
        <p>Subtotal: Rs. 597.00</p>
        <p>Shipping: Rs. 0.00</p>
        <h4 className="text-lg font-semibold">Total: Rs. 597.00</h4>
      </div>
      <button className="bg-black text-white w-full py-2 rounded-md mt-4">
        Safe to Checkout
      </button>
    </div>
  );
};

export default VoucherSection;
