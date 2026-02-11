import React from "react";
import designIdeasImg from "./Component5Img/design-ideas-for-travel-pillows.jpg";

export default function Component5() {
  const designIdeas = [
    {
      id: 1,
      title: "Travel Memories:",
      description:
        "Print your favourite travel photos on your travel pillow, turning your pillow into a nostalgia-filled comfort item.",
    },
    {
      id: 2,
      title: "Inspiring Quotes:",
      description:
        "Personalise the travel neck pillow with an uplifting quote or mantra to bring positivity to your journey.",
    },
    {
      id: 3,
      title: "Cartoon Characters:",
      description:
        "For kids' neck pillows for car travel, include their favourite cartoon character to make travel fun.",
    },
    {
      id: 4,
      title: "Map Prints:",
      description:
        "Showcase your love for travel with a world map or a specific city's map print on a travel pillow.",
    },
    {
      id: 5,
      title: "Family and Pets:",
      description:
        "Keep your loved ones close by printing a family picture or a photo of your pet on your neck support travel pillow.",
    },
  ];

  return (
    <div className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* Left Column - Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-black font-sans">
            Unique Design Ideas for Custom Travel Pillows
          </h2>

          {/* Intro Paragraph */}
          <p className="text-[0.8rem] opacity-70 font-sans leading-relaxed">
            Unleash your creative potential with CanvasChamp's custom travel
            pillows. The joy of designing your own travel pillow is an exciting
            process that allows you to make a travel accessory genuinely
            personal. Here are five unique design ideas to inspire you:
          </p>

          {/* Design Ideas */}
          <div className="space-y-4">
            {designIdeas.map((idea) => (
              <div key={idea.id} className="space-y-1">
                <h3 className="text-[0.9rem] font-semibold opacity-85 font-sans">
                  {idea.title}
                </h3>
                <p className="text-[0.8rem] opacity-70 font-sans leading-relaxed">
                  {idea.description}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="pt-4">
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-base">
              Gift Custom Neck Pillow
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={designIdeasImg}
            alt="Unique Design Ideas for Custom Travel Pillows"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
