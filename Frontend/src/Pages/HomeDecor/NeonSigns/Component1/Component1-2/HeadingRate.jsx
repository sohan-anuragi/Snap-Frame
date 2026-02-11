import React from "react";

export default function HeadingRate() {
  return (
    <div className="w-full flex flex-col gap-[rem]">
      {/* Title */}
      <h1 className="text-[1.7rem] font-extrabold font-inter text-black">
        Custom Neon Signs
      </h1>

      {/* Rating Row */}
      <div className="flex items-center gap-[0.5rem] flex-wrap">
        {/* Stars */}
        <div className="flex gap-[0.1rem]">
          <span className="text-[#DC2626] text-[1.4rem]">★</span>
          <span className="text-[#DC2626] text-[1.4rem]">★</span>
          <span className="text-[#DC2626] text-[1.4rem]">★</span>
          <span className="text-[#DC2626] text-[1.4rem]">★</span>
          <span className="relative inline-block text-[1.4rem] text-[#4c4646]">
            ★
            <span className="absolute top-0 left-0 w-1/2 overflow-hidden text-[#DC2626]">
              ★
            </span>
          </span>
        </div>

        {/* Rating Text */}
        <span className="text-[0.8rem] border-b-[1.5px] hover:border-none border-[#c7c5c5] font-normal text-[#DC2626]">
          4.5/5 out of 34308 reviews
        </span>

        <span className="text-[0.9rem] text-[#616060]">from</span>

        {/* Badge */}
        <span className="text-[0.8rem] border-b-[1.5px] hover:border-none border-[#c7c5c5] font-normal text-[#DC2626]">
          Shopper Approved
        </span>
      </div>
    </div>
  );
}
