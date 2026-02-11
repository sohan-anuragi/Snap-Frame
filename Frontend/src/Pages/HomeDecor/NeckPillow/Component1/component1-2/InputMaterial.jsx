import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";

export default function InputMaterial({ selectedSize, setSelectedSize }) {
  // State to manage dropdown open/close
  const [isOpen, setIsOpen] = useState(false);

  const sizeOptions = ["Small", "Medium", "Large", "Extra Large"];

  return (
    <div className="w-full bg-gray-100 mt-[1rem] p-4">
      {/* Material Row */}
      <div className="flex  font-sans items-center mb-2 pb-4 ">
        <label className="text-[#8b8989] text-semibold  font-medium">
          Material:
        </label>
        <span className=" text-[0.9rem] ml-[1rem] text-[#8d8a8a] ">
          Polyester
        </span>
      </div>

      {/* Printing Technology Row */}
      <div className="flex  font-sans items-center mb-2 pb-4">
        <label className="text-[#8b8989] text-semibold  font-medium  font-medium">
          Printing Technology:
        </label>
        <span className="text-[#8d8a8a] text-[0.9rem] ml-[1rem] font-medium">
          Sublimation Printing
        </span>
      </div>

      {/* Choose Size Category Row with Dropdown */}
      <div className="flex  font-sans items-center mb-2 pb-4">
        <label className="text-[#8b8989] min-w-[12rem] text-semibold  font-medium">
          Choose Size Category:
        </label>

        <div className="relative w-full ml-[1rem]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 bg-white  text-gray-700 font-medium flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span>{selectedSize}</span>
            <MdExpandMore
              className={`text-xl text-gray-600 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1">
              {sizeOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedSize(option);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left font-medium transition-colors ${
                    selectedSize === option
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
