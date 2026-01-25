import MC2Swipper from "./MC2-Swipper";
import MC2Heading from "./MC2-Heading";
import MC2Cards from "./MC2-Cards";

export default function MainComponent2() {
  return (
    <>
      <div className="pb-[2rem] mb-[2rem] border-b-[1px] border-gray-200">
        <div>
          <MC2Heading></MC2Heading>
        </div>
        <div className="flex flex-col lg:flex-row  ">
          <div className="lg:w-[40%] xl:w-[35%] ">
            <MC2Swipper></MC2Swipper>
          </div>
          <div className="px-[1rem] lg:p-[0rem]">
            <MC2Cards></MC2Cards>
          </div>
        </div>
      </div>
    </>
  );
}
