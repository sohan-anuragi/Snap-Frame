import React, { useState } from "react";

export default function Component7() {
  const [selected, setSelected] = useState(null);

  // FAQ data - plain text only, no anchor tags
  const faqItems = [
    {
      id: 1,
      question: "What is the best size for a canvas print?",
      answer:
        "It depends on where you're planning to hang it. Large walls love big canvas prints like 24 by 36 inches. They make a bold statement. Smaller sizes like 8 by 10 or 16 by 20 are great for bedrooms, kitchens, or gallery walls. Want a clean modern look? Try mixing multiple canvas picture prints in different sizes. You'll love how it transforms the space.",
    },
    {
      id: 2,
      question: "How long do canvas prints last?",
      answer:
        "A good canvas print lasts for years. Take care of it, and it might last even longer. We use strong canvas material and fade-resistant ink. That means your favorite moments stay bright and sharp. It's like a memory that lives on your wall.",
    },
    {
      id: 3,
      question: "Can I order a large canvas print?",
      answer:
        "Yes, and they look amazing. Large prints are perfect for wide empty walls. They turn a regular photo into bold wall art. Our canvas photo prints go up to oversized dimensions. So go big if you want to make an impact.",
    },
    {
      id: 4,
      question: "What resolution is best for a canvas photo print?",
      answer:
        "Start with a sharp image. The clearer the photo, the better the print. For best results, use at least 2400 by 3600 pixels. Even 1600 by 2000 works for smaller sizes. High resolution gives your custom canvas prints that clean, professional look.",
    },
    {
      id: 5,
      question: "How do I hang my canvas print?",
      answer:
        "Hanging your canvas is quick. Our prints arrive ready to go. Just pick your spot, tap in a nail, and hang it up. It takes minutes. No tools. No hassle. You'll have your canvas prints online up on the wall before your coffee gets cold.",
    },
    {
      id: 6,
      question: "Can I frame a canvas print?",
      answer:
        "Of course. A frame gives it a polished touch. We offer simple and stylish options to suit your space. A floating frame can make your photo feel like a modern canvas painting. It adds depth and brings out the beauty of the print.",
    },
    {
      id: 7,
      question: "Can I get a budget-friendly canvas print?",
      answer:
        "Yes, you can. We offer cheap canvas prints without cutting corners on quality. You get sharp prints, durable canvas, and great value. It's a perfect choice for decorating or gifting without spending too much.",
    },
    {
      id: 8,
      question: "What is canvas prints?",
      answer:
        "It's a popular way to turn photos into art. Your image is printed on canvas fabric and stretched over a wooden frame. The result feels like a painting. People use canvas prints to decorate bedrooms, living rooms, and even offices. From best canvas painting styles to personal moments, it's all possible. If you're in India, you'll love the charm of a photo on canvas India style too.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center border-b-[1px] border-[#D1D5DB] px-[3.5rem] py-[2.5rem] gap-[1.8rem]">
      {/* TOP HEADING SECTION */}
      <div className="w-full flex flex-col items-center gap-[0.8rem]">
        <h2 className="text-[1.8rem] font-extrabold text-black text-center">
          FAQS ABOUT CANVAS PRINTS – YOUR QUESTIONS ANSWERED
        </h2>
        <div className="flex items-center justify-center ">
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
          <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-[#D1D5DB]" />
          <div className="w-[10rem] h-[0.0625rem] bg-[#D1D5DB]" />
        </div>
      </div>

      {/* FAQ ITEMS */}
      <div
        className="w-full flex flex-col gap-[1.2rem] mt-[2rem] border-[1px] border-[#D1D5DB] p-[2rem] px-[1rem] mx-[2rem] max-w-[100%]"
        onMouseLeave={() => setSelected(10)}
      >
        {faqItems.map((faq, index) => (
          <div
            key={faq.id}
            className="flex justify-between gap-[0.5rem]   border-[#E5E7EB] pl-[1rem] py-[0.8rem]"
            onMouseEnter={() => setSelected(index)}
          >
            {/* HOVER ELEMENT */}
            <div className="h-[4.5rem] flex flex-col items-start justify-start cursor-pointer bg-[#eeeeee] w-[3px]">
              <div
                className={`w-[3px] transition-transform duration-300 ease-in origin-top h-[4.5rem] bg-[black]  scale-y-0
                ${selected === index ? "scale-y-100" : ""}
                `}
              ></div>
            </div>

            {/* MINT HEADING ANS */}
            <div className="flex flex-col w-[95%]">
              <h3 className="text-[0.9rem] opacity-90 mb-[0.5rem] font-semibold text-black">
                {faq.question}
              </h3>
              <p className="text-[0.8rem] opacity-70 text-black leading-[1.5]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
