import { useEffect, useState } from "react";
import banner1 from "../../../assets/CarouselImg/banner1_13.jpg";
import banner2 from "../../../assets/CarouselImg/banner2_43.jpg";
import banner3 from "../../../assets/CarouselImg/banner3_11.jpg";
import banner4 from "../../../assets/CarouselImg/banner4_10.jpg";
import banner5 from "../../../assets/CarouselImg/banner5_10.jpg";

const slides = [
  {
    id: 1,
    img: banner1,
    link: "#",
  },
  {
    id: 2,
    img: banner2,
    link: "#",
  },
  {
    id: 3,
    img: banner3,
    link: "#",
  },
  {
    id: 4,
    img: banner4,
    link: "#",
  },
  {
    id: 5,
    img: banner5,
    link: "#",
  },
];

export default function HomeCarousel() {
  const [current, setCurrent] = useState(0);

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative  overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <a
            key={slide.id}
            href={slide.link}
            className="min-w-full relative block"
          >
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="
                   w-[100%]
  
    xl:h-[70vh]
    lg:h-[55vh]
    md:h-[45vh]
    sm:h-[35vh]

    max-sm:h-auto
    max-sm:w-full

    object-cover
  "
            />
          </a>
        ))}
      </div>

      {/* Bullet Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
