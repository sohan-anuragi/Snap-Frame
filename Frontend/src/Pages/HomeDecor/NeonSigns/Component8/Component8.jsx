import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const faqData = [
  {
    id: 1,
    question: "What is the best way to make custom neon signs?",
    answer:
      "The best way to make custom neon signs is by using high-quality materials, proper design tools, and experienced craftsmen. CanvasChamp offers an easy-to-use design tool where you can customize your neon sign with text, colors, sizes, and materials of your choice.",
  },
  {
    id: 2,
    question: "What's the normal Custom Neon Signs Cost? (In INR)",
    answer:
      "Custom neon sign costs vary based on size, design complexity, and materials. The small size custom neon signs start from Rs. 1615. Our pricing is competitive and transparent with no hidden charges. You can get quotes for different sizes and designs on our website.",
  },
  {
    id: 3,
    question: "What's the way to order Custom Neon Sign?",
    answer:
      "Ordering is simple and easy with CanvasChamp. Visit our design tool, customize your neon sign by selecting size, text, color, backboard, and hardware options. Once satisfied with your design, proceed to checkout, make payment, and we'll deliver your order within the specified timeframe.",
  },
  {
    id: 4,
    question: "Where To Buy Custom Neon Signs?",
    answer:
      "You can buy custom neon signs directly from CanvasChamp's website. We are India's leading custom neon sign manufacturer, offering high-quality, affordable, and custom designs. Visit our website, browse through options, and place your order securely.",
  },
  {
    id: 5,
    question: "Are Neon Custom Signs 100% Eco-friendly?",
    answer:
      "Our neon signs use LED lights which are energy-efficient and reduce environmental impact compared to traditional neon. The materials we use are durable and long-lasting, reducing the need for replacements. However, proper disposal of electronic components is recommended.",
  },
  {
    id: 6,
    question: "What colour options are available for my custom neon sign?",
    answer:
      "We offer over 30+ colour options for custom neon signs, including green, white, warm white, purple, blue, orange, yellow, hot pink, and many more. Each color has its own significance and can be chosen based on your preference and the ambiance you want to create.",
  },
  {
    id: 7,
    question: "How to select the right colour neon sign as per mood?",
    answer:
      "Different colors represent different moods and emotions. Red represents passion, blue represents calmness, yellow represents happiness, green represents nature. Consider the space and the message you want to convey. Our Neon colour ring helps you visualize different options before ordering.",
  },
  {
    id: 8,
    question: "How long can I expect my LED neon sign to last?",
    answer:
      "LED neon signs are durable and long-lasting, with an average lifespan of 50,000+ hours. With proper care and maintenance, your custom neon sign can last for many years, making it a great investment for your home or business.",
  },
  {
    id: 9,
    question: "Are custom neon signs expensive?",
    answer:
      "Custom neon signs are competitively priced at CanvasChamp. Starting from Rs. 1615 for small sizes, we offer options for every budget. The durability and long lifespan of LED neon signs make them a cost-effective investment compared to other decorative options.",
  },
  {
    id: 10,
    question: "Are neon signs easy to install?",
    answer:
      "Yes, neon signs are easy to install. We provide mounting hardware kits with detailed instructions. For wall mounting, simply use the provided screws, hooks, and mounting kit. If you need professional installation, we can also guide you through the process.",
  },
  {
    id: 11,
    question: "What is the return policy for customized neon signs?",
    answer:
      "We offer an easy return policy for customized neon signs. If you're not satisfied with your product, you can return it within the specified timeframe. Customized items may have restrictions, but we work with you to find the best solution.",
  },
];

export default function Component8() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full bg-white  py-12">
      <div className="flex justify-center items-center border-b-[1px] border-gray-200 pb-[2.5rem]">
        <h1 className="text-[3rem] font-extrabold font ">FAQs</h1>
      </div>
      <div className="w-full  px-4 sm:px-6 lg:px-8">
        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((item) => (
            <div key={item.id} className="border-b border-gray-200">
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-[0.95rem] font-semibold font-sans text-black text-left">
                  {item.question}
                </h3>
                <div
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                >
                  <MdExpandMore className="text-2xl text-gray-600" />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedId === item.id && (
                <div className="pb-4 px-0">
                  <p className="text-[0.85rem] font-sans text-[#969696] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
