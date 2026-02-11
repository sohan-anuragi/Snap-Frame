import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";

// 🔹 Icons
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// 🔹 Swiper styles
import "swiper/css";
import "swiper/css/thumbs";

// 🔹 Static images
import photoPillow1 from "../CarouselImg/photo-pillow-large1.jpg";
import photoPillow2 from "../CarouselImg/photo-pillow-large2.jpg";
import photoPillow3 from "../CarouselImg/photo-pillow-large3.jpg";
import photoPillow4 from "../CarouselImg/photo-pillow-large4.jpg";
import photoPillow5 from "../CarouselImg/photo-pillow-large5.jpg";
import photoPillow6 from "../CarouselImg/photo-pillow-large2.jpg";

export default function PrintsCarousel2() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselSlides = [
    { id: 1, image: photoPillow1, alt: "Photo Pillow 1" },
    { id: 2, image: photoPillow2, alt: "Photo Pillow 2" },
    { id: 3, image: photoPillow3, alt: "Photo Pillow 3" },
    { id: 4, image: photoPillow4, alt: "Photo Pillow 4" },
    { id: 5, image: photoPillow5, alt: "Photo Pillow 5" },
    { id: 6, image: photoPillow6, alt: "Photo Pillow 6" },
  ];

  useEffect(() => {
    if (thumbsSwiper && !thumbsSwiper.destroyed) {
      thumbsSwiper.slideToLoop(currentIndex, 300);
    }
  }, [currentIndex, thumbsSwiper]);

  return (
    <div className="w-full max-w-full p-[2%] pt-[0%]">
      <div className="w-full max-w-[800px] mx-auto space-y-4">
        {/* ================= MAIN SLIDER ================= */}
        <div className="relative">
          <Swiper
            ref={mainSwiperRef}
            modules={[Autoplay, Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
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

          {/* 🔹 PREV ARROW (3:2 box) */}
          <button
            onClick={() => mainSwiperRef.current?.swiper.slidePrev()}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                       aspect-[2/3] w-[40px]
                       bg-white/80 hover:bg-white
                       rounded-md shadow-md
                       flex items-center justify-center
                       transition-all"
          >
            <IoChevronBack size={22} />
          </button>

          {/* 🔹 NEXT ARROW (2:3 box) */}
          <button
            onClick={() => mainSwiperRef.current?.swiper.slideNext()}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                       aspect-[2/3] w-[40px]
                       bg-white/80 hover:bg-white
                       rounded-md shadow-md
                       flex items-center justify-center
                       transition-all"
          >
            <IoChevronForward size={22} />
          </button>
        </div>

        {/* ================= THUMBNAILS ================= */}
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
                onClick={() => {
                  mainSwiperRef.current?.swiper.slideToLoop(index, 300);
                  setCurrentIndex(index);
                }}
                className={`w-full h-auto object-cover p-3 cursor-pointer
                  border-2 transition-all
                  ${
                    index === currentIndex
                      ? "border-red-600 opacity-100"
                      : "border-transparent opacity-70 hover:opacity-100 hover:border-red-600"
                  }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
