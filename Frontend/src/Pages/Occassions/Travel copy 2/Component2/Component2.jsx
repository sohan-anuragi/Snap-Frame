import QuickFilters from "./QuickFilters";
import Sorting from "./Sorting";
import ProductCards from "./ProductCards";
import ProductStore from "./ProductStore";

export default function Component2() {
  return (
    <>
      <ProductStore>
        <Sorting></Sorting>
        <QuickFilters></QuickFilters>
        <ProductCards></ProductCards>
      </ProductStore>
    </>
  );
}
