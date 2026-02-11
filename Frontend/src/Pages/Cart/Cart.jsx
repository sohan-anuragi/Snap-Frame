import CartHeading from "./CartHeading";
import CartProducts from "./CartProducts";
import CartDataProvider from "./CartStore";
import CartWithProducts from "./CartWithProducts";
import GrandTotal from "./GrandTotal";

export default function Cart() {
  return (
    <>
      <div>
        <CartDataProvider>
          <CartWithProducts></CartWithProducts>
        </CartDataProvider>
      </div>
    </>
  );
}
