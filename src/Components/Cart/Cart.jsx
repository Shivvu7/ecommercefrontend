import React from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import VoucherSection from "./VoucherSection";
import RecentlyViewed from "./RecentViewed";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingCartPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6">
      {/* Header Section */}
      <div className="text-left bg-pink-100 p-4 rounded-md">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Shopping Cart</h2>
        <h6 className="font-semibold text-sm md:text-base">
          <Link to={"/shop"} className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Continue Shopping</span>
          </Link>
        </h6>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-1 md:col-span-2">
          <CartItems />
        </div>

        {/* Voucher Section */}
        <div>
          <VoucherSection />
        </div>
      </div>

      {/* Recently Viewed Products */}
      <RecentlyViewed />
    </div>
  );
};

export default ShoppingCartPage;