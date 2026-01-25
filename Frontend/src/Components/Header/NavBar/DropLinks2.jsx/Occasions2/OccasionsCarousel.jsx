import { useState } from "react";
import slide1 from "../../../../../assets/Occasions/occassion_banner_menu.jpg";
import slide2 from "../../../../../assets/Occasions/occassion_banner_menu_new.jpg";

export default function OccasionsCarousel() {
  const [active, setActive] = useState(0);

  const slides = [
    { src: slide1, link: "#" },
    { src: slide2, link: "#" },
  ];

  return (
    <div className="relative  w-[10rem]">
      {/* Slides */}
      <div className="overflow-hidden rounded-sm">
        <a href={slides[active].link}>
          <img
            src={slides[active].src}
            alt={`Slide ${active + 1}`}
            className="w-full h-[50vh] object-cover transition-all duration-300"
          />
        </a>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all
              ${active === index ? "bg-gray-800" : "bg-gray-400"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Removed Explore button as requested */}
    </div>
  );
}
