import React from "react";

export default function Top() {
  return (
    <div className="w-full flex flex-col items-center px-[3.5rem] py-[2.5rem] gap-[2.2rem]">
      {/* TOP HEADING */}
      <div className="w-full flex flex-col  items-center gap-[0.8rem]">
        <h2 className="text-[1.8rem] font-extrabold text-black text-center">
          CUSTOMER REVIEWS
        </h2>
        <div className="flex items-center justify-center mb-[2rem] ">
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
          <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#D1D5DB]" />
          <div className="w-[10rem] h-[0.0625rem]  bg-[#D1D5DB]" />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full flex gap-8 flex-col md:flex-row items-start">
        {/* LEFT RATING */}
        <div className="md:w-[20%] w-[100%] ml-[-3rem] md:ml-[0rem] flex flex-col items-center gap-[0.6rem]">
          <div className="text-[2.5rem] font-bold text-[#111827]">4.5</div>
          <div className="flex items-center gap-[0.2rem] text-[#F97316] text-[2rem]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="relative inline-block text-[#ffd786]">
              ★
              <span className="absolute top-0 left-0 w-1/2 overflow-hidden text-[#F97316]">
                ★
              </span>
            </span>
          </div>
          <div className="text-[0.9rem] font-semibold text-[#4B5563]">
            34,347 Reviews
          </div>
        </div>

        {/* CENTER BARS */}
        <div className="w-[100%] md:w-[55%] flex flex-col gap-[0.55rem]">
          <div className="flex items-center gap-[0.6rem]">
            <div className="w-[8%] text-[1.1rem] text-black">5 ★</div>
            <div className=" w-[55%]  md:w-[72%] h-[0.6rem] bg-[#F3F4F6]">
              <div className="h-full w-[85%] bg-[#F97316]" />
            </div>
            <div className=" text-[0.85rem] text-black">21K+ &nbsp; (63%)</div>
          </div>

          <div className="flex items-center gap-[0.6rem]">
            <div className="w-[8%] text-[1.1rem] text-black">4 ★</div>
            <div className="md:w-[72%] w-[55%] h-[0.6rem] bg-[#F3F4F6]">
              <div className="h-full w-[36%] bg-[#F97316]" />
            </div>
            <div className="flex flex-1  text-[0.85rem] text-black">
              9021 &nbsp; (26.3%)
            </div>
          </div>

          <div className="flex items-center gap-[0.6rem]">
            <div className="w-[8%] text-[1.1rem] text-black">3 ★</div>
            <div className="md:w-[72%] w-[55%] h-[0.6rem] bg-[#F3F4F6]">
              <div className="h-full w-[12%] bg-[#F97316]" />
            </div>
            <div className=" flex flex-1 text-[0.85rem] text-black">
              2832 &nbsp; (8.2%)
            </div>
          </div>

          <div className="flex items-center gap-[0.6rem]">
            <div className="w-[8%] text-[1.1rem] text-black">2 ★</div>
            <div className="md:w-[72%] w-[55%] h-[0.6rem] bg-[#F3F4F6]">
              <div className="h-full w-[3%] bg-[#F97316]" />
            </div>
            <div className=" flex flex-1 text-[0.85rem] text-black">
              400 &nbsp; (1.2%)
            </div>
          </div>

          <div className="flex items-center gap-[0.6rem]">
            <div className="w-[8%] text-[1.1rem] text-black">1 ★</div>
            <div className="md:w-[72%] w-[55%] h-[0.6rem] bg-[#F3F4F6]">
              <div className="h-full w-[3.5%] bg-[#F97316]" />
            </div>
            <div className=" flex flex-1 text-[0.85rem] text-black">
              455 &nbsp; (1.3%)
            </div>
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className=" w-[100%] md:w-[20%] flex flex-col md:items-center items-start gap-[0.4rem]">
          <div className="text-[2.5rem] font-bold text-[#F97316]">89%</div>
          <div className="text-[0.85rem] text-black text-center">
            of customers rate this company
          </div>
          <div className="text-[0.85rem] text-black text-center">
            4- or 5-stars
          </div>
        </div>
      </div>
    </div>
  );
}
