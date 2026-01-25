import { useContext } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { personalisedGiftsItems } from "./GiftsData";
import { DropLinksContext } from "../DropLinksStore";
import GiftsByOccasions from "./GiftsByOccasions";
import GiftsByRecipients from "./GiftsByRecipients";

export default function Gifts() {
  const { dropLinksToggle, handleDropLinksToggle } =
    useContext(DropLinksContext);

  return (
    <div className="w-full rounded-md bg-white font-sans px-1">
      {/* HEADING + ARROW */}
      <button
        type="button"
        onClick={() =>
          handleDropLinksToggle(dropLinksToggle === "gifts" ? "" : "gifts")
        }
        className="flex w-full items-center justify-between px-6 py-3 text-[#000000df] hover:bg-gray-100 rounded-md "
      >
        <h3 className="text-[1.3rem] font-bold text-gray-900/90">
          Personalized Gifts
        </h3>
        <IoChevronForwardOutline
          className={`text-gray-700 transition-transform duration-200 ${
            dropLinksToggle === "gifts" ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* LIST ITEMS */}
      {dropLinksToggle === "gifts" && (
        <ul className="border-l-2 border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
          {personalisedGiftsItems.map((itemObj) => (
            <li
              key={itemObj.name}
              className="
                relative
                pl-6 py-3
                text-sm font-medium text-gray-800/90
                hover:bg-gray-100
                after:content-['']
                after:absolute
                after:left-[-2px]
                after:bottom-0
                after:w-[20px]
                after:h-[20px]
                after:border-l-2
                after:border-b-2
                after:border-gray-200
                after:rounded-bl-full
              "
            >
              <a href={itemObj.link} className="font-bold text-[#000000a2]">
                {itemObj.name}
                {itemObj.isNew && (
                  <span className="ml-2 rounded-md bg-[#4b0000] px-1.5 py-[1px] text-[10px] font-semibold text-white">
                    New
                  </span>
                )}
              </a>
            </li>
          ))}

          {/* 🔹 By Occasions (nested submenu) */}
          <GiftsByOccasions></GiftsByOccasions>

          {/* 🔹 By Recipients (nested submenu) */}
          <GiftsByRecipients></GiftsByRecipients>
        </ul>
      )}
    </div>
  );
}
