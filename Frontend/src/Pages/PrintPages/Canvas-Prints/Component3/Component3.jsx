import React from "react";

// Import images from Component3Img folder
import photoCollageImg from "./Component3Img/slider-photo-collage.jpg";
import singlePanelImg from "./Component3Img/single-print.jpg";
import splitCanvasImg from "./Component3Img/split-canvas-print.jpg";

export default function Component3() {
  return (
    <div className="w-full border-b-[1px] border-[#D1D5DB] pb-[4rem] mb-[2rem] flex flex-col items-center px-[3.5rem] py-[2.5rem] gap-[1.8rem]">
      {/* TOP HEADING SECTION */}
      <div className="w-full flex flex-col items-center gap-[0.5rem]">
        <h2 className="text-[1.8rem] font-extrabold text-black text-center">
          TYPES OF CANVAS PRINTS
        </h2>
        <p className="text-[0.875rem] opacity-70 text-center">
          We provide the following types of Canvas Prints:
        </p>
        <div className="flex items-center justify-center ">
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
          <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#D1D5DB]" />
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
        </div>
      </div>

      {/* DESCRIPTION PARAGRAPHS */}
      <div className="w-full flex flex-col  gap-[1rem]">
        <p className="text-[0.8rem] opacity-70 text-black">
          Rolled Canvas is in the form of a stretchable tube which comes with an
          ease to expand so you can display it in different ways.{" "}
          <a className="text-[#DC2626]" href="#">
            Single Panel Canvas
          </a>{" "}
          is the most unadulterated & conventional form of Canvas Prints. The
          photo is printed on a single flat panel of high quality wood. Browse
          options for{" "}
          <a className="text-[#DC2626]" href="#">
            Single Panel Canvas Printing
          </a>
          .{" "}
          <a className="text-[#DC2626]" href="#">
            Split Canvas Prints
          </a>{" "}
          is basically split the canvases that allows to transform an ordinary
          picture into blocks of art. the image will be Split in three different
          panels making your photo look like a trendy & artsy split image. Check
          out more{" "}
          <a className="text-[#DC2626]" href="#">
            Split Canvas Printing
          </a>{" "}
          options. Right for you!
        </p>

        <p className="text-[0.8rem] opacity-70 text-black">
          For Canvas printing that perfectly fit your walls, you can choose from
          multiple sizes, different shapes - like square, rectangular or
          panoramic. You can even customize the depth as well as the thickness
          of the Canvas Prints.
        </p>
      </div>

      {/* IMAGE CARDS SECTION - 3 Cards with flex-wrap */}
      <div className="w-full flex  flex-wrap  gap-[1.5rem]">
        {/* CARD 1 - Canvas Photo Collage */}
        <div className="w-full  sm:w-[45%] lg:w-[31%] flex flex-col items-center gap-[0.8rem]">
          <div className="w-full">
            <img
              src={photoCollageImg}
              alt="Canvas Photo Collage"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-[0.9rem] opacity-90 font-semibold text-black text-center">
            Canvas Photo Collage
          </h3>
          <p className="text-[0.8rem] opacity-70 text-black text-center">
            Have different memories to print but the wall space only allows one
            photo to print? Well, now we bring you single photo photo collage in
            which you can club all your special and loving memories together in
            one custom canvas photo collage. With several customization options,
            a canvas photo collage is the best choice for decorating your space.
            Pick your preferred collage style from our online collection!
          </p>
        </div>

        {/* CARD 2 - Single Panel Canvas */}
        <div className="w-full sm:w-[45%] lg:w-[31%] flex flex-col items-center gap-[0.8rem]">
          <div className="w-full">
            <img
              src={singlePanelImg}
              alt="Single Panel Canvas"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-[0.9rem] opacity-90 font-semibold text-black text-center">
            Single Panel Canvas
          </h3>
          <p className="text-[0.8rem] opacity-70 text-black text-center">
            Frame your favourite moment on a single panel canvas to create a
            unique powerful frame. Tell us how you want your photos to print and
            we will provide you with a hand stretched canvas print of high
            picture quality.
          </p>
        </div>

        {/* CARD 3 - Split Canvas Prints */}
        <div className="w-full sm:w-[45%] lg:w-[31%] flex flex-col items-center gap-[0.8rem]">
          <div className="w-full">
            <img
              src={splitCanvasImg}
              alt="Split Canvas Prints"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-[0.9rem] opacity-90 font-semibold text-black text-center">
            Split Canvas Prints
          </h3>
          <p className="text-[0.8rem] opacity-70 text-black text-center">
            Give a unique twist to your canvas and transform a picture into art.
            Our Split canvas will splits a single photo across three panels to
            create a dramatic effect in any room. A modern art display, the
            split canvases will change a plan wall into the work of art. Order
            your art today!
          </p>
        </div>
      </div>
    </div>
  );
}
