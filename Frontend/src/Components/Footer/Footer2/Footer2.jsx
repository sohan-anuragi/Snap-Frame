import QuickLinks from "./QuickLinks";
import NewsLetter from "./NewsLetter";

export default function Footer2() {
  return (
    <>
      <div className="md:flex py-6   ">
        <div className="md:w-[80%]">
          <QuickLinks></QuickLinks>
        </div>
        <div className="md:w-[40%]">
          <NewsLetter></NewsLetter>
        </div>
      </div>
    </>
  );
}
