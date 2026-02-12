import { useContext, useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { printItems, occasionItems } from "./PrintData";
import { DropLinksContext } from "../DropLinksStore";
import PrintsByOccesion from "./PrintsByOccesion";

export default function Print() {
  const { dropLinksToggle, handleDropLinksToggle } =
    useContext(DropLinksContext);

  const [occasionOpen, setOccasionOpen] = useState(false);

  // 🔹 CHANGE 1: Separate state for By Occasion

  return (
    <div className="w-full rounded-md bg-white font-sans px-1">
      {/* HEADING + ARROW */}
      <button
        type="button"
        className="flex w-full items-center justify-between px-6 py-3 text-[#000000e3] hover:bg-gray-100 rounded-md"
        onClick={() => {
          const nextToggle = dropLinksToggle === "prints" ? "" : "prints";
          handleDropLinksToggle(nextToggle);
          if (nextToggle === "") {
            setOccasionOpen(false); // 🔹 close child when parent closes
          }
        }}
      >
        <h3 className="text-[1.3rem] font-bold text-gray-900/90">Prints</h3>

        <IoChevronForwardOutline
          className={`text-gray-700 transition-transform duration-200 ${
            dropLinksToggle === "prints" ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* LIST ITEMS */}
      {dropLinksToggle === "prints" && (
        <ul className="border-l-2 border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
          {/* NORMAL PRINT ITEMS */}
          {printItems.map((itemObj) => (
            <li
              key={itemObj.name}
              className="
    relative
    text-sm font-medium text-gray-800
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
              <a
                href={itemObj.link}
                className="block w-full h-full pl-6 py-3 font-bold text-[#000000a2]"
              >
                {itemObj.name}
                {itemObj.isNew && (
                  <span className="ml-2 rounded-md bg-[#4b0000] px-1.5 py-[1px] text-[10px] font-semibold text-white">
                    New
                  </span>
                )}
              </a>
            </li>
          ))}

          {/* 🔹 CHANGE 3: By Occasion (CLICK based, inside same UL) */}
          {/* 🔹 By Occasion (same styling + click based) */}
          <PrintsByOccesion
            occasionOpen={occasionOpen}
            setOccasionOpen={setOccasionOpen}
          ></PrintsByOccesion>
        </ul>
      )}
    </div>
  );
}
