import QuickLinks1 from "./QuickLinks1";
import QuickLinks2 from "./QuickLinks2";

export default function QuickLinks() {
  return (
    <>
      <div>
        <div className="hidden lg:block ">
          <QuickLinks1></QuickLinks1>
        </div>
        <div className="lg:hidden">
          <QuickLinks2></QuickLinks2>
        </div>
      </div>
    </>
  );
}
