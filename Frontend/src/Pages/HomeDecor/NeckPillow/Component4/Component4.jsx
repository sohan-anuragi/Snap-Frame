import React from "react";
import step1 from "./Component4Img/step-1.jpg";
import step2 from "./Component4Img/step-2.jpg";
import step3 from "./Component4Img/step-3.jpg";
import step4 from "./Component4Img/step-4.jpg";

export default function Component4() {
  const steps = [
    {
      id: 1,
      image: step1,
      title: "Select the Size",
      description:
        "We offer three sizes - Kids Small, Adult Medium, and Adult Large. Choose the one that fits you best.",
    },
    {
      id: 2,
      image: step2,
      title: "Upload the Photo",
      description:
        "Add a personal touch by selecting and uploading a photo from your device. It can be a picture from your travels, a family photo, or even a pet photo.",
    },
    {
      id: 3,
      image: step3,
      title: "Add the Clipart & Text",
      description:
        "Infuse more personality by adding clipart or text to your travel sleeping pillow. It could be a meaningful quote, a funny saying, or a favourite icon.",
    },
    {
      id: 4,
      image: step4,
      title: "Make Payment and Checkout",
      description:
        "Once you're happy with your design, make the payment, and we'll start preparing your personalised travel pillow. So sit back, relax, and wait for your unique comfort.",
    },
  ];

  return (
    <div className="w-full py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 font-sans">
          Steps to Customise Travel Pillows
        </h1>

        {/* Subtitle */}
        <p className="text-[0.9rem] opacity-70 font-sans text-center mb-12 max-w-4xl mx-auto">
          At CanvasChamp, we're all about personalising comfort. So here's how
          you can customise a travel pillow that matches your style and enhances
          your travel experiences:
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white  overflow-hidden transition-shadow duration-300 "
            >
              {/* Step Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Step Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-[0.9rem] font-semibold opacity-85 font-sans text-center">
                  {step.title}
                </h3>
                <p className="text-[0.8rem] opacity-70 font-sans text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-base">
            Make Your Own Neck Pillow
          </button>
        </div>
      </div>
    </div>
  );
}
