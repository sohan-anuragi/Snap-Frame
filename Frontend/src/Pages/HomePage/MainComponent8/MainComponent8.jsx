import {
  FaClipboard,
  FaCheck,
  FaAward,
  FaTruck,
  FaMapPin,
  FaHeadphones,
} from "react-icons/fa";

export default function MainComponent8() {
  const features = [
    {
      id: 1,
      icon: FaClipboard,
      heading: "Quality Frames",
      description: "Handcrafted with Passion",
    },
    {
      id: 2,
      icon: FaCheck,
      heading: "Lowest Prices",
      description: "GUARANTEED",
    },
    {
      id: 3,
      icon: FaAward,
      heading: "Premium Quality",
      description: "Material",
    },
    {
      id: 4,
      icon: FaTruck,
      heading: "Lighting",
      description: "Fast Shipping",
    },
    {
      id: 5,
      icon: FaMapPin,
      heading: "Made In",
      description: "India",
    },
    {
      id: 6,
      icon: FaHeadphones,
      heading: "Responsive",
      description: "Customer Service",
    },
  ];

  return (
    <div className="w-full bg-[#f0f0f0] py-8   lg:py-8 px-4 sm:px-4 lg:px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Features Container */}
        <div className="flex flex-wrap justify-between items-stretch gap-4 sm:gap-4 lg:gap-4">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="
                  flex flex-col items-center justify-center text-center
                  w-[calc(50%-8px)]
                  sm:w-[calc(31%-12px)]
                  lg:w-[calc(31.333%-16px)]
                  xl:w-[calc(14.666%-12px)]
                  px-2 py-5 sm:py-6
                "
              >
                {/* Icon */}
                <IconComponent
                  className="
                    w-8 h-8
                    sm:w-9 sm:h-9
                    lg:w-10 lg:h-10
                    text-black/70
                    mb-2 sm:mb-3
                  "
                />

                {/* Heading */}
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-black mb-1">
                  {feature.heading}
                </h3>

                {/* Description */}
                <p className="text-[0.7rem] sm:text-xs md:text-sm text-black/60 font-sans">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
