import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import blankets from "./component3Img/blankets.jpg";
import earbuds from "./component3Img/earbuds.jpg";
import moonLamps from "./component3Img/moon_lamps.jpg";
import pendrive from "./component3Img/pendrive.jpg";
import pillow from "./component3Img/pillow.jpg";
import powerBank from "./component3Img/power_bank.jpg";
import wallClock from "./component3Img/wall_clock.jpg";

const sliderItems = [
  { id: 1, title: "Photo Lamps", image: moonLamps },
  { id: 2, title: "Bluetooth Ear Pods", image: earbuds },
  { id: 3, title: "Custom Pen Drive", image: pendrive },
  { id: 4, title: "Custom Power Bank", image: powerBank },
  { id: 5, title: "Wall Clocks", image: wallClock },
  { id: 6, title: "Photo Blankets", image: blankets },
  { id: 7, title: "Photo Pillow", image: pillow },
];

const Component3 = () => {
  return (
    <section className="w-full bg-white py-16 border-t-[1px] border-neutral-200">
      <div className="mx-auto w-full px-4">
        <h2 className="text-center text-[3rem] font-semibold font-serif !mb-[5rem] tracking-wide text-neutral-800">
          Trending Gifts
        </h2>

        <div className="relative mt-8">
          {/* LEFT ARROW */}
          <button
            className="component3-prev absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white shadow transition hover:bg-neutral-100"
            aria-label="Previous"
          >
            ❮
          </button>

          {/* RIGHT ARROW */}
          <button
            className="component3-next absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white shadow transition hover:bg-neutral-100"
            aria-label="Next"
          >
            ❯
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={700} // 🔥 smoothness ka main reason
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            navigation={{
              prevEl: ".component3-prev",
              nextEl: ".component3-next",
            }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="px-12"
          >
            {sliderItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center will-change-transform">
                  <a
                    href="#"
                    className="flex aspect-square w-full items-center justify-center rounded-md bg-neutral-100"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </a>

                  <p className="mt-3 text-center text-sm font-semibold text-neutral-800">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Component3;
