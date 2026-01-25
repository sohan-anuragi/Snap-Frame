import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/MainComponentimg2/MainComponentSwipper/mini_slide1.jpg";
import slide2 from "../../../assets/MainComponentimg2/MainComponentSwipper/mini_slide2.jpg";
import slide3 from "../../../assets/MainComponentimg2/MainComponentSwipper/mini_slide3.jpg";
import slide4 from "../../../assets/MainComponentimg2/MainComponentSwipper/mini_slide4.jpg";
import slide5 from "../../../assets/MainComponentimg2/MainComponentSwipper/mini_slide5.jpg";

const slidesData = [
  { id: 1, image: slide1, link: "#" },
  { id: 2, image: slide2, link: "#" },
  { id: 3, image: slide3, link: "#" },
  { id: 4, image: slide4, link: "#" },
  { id: 5, image: slide5, link: "#" },
];

export default function MC2Swipper() {
  return (
    <div className="w-full flex items-start justify-center py-8 lg:py-0 px-4 md:px-6 lg:px-4">
      <div className="w-full max-w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 1, spaceBetween: 20 },
          }}
          className="w-full"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex items-center justify-center h-full py-8 lg:py-0">
                <a
                  href={slide.link}
                  className="flex items-center justify-center cursor-pointer w-full"
                >
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className=" w-[90%] xl:w-[90%] sm:w-[100%] h-auto object-cover  shadow-lg hover:shadow-xl transition-shadow"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
