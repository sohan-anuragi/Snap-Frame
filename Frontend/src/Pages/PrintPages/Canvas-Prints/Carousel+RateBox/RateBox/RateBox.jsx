import HeadingRate from "./HeadingRate";
import Shapes from "./Shapes";
import SizeTotal from "./SizeTatal";

export default function RateBox() {
  return (
    <>
      <div className=" flex flex-col gap-8 p-[1rem] ">
        <div>
          <HeadingRate></HeadingRate>
        </div>
        <div>
          <Shapes></Shapes>
        </div>
        <div>
          <SizeTotal></SizeTotal>
        </div>
      </div>
    </>
  );
}
