import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Swiper styles
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

// Static images
import slide1 from "./Component1-1Img/slide-1.jpg";
import slide2 from "./Component1-1Img/slide-2.jpg";
import slide3 from "./Component1-1Img/slide-3.jpg";
import slide4 from "./Component1-1Img/slide-4.jpg";

export default function Component11() {
  // Thumbnail swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Main swiper ref
  const mainSwiperRef = useRef(null);

  // Navigation refs
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Active slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselSlides = [
    { id: 1, image: slide1, alt: "Slide 1" },
    { id: 2, image: slide2, alt: "Slide 2" },
    { id: 3, image: slide3, alt: "Slide 3" },
    { id: 4, image: slide4, alt: "Slide 4" },
  ];

  // Sync thumbnails with main slider

  return (
    <div className="w-full p-[2%] pt-0">
      <div className="w-full max-w-[800px] mx-auto space-y-4">
        {/* ================= MAIN SLIDER ================= */}
        <div className="relative">
          {/* Prev Arrow */}
          <button
            ref={prevRef}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/70 rounded-md flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300"
            aria-label="Previous slide"
          >
            <MdChevronLeft className="text-2xl text-gray-800" />
          </button>

          {/* Next Arrow */}
          <button
            ref={nextRef}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/70 rounded-md flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300"
            aria-label="Next slide"
          >
            <MdChevronRight className="text-2xl text-gray-800" />
          </button>

          <Swiper
            ref={mainSwiperRef}
            modules={[Autoplay, Thumbs, Navigation]}
            loop
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.realIndex);
            }}
          >
            {carouselSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= THUMBNAIL SLIDER ================= */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          slidesPerView={4}
          spaceBetween={16}
          watchSlidesProgress
          slideToClickedSlide
          loop
        >
          {carouselSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-auto object-cover p-4 cursor-pointer box-border border-2 transition-all duration-300 opacity-70 hover:opacity-100 hover:border-red-600 ${
                  index === currentIndex
                    ? "border-red-600 opacity-100"
                    : "border-transparent"
                }`}
                onClick={() => {
                  if (mainSwiperRef.current?.swiper) {
                    mainSwiperRef.current.swiper.slideToLoop(index, 300);
                  }
                  setCurrentIndex(index);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
