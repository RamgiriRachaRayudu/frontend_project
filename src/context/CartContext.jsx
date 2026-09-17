import { createContext, useContext, useMemo, useState } from "react";
import { getData, setData } from "../utils/storage";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(getData("cart", []));

  const save = (nextItems) => {
    setItems(nextItems);
    setData("cart", nextItems);
  };

  const addToCart = (product) => {
    const existing = items.find((item) => item.id === product.id);
    if (existing) {
      save(
        items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
      return;
    }
    save([...items, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      save(items.filter((item) => item.id !== id));
      return;
    }
    save(items.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeFromCart = (id) => save(items.filter((item) => item.id !== id));
  const clearCart = () => save([]);
  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );
  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) => total + (item.price || 499) * item.quantity,
        0,
      ),
    [items],
  );

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
