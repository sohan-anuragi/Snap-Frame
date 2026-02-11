import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useContext, useState } from "react";
import { productsContext } from "./ProductStore";

// USE OF CONTEXT DATA FOR THE PRODUCTS

export default function ProductCards() {
  const { products } = useContext(productsContext);

  const [itemPerpage, setItemPerpage] = useState(0.6);
  const visibleCards = products.slice(0, products.length * itemPerpage);

  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleCards.map((product) => (
          <div key={product.id} className="flex flex-col">
            {/* Image Container */}
            <div className="relative bg-gray-100  overflow-hidden">
              {/* Discount Tag */}
              <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded z-10">
                50% OFF
              </div>

              {/* Swiper or Static Image */}
              {product.swiperType ? (
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className="w-full h-full"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  {Object.entries(product.swiperType).map(([key, img]) => (
                    <SwiperSlide key={key}>
                      <img
                        src={img}
                        alt={`${product.title} - ${key}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "1 / 1" }}
                />
              )}
            </div>

            {/* Product Info */}
            <div className="mt-3">
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h3>

              {/* Prices */}
              <div className="flex items-center gap-2 mt-[2rem]">
                <span className="text-xs text-gray-500 line-through">
                  ₹{product.basePrice}
                </span>
                <span className="text-lg font-bold text-gray-900">
                  ₹{product.discountPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-[2rem] flex justify-center mt-[2rem]">
        <button
          className={` bg-[#d00000e1] p-[1rem] px-[3rem] hover:bg-[red] text-[1.2rem] rounded-full text-[white] cursor-pointer ${itemPerpage === 1 ? "hidden" : ""}`}
          onClick={() => setItemPerpage(1)}
        >
          {" "}
          View More Products (25+)
        </button>
      </div>
    </div>
  );
}
