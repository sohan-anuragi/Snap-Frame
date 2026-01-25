import { useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { byRecipientsItems } from "./ByRecipientsData";

export default function GiftsByRecipients() {
  const [byRecipientsOpen, setByRecipientsOpen] = useState(false);

  return (
    <>
      <li
        className={`
              ${byRecipientsOpen === true ? "" : "hover:bg-gray-100"}
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
          onClick={() => setByRecipientsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between pr-4"
        >
          <span className="font-bold  text-[#000000ca]">By Recipients</span>

          <IoChevronForwardOutline
            className={`text-gray-600 text-[1.2rem] transition-transform duration-200 ${
              byRecipientsOpen ? "rotate-90" : ""
            }`}
          />
        </button>

        {/* 🔹 Nested UL */}
        {byRecipientsOpen && (
          <ul className="mt-2 ml-2 border-l-2 border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
            {byRecipientsItems.map((item) => (
              <li
                key={item.name}
                className="
            relative
            pl-4 py-2
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
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
}
