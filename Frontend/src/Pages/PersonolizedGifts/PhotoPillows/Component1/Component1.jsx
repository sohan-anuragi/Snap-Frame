import React from "react";
import { FaStar } from "react-icons/fa";
import photoPuzzleImg from "./Component1Img/pillow-banner.jpg";

export default function Component1() {
  return (
    <div className="w-full p-[2rem] pr-[4rem] h-[80vh] relative overflow-hidden">
      {/* Background Image - Full width and height */}
      <img
        src={photoPuzzleImg}
        alt="Photo Puzzles"
        className="w-full h-full object-cover"
      />

      {/* Content Overlay - Positioned absolutely on top of image */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-16 py-12 space-y-4">
          {/* Main Heading */}
          <h1 className="text-3xl  font-bold text-black font-sans">
            Photo Puzzles
          </h1>

          {/* Priority Shipping Badge */}
          <div className="bg-[#fd8490bb] text-[red] font-semibold py-1 text-[0.7rem] rounded-md px-3  inline-block">
            📦 PRIORITY SHIPPING AVAILABLE
          </div>

          {/* Rating Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {/* 5 Stars (4.5 rating) */}
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} size={14} className="text-red-600" />
                ))}
                {/* Half star for 4.5 */}
                <div className="relative">
                  <FaStar size={14} className="text-gray-300" />
                  <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                    <FaStar size={14} className="text-red-600" />
                  </div>
                </div>
              </div>
              <span className="text-red-600 font-bold text-xs md:text-sm">
                4.5/5 out of 34355 reviews
              </span>
              <span className="text-[0.8rem]"> from</span>
              <span className="text-red-600 text-xs md:text-sm underline">
                Shopper Approved
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base font-sans">
            Custom photo puzzles to make perfect gifts for friends and family!
          </p>

          {/* Offer Box */}
          <div className="bg-yellow-200 px-3 py-2 space-y-1 max-w-md">
            <p className="font-bold text-black text-[0.8rem]">
              FLAT 10% OFF ON PHOTO PUZZLE |{" "}
              <span className="text-green-700 underline cursor-pointer">
                VIEW MORE OFFERS
              </span>
            </p>
            <p className="text-xs text-gray-700">
              COUPON CODE : 10PUZZLE | Free Delivery Across India
            </p>
          </div>

          {/* Price Section */}
          <div className="space-y-1">
            <p className="text-gray-600 text-xs md:text-sm">Starts at</p>
            <p className="text-3xl md:text-4xl font-bold text-red-600">
              ₹249.00
            </p>
            <p className="text-gray-600 text-xs md:text-sm">
              (Inclusive of all taxes)
            </p>
          </div>

          {/* Start Order Button */}
          <button className="bg-red-700 rounded-md hover:bg-red-800 text-white font-bold py-2 px-5 transition-colors duration-300 text-sm md:text-base mt-4">
            START ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
