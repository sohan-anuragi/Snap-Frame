import React from "react";
import { FaBolt, FaTruck, FaAward, FaUndo } from "react-icons/fa";

const highlights = [
  {
    id: "energy",
    title: "Energy & Cost Efficient",
    Icon: FaBolt,
  },
  {
    id: "delivery",
    title: "Free Delivery",
    Icon: FaTruck,
  },
  {
    id: "warranty",
    title: "3 Years Warranty",
    Icon: FaAward,
  },
  {
    id: "returns",
    title: "Easy Returns",
    Icon: FaUndo,
  },
];

export default function Component2() {
  return (
    <section className="w-full bg-white py-[2.8rem]">
      <div className="w-full max-w-[1200px] mx-auto px-[1.5rem]">
        <h2 className="text-center text-[2.5rem]    font-extrabold font-serif !mb-[3rem] text-black tracking-tight">
          Why Choose CanvasChamp for Custom Neon Signs
        </h2>

        <div className="mt-[2.4rem] grid grid-cols-2 md:grid-cols-4 gap-y-[2rem] gap-x-[1.2rem]">
          {highlights.map(({ id, title, Icon }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center gap-[0.6rem]"
            >
              <div className="text-[2.7rem] text-[#000000c6]">
                <Icon aria-hidden="true" />
              </div>
              <p className="text-[0.9rem] font-semibold text-black">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
