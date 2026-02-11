import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

import herImg from "./component4Img/valentine-banner-for-her.jpg";
import himImg from "./component4Img/valentine-banner-for-him.jpg";

const cardData = [
  {
    id: 1,
    title: "Valentine's Day Gifts for Her",
    subtitle: "Perfect Gifts For Couples",
    image: herImg,
    buttonText: "View All",
  },
  {
    id: 2,
    title: "Valentine's Day Gifts for Him",
    subtitle: "Perfect Gifts For Couples",
    image: himImg,
    buttonText: "View All",
  },
];

const Component4 = () => {
  return (
    <section className="w-full h-[80vh] bg-[#000000f5] py-12">
      <div className="relative mx-auto w-full max-w-7xl px-4">
        {/* Left Arrow */}
        <button
          type="button"
          className="component4-prev absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-red-600 p-2 text-white transition hover:bg-red-700"
          aria-label="Previous slide"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          className="component4-next absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-red-600 p-2 text-white transition hover:bg-red-700"
          aria-label="Next slide"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".component4-prev",
            nextEl: ".component4-next",
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".component4-prev";
            swiper.params.navigation.nextEl = ".component4-next";
          }}
          spaceBetween={32}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="px-16"
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="group relative cursor-pointer h-[25rem] w-full overflow-hidden rounded-lg">
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/50" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-1 text-sm text-gray-200">{card.subtitle}</p>

                  {/* Button */}
                  <button className="mt-4 rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Component4;
