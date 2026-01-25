import { useState } from "react";
import { FaTruck } from "react-icons/fa";

const productTypes = [
  "Canvas Prints",
  "Shaped Canvas Prints",
  "Large Canvas Prints",
  "Panoramic Canvas Prints",
  "Gallery Wall Display",
  "Hexagon Canvas Prints",
  "Split Canvas Prints",
  "Canvas Photo Collage",
  "Quotes on Canvas",
  "Lyrics on Canvas",
  "Word Art on Canvas",
  "Pop Art on Canvas",
  "Canvas Photo Mosaic",
];

const rateData = [
  {
    id: 1,
    size: '8" × 8"',
    price: 143.0,
    originalPrice: 317.78,
    discount: "55% OFF",
  },
  {
    id: 2,
    size: '12" × 8"',
    price: 243.0,
    originalPrice: 540.0,
    discount: "55% OFF",
  },
  {
    id: 3,
    size: '10" × 10"',
    price: 250.0,
    originalPrice: 555.56,
    discount: "55% OFF",
  },
  {
    id: 4,
    size: '16" × 20"',
    price: 712.0,
    originalPrice: 1582.22,
    discount: "55% OFF",
  },
  {
    id: 5,
    size: '20" × 30"',
    price: 1190.91,
    originalPrice: 2646.47,
    discount: "55% OFF",
  },
];

const customSizeOptions = {
  height: ['8"', '10"', '12"', '16"', '20"', '24"', '30"'],
  width: ['8"', '10"', '12"', '16"', '20"', '24"', '30"'],
};

export default function RateBox() {
  const [selectedProduct, setSelectedProduct] = useState("Canvas Prints");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRate, setSelectedRate] = useState(null);
  const [customHeight, setCustomHeight] = useState('12"');
  const [customWidth, setCustomWidth] = useState('8"');

  const handleRateSelect = (rate) => {
    setSelectedRate(rate);
  };

  const selectedPrice = selectedRate ? selectedRate.price : 540.0;
  const selectedDiscount = selectedRate ? selectedRate.discount : "55% OFF";

  return (
    <div className=" p-6 rounded-md lg:!w-[100%] lg:px-[5rem] lg:p-4 ">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold mb-6 text-[#131313] lg:text-lg lg:mb-4">
        START YOUR ORDER
      </h2>

      {/* Product Type Dropdown */}
      <div className="relative mb-4 lg:mb-3">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between px-4  py-3 bg-white border border-[#ccc] rounded text-left text-[#272727dd] text-[1rem] font-bold cursor-pointer hover:border-[#d2d2d2] transition lg:py-2 lg:text-sm lg:px-3"
        >
          <span>{selectedProduct}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Options */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#ccc] rounded shadow-lg z-50 max-h-[300px] overflow-y-auto xl:px-[0rem] lg:max-h-[200px]">
            {productTypes.map((type, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedProduct(type);
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm cursor-pointer hover:bg-[#007bff] hover:text-white transition ${
                  selectedProduct === type
                    ? "bg-[#007bff] text-white"
                    : "text-[#555]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}

      {/* Rate Boxes Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 mb-4 lg:gap-2 lg:mb-3">
        {rateData.map((rate) => (
          <div
            key={rate.id}
            onClick={() => handleRateSelect(rate)}
            className={`bg-white border-2 rounded p-3 cursor-pointer transition ${
              selectedRate?.id === rate.id
                ? "border-[#28a745]"
                : "border-transparent hover:border-[#ddd]"
            } lg:p-2`}
          >
            <div className="text-sm font-semibold text-[#333] mb-1 lg:text-xs lg:mb-0.5">
              {rate.size}
            </div>
            <div className="flex items-center gap-2 mb-1 lg:gap-1 lg:mb-0.5">
              <span className="text-[#d32f2f] font-bold text-lg lg:text-sm">
                ₹{rate.price.toFixed(2)}
              </span>
              <span className="bg-[#28a745] text-white text-[10px] font-semibold px-2 py-0.5 rounded lg:text-[8px] lg:px-1.5">
                {rate.discount}
              </span>
            </div>
            <div className="text-[#999] text-xs line-through lg:text-[10px]">
              ₹{rate.originalPrice.toFixed(2)}
            </div>
          </div>
        ))}

        {/* Custom Size Box */}
        <div className="bg-white border-2 border-transparent rounded p-3 col-span-2 lg:p-2">
          <div className="text-sm font-semibold text-[#333] mb-2 lg:text-xs lg:mb-1.5">
            Custom Size (H × W)
          </div>
          <div className="flex items-center gap-2 lg:gap-1.5">
            <select
              value={customHeight}
              onChange={(e) => setCustomHeight(e.target.value)}
              className="flex-1 px-3 py-2 border border-[#ccc] rounded text-sm cursor-pointer bg-white lg:px-2 lg:py-1.5 lg:text-xs"
            >
              {customSizeOptions.height.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
            <span className="text-[#555] font-semibold">×</span>
            <select
              value={customWidth}
              onChange={(e) => setCustomWidth(e.target.value)}
              className="flex-1 px-3 py-2 border border-[#ccc] rounded text-sm cursor-pointer bg-white lg:px-2 lg:py-1.5 lg:text-xs"
            >
              {customSizeOptions.width.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Total Section and Button */}
      <div className="mb-4 lg:flex lg:flex-row lg:items-center lg:gap-4 lg:mb-3">
        {/* Total Section */}
        <div className="mb-4 lg:mb-0 lg:flex-1">
          <div className="flex items-center justify-between mb-1 lg:mb-0.5">
            <span className="text-[#999] text-sm line-through lg:text-xs">
              ₹540.00
            </span>
            <span className="bg-[#28a745] text-white text-[10px] font-semibold px-2 py-0.5 rounded lg:text-[8px] lg:px-1.5">
              {selectedDiscount}
            </span>
          </div>
          <div className="text-[#d32f2f] text-3xl font-bold mb-1 lg:text-xl lg:mb-0.5">
            ₹{selectedPrice.toFixed(2)}
          </div>
          <div className="text-[#666] text-xs lg:text-[10px]">
            (Inclusive of all taxes)
          </div>
        </div>

        {/* Start Order Button */}
        <button className="w-full bg-[#c62828] text-white font-bold py-3 rounded-full hover:bg-[#b71c1c] transition cursor-pointer mb-3 lg:mb-0 lg:w-auto lg:px-6 lg:py-2 lg:text-sm">
          START ORDER
        </button>
      </div>

      {/* Ready to Ship */}
      <div className="flex items-center justify-center gap-2 text-[#666] text-sm lg:text-xs lg:gap-1.5">
        <FaTruck className="text-[#555] lg:text-sm" />
        <span>Ready to ship within 24 Hours</span>
      </div>
    </div>
  );
}
