import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const useCart = () => {
  useContext(CartContext);
};

const MyCart = (props) => {
  const { children } = props;
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { MyCart, useCart };
