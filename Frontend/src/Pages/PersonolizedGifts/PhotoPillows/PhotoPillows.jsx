import Component1 from "./Component1/Component1";
import Component2 from "./Component2/Component2";
import Component2Copy1 from "./Component2 copy/Component2Copy";
import Component3 from "./Component3/Component3";
import Component4 from "./Component4/Component4";
import Component2Copy2 from "./Component2 copy 2/Component2Copy";
import Component2Copy3 from "./Component2 copy 3/Component2Copy";

export default function PhotoPillows() {
  return (
    <>
      <Component1 />
      <div className=" px-[2rem] lg:px-[4rem]">
        <Component2 />
        <Component2Copy1 />
        <Component3 />
        <Component4 />
        <Component2Copy2 />
        <Component2Copy3 />
      </div>
    </>
  );
}
