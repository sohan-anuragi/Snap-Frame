import React, { useState } from "react";

const colorOptions = [
  { id: 1, colorName: "White", colorCode: "#FFFFFF", isWaterProof: true },
  { id: 2, colorName: "Light Gray", colorCode: "#D3D3D3", isWaterProof: true },
  {
    id: 3,
    colorName: "Sandy Beige",
    colorCode: "#F4D4A8",
    isWaterProof: false,
  },
  { id: 4, colorName: "Ocean Blue", colorCode: "#1E3A8A", isWaterProof: true },
  {
    id: 5,
    colorName: "Royal Purple",
    colorCode: "#7C3AED",
    isWaterProof: true,
  },
  {
    id: 6,
    colorName: "Emerald Green",
    colorCode: "#10B981",
    isWaterProof: true,
  },
  { id: 7, colorName: "Mint Green", colorCode: "#6EE7B7", isWaterProof: false },
  {
    id: 8,
    colorName: "Sunset Orange",
    colorCode: "#F97316",
    isWaterProof: true,
  },
  {
    id: 9,
    colorName: "Bright Yellow",
    colorCode: "#FBBF24",
    isWaterProof: false,
  },
  { id: 10, colorName: "Magenta", colorCode: "#D946EF", isWaterProof: true },
  { id: 11, colorName: "Hot Pink", colorCode: "#EC4899", isWaterProof: true },

  {
    id: 18,
    colorName: "Lime Green",
    colorCode: "#84CC16",
    isWaterProof: false,
  },

  {
    id: 19,
    colorName: "Charcoal Black",
    colorCode: "#1F2937",
    isWaterProof: true,
  },
  {
    id: 20,
    colorName: "Matte Black",
    colorCode: "#000000",
    isWaterProof: true,
  },
  {
    id: 21,
    colorName: "Ivory Cream",
    colorCode: "#FFFBEB",
    isWaterProof: false,
  },
  {
    id: 22,
    colorName: "Chocolate Brown",
    colorCode: "#7C2D12",
    isWaterProof: true,
  },
  {
    id: 23,
    colorName: "Coffee Brown",
    colorCode: "#92400E",
    isWaterProof: false,
  },
  {
    id: 24,
    colorName: "Lavender Purple",
    colorCode: "#C4B5FD",
    isWaterProof: false,
  },
  { id: 25, colorName: "Steel Grey", colorCode: "#9CA3AF", isWaterProof: true },
  {
    id: 26,
    colorName: "Peach Orange",
    colorCode: "#FDBA74",
    isWaterProof: false,
  },
  { id: 27, colorName: "Teal Blue", colorCode: "#0F766E", isWaterProof: true },
  { id: 28, colorName: "Maroon Red", colorCode: "#7F1D1D", isWaterProof: true },
];

const ColourBox = () => {
  // State for selected color
  const [selectedColor, setSelectedColor] = useState(colorOptions[2]); // Default to Sandy Beige

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="w-full  bg-white">
      {/* Type Text Section */}
      <div className="mb-8 flex items-center w-[100%]">
        <h1 className="block min-w-[6rem] text-sm font-semibold text-gray-700 mb-2">
          Type Text:
          <span className="text-red-500 ml-1">*</span>
        </h1>
        <p className="text-[1rem] font-semibold mt-[-0.7rem] text-[#62626294] font-sans ">
          Customize your text in a next step
        </p>
      </div>

      {/* Font Color Section */}
      <div>
        <div className="flex w-[100%]">
          <label className="block min-w-[7rem] text-sm font-semibold text-gray-700 mb-4">
            Font Color:
            <span className="text-red-500 ml-1">*</span>
          </label>

          {/* Color boxes grid */}
          <div className="w-[100%] flex  flex-wrap gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.id}
                onClick={() => handleColorSelect(color)}
                className={`relative w-[2rem] aspect-square  transition-all duration-200 ${
                  selectedColor.id === color.id
                    ? "ring-3 ring-offset-2 ring-gray-400 shadow-lg"
                    : "hover:shadow-md"
                }`}
                style={{
                  backgroundColor: color.colorCode,
                  border:
                    color.colorCode === "#FFFFFF"
                      ? "1px solid #D3D3D3"
                      : "none",
                }}
                title={`${color.colorName} ${color.isWaterProof ? "(Water Proof)" : ""}`}
                aria-label={color.colorName}
              />
            ))}
          </div>

          {/* Selected color display */}
        </div>
      </div>
    </div>
  );
};

export default ColourBox;
