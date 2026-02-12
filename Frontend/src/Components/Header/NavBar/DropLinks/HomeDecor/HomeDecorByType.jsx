import { useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { byTypeItems } from "./HomeDecorData";

export default function HomeDecorByType() {
  const [byTypeOpen, setByTypeOpen] = useState(false);

  return (
    <>
      <li
        className={`
              ${byTypeOpen === true ? "" : "hover:bg-gray-100"}
    relative px-2
    pl-6 py-3
    text-sm font-medium text-gray-800
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
  `}
      >
        <button
          type="button"
          onClick={() => setByTypeOpen((prev) => !prev)}
          className="flex w-full items-center justify-between pr-4"
        >
          <span className="font-bold  text-[#000000ce]">By Type</span>

          <IoChevronForwardOutline
            className={`text-gray-600 text-[1.2rem] transition-transform duration-200 ${
              byTypeOpen ? "rotate-90" : ""
            }`}
          />
        </button>

        {/* 🔹 Nested UL */}
        {byTypeOpen && (
          <ul className="mt-2 ml-2 border-l-2 border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
            {byTypeItems.map((item) => (
              <li
                key={item.name}
                className="
    relative
    text-sm font-medium text-gray-700/85
    hover:bg-gray-100
    after:content-['']
    after:absolute
    after:left-[-2px]
    after:bottom-0
    after:w-[14px]
    after:h-[14px]
    after:border-l-2
    after:border-b-2
    after:border-gray-200
    after:rounded-bl-full
  "
              >
                <a href={item.link} className="block w-full h-full pl-4 py-2">
                  {item.name}
                  {item.isNew && (
                    <span className="ml-2 rounded-md bg-[#4b0000] px-1.5 py-[1px] text-[10px] font-semibold text-white">
                      New
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
}
