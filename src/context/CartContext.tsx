import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Plant } from "../data/plants";

export type CartItem = Plant & { quantity: number };

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Plant) => void;
  updateQuantity: (id: number, amount: number) => void;
  removeItem: (id: number) => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  updateQuantity: () => {},
  removeItem: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Plant) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, amount: number) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
