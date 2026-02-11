import ImageComponent from "./Component1-1.jsx";
import RateBox from "./Component1-2/RateBox.jsx";
import TopHeading from "./TopHeadin.jsx";

export default function Component1() {
  return (
    <>
      <div>
        <div>
          <TopHeading />
        </div>
        <div className="flex flex-col lg:flex-row py-[2rem] px-[1rem] gap-10 border-b-[1px] border-gray-300 pb-[2rem] mb-[2rem]">
          <div className="lg:w-[50%]">
            <ImageComponent />
          </div>
          <div className="lg:w-[50%]">
            <RateBox />
          </div>
        </div>
      </div>
    </>
  );
}
