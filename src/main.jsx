import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { initializeData } from "./utils/storage";
import { AuthProvider } from "./context/AuthContext";
import { PesticideProvider } from "./context/PesticideContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import "./styles.css";
initializeData();
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PesticideProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </PesticideProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
