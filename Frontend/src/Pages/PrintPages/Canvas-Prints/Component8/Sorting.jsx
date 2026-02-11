import React, { useCallback, useContext, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { ratingContext } from "./RatingStore";

const Sorting = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedSort, setSelectedSort] = useState("Newest to oldest");
  const [selectedRating, setSelectedRating] = useState("All ratings");

  const sortOptions = [
    "Newest to oldest",
    "Highest to lowest",
    "Favorite reviews",
  ];

  const ratingOptions = [
    "All ratings",
    "5 ☆ reviews",
    "4 ☆ reviews",
    "3 ☆ reviews",
    "2 ☆ reviews",
    "1 ☆ reviews",
  ];

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setOpenDropdown(null);
  };

  const handleRatingSelect = (option) => {
    setSelectedRating(option);
    setOpenDropdown(null);
  };

  // CONTEXT USING

  const { handleStars, handleEvents } = useContext(ratingContext);

  return (
    <div className="px-[4rem]">
      <div className="border-t border-b border-gray-300 mb-[2rem] py-4 px-4">
        <div className="flex items-center gap-8 relative">
          <div className="relative">
            <button
              className="flex items-center gap-2 cursor-pointer text-gray-600"
              onFocus={() => toggleDropdown("sort")}
              onBlur={() => {
                setTimeout(() => toggleDropdown("random"), 300);
              }}
            >
              <span className="text-[1rem] text-[#5c5a5a] font-semibold">
                {selectedSort}
              </span>
              <IoChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "sort" ? "rotate-180" : ""}`}
              />
            </button>

            {openDropdown === "sort" && (
              <div className="absolute border-[1px]  border-[#121212] top-full left-0 mt-2 bg-white py-1   shadow-lg  min-w-[9rem] z-10">
                {sortOptions.map((option, index) => (
                  <div
                    onClick={() => {
                      handleEvents(option);
                      handleSortSelect(option);
                    }}
                    key={index}
                    className={`px-2 py-1 hover:bg-[#1862e2] hover:text-[white] cursor-pointer text-[0.8rem] mb-[0.3rem] text-gray-700 ${selectedSort === option ? "bg-[#1862e2] text-white" : ""}  `}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center gap-2 cursor-pointer text-gray-600"
              onFocus={() => toggleDropdown("rating")}
              onBlur={() => {
                setTimeout(() => toggleDropdown("random"), 300);
              }}
            >
              <span className="text-[1rem] text-[#5c5a5a] font-semibold">
                {selectedRating}
              </span>
              <IoChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "rating" ? "rotate-180" : ""}`}
              />
            </button>

            {openDropdown === "rating" && (
              <div className="absolute top-full left-0 mt-2 bg-white border-[1px] border-black py-2  min-w-[9rem] z-10">
                {ratingOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`px-4 py-1 mb-[0.3rem] hover:bg-[#1862e2] hover:text-[white] cursor-pointer text-[0.8rem] text-gray-700 flex items-center gap-2 ${selectedRating === option ? "bg-[#1862e2] text-white" : ""} `}
                    onClick={() => {
                      handleStars(option);
                      handleRatingSelect(option);
                    }}
                  >
                    <span>{option} </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
