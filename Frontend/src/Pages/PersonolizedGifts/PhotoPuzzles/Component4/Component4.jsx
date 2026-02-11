import React from "react";
import img1 from "./Component4Img/pp-grid-1.jpg";
import img2 from "./Component4Img/pp-grid-2.jpg";
import img3 from "./Component4Img/pp-grid-3.jpg";
import img4 from "./Component4Img/pp-grid-4.jpg";

const Component4 = () => {
  const products = [
    {
      id: 1,
      image: img1,
      title: "Photo Pillows",
    },
    {
      id: 2,
      image: img2,
      title: "Magic Mugs",
    },
    {
      id: 3,
      image: img3,
      title: "Photo Coasters",
    },
    {
      id: 4,
      image: img4,
      title: "Photo Magnets",
    },
  ];

  return (
    <div className="w-full border-t-[1px] pt-[3rem] border-gray-200 py-12 px-4">
      {/* Heading */}
      <h2 className="text-center text-2xl  font-extrabold font-serif mb-2">
        LIKE US NOT ONLY FOR PHOTO PUZZLES, CHECK OUT THESE TOO:
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 mb-8">
        We have other amazing options where you can utilize your favorite
        photos!!
      </p>

      {/* Border */}
      <div className="flex items-center mb-[3rem] justify-center ">
        <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
        <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#D1D5DB]" />
        <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            {/* Image - Not Rounded */}
            <div className="w-full bg-gray-100 mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Product Title */}
            <h3 className="text-lg font-semibold text-center">
              {product.title}
            </h3>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <button className="bg-[#ff0000dc] hover:bg-red-700 text-white font-semibold px-8 py-3 !mt-[2rem] transition rounded-md duration-300">
          VIEW MORE PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default Component4;
