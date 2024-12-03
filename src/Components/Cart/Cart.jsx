import React from "react";
import CartItems from "./CartItems";
import VoucherSection from "./VoucherSection";
import RecentlyViewed from "./RecentViewed";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 

const ShoppingCartPage = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-left bg-gray-400"><h2 className="text-xl font-semibold mb-4   px-10 pt-4  ">Shopping Cart</h2>
      <h6 className="font-semibold mb-4   px-4 pb-4  "><FontAwesomeIcon icon={faArrowLeft} className="pl-3 pr-1" />Continue Shopping</h6>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <CartItems />
        </div>
        <div>
          <VoucherSection />
        </div>
      </div>
      <RecentlyViewed />
    </div>
  );
};

export default ShoppingCartPage;
