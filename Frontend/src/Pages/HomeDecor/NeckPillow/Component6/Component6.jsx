import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";

export default function Component6() {
  const [expandedId, setExpandedId] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "What is a Travel Pillow?",
      answer:
        "A travel pillow is a specially designed pillow that provides neck and head support during travel. It's compact, portable, and perfect for use on planes, trains, cars, and buses. Custom travel pillows add a personal touch, allowing you to print photos or designs on them.",
    },
    {
      id: 2,
      question: "Where to buy a custom Travel Pillow in India?",
      answer:
        "You can purchase custom travel pillows from CanvasChamp. We offer a wide variety of personalised travel pillows with quick delivery options across India. Visit our website to design and order your custom travel pillow today.",
    },
    {
      id: 3,
      question: "How much is a Travel Pillow?",
      answer:
        "The price of a travel pillow varies depending on the size and customization options you choose. At CanvasChamp, we offer affordable custom travel pillows starting from competitive rates. Check our website for current pricing and special offers.",
    },
    {
      id: 4,
      question: "How to make a custom Travel Pillow?",
      answer:
        "Making a custom travel pillow is easy with CanvasChamp. Simply visit our design tool, select the size, upload your photo or design, add text or clipart if desired, and place your order. We'll handle the printing and delivery to your doorstep.",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full py-12 px-4 ">
      <div className="">
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 font-sans">
          FAQ For Custom Neck Pillows
        </h1>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border-b border-t border-gray-200 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-[0.9rem] font-semibold opacity-85 font-sans text-left">
                  {item.question}
                </h3>
                <MdExpandMore
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer Section */}
              {expandedId === item.id && (
                <div className="border-t border-gray-200 px-6 py-4">
                  <p className="text-[0.8rem] opacity-70 font-sans leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
