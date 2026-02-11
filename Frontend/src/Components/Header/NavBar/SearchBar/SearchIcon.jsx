import { FiSearch } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function SearchIcon() {
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  return (
    <>
      <div href="#" className="lg:!mr-[2rem] flex items-center relative">
        <div
          className="flex items-center gap-2 lg:bg-[#f6f6f6] "
          onClick={() => setSearchBarOpen(!searchBarOpen)}
        >
          <input
            type="text"
            placeholder="Search products"
            className="hidden lg:block w-[10rem] xl:w-[15rem] bg-gray-100 !px-2 py-1 text-[0.9rem] placeholder-gray-400 placeholder-semibold outline-none"
          />
          <div className="lg:bg-gray-200 lg:!p-[0.4rem]">
            <FiSearch className="text-[2rem] text-[#37343494]" />
          </div>
        </div>
        <div className="absolute top-[2.8rem] right-[-3.7rem] lg:right-0  ">
          {searchBarOpen && (
            <SearchBar
              searchBarOpen={searchBarOpen}
              setSearchBarOpen={setSearchBarOpen}
            ></SearchBar>
          )}
        </div>
      </div>
    </>
  );
}
