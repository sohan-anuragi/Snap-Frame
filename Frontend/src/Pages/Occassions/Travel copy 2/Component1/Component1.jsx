import { Link } from "react-router-dom";
import TravelGiftsImg from "./Component1Img/brothers-day-banner.jpg";

export default function Component1() {
  return (
    <section className="w-full bg-white">
      <div className="w-full">
        <div className="relative w-full">
          <img
            src={TravelGiftsImg}
            alt="Brothers Day Gifts"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex flex-wrap items-center">
            <div className="w-full sm:w-[60%] px-6 sm:px-12">
              <h1 className="text-[1.8rem] font-semibold text-[#b3775a]">
                Brothers Day Gifts
              </h1>
            </div>
            <div className="hidden sm:block sm:w-[40%]" />
          </div>
        </div>
      </div>

      <div className=" w-full max-w-6xl !p-[2rem] px-4 py-6">
        <p className="text-[0.9rem] font-normal text-gray-500">
          <Link to="/" className="text-gray-500  hover:text-gray-700">
            Home
          </Link>{" "}
          &gt;&gt; Brothers Day Gifts
        </p>
      </div>
    </section>
  );
}
