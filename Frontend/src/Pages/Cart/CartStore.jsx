import { createContext, useReducer } from "react";
import products from "./CartData";

export const cartContext = createContext(null);

const cartDataReduser = (state, action) => {
  if (action.type === "DELETE") {
    return state.filter((item) => item.id !== action.payload);
  } else if (action.type === "DELETE_ALL") {
    return [];
  } else if (action.type === "PLUS") {
    return state.map((item) =>
      item.id === action.payload
        ? {
            ...item,
            quantity: item.quantity + 1,
            total: (item.quantity + 1) * item.price,
          }
        : item,
    );
  } else if (action.type === "MINUS") {
    return state.map((item) =>
      item.id === action.payload && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
            total: (item.quantity - 1) * item.price,
          }
        : item,
    );
  }

  return state;
};

export default function CartDataProvider({ children }) {
  const [cartData, dispatchCartData] = useReducer(cartDataReduser, [
    ...products,
  ]);

  console.log("CartDataProvider mounted with", cartData.length, "products");

  const handleDelete = (id) => {
    dispatchCartData({
      payload: id,
      type: "DELETE",
    });
  };

  const handlePlus = (id) => {
    dispatchCartData({
      payload: id,
      type: "PLUS",
    });
  };

  const handleMinus = (id) => {
    dispatchCartData({
      payload: id,
      type: "MINUS",
    });
  };

  const handleDeleteAll = () => {
    dispatchCartData({
      type: "DELETE_ALL",
    });
  };

  return (
    <cartContext.Provider
      value={{
        cartData,
        handleDelete,
        handlePlus,
        handleMinus,
        handleDeleteAll,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
