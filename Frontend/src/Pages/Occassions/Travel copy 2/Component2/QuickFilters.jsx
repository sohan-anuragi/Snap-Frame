import { useContext, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { productsContext } from "./ProductStore";

export default function QuickFilters() {
  // isOpen -> dropdown khula hai ya band hai ye track karne ke liye
  const { handleQuickSorting } = useContext(productsContext);

  const [isOpen, setIsOpen] = useState(false);
  const [toPrice, setToPrice] = useState("10000");

  // fromPrice -> starting price store karne ke liye
  const [fromPrice, setFromPrice] = useState("0");
  const handlefromPrice = (value) => {
    setFromPrice(value);
    handleQuickSorting(value, toPrice);
    console.log(value);
    console.log(toPrice);
  };

  const handletoPrice = (value) => {
    setToPrice(value);
    handleQuickSorting(fromPrice, value);
    console.log(fromPrice);
    console.log(value);
  };

  // Reset button pe click karne se sabkuch default pe aa jayega
  const handleReset = () => {
    setFromPrice("0");
    setToPrice("10000");
    handleQuickSorting("0", "10000");
    setIsOpen(false); // dropdown bhi band ho jayega
  };

  return (
    <div className="bg-[#f4f4f4] pt-[2rem] px-[1rem]">
      <div className="flex flex-wrap bg-[white] p-[2rem] items-center  gap-4 ">
        {/* Left side - Quick Filters heading */}
        <h2 className="text-[1.8rem]  font-serif text-gray-900">
          Quick Filters
        </h2>

        {/* Right side - Price aur Reset button */}
        <div className="flex items-center ml-[3rem] gap-3">
          {/* Price dropdown button */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)} // Click karne se dropdown khulega ya band hoga
              className="p-[0.8rem] px-[1.5rem] border border-gray-300  bg-white text-gray-700 hover:border-gray-400 transition flex items-center gap-2"
            >
              <span className="text-[1rem] font-medium">Price</span>
              {/* Arrow icon - dropdown khulne pe rotate hoga */}
              <IoChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown box - sirf tab dikhega jab isOpen true hoga */}
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-300 rounded shadow-lg z-20 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Price Range
                </h3>

                <div className="flex items-center gap-3">
                  {/* From input - starting price */}
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 mb-1">
                      From:
                    </label>
                    <input
                      type="text"
                      value={fromPrice}
                      onChange={(e) => handlefromPrice(e.target.value)} // Typing karne se value change hogi
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0"
                    />
                  </div>

                  {/* To input - ending price */}
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 mb-1">
                      To:
                    </label>
                    <input
                      type="text"
                      value={toPrice}
                      onChange={(e) => handletoPrice(e.target.value)} // Typing karne se value change hogi
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="10000"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Reset button - sabkuch default value pe aa jayega */}
          <button
            onClick={handleReset}
            className="p-[0.8rem] px-[3rem] bg-red-500 text-white text-[1rem]  font-medium rounded-full hover:bg-red-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
