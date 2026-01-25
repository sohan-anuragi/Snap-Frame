import { useContext } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { DropLinksContext } from "../DropLinks/DropLinksStore";
import Prints2 from "./Prints2/Prints2";
import HomeDecor2 from "./HomeDecor2/HomeDecor2";
import Gifts2 from "./Gifts2/Gifts2";
import Occasions2 from "./Occasions2/Occasions2";
import Cities2 from "./Cities2/Cities2";
import Coutriesbox from "./Coutriesbox";
import CompanyLogo from "../CompanyLogo";
import { useEffect, useState } from "react";
import CompanyLogo3 from "../../../../assets/CompanyLogo/CompanyLogo3.svg";
import { FiSearch } from "react-icons/fi";

export default function DropLinks2({ showLogo }) {
  const { dropLinksToggle, handleDropLinksToggle } =
    useContext(DropLinksContext);

  return (
    <>
      <div className=" relative ">
        <div className="flex flex-row py-1 items-center justify-between z-100 w-full bg-[#f1f1f1] border-b-[2px] pr-[1rem] border-[#eeeeee]">
          {showLogo && (
            <a href="/">
              {" "}
              <img
                src={CompanyLogo3}
                alt="SnapFrame Logo"
                className="w-[1.5rem] h-auto ml-8"
              />
            </a>
          )}

          {/* PRINTS */}

          <div className="flex flex-row">
            <div
              className="flex items-center justify-between pl-6 py-2 text-[#000000f7] cursor-pointer "
              onMouseEnter={() => handleDropLinksToggle("prints")}
              onMouseLeave={() => handleDropLinksToggle("")}
            >
              <h3 className="text-[1rem] mr-[1rem] hover:text-[#a90404] !font-sans font-semibold text-[#000000ef]">
                Prints
              </h3>

              <IoChevronForwardOutline
                className={`text-[1.1rem]  transition-transform duration-200 ${
                  dropLinksToggle === "prints"
                    ? "rotate-270 text-[#a90404]"
                    : "rotate-90"
                }`}
              />
            </div>

            {/* HOME DECOR */}

            <div
              className="flex cursor-pointer items-center justify-between px-6 py-2 text-[#000000f7]"
              onMouseEnter={() => handleDropLinksToggle("homeDecor")}
              onMouseLeave={() => handleDropLinksToggle("")}
            >
              <h3 className="text-[1rem] mr-[1rem] hover:text-[#a90404] !font-sans font-semibold text-[#000000ef]">
                Home Decor
              </h3>

              <IoChevronForwardOutline
                className={`text-[1.1rem]  transition-transform duration-200 ${
                  dropLinksToggle === "homeDecor"
                    ? "rotate-270 text-[#a90404]"
                    : "rotate-90"
                }`}
              />
            </div>

            {/* personalized GIFTS */}
            <div
              className="flex cursor-pointer items-center justify-between px-6 py-2 text-[#000000f7]"
              onMouseEnter={() => handleDropLinksToggle("gifts")}
              onMouseLeave={() => handleDropLinksToggle("")}
            >
              <h3 className="text-[1rem] mr-[1rem] hover:text-[#a90404] !font-sans font-semibold text-[#000000ef]">
                Personalized Gifts
              </h3>

              <IoChevronForwardOutline
                className={`text-[1.1rem]  transition-transform duration-200 ${
                  dropLinksToggle === "gifts"
                    ? "rotate-270 text-[#a90404]"
                    : "rotate-90"
                }`}
              />
            </div>
            {/* OCCASIONS */}
            <div
              className="flex cursor-pointer items-center justify-between px-6 py-2 text-[#000000f7]"
              onMouseEnter={() => handleDropLinksToggle("occasions")}
              onMouseLeave={() => handleDropLinksToggle("")}
            >
              <h3 className="text-[1rem] mr-[1rem] hover:text-[#a90404] !font-sans font-semibold text-[#000000ef]">
                Occasions
              </h3>

              <IoChevronForwardOutline
                className={`text-[1.1rem]  transition-transform duration-200 ${
                  dropLinksToggle === "occasions"
                    ? "rotate-270 text-[#a90404]"
                    : "rotate-90"
                }`}
              />
            </div>
            {/* CITIES */}
            <div
              className="flex cursor-pointer items-center justify-between px-6 py-2 text-[#000000f7]"
              onMouseEnter={() => handleDropLinksToggle("cities")}
              onMouseLeave={() => handleDropLinksToggle("")}
            >
              <h3 className="text-[1rem] mr-[1rem] hover:text-[#a90404] !font-sans font-semibold text-[#000000ef]">
                Countries/Cities
              </h3>

              <IoChevronForwardOutline
                className={`text-[1.1rem]  transition-transform duration-200 ${
                  dropLinksToggle === "cities"
                    ? "rotate-270 text-[#a90404]"
                    : "rotate-90"
                }`}
              />
            </div>
            {/* BEST OFFERS */}
            <div className="flex cursor-pointer items-center justify-between  px-6 py-2 text-[#000000f7]">
              <h3 className="text-[1rem] mr-[1rem] hover:text-[#920202] !font-sans font-semibold text-[#000000ef]">
                Best Offers
              </h3>
            </div>
          </div>
          {/* SEARCH INPUT */}
          {!showLogo && <Coutriesbox></Coutriesbox>}
          {showLogo && (
            <div className="flex items-center gap-2 lg:bg-[white] ">
              <input
                type="text"
                placeholder="Search products"
                className="hidden lg:block w-[10rem] xl:w-[15rem] bg-white !px-2 py-1 text-[0.9rem] placeholder-gray-400 placeholder-semibold outline-none"
              />
              <div className="lg:bg-gray-300 lg:!p-[0.4rem]">
                <FiSearch className="text-[1.5rem] text-[#37343494]" />
              </div>
            </div>
          )}
        </div>
        {/* PRINTS2 */}
        {dropLinksToggle === "prints" && (
          <Prints2
            dropLinksToggle={dropLinksToggle}
            handleDropLinksToggle={handleDropLinksToggle}
          ></Prints2>
        )}

        {/* HOME DECOR2 */}
        {dropLinksToggle === "homeDecor" && (
          <HomeDecor2
            dropLinksToggle={dropLinksToggle}
            handleDropLinksToggle={handleDropLinksToggle}
          ></HomeDecor2>
        )}

        {/* GIFTS2 */}
        {dropLinksToggle === "gifts" && (
          <Gifts2
            dropLinksToggle={dropLinksToggle}
            handleDropLinksToggle={handleDropLinksToggle}
          ></Gifts2>
        )}
        {/* OCCASIONS2 */}
        {dropLinksToggle === "occasions" && (
          <Occasions2
            dropLinksToggle={dropLinksToggle}
            handleDropLinksToggle={handleDropLinksToggle}
          ></Occasions2>
        )}
        {/* CITIES2 */}
        {dropLinksToggle === "cities" && (
          <Cities2
            dropLinksToggle={dropLinksToggle}
            handleDropLinksToggle={handleDropLinksToggle}
          ></Cities2>
        )}
      </div>
    </>
  );
}
