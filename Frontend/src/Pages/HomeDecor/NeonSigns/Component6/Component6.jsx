import React from "react";
import neonImage from "./Component6Img/neon-podium-pedestal-platform-advertising-place-scene.jpg";

export default function Component6() {
  return (
    <section className="w-full bg-white py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={neonImage}
              alt="Custom Neon Signs"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-[1.3rem]  font-extrabold text-black">
              Reasons to Buy Custom Neon Signs in Wholesale
            </h2>

            <p className="text-[#797575] text-[0.8rem] font-sans leading-relaxed">
              The wholesale shopping experience with CanvasChamp is simple and
              easy. Customers can browse through the large selection of canvas
              prints, custom prints, photo prints and now LED neon signs. They
              can select a size and style, and customize it to their
              specifications. Customers can choose text to be printed on the
              custom neon signs and buy in bulk.
            </p>

            <p className="text-[#797575] text-[0.8rem] font-sans leading-relaxed">
              When it comes to quality, CanvasChamp offers top-notch products
              that are made from high-grade materials. As a result, the products
              are durable and long-lasting, ensuring that customers get the best
              value for their money.
            </p>

            <p className="text-[#797575] text-[0.8rem] font-sans leading-relaxed">
              Whether customers are looking for custom neon signs in bulk for
              their home or office, a gift, or a business, CanvasChamp offers a
              wide variety of options for wholesale shopping. With its
              high-quality products, convenient ordering process, and affordable
              prices, CanvasChamp is an excellent choice for anyone looking for
              custom prints, canvases, or LED neon signs indoors for the
              best-personalized experience.
            </p>

            <div className="mt-2">
              <button className="px-8 py-3 bg-[#C41E3A] text-white font-semibold rounded-full hover:bg-[#A01830] transition-colors duration-300 text-sm sm:text-base">
                Buy Custom Neon Signs In Bulk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
