import { createContext, useState } from "react";

// IMAGES IMPORTS - Shape room views
import squareShape from "./Carousel+RateBox/Carousel/PrintsImg/room-view-square-ind.jpg";
import rectangleShape from "./Carousel+RateBox/Carousel/PrintsImg/room-view-rectangle-ind.jpg";
import panoramicShape from "./Carousel+RateBox/Carousel/PrintsImg/room-view-panoramic-ind.jpg";
import circleShape from "./Carousel+RateBox/Carousel/PrintsImg/room-view-circle-ind.jpg";
import triangleShape from "./Carousel+RateBox/Carousel/PrintsImg/room-view-triangle-ind.jpg";

export const PrintsStoreContext = createContext();

export default function PrintsStore({ children }) {
  const [shape, setShape] = useState(squareShape);

  const handleShape = (val) => {
    if (val === 0) {
      setShape(squareShape);
    } else if (val === 1) {
      setShape(squareShape);
    } else if (val === 2) {
      setShape(rectangleShape);
    } else if (val === 3) {
      setShape(panoramicShape);
    } else if (val === 4) {
      setShape(circleShape);
    } else if (val === 5) {
      setShape(triangleShape);
    }
  };

  return (
    <>
      <PrintsStoreContext.Provider value={{ handleShape, shape }}>
        {children}
      </PrintsStoreContext.Provider>
    </>
  );
}
