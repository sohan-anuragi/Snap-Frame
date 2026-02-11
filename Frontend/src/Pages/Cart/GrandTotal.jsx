import { FiChevronDown } from "react-icons/fi";
import { useState, useContext } from "react";
import CartGiftBox from "./CartGiftBox";
import { cartContext } from "./CartStore";

export default function GrandTotal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const { cartData } = useContext(cartContext);

  const GIFT_WRAP_FEE = 299;
  const SHIPPING_COST = 50;
  const REWARD_MULTIPLIER = 72;

  const subtotal = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const grandTotal = subtotal + GIFT_WRAP_FEE + SHIPPING_COST;

  return (
    <>
      <div className="border-[#736f6f40] border-[1px] m-[1rem]  ">
        {/* DISCOUNT CODES SECTION */}
        <div>
          <div>
            <h3 className="text-gray-700 text-sm font-medium  p-[1rem] border-[#6f6c6c40] border-b-[1px] bg-gray-100">
              Apply Discount Codes
            </h3>
            <div className="bg-[#ffffff] p-[1rem]">
              <p className="text-gray-600 text-sm mb-4 ">
                Enter your coupon code (only one promotion can applicable at a
                time)
                <span className="text-red-500 ml-1">Need a code?</span>
              </p>

              <div className="flex gap-3 mb-4 ">
                <input
                  type="text"
                  placeholder="Enter your Coupon Code"
                  className="flex-1 px-4 py-2 border border-gray-300 text-sm focus:outline-none"
                />
                <button className="bg-black text-white px-6 py-2 text-sm font-medium">
                  REDEEM
                </button>
              </div>

              <p className="text-gray-600 text-xs ">
                Note: Offers will work on base price only & not applicable on
                special size 8"x8" of Canvas Prints.
              </p>
            </div>
          </div>
        </div>

        {/* GIFT BOUCHER SECTION */}
        <div>
          {/* Dropdown Header */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between p-[1rem] border-[#6f6c6c40] border-[1px] border-b-[1px] bg-gray-100 cursor-pointer"
          >
            <h3 className="text-gray-700 text-sm font-medium">
              Apply Gift Voucher
            </h3>
            {/* Arrow Icon */}
            <FiChevronDown
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>

          {/* Dropdown Content */}
          {isOpen && (
            <div className="bg-[#ffffff] p-[1rem]">
              <p className="text-gray-600 text-sm mb-4">
                Enter your gift voucher code (multiple promotion can be applied)
              </p>
              <div className="flex gap-3 mb-4">
                <input
                  type="text"
                  placeholder="Enter your gift voucher"
                  className="flex-1 px-4 py-2 border border-gray-300 text-sm focus:outline-none"
                />
                <button className="bg-black text-white px-6 py-2 text-sm font-medium">
                  REDEEM
                </button>
              </div>
            </div>
          )}
        </div>

        {/* GIFT SECTION */}
        <div>
          {/* Dropdown Header */}
          <div
            onClick={() => setIsOpen2(!isOpen2)}
            className="flex items-center justify-between p-[1rem] border-[#6f6c6c40] border-[1px] border-b-[1px] bg-gray-100 cursor-pointer"
          >
            <h3 className="text-gray-700 text-sm font-medium">
              Do you have any gift items in your order?
            </h3>
            {/* Arrow Icon */}
            <FiChevronDown
              className={`transition-transform ${isOpen2 ? "rotate-180" : ""}`}
            />
          </div>
          {/* Dropdown Content */}
          {isOpen2 && (
            <div className="bg-[#ffffff] p-[1rem]">
              <p className="text-gray-600 text-sm mb-4">
                Add Gift Wrap and Gift Card along with personalized Message
                ₹299.00
              </p>
              {/* GIFTS TYPE DROPBOX */}
              <div className="my-[1rem]">
                <CartGiftBox></CartGiftBox>
              </div>
            </div>
          )}
        </div>

        {/* MAIN GRAND TOTAL SECTION */}
        <div className="bg-gray-50 border-[#6f6c6c40] border-t-[1px]">
          {/* Shipping Cost Header */}
          <h3 className="text-gray-700 text-sm font-medium p-[1rem] border-[#6f6c6c40] border-b-[1px] bg-gray-100">
            Shipping Cost
          </h3>

          {/* Shipping Option */}
          <div className="bg-white p-[1rem]">
            <label className="flex items-center gap-[0.75rem] cursor-pointer mb-[0.5rem]">
              <span className="w-[1.25rem] h-[1.25rem] rounded-full border border-[#b00000] flex items-center justify-center">
                <span className="w-[0.75rem] h-[0.75rem] rounded-full bg-[#d20000]" />
              </span>
              <div>
                <p className="text-gray-700 text-sm font-medium">
                  Standard - ₹{SHIPPING_COST.toFixed(2)}
                </p>
                <p className="text-gray-500 text-xs">
                  (Est Delivery: Thu, 12th Feb 2026)
                </p>
              </div>
            </label>
          </div>

          {/* Cost Summary */}
          <div className="bg-white p-[1rem] border-t-[1px] border-[#6f6c6c40]">
            <div className="flex justify-between items-center mb-[0.75rem]">
              <span className="text-gray-600 text-sm">Subtotal</span>
              <span className="text-gray-700 text-sm font-medium">
                ₹{subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-[0.75rem]">
              <span className="text-gray-600 text-sm">Gift Wrap & Fee</span>
              <span className="text-gray-700 text-sm font-medium">
                ₹{GIFT_WRAP_FEE.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-[0.75rem]">
              <span className="text-gray-600 text-sm flex items-center gap-[0.5rem]">
                Shipping & Handling
                <span className="w-[1.2rem] h-[1.2rem] bg-[#c30000] text-white text-[0.65rem] font-bold rounded-full flex items-center justify-center">
                  i
                </span>
              </span>
              <span className="text-gray-700 text-sm font-medium">
                ₹{SHIPPING_COST.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-[1rem] text-[#bf0000]">
              <a href="/login" className="text-sm">
                Login to earn:
              </a>
              <span className="text-sm font-medium">
                {REWARD_MULTIPLIER} pt.
              </span>
            </div>

            {/* Grand Total */}
            <div className="flex justify-between items-center py-[0.75rem] border-t-[1px] border-[#6f6c6c40] mb-[1rem]">
              <span className="text-gray-700 text-sm font-medium">
                Grand Total:
              </span>
              <span className="text-gray-900 text-base font-bold">
                ₹{grandTotal.toFixed(2)}
              </span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-[#b00000f3] hover:bg-red-600 text-white text-sm font-bold rounded-sm py-[0.75rem] mb-[0.75rem]">
              PROCEED TO CHECKOUT
            </button>

            {/* Reward Info */}
            <p className="text-gray-600 text-xs text-center">
              Get 1 reward point per Rs. 2 purchase{" "}
              <span className="underline cursor-pointer">T&C</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
