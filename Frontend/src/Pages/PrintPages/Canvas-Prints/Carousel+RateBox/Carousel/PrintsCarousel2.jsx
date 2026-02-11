import { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";

// 🔹 Swiper styles (required)
import "swiper/css";
import "swiper/css/thumbs";

// 🔹 Static images
import canvasEdge from "./PrintsImg/canvas-edge-ind.jpg";
import canvasPrintsSizes from "./PrintsImg/canvas-prints-sizes-ind.jpg";
import canvasThickness from "./PrintsImg/canvas-thickness-ind.jpg";
import canvasWrap from "./PrintsImg/canvas-wrap-ind.jpg";
import easelBackAndDustCover from "./PrintsImg/easel-back-and-dust-cover_1.jpg";
import hangingOptions from "./PrintsImg/hanging-options-ind.jpg";

// 🔹 Shape image context
import { PrintsStoreContext } from "../../PrintsStore";

export default function PrintsCarousel2() {
  // 🔹 Thumbnail swiper ka instance store karne ke liye
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // 🔹 Main swiper ka reference (manual control ke liye)
  const mainSwiperRef = useRef(null);

  // 🔹 Current active slide index (UI sync ke liye)
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 Shape image context se aa rahi hai
  const { shape } = useContext(PrintsStoreContext);

  // 🔹 Carousel slides data
  // First slide hamesha selected shape image hogi
  const carouselSlides = [
    { id: 1, image: shape, alt: "Room View Shape" },
    { id: 2, image: canvasEdge, alt: "Canvas Edge" },
    { id: 3, image: canvasPrintsSizes, alt: "Canvas Prints Sizes" },
    { id: 4, image: canvasThickness, alt: "Canvas Thickness" },
    { id: 5, image: canvasWrap, alt: "Canvas Wrap" },
    { id: 6, image: easelBackAndDustCover, alt: "Easel Back and Dust Cover" },
    { id: 7, image: hangingOptions, alt: "Hanging Options" },
  ];

  // ✅ MAIN SLIDER → THUMBNAILS SYNC
  // Jab bhi main slider autoplay / drag / click se change ho
  // to thumbnails bhi same index pe shift ho jaayein
  useEffect(() => {
    if (thumbsSwiper && !thumbsSwiper.destroyed) {
      thumbsSwiper.slideToLoop(currentIndex, 300);
    }
  }, [currentIndex, thumbsSwiper]);

  // 🔥 IMPORTANT FIX (LAST KAAM)
  // ✅ Jab bhi shape change ho (Square → Rectangle etc.)
  // 👉 Slider automatically index 0 pe reset ho jaaye
  // 👉 Main image + thumbnails dono first slide pe aa jaayein
  //
  // Reason:
  // Swiper apni internal state rakhta hai,
  // React context change hone se wo khud reset nahi hota
  useEffect(() => {
    // 🔹 React state reset
    setCurrentIndex(0);

    // 🔹 Main swiper ko manually first slide pe bhejo
    if (mainSwiperRef.current?.swiper) {
      mainSwiperRef.current.swiper.slideToLoop(0, 300);
    }

    // 🔹 Thumbnail swiper ko bhi reset karo
    if (thumbsSwiper && !thumbsSwiper.destroyed) {
      thumbsSwiper.slideToLoop(0, 300);
    }
  }, [shape, thumbsSwiper]);

  return (
    <div className="w-full max-w-full p-[2%] pt-[0%]">
      <div className="w-full max-w-[800px] mx-auto space-y-4">
        {/* ================= MAIN SLIDER ================= */}
        <Swiper
          ref={mainSwiperRef} // 🔹 reference store
          modules={[Autoplay, Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={20}
          onSlideChange={(swiper) => {
            // 🔹 Autoplay / drag / click pe index update
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

        {/* ================= THUMBNAIL SLIDER ================= */}
        <Swiper
          onSwiper={setThumbsSwiper} // 🔹 instance save
          modules={[Thumbs]}
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={16}
          watchSlidesProgress={true}
          slideToClickedSlide={true}
          loop={true}
          className="thumbnail-swiper"
        >
          {carouselSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt={slide.alt}
                // 🔹 Active thumbnail = red border
                // 🔹 Hover pe bhi border + opacity change
                className={`w-full h-auto object-cover p-[1rem] cursor-pointer box-border border-[2px] transition-all opacity-70 hover:opacity-100 hover:border-red-600 ${
                  index === currentIndex
                    ? "border-red-600 opacity-100"
                    : "border-transparent"
                }`}
                onClick={() => {
                  // 🔹 Thumbnail click → main slider ko same index pe le jao
                  if (mainSwiperRef.current?.swiper) {
                    mainSwiperRef.current.swiper.slideToLoop(index, 300);
                  }

                  // 🔹 State update for UI sync
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
