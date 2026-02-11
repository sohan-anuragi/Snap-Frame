import React from "react";

export default function TopHeading() {
  return (
    <>
      {/* Container */}
      <div className="w-full  flex flex-col md:flex-row bg-white  flex items-start !p-[2rem] !pb-[0rem] justify-between gap-[2%]">
        {/* Breadcrumb */}
        <div className="flex items-center">
          <span className="text-slate-500 text-[0.7rem] md:text-[0.7rem] lg:text-[0.8rem] font-normal whitespace-nowrap">
            <a href="/">Home</a> <span className="mx-[0.3rem]">/</span>{" "}
            Custom-Neon-Sign
          </span>
        </div>

        {/* Promo Banner */}
        <div className=" flex items-center justify-center border-dashed border-[1px] border-[#f3d8d8] gap-[1%] mt-[1rem] md:mt-[0rem] bg-[#f9f9b8]  px-[1rem] py-[1rem] max-h-[40px] md:min-h-[55px]">
          <div className="flex flex-col gap-[0.3rem] flex-1">
            {/* Main Text */}
            <span className="text-black font-bold text-[0.8rem]  leading-tight">
              55% OFF CANVAS PRINTS | PROMO APPLIED!
            </span>

            {/* Secondary Text */}
            <span className="text-black font-normal text-[0.7rem] leading-tight">
              TODAY'S SPECIAL: Buy 1, Get 1 Free | USE CODE{" "}
              <span className="font-bold text-red-600">INBOGO</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
