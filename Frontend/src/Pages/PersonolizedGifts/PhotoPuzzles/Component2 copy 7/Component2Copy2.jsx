import React from "react";
import travelPillowImg from "./Component2Img/pp-7.jpg";

export default function Component2Copy7() {
  return (
    <div className="w-full py-12 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 bg-[#f3f3f3]  ">
          <img
            src={travelPillowImg}
            alt="Custom Travel Pillow"
            className="w-full h-auto mt-[1.5rem] ml-[1rem] shadow-lg object-cover  "
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Heading */}
          <h2 className="text-[1.4rem] font-bold  font-sans">
            Quick to Design and Fun to Compile
          </h2>

          {/* Paragraph 1 */}
          <p className="text-[0.9rem] opacity-70 font-sans leading-relaxed">
            With freedom given to you to make your picture puzzles in any way,
            make them for any special occasions like announcements of birthdays,
            marriage or even pregnancy! Celebrate an event differently with
            personalized picture puzzles.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[0.9rem] opacity-70 font-sans leading-relaxed">
            Whether journeying by train, driving cross-country, or jet-setting
            around the globe, this travel sleeping pillow is your perfect
            companion, providing essential neck support for all your adventures.
          </p>

          {/* Button */}
          <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 text-base">
            START OVER
          </button>
        </div>
      </div>
    </div>
  );
}
