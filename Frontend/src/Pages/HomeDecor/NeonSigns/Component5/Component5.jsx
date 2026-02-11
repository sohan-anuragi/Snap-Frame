import React from "react";
import step1 from "./Component5Img/step-1.jpg";
import step2 from "./Component5Img/step-2.jpg";
import step3 from "./Component5Img/step-3.jpg";
import step4 from "./Component5Img/step-4.jpg";
import step5 from "./Component5Img/step-5.jpg";

const steps = [
  {
    id: 1,
    image: step1,
    title: "Select your size & text",
    description:
      "Select the font style of your choice. You will have choices likes Aerolite, Roboto, Pseudo and so much more. Also select the size of your neon sign from the options – small, medium, large, X-large, XX-large and supersized.",
  },
  {
    id: 2,
    image: step2,
    title: "Select your colour",
    description:
      "Apart from size and text, CanvasChamp also lets you customize the colour option. You can choose from 30+ colours, including green, warm white, purple, green, white, orange, lemon yellow, hot pink, blue, and others.",
  },
  {
    id: 3,
    image: step3,
    title: "Select your backboard",
    description:
      "Now, it's time to choose the backboard. You can select any from the four options: Cut Around Acrylic, Rectangle Acrylic, Cut to Acrylic, and Open Box. We also give you the option to customize your neon sign as per country adapter.",
  },
  {
    id: 4,
    image: step4,
    title: "Select hardware options",
    description:
      "You can choose the respective hardware if you want to mount or hang your neon sign. We also provide remote controller to change the intensity and colour of the neon light.",
  },
  {
    id: 5,
    image: step5,
    title: "Make payment and checkout",
    description:
      "Congratulation. You have successfully customized your neon sign. Now it's time to check out and wait for the order to arrive at your doorstep.",
  },
];

export default function Component5() {
  return (
    <section className="w-full bg-black py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12">
          Steps to Customize Neon Signs
        </h2>

        {/* Steps Grid */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-12px)] lg:w-[calc(20%-20px)] flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full mb-4 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="flex-1">
                <h3 className="text-white font-semibold text-center mb-3 text-sm sm:text-base">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-[#C41E3A] text-white font-semibold rounded-full hover:bg-[#A01830] transition-colors duration-300 text-sm sm:text-base">
            Create Your Own Neon Sign
          </button>
        </div>
      </div>
    </section>
  );
}
