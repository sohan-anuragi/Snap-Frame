import TopHeading from "./TopHeadin";
import PrintsCarousel2 from "./Carousel/PrintsCarousel2";
import RateBox from "./RateBox/RateBox";

export default function CarRate() {
  return (
    <>
      <div>
        <div>
          <TopHeading></TopHeading>
        </div>
        <div className="p-[1.5rem] flex flex-col lg:flex-row ">
          <div className=" lg:w-[50%]">
            <PrintsCarousel2></PrintsCarousel2>
          </div>
          <div className="lg:w-[49%]">
            <RateBox></RateBox>
          </div>
        </div>
      </div>
    </>
  );
}
