import React, { useState } from 'react';

const CartContext = React.createContext();
export const useCart = () => React.useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};