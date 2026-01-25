import MC6Text1 from "./MC6-Text1";
import MC6Text2 from "./MC6-Text2";

export default function MainComponent6() {
  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8 border-b-[1px] border-gray-200 mb-[2rem] ">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-black text-gray-900 text-center mb-[2rem]">
          India's #1 Online Store for Photo Printing & Custom Gifts.
        </h2>
      </div>
      <div className="md:flex">
        <div className="md:w-[50%]">
          <MC6Text1></MC6Text1>
        </div>
        <div className="md:w-[50%] mt-8 md:mt-0">
          <MC6Text2></MC6Text2>
        </div>
      </div>
    </div>
  );
}
