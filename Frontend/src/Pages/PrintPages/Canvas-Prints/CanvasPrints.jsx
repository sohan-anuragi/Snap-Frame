import PrintsCarousel2 from "./Carousel+RateBox/Carousel/PrintsCarousel2";
import CarRate from "./Carousel+RateBox/CarRate";
import Component2 from "./Component2/Component2";
import Component3 from "./Component3/Component3";
import Component4 from "./Component4/Component4";
import Component5 from "./Component5/Componet5";
import Component6 from "./Component6/Component6";
import Component7 from "./Component7/Component7";
import Rating from "./Component8/Rating";
import Component9 from "./Component9/Component9";
import PrintsStore from "./PrintsStore";

export default function () {
  return (
    <>
      <PrintsStore>
        <div>
          <CarRate></CarRate>
        </div>
      </PrintsStore>
      <Component2></Component2>
      <Component3></Component3>
      <Component4></Component4>
      <Component5></Component5>
      <Component6></Component6>
      <Component7></Component7>
      <Rating></Rating>
      <Component9></Component9>
    </>
  );
}
