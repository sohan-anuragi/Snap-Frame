import RatingComponent from "./RatingComponent";
import RatingStore from "./RatingStore";
import Sorting from "./Sorting";
import Top from "./Top";

export default function Rating() {
  return (
    <>
      <div>
        <RatingStore>
          <Top></Top>
          <Sorting></Sorting>
          <RatingComponent></RatingComponent>
        </RatingStore>
      </div>
    </>
  );
}
