import { useState } from "react";
import canvasPrints from "./SearchBarImg/msd_canvas_prints.jpeg";
import metalPrints from "./SearchBarImg/msd_metal_prints.jpeg";
import photoPillow from "./SearchBarImg/photo-pillows-black-friday-sale.png";
import acrylic from "./SearchBarImg/msd_acrylic_prints.jpeg";
import mug from "./SearchBarImg/custom-photo-magic-mug-black-friday-sale.png";
import photoPrints from "./SearchBarImg/photo-prints-for-mothers-day-sale-us.jpeg";

export default function SearchBar({ searchBarOpen, setSearchBarOpen }) {
  const [searchQuery, setSearchQuery] = useState("");

  const trendingButtons = [
    "Canvas Prints",
    "Metal Prints",
    "Photo Blanket",
    "Photo Pillow",
    "Photo Puzzles",
  ];

  const products = [
    {
      id: 1,
      title: "Canvas Prints",
      price: "₹143.00",
      image: canvasPrints,
      link: "#",
    },
    {
      id: 2,
      title: "Acrylic Prints",
      price: "₹355.00",
      image: acrylic,
      link: "#",
    },
    {
      id: 3,
      title: "Metal Prints - A Great Choice!",
      price: "₹444.00",
      image: metalPrints,
      link: "#",
    },
    {
      id: 4,
      title: "Photo Pillows",
      price: "₹225.00",
      image: photoPillow,
      link: "#",
    },
    {
      id: 5,
      title: "Photo Prints",
      price: "₹8.99",
      image: photoPrints,
      link: "#",
    },
    {
      id: 6,
      title: "Photo Mugs",
      price: "₹89.00",
      image: mug,
      link: "#",
    },
  ];

  return (
    <div className="w-[100vw] h-[82vh]    lg:w-[63vw] p-[2rem] pt-[1rem]  bg-white">
      <div className="z-[300]">
        {/* Search Bar */}
        <div className="p-[0.2rem] mb-6">
          <div className="flex items-center bg-[#f8f8f8] rounded-sm border-b-[1px] border-[#dadada] px-4 py-2">
            <input
              type="text"
              placeholder="Search Product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 p-[0.2rem] "
            />
            <svg
              className="w-8 h-8 cursor-pointer text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Trending Search Section */}
        <div className="px-4 mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Trending Search
          </h3>
          <div className="flex gap-2 flex-wrap border-b-[1px] pb-[1rem] border-[#dadadadc]">
            {trendingButtons.map((label, idx) => (
              <button
                key={idx}
                className="px-4 py-2 text-[0.8rem] bg-[#e0e0e0] transition-all duration-500 ease-out rounded-lg text-sm font-medium text-gray-500 hover:bg-[#bc0000] hover:text-[white] cursor-pointer transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="px-4 overflow-y-scroll md:overflow-visible max-h-[50vh] mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="flex gap-4">
                {/* Product Image - Clickable */}
                <a
                  href={product.link}
                  className="flex-shrink-0 w-20 h-20  overflow-hidden hover:opacity-80 transition border-[1px] pb-[1rem] border-[#dadadadc] DESKTOP--> lg:h-15 lg:w-15 "
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full  object-cover  "
                  />
                </a>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-center">
                  {/* Title - Clickable */}
                  <a
                    href={product.link}
                    className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition mb-1 line-clamp-2"
                  >
                    {product.title}
                  </a>

                  {/* Price - NOT Clickable */}
                  <p className="text-xs text-gray-600">
                    Starts at{" "}
                    <span className="font-semibold text-red-600">
                      {product.price}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 mt-[2rem] pb-8 flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded transition">
              SEE MORE PRODUCTS...(638)
            </button>
          </div>
        </div>

        {/* See More Button */}
      </div>
      <div
        className="fixed top-0 left-0 h-[100vh] w-[100vw] bg-[black] opacity-40 z-[-1] DESKTOP--> lg:opacity-0 "
        onClick={() => setSearchBarOpen(!searchBarOpen)}
      ></div>
    </div>
  );
}
