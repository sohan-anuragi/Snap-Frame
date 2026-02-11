import PrintsCarousel2 from "./Carousel/PrintsCarousel2";
import Component22 from "./Component22/Component22";

export default function Component2() {
  return (
    <div className="flex flex-col px-[1rem] lg:flex-row">
      {/* LEFT : Carousel (20rem sticky behavior) */}
      <div className="lg:w-[45%] p-[1rem]">
        <div className="sticky top-[4rem]">
          <PrintsCarousel2 />
        </div>
      </div>

      {/* RIGHT : Normal scroll content */}
      <div className="lg:w-[50%] p-[1rem]">
        <Component22 />
      </div>
    </div>
  );
}
