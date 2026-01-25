import { quickLinks1Data } from "./QuickLinks1Data";

export default function QuickLinks1() {
  return (
    <div className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto  pb-2">
        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-2 lg:gap-2">
          {quickLinks1Data.map((section) => (
            <div key={section.id} className="flex flex-col gap-3 sm:gap-4">
              {/* Section Heading */}
              <h4 className="text-[0.9rem] font-bold text-black/90">
                {section.heading}
              </h4>

              {/* Links List */}
              <div className="flex flex-col gap-1 sm:gap-1">
                {section.links.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-[0.9rem] font-normal text-black/70 relative inline-block w-fit after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#d10000] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
