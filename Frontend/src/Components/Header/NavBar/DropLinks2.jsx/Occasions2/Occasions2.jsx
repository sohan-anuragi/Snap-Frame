import {
  specialOccasionItems,
  festivalItems,
} from "../../DropLinks/Occasions/OccasionData";
import OccasionsCarousel from "./OccasionsCarousel";

export default function Occasions2({ dropLinksToggle, handleDropLinksToggle }) {
  return (
    <>
      {/* dropdown container */}
      <div
        className="absolute top-[2.5rem] px-[1rem] left-0 w-[100vw] h-[auto] bg-[white] overflow-hidden"
        onMouseEnter={() => handleDropLinksToggle("occasions")}
        onMouseLeave={() => handleDropLinksToggle("")}
      >
        <div className="mx-auto max-w-7xl py-1 overflow-x-hidden">
          {/* links layout */}
          <div className="flex flex-col lg:flex-row ">
            {/* Special Occasions Column */}
            <ul className="p-[1rem] w-1/4">
              <h2 className="text-base font-bold text-[#050505a9] !font-sans mb-[0.5rem] pb-[0.5rem] border-b-[1px] border-[#ccccccb8] inline-block">
                Special Occasions
              </h2>
              {specialOccasionItems.map((item) => (
                <li key={item.name} className="">
                  <a
                    href={item.link}
                    className="text-[0.8rem] font-medium    font-sans
                    text-[#000000a6]"
                  >
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

            {/* Festivals Column */}
            <ul className="p-[1rem] w-1/4 bg-[#f8f8f8]">
              <h2 className="text-base font-bold text-[#050505a9] !font-sans mb-[0.5rem] pb-[0.5rem] border-b-[1px] border-[#ccccccb8] inline-block">
                Festivals
              </h2>
              {festivalItems.map((item) => (
                <li key={item.name} className="">
                  <a
                    href={item.link}
                    className="text-[0.8rem] font-medium   font-sans
                    text-[#000000a6]"
                  >
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
            {/* CAROUSEL */}
            <OccasionsCarousel></OccasionsCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
