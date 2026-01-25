import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function QuickLinks2() {
  const [activeIndex, setActiveIndex] = useState(null);

  const QuickLinsks2Data = [
    {
      id: 1,
      heading: "About",
      links: [
        "About Us",
        "Privacy Policy",
        "Terms of Use",
        "Free and Fast Shipping",
        "Gift Card",
        "Sitemap",
      ],
    },
    {
      id: 2,
      heading: "Help",
      links: ["Contact Us", "Company FAQS", "FAQs"],
    },
    {
      id: 3,
      heading: "Inspiration",
      links: [
        "Refer and Earn",
        "Pricing and Options",
        "Special Offers",
        "Read our Latest Blog",
        "Idea Gallery",
      ],
    },
    {
      id: 4,
      heading: "CanCas Products",
      links: [
        "Canvas Prints",
        "Wall Display",
        "Lyrics on Canvas",
        "Panoramic Canvas Prints",
        "Custom Caricature",
        "Split Canvas Prints",
        "Wholesale Canvas Prints",
      ],
    },
    {
      id: 5,
      heading: "Our Products",
      links: [
        "Photo Puzzles",
        "Photo Pillows",
        "Photo Calendars",
        "Photo Books",
        "Photo Mug",
        "Photo Coasters",
        "Photo Prints",
        "Poster Prints",
        "Photo Magnets",
        "Magic Photo Mugs",
      ],
    },
    {
      id: 6,
      heading: "Occasions",
      links: [
        "Valentine’s Day Gifts",
        "Mother’s Day Gifts",
        "Father's Day Gifts",
      ],
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-4 py-4 md:py-12">
      {/* Accordion Container */}
      <div className="w-full  mx-auto space-y-2 border-b pt-[1rem] border-gray-200 ">
        {QuickLinsks2Data.map((item, index) => (
          <div key={item.id} className="border-b border-gray-200 bg-[#f0efef] ">
            {/* Heading */}
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex items-center justify-between py-2 px-2 sm:px-4 hover:bg-[#eaeaea] transition-colors duration-200 text-left"
            >
              <h3 className="text-[1rem] font-semibold text-black/80">
                {item.heading}
              </h3>
              {/* Arrow Icon */}
              <IoIosArrowDown
                className={`w-5 h-5 text-black/80 transition-transform duration-300 flex-shrink-0 ml-4 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Content - renders only when active */}
            {activeIndex === index && (
              <div className="px-2 sm:px-4 pb-4">
                <div className="flex flex-wrap -mx-2">
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className="w-1/3 px-2 mb-2 text-[0.9rem] text-black/70 hover:text-[#9d0000] font-normal relative"
                    >
                      {item.links[linkIndex]}
                      {/* Hover underline pseudo-element */}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#b30303] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
