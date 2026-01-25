import { MdPhotoCamera } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import { FaTruckFast } from "react-icons/fa6";

export default function MainComponent1() {
  const features = [
    {
      icon: <MdPhotoCamera />,
      title: "100% Customization",
      description: "Customize every detail of your personalized gifts.",
    },
    {
      icon: <FaGift />,
      title: "Personalized Gifting One-Stop Shop",
      description: "We have a custom photo gift for everyone!",
    },
    {
      icon: <BiPackage />,
      title: "Free Returns",
      description: "No-questions-asked return policy for your peace of mind.",
    },
    {
      icon: <FaTruckFast />,
      title: "Fast & Reliable Delivery",
      description:
        "Lightning-fast delivery nationwide—get your custom prints shipped at the earliest!",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full py-12 px-4 border-b-[1px] border-b-[#e3e3e3] bg-[#fafafa] mb-[1rem] pb-[5rem] ">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-[900] text-[#0f0f0f] font-serif mb-12 max-w-6xl">
        Why Buy Photo Printing & Custom Gifts From CanvasChamp?
      </h2>

      {/* Features Container */}
      <div className="flex flex-wrap justify-center items-start w-full max-w-7xl gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center flex-1 min-w-[45%] sm:min-w-[40%] md:min-w-[22%] max-w-[18rem]"
          >
            {/* Icon */}
            <div className="text-6xl mb-4 text-[#1a1a1a]">{feature.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 leading-tight">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#666666] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
