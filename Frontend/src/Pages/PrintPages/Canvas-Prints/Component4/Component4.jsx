import React from "react";

// Import images from Component4Img folder
import blackFrameImg from "./Component4Img/black_frame.jpg";
import brownFrameImg from "./Component4Img/brown_frame.jpg";
import brownGoldenImg from "./Component4Img/Brown_Golden.jpg";
import galleryFrameImg from "./Component4Img/Gallery_Frame_White.jpg";
import mirrorImageImg from "./Component4Img/mirror-wrap.jpg";
import imageWrapImg from "./Component4Img/image-wrap.jpg";
import borderColourImg from "./Component4Img/border-colour.jpg";

export default function Component4() {
  // Card data for frames (top row)
  const frameCards = [
    {
      id: 1,
      image: blackFrameImg,
      title: "Black Frame",
      description:
        "If you want to go for a bold effect, then a black frame will display your image in the best way.",
    },
    {
      id: 2,
      image: brownFrameImg,
      title: "Brown Frame",
      description:
        "For a lighter yet impactful effect, the brown frame is exactly what you need for your next Picture on canvas",
    },
    {
      id: 3,
      image: brownGoldenImg,
      title: "Brown Golden Frame",
      description:
        "This frame design will give your image the soft elegance & glow seen in museum paintings and art masterpieces.",
    },
    {
      id: 4,
      image: galleryFrameImg,
      title: "Gallery Frame White",
      description:
        "The ever popular gallery white frame print will give your image the classic look unique to old paintings in galleries.",
    },
  ];

  // Card data for wraps (bottom row)
  const wrapCards = [
    {
      id: 5,
      image: mirrorImageImg,
      title: "Mirror Image",
      description:
        '0.5", 0.75" or 1.5" (depending on the thickness selected) is copied and extended on the edges to wrap around the frame. Select this option if you have any important details on the edges that you do not want to lose.',
    },
    {
      id: 6,
      image: imageWrapImg,
      title: "Image Wrap",
      description:
        '0.5", 0.75" or 1.5" (depending on the thickness selected ) of the image is extended. The classic look. May crop some of your image in the wrap. Select this option if you want to go for the classic look and do not have any important details on the edges.',
    },
    {
      id: 7,
      image: borderColourImg,
      title: "Border Colour",
      description:
        "The wrap is printed with the solid color that you choose from the palette. Select this option when you want the edges to be in sync with the color on the walls.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center border-b-[1px] border-[#D1D5DB] mb-[2rem] pb-[2rem] px-[3.5rem] py-[2.5rem] gap-[1.8rem]">
      {/* TOP HEADING SECTION */}
      <div className="w-full flex flex-col items-center gap-[0.8rem]">
        <h2 className="text-[1.8rem] font-extrabold text-black text-center">
          NARRATE BEAUTIFUL STORIES USING CANVAS DISPLAY & CANVAS COLLAGES
        </h2>
        <p className="text-[0.8rem] px-[3rem] opacity-70 text-black text-center">
          We provide customizable options and diverse varieties when it comes to
          Canvas Prints, owing to the amount of solidarity the prints give by
          uniting you with a particular moment in time. Our customizable options
          include a choice where Prints can be framed and hung on walls, instead
          of being plastered onto them.
        </p>
        <div className="flex items-center justify-center mb-[1.5rem] ">
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
          <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#D1D5DB]" />
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
        </div>
      </div>

      {/* DESCRIPTION PARAGRAPHS */}
      <div className="w-full flex flex-col mb-[1.5rem] gap-[1rem] px-[3rem]">
        <p className="text-[0.8rem] opacity-70 text-black text-center">
          We offer a wide range of stylish and customizable frames which allow
          you to choose the perfect make and look for the photo of your choice.
          These frames can then be mounted and placed anywhere you like. We also
          provide custom-made stretcher mounts, which allow your preferred photo
          to be immortalized in a 3D fashion and polished to viewing perfection.
        </p>
      </div>

      {/* FRAME CARDS - TOP ROW (4 cards) */}
      <div className="w-full flex flex-wrap  gap-[1.2rem]">
        {frameCards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-[31%] lg:w-[23%] flex flex-col  gap-[0.6rem]"
          >
            <div className="w-full border-[1px] border-[#D1D5DB] p-[0.5rem]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-[0.9rem] opacity-90 font-semibold text-black text-center">
              {card.title}
            </h3>
            <p className="text-[0.8rem] opacity-70 text-black text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* WRAP CARDS - BOTTOM ROW (3 cards) */}
      <div className="w-full flex flex-wrap justify-center gap-[1.2rem]">
        {wrapCards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-[31%]  flex flex-col items-center gap-[0.6rem]"
          >
            <div className="w-full border-[1px] border-[#D1D5DB] p-[0.5rem]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-[0.9rem] opacity-90 font-semibold text-black text-center">
              {card.title}
            </h3>
            <p className="text-[0.8rem] opacity-70 text-black text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
