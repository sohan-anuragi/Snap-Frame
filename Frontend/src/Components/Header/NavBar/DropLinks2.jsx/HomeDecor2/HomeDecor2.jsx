import {
  homeDecorItems,
  byTypeItems,
  rugItems,
  byThemeItems,
} from "../../DropLinks/HomeDecor/HomeDecorData";
import img1 from "../../../../../assets/HomeDecor/home-decor-1.jpg";
import img2 from "../../../../../assets/HomeDecor/home-decor-2.jpg";
import img3 from "../../../../../assets/HomeDecor/home-decor-3.jpg";

export default function HomeDecor2({ dropLinksToggle, handleDropLinksToggle }) {
  const heading = homeDecorItems?.[0]?.name || "";
  const homeDecorLinks = Array.isArray(homeDecorItems)
    ? homeDecorItems.slice(1).filter((item) => item.name !== "By Type")
    : [];

  return (
    <>
      {/* dropdown container */}
      <div
        className="absolute top-[2.5rem] px-[1rem] left-0 w-[100vw] h-[auto] bg-[white]"
        onMouseEnter={() => handleDropLinksToggle("homeDecor")}
        onMouseLeave={() => handleDropLinksToggle("")}
      >
        <div className="mx-auto max-w-7xl py-1">
          {/* links layout */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* By Type Column */}
            <ul className="p-[1rem] flex-1">
              <h2 className="text-base font-bold text-[#050505a9] !font-sans mb-[0.5rem] pb-[0.5rem] border-b-[1px] border-[#ccccccb8] inline-block">
                By Type
              </h2>
              {byTypeItems.map((item) => (
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

            {/* Rugs Column */}
            <ul className="p-[1rem] flex-1 bg-[#f8f8f8]">
              <h2 className="text-base font-bold text-[#050505a9] !font-sans mb-[0.5rem] pb-[0.5rem] border-b-[1px] border-[#ccccccb8] inline-block">
                Personalised Rugs
              </h2>
              {rugItems.map((item) => (
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

            {/* By Theme Column */}
            <ul className="p-[1rem] flex-1">
              <h2 className="text-base font-bold text-[#050505a9] !font-sans mb-[0.5rem] pb-[0.5rem] border-b-[1px] border-[#ccccccb8] inline-block">
                By Theme
              </h2>
              {byThemeItems.map((item) => (
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

            {/* image section */}
            <div className="flex px-[1rem] flex-1 items-center justify-center">
              <div className="grid grid-cols-3 gap-3 w-full">
                <img
                  src={img1}
                  alt="home decor preview 1"
                  className="w-full h-auto object-cover"
                />
                <img
                  src={img2}
                  alt="home decor preview 2"
                  className="w-full h-auto object-cover"
                />
                <img
                  src={img3}
                  alt="home decor preview 3"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
