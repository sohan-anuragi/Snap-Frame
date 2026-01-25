import { footer1Data } from "./footer1Data";

export default function Footer1() {
  return (
    <div className="w-full bg-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto">
        {/* Footer Sections */}
        <div className="flex flex-col gap-1 sm:gap-2">
          {footer1Data.map((section) => (
            <div key={section.id} className="flex flex-wrap gap-x-2 gap-y-1">
              {/* Section Heading */}
              <h3 className="text-[0.9rem] font-semibold text-black/90 mr-2 whitespace-nowrap">
                {section.heading}
              </h3>

              {/* Links Container */}
              <div className="flex flex-wrap gap-x-2 gap-y-0 items-center">
                {section.links.map((link, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {/* Link with hover underline animation */}
                    <a
                      href="#"
                      className="text-[0.8rem] text-black/70 font-normal relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#b90404] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                      {link}
                    </a>

                    {/* Separator - show "/" except for last item */}
                    {index !== section.links.length - 1 && (
                      <span className="text-[0.9rem] text-black/70 font-normal">
                        /
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
