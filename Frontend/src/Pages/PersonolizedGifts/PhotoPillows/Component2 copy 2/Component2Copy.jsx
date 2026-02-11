import React from "react";
import travelPillowImg from "./Component2Img/pillow-durability.png";

export default function Component2Copy2() {
  return (
    <div className="w-full py-12 px-[2rem]  pt-[4rem] mt-[3rem] border-t-[1px] border-gray-200 ">
      <div className=" mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 bg-[#f3f3f3]  ">
          <img
            src={travelPillowImg}
            alt="Custom Travel Pillow"
            className="w-full h-auto shadow-lg object-cover  "
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2  space-y-6">
          {/* Heading */}
          <h2 className="text-[1rem] font-semibold">
            Comfort complements durability
          </h2>

          {/* Paragraph 1 */}
          <p className="text-[0.8rem] opacity-70  leading-relaxed">
            Whether you are planning a gift, or intend to decorate your
            home/living area, these cute custom built photo pillows can be your
            best choice
          </p>

          {/* Button */}
          <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-base">
            CREATE CUSTOM PILLOWS
          </button>
        </div>
      </div>
    </div>
  );
}
