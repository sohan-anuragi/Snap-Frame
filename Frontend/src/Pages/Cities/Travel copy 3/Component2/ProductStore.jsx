import { createContext, useReducer } from "react";
import ProductsData from "./ProductsData";

export const productsContext = createContext();

const productsReducer = (state, action) => {
  if (action.type === "Price: Low to High") {
    return [...ProductsData].sort((a, b) => a.discountPrice - b.discountPrice);
  } else if (action.type === "Price: High to Low") {
    return [...ProductsData].sort((a, b) => b.discountPrice - a.discountPrice);
  } else if (action.type === "Oldest to Newest") {
    return [...ProductsData].sort((a, b) => b.dateIndex - a.dateIndex);
  } else if (action.type === "Newest to Oldest") {
    return [...ProductsData].sort((a, b) => a.dateIndex - b.dateIndex);
  } else if (action.type === "Best Seller") {
    return [...ProductsData];
  } else if (action.type === "A-Z") {
    return [...ProductsData].sort((a, b) => a.title.localeCompare(b.title));
  } else if (action.type === "Z-A") {
    return [...ProductsData].sort((a, b) => b.title.localeCompare(a.title));
  } else if (action.type === "QUICK_SORT") {
    return [...ProductsData]
      .filter((items) => {
        return (
          items.discountPrice >= action.from && items.discountPrice <= action.to
        );
      })
      .sort((a, b) => a.discountPrice - b.discountPrice);
  }
  return state;
};

export default function ProductStore({ children }) {
  const [products, dispatchProducts] = useReducer(productsReducer, [
    ...ProductsData,
  ]);

  const handlePrice = (val) => {
    dispatchProducts({
      type: val,
    });
  };

  const handleQuickSorting = (fromPrice, toPrice) => {
    dispatchProducts({
      type: "QUICK_SORT",
      from: fromPrice,
      to: toPrice,
    });
  };

  return (
    <productsContext.Provider
      value={{ handlePrice, products, handleQuickSorting }}
    >
      {children}
    </productsContext.Provider>
  );
}
