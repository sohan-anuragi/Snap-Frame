import React, { useState } from "react";

export default function SizeTotal() {
  // Size with price data - har size ka apna price hai
  const sizeData = [
    { id: 1, size: '8" x 8"', basePrice: 143.0, originalPrice: 317.7 },
    { id: 2, size: '11" x 14"', basePrice: 220.0, originalPrice: 488.89 },
    { id: 3, size: '12" x 12"', basePrice: 189.0, originalPrice: 420.0 },
    { id: 4, size: '16" x 16"', basePrice: 320.0, originalPrice: 711.11 },
    { id: 5, size: '18" x 24"', basePrice: 480.0, originalPrice: 1066.67 },
    { id: 6, size: '16" x 20"', basePrice: 400.0, originalPrice: 888.89 },
    { id: 7, size: '24" x 36"', basePrice: 700.0, originalPrice: 1555.56 },
    { id: 8, size: '30" x 40"', basePrice: 950.0, originalPrice: 2111.11 },
  ];

  // Selected size state - jab user click kare to update ho
  const [selectedSize, setSelectedSize] = useState(sizeData[0].id);

  // Custom dimensions state
  const [customWidth, setCustomWidth] = useState("8");
  const [customHeight, setCustomHeight] = useState("8");

  // Currently selected size ka price data nikalo
  const getSelectedSizeData = () => {
    return sizeData.find((item) => item.id === selectedSize) || sizeData[0];
  };

  const currentSizeData = getSelectedSizeData();
  const basePrice = currentSizeData.basePrice;
  const originalPrice = currentSizeData.originalPrice;

  // Discount percentage calculate karo
  const discountPercent = Math.round(
    ((originalPrice - basePrice) / originalPrice) * 100,
  );

  return (
    <div className="w-full flex flex-col gap-[1.5rem]">
      {/* CANVAS SIZES SECTION */}
      <div className="w-full flex flex-col gap-[1rem]">
        <div className="flex gap- ">
          {/* Label */}
          <div>
            <div className="text-[0.9375rem] w-[7rem] flex no-wrap font-semibold text-black">
              Canvas Sizes:
            </div>
          </div>

          {/* Size Buttons - Grid layout for proper wrapping */}
          <div className="flex items-center gap-[0.75rem] flex-wrap">
            {sizeData.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedSize(item.id)}
                className={`
                px-[1.3rem] py-[0.3rem] 
                rounded-full 
                text-[0.875rem] font-normal
                transition-all duration-200
                border-[1px]
                border-[#a29f9f]
                rounded-full
                ${
                  selectedSize === item.id
                    ? "border-black text-black"
                    : " text-[#6B7280]"
                }
                hover:border-black hover:text-black
              `}
              >
                {item.size}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Size Section */}
        <div className="flex items-center gap-[1rem]">
          <span className="text-[0.9375rem] pl-[3rem] sm:pl-[7rem] font-semibold text-black">
            Custom:
          </span>

          {/* Width Dropdown */}
          <select
            value={customWidth}
            onChange={(e) => setCustomWidth(e.target.value)}
            className="px-[1rem] py-[0.3rem] border-[1px] border-[#D1D5DB] rounded-full text-[0.875rem] text-[#6B7280] bg-white cursor-pointer hover:border-black focus:outline-none focus:border-black"
          >
            {[...Array(50)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}"
              </option>
            ))}
          </select>

          <span className="text-[0.875rem] text-black font-semibold">X</span>

          {/* Height Dropdown */}
          <select
            value={customHeight}
            onChange={(e) => setCustomHeight(e.target.value)}
            className="px-[1rem] py-[0.3rem] border-[1px] border-[#D1D5DB] rounded-full text-[0.875rem] text-[#6B7280] bg-white cursor-pointer hover:border-black focus:outline-none focus:border-black"
          >
            {[...Array(50)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}"
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* PRICE SECTION - Dynamically updates based on selected size */}
      <div className="flex sm:flex-row flex-col justify-between items-center">
        <div>
          <div className="w-full flex flex-col gap-[0.5rem]">
            {/* Price Display Row */}
            <div className="flex items-center gap-[0.75rem]">
              {/* Original Price - Strikethrough */}
              <span className="text-[0.9375rem] text-[#6B7280] line-through">
                ₹{originalPrice.toFixed(2)}
              </span>

              {/* Final Price - Large & Red - Updates on size change */}
              <span className="text-[2rem] font-bold text-[#DC2626]">
                ₹{basePrice.toFixed(2)}
              </span>

              {/* Discount Badge - Dynamic percentage */}
              <span className="px-[0.5rem] py-[0.25rem] bg-[#84CC16] text-white text-[0.75rem] font-bold rounded-sm">
                {discountPercent}% OFF
              </span>
            </div>

            {/* Tax Info */}
            <span className="text-[0.8125rem] text-[#6B7280]">
              (Inclusive of all taxes)
            </span>

            {/* Guarantee Text */}
            <span className="text-[0.8125rem] text-[#6B7280]">
              -- No Risk, Lowest Prices Guaranteed --
            </span>
          </div>
        </div>

        <div>
          {/* CREATE CANVAS BUTTON */}
          <button className="w-full px-[2rem]  mt-[2rem] sm:mt-[1rem] py-[0.6rem] bg-[#DC2626] text-white text-[0.9375rem] font-bold rounded-md hover:bg-[#B91C1C] transition-colors duration-200">
            CREATE CANVAS
          </button>
        </div>
      </div>
    </div>
  );
}
