import { createContext, useReducer } from "react";
import ratingData from "./RatingData";

export const ratingContext = createContext();

const ratingsReducer = (state, action) => {
  if (action.type === "5 ☆ reviews") {
    return ratingData.filter((rate) => rate.rating === 5);
  } else if (action.type === "4 ☆ reviews") {
    console.log(action.type);
    return ratingData.filter((rate) => rate.rating === 4);
  } else if (action.type === "3 ☆ reviews") {
    console.log(action.type);
    return ratingData.filter((rate) => rate.rating === 3);
  } else if (action.type === "2 ☆ reviews") {
    console.log(action.type);
    return ratingData.filter((rate) => rate.rating === 2);
  } else if (action.type === "1 ☆ reviews") {
    console.log(action.type);
    return ratingData.filter((rate) => rate.rating === 1);
  } else if (action.type === "All ratings") {
    console.log(action.type);
    return [...ratingData];
  }
  // HIGH SORTING
  else if (action.type === "Highest to lowest") {
    return [...state].sort((a, b) => b.rating - a.rating);
  } else if (action.type === "Newest to oldest") {
    return [...state].sort((a, b) => a.dateIndex - b.dateIndex);
  }
  return ratingData;
};

export default function RatingStore({ children }) {
  const [ratings, dispatchRatings] = useReducer(ratingsReducer, [
    ...ratingData,
  ]);

  const handleStars = (option) => {
    dispatchRatings({
      type: option,
    });
  };

  const handleEvents = (option) => {
    dispatchRatings({
      type: option,
    });
  };

  return (
    <>
      <ratingContext.Provider value={{ ratings, handleStars, handleEvents }}>
        {children}
      </ratingContext.Provider>
    </>
  );
}
