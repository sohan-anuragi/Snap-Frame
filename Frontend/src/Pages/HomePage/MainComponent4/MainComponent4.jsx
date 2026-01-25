import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import diaryImg from "../../../assets/MainComponent4Img/custom-diary.jpg";
import moonLampsImg from "../../../assets/MainComponent4Img/custom-moon-lamps.jpg";
import mousePadsImg from "../../../assets/MainComponent4Img/custom-mouse-pads.jpg";
import wallClockImg from "../../../assets/MainComponent4Img/custom-wall-clock.jpg";
import calendarImg from "../../../assets/MainComponent4Img/desk-calendar.jpg";
import photoCalendarsImg from "../../../assets/MainComponent4Img/photo-calendars.jpg";
import photoMagnetsImg from "../../../assets/MainComponent4Img/photo-magnets.jpg";
import woodPrintsImg from "../../../assets/MainComponent4Img/wood-prints.jpg";

const productsData = [
  { id: 1, image: diaryImg, name: "Custom Diary" },
  { id: 2, image: moonLampsImg, name: "Custom Moon Lamps" },
  { id: 3, image: mousePadsImg, name: "Custom Mouse Pads" },
  { id: 4, image: wallClockImg, name: "Custom Wall Clock" },
  { id: 5, image: calendarImg, name: "Desk Calendar" },
  { id: 6, image: photoCalendarsImg, name: "Photo Calendars" },
  { id: 7, image: photoMagnetsImg, name: "Photo Magnets" },
  { id: 8, image: woodPrintsImg, name: "Wood Prints" },
];

export default function MainComponent4() {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 mb-[2rem] border-b-[1px] border-gray-200">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
        Photo-Inspired Home Décor Gifts for Every Occasion
      </h2>

      {/* Swiper Slider */}
      <div className="w-full flex items-start justify-center px-4 md:px-6 lg:px-4">
        <div className="w-full max-w-full">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next-custom-4",
              prevEl: ".swiper-button-prev-custom-4",
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="w-full"
          >
            {productsData.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col items-center justify-center h-full py-8 lg:py-0">
                  <a
                    href="#"
                    className="flex items-center justify-center cursor-pointer w-full h-auto"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[100%] xl:w-[100%] sm:w-[100%] h-auto object-cover shadow-lg hover:shadow-lg transition-shadow"
                    />
                  </a>
                  <p className="mt-4 font-serif text-center text-sm sm:text-base font-semibold text-gray-800 px-2 w-full">
                    {product.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Arrows */}
            <div className="swiper-button-prev-custom-4 absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dfdfdf] rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="swiper-button-next-custom-4 absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dfdfdf] rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
