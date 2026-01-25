import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function MainComponent7() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      heading: "What file types are supported for uploading my photos?",
      text: "You can upload images in JPG, JPEG, PNG, BMP, and TIFF formats. For best results, we recommend high-resolution JPEGs.",
    },
    {
      id: 2,
      heading:
        "What makes CanvasChamp different from other personalized gift websites?",
      text: "CanvasChamp offers premium quality, affordable pricing, and easy customization. With free shipping on orders over ₹199.00 and delivery across India, we make custom gifting convenient and memorable.",
    },
    {
      id: 3,
      heading: "Can I add multiple photos to a single product?",
      text: "Yes. Many of our products like photo books, collages, and select canvas layouts allow you to add multiple images. You’ll be guided through layout options during the design process.",
    },
    {
      id: 4,
      heading: "Do you offer design templates for photo gifts?",
      text: "Yes. We provide ready-made design templates and layout options for many products, including canvas prints, mugs, and books. These make designing faster and more creative.",
    },
    {
      id: 5,
      heading: "Can I preview my design before placing an order?",
      text: "Yes. Our design tool gives you a live preview of your personalized product before checkout so you can be confident in your final design.",
    },
    {
      id: 6,
      heading: "Do you deliver across India?",
      text: "Yes, we deliver personalized gifts all over India. Delivery takes 7 to 9 business days. Shipping is free for orders above ₹199.00. For smaller orders, a ₹50.00 shipping fee applies.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-12">
        FAQS
      </h2>

      {/* Accordion Container */}
      <div className="w-full  mx-auto space-y-4 border-t pt-[1rem] border-gray-200 ">
        {faqData.map((item, index) => (
          <div key={item.id} className="border-b border-gray-200">
            {/* Heading */}
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex items-center justify-between py-4 px-2 sm:px-4 hover:bg-gray-50 transition-colors duration-200 text-left"
            >
              <h3 className="text-[1rem] font-semibold text-black/80">
                {item.heading}
              </h3>
              {/* Arrow Icon */}
              <IoIosArrowDown
                className={`w-5 h-5 text-black/80 transition-transform duration-300 flex-shrink-0 ml-4 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Content - renders only when active */}
            {activeIndex === index && (
              <div className="px-2 sm:px-4 pb-4">
                <p className="text-[0.9rem] text-black/70">{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
