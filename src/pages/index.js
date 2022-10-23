import Basic from "@layout/basic";
import BasketPreview from "@comps/basket-preview";
import Products from "@comps/products";

export default function Home() {
  return (
    <Basic>
      <BasketPreview label="SEPET" redirectTo="basket" />
      <Products />
    </Basic>
  );
}
