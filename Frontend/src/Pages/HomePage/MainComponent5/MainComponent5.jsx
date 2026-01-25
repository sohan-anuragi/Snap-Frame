import { useState } from "react";

// Import all images from assets/MainComponent5Img
import canvasPrintsImg from "../../../assets/MainComponent5Img/canvas-prints.jpg";
import canvasWallDisplaysImg from "../../../assets/MainComponent5Img/canvas-wall-displays.jpg";
import hexagonCanvasImg from "../../../assets/MainComponent5Img/hexagon-canvas.jpg";
import panoramicCanvasImg from "../../../assets/MainComponent5Img/panoramic-canvas-photo-prints.jpg";
import photoCollageImg from "../../../assets/MainComponent5Img/photo-collage.jpg";
import popArtOnCanvasImg from "../../../assets/MainComponent5Img/pop-art-on-canvas.jpg";
import quotesOnCanvasImg from "../../../assets/MainComponent5Img/quotes-on-canvas.jpg";
import splitCanvasImg from "../../../assets/MainComponent5Img/split-canvas-prints.jpg";

const cardsData = [
  {
    id: 1,
    image: canvasPrintsImg,
    title: "Canvas Prints",
    link: "#",
  },
  {
    id: 2,
    image: canvasWallDisplaysImg,
    title: "Canvas Wall Displays",
    link: "#",
  },
  {
    id: 3,
    image: hexagonCanvasImg,
    title: "Hexagon Canvas",
    link: "#",
  },
  {
    id: 4,
    image: panoramicCanvasImg,
    title: "Panoramic Canvas Prints",
    link: "#",
  },
  {
    id: 5,
    image: photoCollageImg,
    title: "Photo Collage",
    link: "#",
  },
  {
    id: 6,
    image: popArtOnCanvasImg,
    title: "Pop Art on Canvas",
    link: "#",
  },
  {
    id: 7,
    image: quotesOnCanvasImg,
    title: "Quotes on Canvas",
    link: "#",
  },
  {
    id: 8,
    image: splitCanvasImg,
    title: "Split Canvas Prints",
    link: "#",
  },
];

export default function MainComponent5() {
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 mb-[2rem] border-b-[1px] border-gray-200">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
        Shop the Biggest Variety of Canvas Print Styles
      </h2>

      {/* Cards Container */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 sm:gap-4 lg:gap-6 justify-center">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] xl:w-[calc(25%-18px)] flex-shrink-0"
              onMouseEnter={() => setActiveCardId(card.id)}
              onMouseLeave={() => setActiveCardId(null)}
            >
              <div className="block group">
                {/* Card Wrapper */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gray-100 aspect-square">
                    {/* Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 relative z-0"
                    />

                    {/* White Overlay - appears on hover */}
                    <div
                      className={`absolute inset-0 bg-white transition-opacity duration-500 ease-in-out z-10 ${
                        activeCardId === card.id
                          ? "lg:opacity-50 md:opacity-30 "
                          : "opacity-0"
                      }`}
                    />

                    {/* Button - highest z-index */}
                    <a href="#" className="absolute inset-0 z-20">
                      <button
                        className={`w-[60%] bg-[#ab0101ec] hover:bg-[#131212] cursor-pointer text-white font-semibold py-2 px-2 rounded-full text-sm my-2 sm:text-base lg:inline-block hidden absolute transition-all ease-in-out duration-500 ${
                          activeCardId === card.id
                            ? "opacity-100 translate-y-[7rem]"
                            : "opacity-0"
                        } top-2 left-1/2 transform -translate-x-1/2`}
                      >
                        Start Order
                      </button>
                    </a>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 text-center items-center justify-center flex flex-col gap-4">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
                      {card.title}
                    </h3>
                    <button className="w-[60%] bg-[#ab0101ec] hover:bg-red-700 text-white font-semibold py-2 px-2 rounded-full transition-colors duration-200 text-sm my-2 sm:text-base lg:hidden ">
                      Start Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
