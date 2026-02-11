import React, { useContext, useState } from "react";
import { PrintsStoreContext } from "../../PrintsStore";

export default function Shapes() {
  const [selectedShape, setSelectedShape] = useState("Rectangle");

  const { handleShape } = useContext(PrintsStoreContext);

  // All shapes in one array
  const shapes = [
    "Popular",
    "Square",
    "Rectangle",
    "Panoramic",
    "Circle",
    "Triangle",
  ];

  return (
    <div className="w-full flex items-center gap-[1rem] flex-wrap">
      {/* Label */}
      <div className="flex  gap-[0.5rem]">
        <span className="text-[0.8rem] mt-[1rem] font-semibold text-black whitespace-nowrap">
          Canvas Shapes:
        </span>
        <div>
          {/* All shape buttons */}
          {shapes.map((shape, index) => (
            <button
              key={shape}
              onClick={() => {
                handleShape(index);
                setSelectedShape(shape);
              }}
              className={`
            px-[1.5rem] py-[0.3rem] 
            rounded-full   ml-[0.5rem] mt-[0.5rem]
            text-[0.875rem] font-normal
            transition-all duration-200
            ${
              selectedShape === shape
                ? "border-[1px] border-black text-black"
                : "border-[1px] border-[#D1D5DB] text-[#6B7280]"
            }
            hover:border-black hover:text-black
          `}
            >
              {shape}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
