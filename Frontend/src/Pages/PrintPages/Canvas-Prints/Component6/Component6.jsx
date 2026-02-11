import React from "react";

// Import image from Component6Img folder
import uploadInterfaceImg from "./Component6Img/req.jpg";

export default function Component6() {
  return (
    <div className="w-full flex flex-col border-b-[1px] border-[#D1D5DB] mb-[2rem] pb-[2rem] items-center px-[3.5rem] py-[2.5rem] gap-[1.8rem]">
      {/* TOP HEADING SECTION */}
      <div className="w-full flex flex-col items-center gap-[0.8rem]">
        <h2 className="text-[1.8rem] font-extrabold text-black text-center">
          IMAGE REQUIREMENTS
        </h2>
        <div className="flex items-center justify-center mb-[1.5rem] ">
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
          <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#D1D5DB]" />
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
        </div>
      </div>

      {/* MAIN CONTENT - TWO COLUMNS */}
      <div className="w-full flex flex-wrap justify-center gap-[3rem]">
        {/* LEFT COLUMN - Text Content */}
        <div className="w-full lg:w-[45%] flex justify-center flex-col gap-[1rem]">
          <p className="text-[0.8rem] opacity-70 text-black">
            We offer you a wide variety of sizes, to help you choose the one
            that best meets your needs.
          </p>

          <ul className="list-disc pl-[1.2rem] text-[0.8rem] opacity-70 text-black flex flex-col gap-[0.5rem]">
            <li>
              We accept JPEG, BMP, TIFF and PNG, image files for canvas printing
            </li>
            <li>
              You can also upload images in an Adobe RGB or RGB color mode
            </li>
            <li>We do not print images uploaded in the CMYK colors spaces</li>
            <li>
              Minimum 100 DPI required in actual size. 1 inch = 100 pixels
            </li>
            <li>
              You can upload a file of upto 50 MB in size. If file is larger
              than 50MB then it is saved in the JPEG format.
            </li>
            <li>
              Image size dimensions are square, double width, dair, digital!
              point and shoot, or long and short panoramic image
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN - Upload Interface Image */}
        <div className="w-full lg:w-[45%] flex justify-center items-start">
          <img
            src={uploadInterfaceImg}
            alt="Upload Interface"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
