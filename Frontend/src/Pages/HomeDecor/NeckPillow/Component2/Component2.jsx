import React from "react";
import travelPillowImg from "./Component2Img/travel-pillow-that-transforms-your-journey.jpg";

export default function Component2() {
  return (
    <div className="w-full py-12 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={travelPillowImg}
            alt="Custom Travel Pillow"
            className="w-full h-auto shadow-lg object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Heading */}
          <h2 className="text-[1.4rem] font-bold  font-sans">
            Custom Travel Pillow That Transforms Your Journey
          </h2>

          {/* Paragraph 1 */}
          <p className="text-[0.9rem] opacity-70 font-sans leading-relaxed">
            Experience the fusion of comfort, style, and personalisation with
            the CanvasChamp Custom Travel Pillow. This top-tier travel neck
            pillow is your go-to for luxurious support, crafted from premium
            materials to ensure maximum comfort. In addition, with our
            innovative Sublimation Printing technology, you can print cherished
            photos or logos, making this travel pillow a one-of-a-kind.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[0.9rem] opacity-70 font-sans leading-relaxed">
            Whether journeying by train, driving cross-country, or jet-setting
            around the globe, this travel sleeping pillow is your perfect
            companion, providing essential neck support for all your adventures.
          </p>

          {/* Button */}
          <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-base">
            Design A Custom U-Shaped Pillow
          </button>
        </div>
      </div>
    </div>
  );
}
