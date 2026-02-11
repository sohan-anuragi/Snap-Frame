import React from "react";
import selectSizeImg from "./Component3Img/pp_select_size.jpg";
import uploadImg from "./Component3Img/pp_upload.jpg";
import previewImg from "./Component3Img/pp_preview.jpg";

export default function Component3() {
  const steps = [
    {
      id: 1,
      title: "Choose the size",
      description: "Choose the size of the puzzle pieces and number of pieces",
      image: selectSizeImg,
    },
    {
      id: 2,
      title: "Choose an image",
      description: "Choose an image to design your photo puzzle",
      image: uploadImg,
    },
    {
      id: 3,
      title: "Get a Preview",
      description: "Preview submit and pay for the design",
      image: previewImg,
    },
  ];

  return (
    <div className="w-full py-12 px-4 md:px-8 lg:px-16 pb-[3rem] border-t-[1px] border-gray-300 bg-white">
      <div className="max-w-7xl mt-[2rem] mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl  font-bold text-black font-sans">
            HERE'S HOW TO MAKE YOUR VERY OWN PHOTO PUZZLE
          </h1>
          <p className="text-sm text-[#747070] !mb-[2rem] font-sans leading-relaxed">
            In 3 easy steps, a photo puzzle can become your perfect little
            pastime!
          </p>
        </div>
        <div className="flex items-center mt-[-1rem] !mb-[4rem] justify-center ">
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
          <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#D1D5DB]" />
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 mt-[2rem] md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Step Image */}
              <div className="w-full h-48 px-[2rem] md:h-56 flex items-center justify-center  overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Step Title */}
              <h3 className="text-lg md:text-xl font-bold text-black font-sans">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-[#747070] font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button Section */}
        <div className="flex justify-center pt-4">
          <button className="bg-red-700 rounded-md hover:bg-red-800 text-white font-bold py-3 px-8 transition-colors duration-300 text-base">
            CREATE YOUR PUZZLE
          </button>
        </div>
      </div>
    </div>
  );
}
