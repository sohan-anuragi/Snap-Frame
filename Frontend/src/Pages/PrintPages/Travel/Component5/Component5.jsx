import { useState } from "react";

import personalizedGifts from "./Component5.Img/personalized_gifts_for_girlfriend.png";
import holiGifts from "./Component5.Img/custom_holy_gifts.png";
import valentineGifts from "./Component5.Img/valentine-day-sale-in.png";

const blogPosts = [
  {
    id: 1,
    title: "Why Personalized Gifts for Girlfri...",
    date: "February, 05 2026",
    description:
      "Personalized gifts for girlfriend add emotion and meaning that store-bought gifts often miss. See why custom gifts...",
    image: personalizedGifts,
  },
  {
    id: 2,
    title: "Holi Decoration Ideas for Home & P...",
    date: "January, 09 2026",
    description:
      "Try colorful Holi decoration ideas for home and parties with easy DIY decor, vibrant backdrops, photo gifts, metal...",
    image: holiGifts,
  },
  {
    id: 3,
    title: "Valentine's Day Gift Ideas",
    date: "December, 29 2025",
    description:
      "Discover Valentine's Day gift ideas, romantic home decor tips, and personalized Valentine gifts like photo pillows...",
    image: valentineGifts,
  },
];

const Component5 = () => {
  return (
    <section className="w-full bg-black py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Left Section - Text & CTA */}
          <div className="col-span-1 flex flex-col mt-[3rem] justify-start">
            <h2 className="text-4xl font-bold font-serif text-white">
              Related <br />
              Blog Reads
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Check out our Tips, trends and tons of inspiration for
              Personalised Gift Ideas
            </p>
            <button className="mt-8 w-fit rounded-full bg-red-600 px-6 py-2 font-semibold text-white transition hover:bg-red-700">
              View All
            </button>
          </div>

          {/* Right Section - Blog Cards */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 
              [&>*:nth-child(3)]:-translate-y-8"
            >
              {blogPosts.map((post) => (
                <div key={post.id} className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative ">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-4">
                    <h3 className="text-base font-semibold text-white group-hover:text-gray-200">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">{post.date}</p>
                    <p className="mt-3 line-clamp-2 text-sm text-gray-300">
                      {post.description}
                    </p>
                    <a
                      href="#"
                      className="mt-3 inline-block text-sm font-semibold text-red-600 transition hover:text-red-500"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component5;
