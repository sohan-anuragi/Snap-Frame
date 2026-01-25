import {
  personalisedGiftsItems1,
  personalisedGiftsItems2,
  personalisedGiftsItems3,
  byRecipientsItems,
  byOccasionsItems,
} from "../../DropLinks/Gifts/GiftsData2";

export default function Gifts2({ dropLinksToggle, handleDropLinksToggle }) {
  // const heading = personalisedGiftsItems1?.[0]?.name || "";
  // const giftLinks1 = Array.isArray(personalisedGiftsItems1)
  //   ? personalisedGiftsItems1.slice(1).filter((item) => item.name !== "By Type")
  //   : [];
  //   const giftLinks2 = Array.isArray(personalisedGiftsItems2)
  //   ? personalisedGiftsItems1.slice(1).filter((item) => item.name !== "By Type")
  //   : [];
  //   const giftLinks3 = Array.isArray(personalisedGiftsItems3)
  //   ? personalisedGiftsItems3.slice(1).filter((item) => item.name !== "By Type")
  //   : [];

  return (
    <>
      {/* dropdown container */}
      <div
        className="absolute top-[2.7rem] px-[1rem] left-0 w-[100vw] h-[auto] bg-[white] overflow-hidden"
        onMouseEnter={() => handleDropLinksToggle("gifts")}
        onMouseLeave={() => handleDropLinksToggle("")}
      >
        <div className="mx-auto max-w-7xl py-1 overflow-x-hidden">
          {/* links layout */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* By Type Column */}
            <ul className="p-[1rem] w-1/3">
              <h2 className="text-base font-bold text-[#050505a9] !font-sans mb-[0.5rem] pb-[0.5rem] border-b-[1px] border-[#ccccccb8] inline-block">
                By Type
              </h2>
              {personalisedGiftsItems1.map((item) => (
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

            <ul className="p-[1rem] w-1/3 bg-[#f8f8f8]">
              {personalisedGiftsItems2.map((item) => (
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

            <ul className="p-[1rem] w-1/3">
              {personalisedGiftsItems3.map((item) => (
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

            {/* By Recipients Column */}
            <ul className="p-[1rem] w-1/3 bg-[#f8f8f8]">
              <h2 className="text-base font-bold text-[#050505a9] !font-sans mb-[0.5rem] pb-[0.5rem] border-b-[1px] border-[#ccccccb8] inline-block">
                By Recipients
              </h2>
              {byRecipientsItems.map((item) => (
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

            {/* By Occasions Column */}
            <ul className="p-[1rem] w-1/3">
              <h2 className="text-base font-bold text-[#050505a9] !font-sans mb-[0.5rem] pb-[0.5rem] border-b-[1px] border-[#ccccccb8] inline-block">
                By Occasions
              </h2>
              {byOccasionsItems.map((item) => (
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
          </div>
        </div>
      </div>
    </>
  );
}
