import React from "react";

export default function TotalRate({ selectedSize }) {
  // Price mapping for each size option
  const priceMap = {
    Small: 599,
    Medium: 799,
    Large: 999,
    "Extra Large": 1199,
  };

  // Get the price based on selected size
  const originalPrice = 1199; // Original price (for crossed-out display)
  const currentPrice = priceMap[selectedSize] || 599; // Default to Small price
  const discount = Math.round(
    ((originalPrice - currentPrice) / originalPrice) * 100,
  );

  return (
    <div className="w-full bg-white p-6  border-b border-gray-200 mt-4">
      {/* Price Section */}
      <div className="space-y-3">
        {/* Original Price (crossed) */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500 line-through text-base">
            ₹{originalPrice.toFixed(2)}
          </span>
          {discount > 0 && (
            <span className="bg-[#008000c6] text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </span>
          )}
          <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
            LOWEST PRICE GUARANTEED
          </span>
        </div>

        {/* Current Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-red-600 text-2xl font-bold">
            ₹{currentPrice.toFixed(2)}
          </span>
        </div>

        {/* Tax Info */}
        <p className="text-gray-600 text-sm">(Inclusive of all taxes)</p>

        {/* Create Button */}
        <button className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 text-base">
          Create Neck Pillow
        </button>
      </div>
    </div>
  );
}
