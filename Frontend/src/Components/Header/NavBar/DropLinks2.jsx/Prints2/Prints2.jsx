import { printItems, occasionItems } from "../../DropLinks/Prints/PrintData";
import img1 from "../../../../../assets/Prints/prints-1.jpg";
import img2 from "../../../../../assets/Prints/prints-2.jpg";

export default function Prints2({ dropLinksToggle, handleDropLinksToggle }) {
  const heading = printItems?.[0]?.name || "";
  const printLinks = Array.isArray(printItems) ? printItems.slice(1) : [];

  return (
    <>
      {/* dropdown container */}
      <div
        className="absolute top-10 px-4 left-0 w-screen h-auto bg-[white]  "
        onMouseEnter={() => handleDropLinksToggle("prints")}
        onMouseLeave={() => handleDropLinksToggle("")}
      >
        <div className="mx-auto max-w-6xl  py-1">
          {/* links layout */}
          <div className="flex flex-col lg:flex-row gap-4">
            <ul className="p-4 w-[20%] ">
              {/* heading */}
              {heading && (
                <h2 className="text-base font-bold text-[#050505a9] font-sans! mb-2 pb-2 border-b border-[#ccccccb8] inline-block">
                  {heading}
                </h2>
              )}
              {printLinks.map((item) => (
                <li key={item.name} className="">
                  <a
                    href={item.link}
                    className="text-[0.8rem] font-medium   font-sans
                    text-[#000000a6]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="p-4 mt-[-0.3rem] w-[20%] bg-[#f8f8f8]">
              {/* heading */}
              <h2 className="text-base font-bold text-[#050505a9] font-sans! mb-2 pb-2 border-b border-[#c9c9c9b8] inline-block">
                By Occasion
              </h2>

              {occasionItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-[0.8rem] font-medium   font-sans
                    text-[#000000a6]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* image section */}
            <div className="flex px-4 flex-1 items-center justify-center">
              <div className="flex w-full gap-4">
                <img
                  src={img1}
                  alt="prints preview 1"
                  className="w-1/2 h-auto object-cover"
                />
                <img
                  src={img2}
                  alt="prints preview 2"
                  className="w-1/2 h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
