import React from "react";

export default function Component2() {
  return (
    <div className="w-full flex flex-col border-b-[1px] border-[#D1D5DB] items-center px-[3.5rem] py-[2.5rem] gap-[2rem]">
      <div className="w-full flex flex-col items-center gap-[0.6rem]">
        <h2 className="text-[1.8rem] font-extrabold text-black text-center">
          CUSTOM CANVAS PRINTS INFO
        </h2>
        <div className="flex items-center justify-center gap-[0rem]">
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
          <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#D1D5DB]" />
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-start gap-[3rem]">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/2 flex flex-col gap-[0.9rem]">
          <div className="flex flex-col gap-[0.35rem]">
            <h3 className="text-[0.9rem] opacity-90 font-semibold text-black">
              Customize your Canvas Prints Experience
            </h3>
            <p className="text-[0.8rem] opacity-70 text-black">
              Create customized memory mazes at your home by transforming your
              favorite digital pictures into canvas printing. Canvas Prints is
              the easiest and also the most trending way to create long lasting
              memories out of the photos you love.
            </p>
          </div>

          <div className="flex flex-col gap-[0.35rem]">
            <h3 className="text-[0.9rem] opacity-90 font-semibold text-black">
              Planting Memories
            </h3>
            <p className="text-[0.8rem] opacity-70 text-black">
              Not just paint, but plant living memories on walls - May it be
              your home or office! Behold, the Canvas Prints, an innovation that
              allows you to decorate your home with photos of your memories or
              images that just help instilling that “feel-good” factor in you.
              Canvas Prints involve roll canvas material on which the photo of
              your choice is printed and put up on your walls. These canvases
              can be of mounted type as well, which are available without the
              need to be stuck to a wall. Latest advances in technology help in
              designing 3D Canvas Printing using a focus light technology. Get
              ready to get lost in the memory maze that will be your home!
            </p>
          </div>

          <p className="text-[0.8rem] opacity-70 text-black">
            Let lose your creative juices into customizing your own Canvas
            Prints Online with the range of options available with us. Upload
            your photos and unfurl for yourself the greatest Canvas experience
            that you can gift to yourself or your loved ones. Buy best high
            quality canvas prints here. There are other premium quality canvas
            printing options customizations in paper size and quality which
            range from 8"*8" to 54"*54".
          </p>

          <p className="text-[0.8rem] opacity-70 text-black">
            A picture is incomplete till you find the perfect frame for it.{" "}
            <a className="text-[#DC2626]" href="#">
              CanvasChamp in India
            </a>{" "}
            provides options between rolled canvas, single panel and split
            canvas prints, whichever suits your style, to create a truly
            remarkable memory!
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-1/2 flex flex-col gap-[0.9rem]">
          <div className="flex flex-col gap-[0.35rem]">
            <h3 className="text-[0.8rem] opacity-90 font-semibold text-black">
              Gift love in the form of Canvas art
            </h3>
            <p className="text-[0.8rem] opacity-70 text-black">
              100% of our customers who gifted a Canvas to their friends were
              happy with the way the gifts were received by their friends.
              Canvas Prints are the best gift for any occasion and at
              CanvasChamp, we take utmost care in making the special day
              memorable for your friend.
            </p>
          </div>

          <p className="text-[0.8rem] opacity-70 text-black">
            Rekindle your relationship with the power of gifting. Remember how
            intensely our parents & grandparents still talk about the age when
            people used to gift memories to each other in the form of exchanging
            letters. The same feel in the new age could be relived using Photos
            on Canvas. We help you make{" "}
            <a className="text-[#DC2626]" href="#">
              gifting as personalized
            </a>{" "}
            as it could be.
          </p>

          <div className="flex flex-col gap-[0.35rem]">
            <h3 className="text-[0.8rem] opacity-90 font-semibold text-black">
              What We Offer with Custom Canvas Prints?
            </h3>
            <p className="text-[0.8rem] opacity-70 text-black">
              CanvasChamp is at the forefront of changing printing services into
              an Online shopping experience
            </p>
          </div>

          <div className="flex flex-col gap-[0.45rem]">
            <p className="text-[0.8rem] opacity-70 text-black">
              Four simple steps to make a Classic Pictures or Personalized
              Canvas online
            </p>
            <ul className="list-disc pl-[1.1rem] text-[0.8rem] opacity-70 text-black flex flex-col gap-[0.3rem]">
              <li>
                Customize your photo into a canvas format with our online
                Collage Maker
              </li>
              <li>Choose your custom canvas style</li>
              <li>
                <a className="text-[#DC2626]" href="#">
                  Place your order
                </a>{" "}
                online at CanvasChamp
              </li>
              <li>
                Receive the neatly packed, hand-made customized canvas at your
                door-step anywhere in India.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
