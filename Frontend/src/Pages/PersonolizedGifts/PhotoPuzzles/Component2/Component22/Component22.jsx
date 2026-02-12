import React, { useState } from "react";

export default function Component22() {
  // Price data for each option
  const styleOptions = [
    { value: "Heart", price: 50 },
    { value: "Star", price: 60 },
    { value: "Circle", price: 55 },
    { value: "Square", price: 50 },
  ];

  const sizeOptions = [
    { value: '6" x 6"', price: 100 },
    { value: '8" x 8"', price: 150 },
    { value: '10" x 10"', price: 200 },
    { value: '12" x 12"', price: 250 },
  ];

  const piecesOptions = [
    { value: "Set of 6", price: 200 },
    { value: "Set of 12", price: 350 },
    { value: "Set of 24", price: 600 },
    { value: "Set of 48", price: 1000 },
  ];

  // State for selected values
  const [selectedStyle, setSelectedStyle] = useState("Heart");
  const [selectedSize, setSelectedSize] = useState('6" x 6"');
  const [selectedPieces, setSelectedPieces] = useState("Set of 6");

  // Get price of selected option
  const getPrice = (value, options) => {
    const option = options.find((opt) => opt.value === value);
    return option ? option.price : 0;
  };

  // Calculate total price
  const stylePrice = getPrice(selectedStyle, styleOptions);
  const sizePrice = getPrice(selectedSize, sizeOptions);
  const piecesPrice = getPrice(selectedPieces, piecesOptions);
  const totalPrice = stylePrice + sizePrice + piecesPrice;

  return (
    <div>
      <div className="w-full py-4 px-4">
        {/* Heading and Description Section */}
        <div className="mb-6 space-y-2">
          <h2 className="text-2xl font-bold text-black font-sans">
            Custom Photo Puzzles
          </h2>
          <p className="text-sm text-gray-600 font-sans leading-relaxed">
            A personalised gift to kids or adults is perfect, especially if it
            is personalised photo puzzles! Make a favourite picture into a
            custom puzzle art and get busy for hours merging the pieces to form
            the beautiful view!
          </p>
        </div>

        {/* Select Dropdowns Section */}
        <div className="space-y-6  bg-[#f4f2f2] p-4">
          {/* Style Select */}
          <div className="space-y-2 mt-[0.5rem] flex items-center">
            <label className="text-sm min-w-[6rem] font-bold text-black font-sans">
              Style:
            </label>
            <div className="relative w-full ml-4 px-4 bg-white border border-gray-300 mt-[-0.6rem]">
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full py-2 outline-none text-gray-700 text-sm font-sans cursor-pointer"
              >
                {styleOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Size Select */}
          <div className="space-y-2 flex items-center">
            <label className="text-sm min-w-[6rem] font-bold text-black font-sans">
              Select Size:
            </label>
            <div className="relative w-full ml-4 px-4 bg-white border border-gray-300 mt-[-0.6rem]">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full py-2 outline-none text-gray-700 text-sm font-sans cursor-pointer"
              >
                {sizeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* No of Pieces Select */}
          <div className="space-y-2 flex items-center">
            <label className="text-sm min-w-[6rem] font-bold text-black font-sans">
              No of Pieces:
            </label>
            <div className="relative w-full ml-4 px-4 bg-white border border-gray-300 mt-[-0.6rem]">
              <select
                value={selectedPieces}
                onChange={(e) => setSelectedPieces(e.target.value)}
                className="w-full py-2 outline-none text-gray-700 text-sm font-sans cursor-pointer"
              >
                {piecesOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Total Price */}
      </div>
      <div className="flex justify-between items-center bg-white pt-4 px-4">
        {/* Price Section */}
        <div className="space-y-1">
          <p className="text-3xl font-bold text-red-600">₹{totalPrice}.00</p>
          <p className="text-xs text-gray-600">(Inclusive of all taxes)</p>
        </div>

        {/* Button */}
        <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 transition-colors rounded-md duration-300 text-sm">
          MAKE YOUR OWN PUZZLE
        </button>
      </div>
    </div>
  );
}
