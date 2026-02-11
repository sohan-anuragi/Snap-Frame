import Component21 from "./Component21/Component21";
import Component22 from "./Component22/Component22";

export default function Component2() {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-[1rem]">
        <div className="lg:w-[50%] p-[1rem]">
          <Component21></Component21>
        </div>
        <div className="lg:w-[50%] p-[1rem]">
          <Component22></Component22>
        </div>
      </div>
    </>
  );
}
