import { useState } from "react";
import HeadingRate from "./HeadingRate";
import InputMaterial from "./InputMaterial";
import TotalRate from "./TotalRate";
import Text from "./Text";

export default function Component12() {
  // State to manage selected size (shared between InputMaterial and TotalRate)
  const [selectedSize, setSelectedSize] = useState("Small");

  return (
    <>
      <div className="space-y-4">
        <HeadingRate />
        <InputMaterial
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <TotalRate selectedSize={selectedSize} />
        <Text />
      </div>
    </>
  );
}
