import HomeCarousel from "./HomeCarousel";
import RateBox from "./RateBox";

export default function CarouselRateBox() {
  return (
    <>
      <div className=" flex p-[1rem] flex-col  gap-4  ">
        <div className="xl:h-[70vh] z-[-10] ">
          <HomeCarousel></HomeCarousel>
        </div>
        <div className="w-full lg:w-[100%] sm:px-[3rem] md:px-[5rem] lg:px-[7rem] xl:px-[0rem] lg:w-auto bg-[#f5f5f5]  flex justify-center items-center">
          <RateBox></RateBox>
        </div>
      </div>
    </>
  );
}
