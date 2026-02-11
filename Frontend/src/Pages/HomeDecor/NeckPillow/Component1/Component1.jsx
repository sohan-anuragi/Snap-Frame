import Component11 from "./Component1-1/Component11";
import TopHeading from "./TopHeadin";
import Component12 from "./component1-2/Component12";

export default function Component1() {
  return (
    <>
      <div>
        <div>
          <TopHeading />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[50%] p-[1rem] ">
            <Component11 />
          </div>
          <div className="lg:w-[50%] p-[1rem]">
            <Component12 />
          </div>
        </div>
      </div>
    </>
  );
}
