import Basic from "@layout/basic";
import BasketPreview from "@comps/basket-preview";
import Link from "next/link";
import productList from '../mocks/products'

export default function Home() {
  return (
    <Basic>
      <BasketPreview label="SEPET" />
      <div>
        {
          productList?.map(product => (
            <div className="flex flex-col">
              <span>{product.name}</span>
              <span>{`${product.price} TL`}</span>
            </div>
          ))
        }
      </div>
    </Basic>
  );
}
