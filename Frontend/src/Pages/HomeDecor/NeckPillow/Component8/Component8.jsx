import React from "react";
import { FaTruck, FaMedal } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

export default function Component8() {
  const features = [
    {
      id: 1,
      icon: <FaTruck size={40} className="text-black" />,
      title: "Ship within 24 Hours",
    },
    {
      id: 2,
      icon: <FaMedal size={40} className="text-black" />,
      title: "Best Quality Assured",
    },
    {
      id: 3,
      icon: <MdDesignServices size={40} className="text-black" />,
      title: "Custom Design Options",
    },
  ];

  return (
    <div className="w-full py-12 px-4 md:px-8 lg:px-16 bg-[#ddeedd]">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 font-sans">
          Why Buy Custom Neck Pillows from CanvasChamp?
        </h1>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Icon */}
              <div className="flex justify-center">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-[0.9rem] font-semibold opacity-85 font-sans">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
