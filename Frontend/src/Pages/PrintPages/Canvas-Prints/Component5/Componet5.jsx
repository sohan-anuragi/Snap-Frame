import React from "react";

// Import images from Component5Img folder
import originalImg from "./Component5Img/original.jpg";
import sepiaImg from "./Component5Img/sepia.jpg";
import grayScaleImg from "./Component5Img/gray_scale.jpg";
import pixelPaintingImg from "./Component5Img/pixel-painting.jpg";

export default function Component5() {
  // Card data for image customization options
  const customizationCards = [
    {
      id: 1,
      image: originalImg,
      title: "Original Effect",
      description:
        "Want to go in with the original effect of the image? Then choose this image specification.",
    },
    {
      id: 2,
      image: sepiaImg,
      title: "Sepia",
      description:
        "Wish for a stylish, classic image with a brown hue? Then sepia is the option you should choose.",
    },
    {
      id: 3,
      image: grayScaleImg,
      title: "Gray Scale",
      description:
        "Want your picture to be printed in different shades of gray for a spectacular result? Then opt for the gray scale.",
    },
    {
      id: 4,
      image: pixelPaintingImg,
      title: "Pixel Painting",
      description:
        "Want to go for an abstract pixel painting effect? Just choose the style you want!",
    },
  ];

  return (
    <div className="w-full border-b-[1px] border-[#D1D5DB] mb-[2rem] pb-[2rem] flex flex-col items-center px-[3.5rem] py-[2.5rem] gap-[1.8rem]">
      {/* TOP HEADING SECTION */}
      <div className="w-full flex flex-col items-center gap-[0.8rem]">
        <h2 className="text-[1.8rem] font-extrabold text-black text-center">
          IMAGE CUSTOMIZATION
        </h2>
        <div className="flex items-center justify-center mb-[1.5rem] ">
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
          <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#D1D5DB]" />
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
        </div>
      </div>

      {/* DESCRIPTION PARAGRAPHS */}
      <div className="w-full flex flex-col gap-[1rem]">
        <div className="flex flex-col gap-[0.35rem]">
          <h3 className="text-[0.9rem] opacity-90 font-semibold text-black">
            Express Yourself!
          </h3>
          <p className="text-[0.8rem] opacity-70 text-black">
            The amount of options that a customer has with regards to the photo
            which he/she wants to use for the Canvas Printing is literally
            boundless. Customers can choose from digital artworks that are found
            on the Internet, or they can choose from their personal collection
            of photographic memories which can then be printed onto Canvas
            Prints of any size. In terms of customizable options, you have the
            choice of choosing any frame of your choice, along with the option
            of using focal light in order to convert the photo of your choice
            into a one-of-a-kind masterpiece.
          </p>
        </div>

        <p className="text-[0.8rem] opacity-70 text-black">
          You also have the choice to customize your Canvas Prints Online in
          such a way that there are more than one images within the framed area,
          thus allowing for the creation of a collage. There are several filter
          options that you can choose from as well, such as having sepia, gray
          scale, perpetua,{" "}
          <a className="text-[#DC2626]" href="#">
            sierra
          </a>
          , Nashville and many more, which can help you in giving that extra hue
          to make your photo come alive in a way that you had never thought
          possible.
        </p>
      </div>

      {/* IMAGE CUSTOMIZATION CARDS - 4 cards */}
      <div className="w-full flex flex-wrap  gap-[1.2rem]">
        {customizationCards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-[31%] lg:w-[23%] flex justify-center flex-col  gap-[0.6rem]"
          >
            <div className="w-full border-[1px] border-black p-[0.3rem]">
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
