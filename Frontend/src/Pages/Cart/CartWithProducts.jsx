import CartProducts from "./CartProducts";
import GrandTotal from "./GrandTotal";
import { useContext } from "react";
import { cartContext } from "./CartStore";
import EmptyCart from "./EmtyCart";
import CartHeading from "./CartHeading";

export default function CartWithProducts() {
  console.log("CartWithProducts rendering, cartContext is:", cartContext);
  const context = useContext(cartContext);
  console.log("useContext returned:", context);

  if (!context) {
    console.error(
      "CartWithProducts: cartContext is undefined - component must be wrapped by CartDataProvider",
    );
    return <div>Error: Cart context not available</div>;
  }

  const { cartData } = context;

  return (
    <>
      {cartData.length !== 0 ? (
        <div>
          <div className="pr-[2rem]">
            <CartHeading></CartHeading>
          </div>
          <div className="flex flex-col md:flex-row  ">
            <div className="p-[1rem]  md:w-[60%] ">
              <CartProducts></CartProducts>
            </div>
            <div className="md:w-[38%] ">
              <GrandTotal></GrandTotal>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart></EmptyCart>
      )}
    </>
  );
}
