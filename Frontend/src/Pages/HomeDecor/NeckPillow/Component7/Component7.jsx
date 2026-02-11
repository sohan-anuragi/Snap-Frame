import React from "react";
import photoBlanketImg from "./Component7Img/photo-blanket.jpg";
import photoCushionsImg from "./Component7Img/photo-cushions.jpg";
import petShapedPillowImg from "./Component7Img/pet-shaped-pillow.jpg";
import sequinPillowImg from "./Component7Img/sequin-pillow.jpg";

export default function Component7() {
  const relatedProducts = [
    {
      id: 1,
      name: "Photo Blanket",
      image: photoBlanketImg,
    },
    {
      id: 2,
      name: "Photo Pillow",
      image: photoCushionsImg,
    },
    {
      id: 3,
      name: "Pet Shaped Pillow",
      image: petShapedPillowImg,
    },
    {
      id: 4,
      name: "Sequin Pillow",
      image: sequinPillowImg,
    },
  ];

  return (
    <div className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className=" md:text-4xl font-bold text-center mb-16 font-sans">
          Related Products
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100  overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              {/* Product Image */}
              <div className="w-full h-64 overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Name */}
              <div className="p-4 text-center">
                <h3 className="text-[0.9rem] font-semibold opacity-85 font-sans">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
