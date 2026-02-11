import React, { useState } from "react";
import { FaAward, FaTruck, FaUsers, FaTag } from "react-icons/fa";

export default function TotalRate() {
  // ========== FIXED PRICES FOR INSERT TYPES ==========
  const INSERT_PILLOW_PRICE = 0; // Base price for "Insert Included (Pillow)"
  const COVER_ONLY_PRICE = 150; // Fixed price for "Cover Only"

  // ========== STATE MANAGEMENT ==========
  const [insertType, setInsertType] = useState("Insert Included (Pillow)");
  const [activeShape, setActiveShape] = useState("Square");
  const [selectedSize, setSelectedSize] = useState("12 x 12");
  const [selectedPrice, setSelectedPrice] = useState(225);

  // ========== PRICE DATA ==========
  const squareSizes = [
    { size: "12 x 12", price: 225 },
    { size: "16 x 16", price: 400 },
    { size: "18 x 18", price: 471 },
    { size: "14 x 14", price: 663 },
    { size: "24 x 24", price: 943 },
    { size: "20 x 20", price: 1321 },
    { size: "22 x 22", price: 1391 },
    { size: "26 x 26", price: 1669 },
  ];

  const rectangleSizes = [
    { size: "8 x 12", price: 300 },
    { size: "12 x 18", price: 500 },
    { size: "18 x 24", price: 750 },
    { size: "16 x 20", price: 600 },
    { size: "20 x 30", price: 900 },
    { size: "24 x 36", price: 1200 },
    { size: "18 x 12", price: 550 },
    { size: "24 x 12", price: 700 },
  ];

  // ========== HANDLER FUNCTIONS ==========
  const handleInsertTypeChange = (e) => {
    setInsertType(e.target.value);
  };

  const handleShapeChange = (shape) => {
    setActiveShape(shape);
    // Reset to first size when shape changes
    if (shape === "Square") {
      setSelectedSize(squareSizes[0].size);
      setSelectedPrice(squareSizes[0].price);
    } else {
      setSelectedSize(rectangleSizes[0].size);
      setSelectedPrice(rectangleSizes[0].price);
    }
  };

  const handleSizeChange = (size, price) => {
    setSelectedSize(size);
    setSelectedPrice(price);
  };

  // ========== GET CURRENT SIZES ==========
  const currentSizes = activeShape === "Square" ? squareSizes : rectangleSizes;

  // ========== CALCULATE TOTAL PRICE BASED ON INSERT TYPE ==========
  const calculateTotalPrice = () => {
    if (insertType === "Cover Only") {
      return COVER_ONLY_PRICE;
    } else {
      // "Insert Included (Pillow)" - add base price + selected size price
      return INSERT_PILLOW_PRICE + selectedPrice;
    }
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="w-full bg-white mt-[2rem]">
      {/* ========== INSERT TYPE SECTION ========== */}
      <div className="mb-6 items-center justify-between flex p-[1.5rem] bg-[#f4f4f4] rounded-md ">
        <label className="block text-sm min-w-[7rem] font-semibold text-[#3b2f2f] mb-2">
          Insert Type:
        </label>
        <select
          value={insertType}
          onChange={handleInsertTypeChange}
          className="w-full px-4 py-2 border border-gray-300 text-[#827e7e]  text-[0.9rem] bg-[white] cursor-pointer focus:outline-none"
        >
          <option className="bg-white text-black">
            Insert Included (Pillow)
          </option>
          <option className="bg-white text-black">Cover Only</option>
        </select>
      </div>

      {/* ========== SHAPE SELECTOR SECTION ========== */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#3b2f2f] mb-3">
          Select Shape:
        </label>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleShapeChange("Square")}
            className={`relative px-6 py-2 font-bold text-sm rounded transition-all ${
              activeShape === "Square"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 border border-gray-300"
            }`}
          >
            Square
            {/* 🔺 Selected indicator (joined, slanted) */}
            {activeShape === "Square" && (
              <span
                className="absolute left-1/2 -translate-x-1/2 top-full
                 w-0 h-0
                 border-l-[8px] border-l-transparent
                 border-r-[5px] border-r-transparent
                 border-t-[8px] border-t-black"
                style={{
                  transform: "translateX(-50%) skewX(-12deg)",
                }}
              />
            )}
          </button>

          <button
            onClick={() => handleShapeChange("Rectangle")}
            className={`relative px-6 py-2 font-bold text-sm rounded transition-all ${
              activeShape === "Rectangle"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 border border-gray-300"
            }`}
          >
            Rectangle
            {/* 🔺 Selected indicator (joined, slanted) */}
            {activeShape === "Rectangle" && (
              <span
                className="absolute left-1/2 -translate-x-1/2 top-full
                 w-0 h-0
                 border-l-[8px] border-l-transparent
                 border-r-[5px] border-r-transparent
                 border-t-[8px] border-t-black"
                style={{
                  transform: "translateX(-50%) skewX(-12deg)",
                }}
              />
            )}
          </button>
        </div>
      </div>

      {/* ========== SIZE SELECTION SECTION ========== */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-[#3b2f2f] mb-3">
          Select Size:
        </label>
        <div className="border border-gray-300 rounded p-4 bg-gray-50">
          <div className="space-y-3">
            {currentSizes.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <input
                  type="radio"
                  id={`size-${index}`}
                  name="size"
                  checked={selectedSize === item.size}
                  onChange={() => handleSizeChange(item.size, item.price)}
                  className="w-4 h-4  cursor-pointer accent-red-600"
                />
                <label
                  htmlFor={`size-${index}`}
                  className="flex-1 border-b-[1px] pb-[0.5rem] border-[#c6c6c6] flex justify-between items-center cursor-pointer"
                >
                  <span className="text-sm text-gray-700">
                    {item.size}" → ₹{item.price.toLocaleString("en-IN")}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== TOTAL PRICE SECTION ========== */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-red-600">
            ₹{totalPrice.toLocaleString("en-IN")}
          </div>
          <div className="text-xs text-gray-600">(inclusive of all taxes)</div>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded font-bold text-sm hover:bg-red-700 transition-all">
          START ORDER
        </button>
      </div>

      {/* ========== DOWNLOAD GUIDE LINK ========== */}
      <div className="mt-4 text-right">
        <a
          href="#"
          className="text-sm text-red-600 font-semibold hover:underline"
        >
          Download User Guide
        </a>
      </div>

      {/* ========== BENEFITS SECTION ========== */}
      <div className="mt-8 pt-6 ">
        <div className="grid grid-cols-2 gap-8">
          {/* Benefit 1: Best Craftsmanship */}
          <div className="flex items-center border-b pb-[2rem] border-gray-300 gap-3">
            <div className="flex-shrink-0">
              <FaAward className="text-3xl text-gray-700" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800">
                Best Craftsmanship
              </p>
            </div>
          </div>

          {/* Benefit 2: Super Fast Shipping */}
          <div className="flex items-center border-b pb-[2rem] border-gray-300 gap-3">
            <div className="flex-shrink-0">
              <FaTruck className="text-3xl text-gray-700" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800">
                Super Fast Shipping
              </p>
            </div>
          </div>

          {/* Benefit 3: 1 Million+ Prints Shipped */}
          <div className="flex items-center border-b pb-[2rem] border-gray-300 gap-3">
            <div className="flex-shrink-0">
              <FaUsers className="text-3xl text-gray-700" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800">
                1 Million+ Prints Shipped
              </p>
            </div>
          </div>

          {/* Benefit 4: Lowest Price Guaranteed */}
          <div className="flex items-center border-b pb-[2rem] border-gray-300 gap-3">
            <div className="flex-shrink-0">
              <FaTag className="text-3xl text-gray-700" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800">
                Lowest Price Guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
