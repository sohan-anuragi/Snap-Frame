import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component2 copy";
import Component4 from "./Component3";

export default function BestOffers() {
  return (
    <>
      <div className="p-[1rem] px-[2rem]">
        <span className="flex self-start ml-[2rem]  gap-[0.25rem] text-[0.75rem] text-gray-500 mb-rem] mt-[1rem]">
          <a href="/" className="hover:text-red-600  transition-colors">
            Home
          </a>
          <span className="select-none">&gt;&gt;</span>
          <a
            href="/best-offers"
            className="hover:text-red-600 transition-colors"
          >
            CanvasChamp Coupons and Promo Codes | Special Offers
          </a>
        </span>
        <div>
          <Component1 />
        </div>
        <Component2 />
        <Component3 />
        <Component4 />
      </div>
    </>
  );
}
