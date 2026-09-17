import { createContext, useContext, useMemo, useState } from "react";
import { getData, setData } from "../utils/storage";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(getData("wishlist", []));

  const save = (nextItems) => {
    setItems(nextItems);
    setData("wishlist", nextItems);
  };

  const isWishlisted = (id) => items.some((item) => item.id === id);

  const toggleWishlist = (product) => {
    if (isWishlisted(product.id)) {
      save(items.filter((item) => item.id !== product.id));
    } else {
      save([...items, product]);
    }
  };

  const itemCount = useMemo(() => items.length, [items]);

  return (
    <WishlistContext.Provider
      value={{ items, itemCount, isWishlisted, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
