import ColourBox from "./ColourBox";
import HeadingRate from "./HeadingRate";
import RateTotal from "./RateTotal";

export default function RateBox() {
  return (
    <>
      <div>
        <div>
          <HeadingRate />
        </div>
        <div>
          <ColourBox />
        </div>
        <div>
          <RateTotal />
        </div>
      </div>
    </>
  );
}
