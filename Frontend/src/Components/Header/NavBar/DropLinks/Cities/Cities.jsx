import { useContext } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { DropLinksContext } from "../DropLinksStore";
import { topCities } from "./CitiesData";

export default function Cities() {
  const { dropLinksToggle, handleDropLinksToggle } =
    useContext(DropLinksContext);

  const otherCities = ["Other Cities"];

  return (
    <div className="w-full rounded-md bg-white font-sans px-1 lg:w-[20%]">
      {/* HEADING + ARROW */}
      <button
        type="button"
        className="flex w-full items-center justify-between px-6 py-3 text-[#000000e3] hover:bg-gray-100 rounded-md"
        onClick={() =>
          handleDropLinksToggle(dropLinksToggle === "cities" ? "" : "cities")
        }
      >
        <h3 className="text-[1.3rem] font-bold text-gray-900/90">Cities</h3>

        <IoChevronForwardOutline
          className={`text-gray-700 transition-transform duration-200 lg:hidden ${
            dropLinksToggle === "cities" ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* LIST ITEMS */}
      {dropLinksToggle === "cities" && (
        <ul className="border-l-2 border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
          {/* TOP CITIES */}
          {topCities.map((city) => (
            <li
              key={city.name}
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
              <a href={city.link} className="block w-full h-full pl-6 py-3">
                <span className="font-bold text-[#000000a2]">{city.name}</span>
              </a>
            </li>
          ))}

          {/* OTHER CITIES */}
          {otherCities.map((city) => (
            <li
              key={city}
              className="
                relative
                pl-6 py-3
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
              <a href="#" className="font-bold text-[#000000a2]">
                {city}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
