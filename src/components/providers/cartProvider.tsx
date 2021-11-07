import currency from "currency.js";
import { createContext, useContext, useState } from "react";
import { Product } from "../../types/product";
import {
  convertPrice,
  CurrencyRate,
  useCurrencyContext,
} from "./currencyProvider";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProviderState {
  items: CartItem[];
  totalPrice: string;
  upsertItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartProviderState>({
  items: [],
  upsertItem: () => {},
  clearCart: () => {},
  totalPrice: "",
  removeItem: () => {},
});

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { rate } = useCurrencyContext();

  function removeItem(productId: string) {
    const item = items.find((i) => i.product.productId === productId);
    if (
      window.confirm(
        `Are you sure you want to remove '${item?.product.name}' from your cart?`
      )
    )
      setItems(items.filter((i) => i !== item));
  }

  function upsertItem(product: Product, quantity: number) {
    const existingProduct = items.find(
      (i) => i.product.productId === product.productId
    );
    if (existingProduct) {
      existingProduct.quantity = quantity;
      existingProduct.product = product;
    } else {
      items.push({ product, quantity });
    }

    setItems([...items]);
  }

  function getTotalPrice() {
    return getTotalCartPrice(items, rate);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        upsertItem,
        removeItem,
        totalPrice: getTotalPrice(),
        clearCart: () => setItems([]),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export function getTotalCartPrice(items: CartItem[], rate?: CurrencyRate) {
  const sum = items
    .map((i) => {
      // convert individual price before multiplying by quantity
      const convertedPrice = convertPrice(i.product.unitPrice, rate);
      return convertedPrice * i.quantity;
    })
    .reduce((prev, current) => currency(prev).add(current).value, 0);
  return currency(sum).toString();
}
