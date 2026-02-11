import { useState } from "react";
import anniversary1 from "./GiftImg/anniversary_1_front_zoom.jpg";
import anniversary2 from "./GiftImg/anniversary_2_front_zoom.jpg";
import anniversary3 from "./GiftImg/anniversary_3_front_zoom.jpg";
import anniversary4 from "./GiftImg/anniversary_front_zoom.jpg";
import birthday1 from "./GiftImg/birthday_1_front_zoom.jpg";
import birthday2 from "./GiftImg/birthday_2_front_zoom.jpg";
import birthday3 from "./GiftImg/birthday_3_front_zoom.jpg";
import birthday4 from "./GiftImg/birthday_front_zoom.jpg";
import thankyou1 from "./GiftImg/thankyou_1_front_zoom.jpg";
import thankyou2 from "./GiftImg/thankyou_2_front_zoom.jpg";
import thankyou3 from "./GiftImg/thankyou_3_front_zoom.jpg";
import thankyou4 from "./GiftImg/thankyou_front_zoom.jpg";
import congratulation1 from "./GiftImg/congratulation_1_front_zoom.jpg";
import congratulation2 from "./GiftImg/congratulation_2_front_zoom.jpg";
import congratulation3 from "./GiftImg/congratulation_3_front_zoom.jpg";
import congratulation4 from "./GiftImg/congratulation_front_zoom.jpg";

const giftData = {
  "Wedding Anniversary": [
    { id: "wedding-1", image: anniversary1 },
    { id: "wedding-2", image: anniversary2 },
    { id: "wedding-3", image: anniversary3 },
    { id: "wedding-4", image: anniversary4 },
  ],
  "Happy Birthday": [
    { id: "birthday-1", image: birthday1 },
    { id: "birthday-2", image: birthday2 },
    { id: "birthday-3", image: birthday3 },
    { id: "birthday-4", image: birthday4 },
  ],
  "Thank You": [
    { id: "thankyou-1", image: thankyou1 },
    { id: "thankyou-2", image: thankyou2 },
    { id: "thankyou-3", image: thankyou3 },
    { id: "thankyou-4", image: thankyou4 },
  ],
  Congratulations: [
    { id: "congratulation-1", image: congratulation1 },
    { id: "congratulation-2", image: congratulation2 },
    { id: "congratulation-3", image: congratulation3 },
    { id: "congratulation-4", image: congratulation4 },
  ],
};

export default function CartGiftBox() {
  const [occasion, setOccasion] = useState("Wedding Anniversary");
  const [selected, setSelected] = useState(null);

  const giftOptions = giftData[occasion] || giftData["Wedding Anniversary"];

  return (
    <div className="w-full">
      <select
        className="w-full border mb-[2rem] border-gray-300 text-[0.875rem] text-gray-700 px-[0.75rem] py-[0.5rem] bg-white focus:outline-none"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
          setSelected(null);
        }}
      >
        <option>Wedding Anniversary</option>
        <option>Happy Birthday</option>
        <option>Thank You</option>
        <option>Congratulations</option>
      </select>
      {/* CHECKBOX */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-[1rem] p-[1rem] ">
        {giftOptions.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-[0.75rem] cursor-pointer"
          >
            <span
              className={`w-[1.48rem] h-[1.25rem] rounded-full border border-gray-500 flex items-center justify-center ${
                selected === option.id ? " border-red-600 border-[1px]" : ""
              } `}
            >
              <span
                className={`w-[0.8rem] h-[0.75rem] m rounded-full ${
                  selected === option.id ? "bg-[#b80000] ]" : "bg-transparent"
                }`}
              />
            </span>
            <input
              type="radio"
              name="gift-box"
              value={option.id}
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className="sr-only"
            />
            <div className="w-full">
              <img
                src={option.image}
                alt="Gift wrap option"
                className="w-[8rem] h-[5.25rem] object-cover border border-gray-200"
              />
            </div>
          </label>
        ))}
      </div>
      <div className="flex w-[100%]">
        <div className="flex gap-3 mb-4 mt-[2rem] flex-col w-[60%] ">
          <textarea
            placeholder="Enter your gift message"
            className="flex-1 px-4 py-2 border border-gray-300 text-sm focus:outline-none"
          />
          <a
            href="#"
            className="bg-black flex justify-center items-center text-white px-6 py-2 text-sm font-medium"
          >
            <span>APPLY</span>
          </a>
        </div>
        {/* SELECTED IMAGE */}
        <div className="w-[35%] flex items-center justify-center px-[1rem]">
          {selected ? (
            <img
              src={giftOptions.find((opt) => opt.id === selected)?.image}
              alt="Selected gift wrap"
              className="w-[8rem] h-[5.25rem] object-cover border border-gray-200"
            />
          ) : (
            <div className="w-[8rem] h-[5.25rem] border border-gray-200 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
              Select an image
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
