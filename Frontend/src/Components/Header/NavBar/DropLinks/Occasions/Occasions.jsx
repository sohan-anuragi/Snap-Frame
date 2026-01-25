import { useContext } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { DropLinksContext } from "../DropLinksStore";
import SpecialOccasions from "./SpecialOccasions";
import Festivals from "./Festivals";

export default function Occasions() {
  const { dropLinksToggle, handleDropLinksToggle } =
    useContext(DropLinksContext);

  return (
    <div className="w-full rounded-md bg-white font-sans px-1">
      {/* HEADING + ARROW */}
      <button
        type="button"
        className="flex w-full items-center justify-between px-6 py-3 text-[#000000e3] hover:bg-gray-100 rounded-md "
        onClick={() =>
          handleDropLinksToggle(
            dropLinksToggle === "occasion" ? "" : "occasion",
          )
        }
      >
        <h3 className="text-[1.3rem] font-bold text-gray-900/90">Occasion</h3>

        <IoChevronForwardOutline
          className={`text-gray-700 transition-transform duration-200 ${
            dropLinksToggle === "occasion" ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* LIST ITEMS */}
      {dropLinksToggle === "occasion" && (
        <ul className="border-l-2 border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
          <SpecialOccasions />
          <Festivals />
        </ul>
      )}
    </div>
  );
}
