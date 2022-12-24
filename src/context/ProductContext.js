import React, { createContext, useState } from "react";
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [productItem, setProductItem] = useState([
    {
      id: 1,
      name: "Mouse",
      img: require("../../assets/box.png"),
      price: 3000,
      complete: true
    },
    {
      id: 2,
      name: "Keyboard",
      img: require("../../assets/box.png"),
      price: 500,
      complete: true
    },
  ]);

  return (
    <React.Fragment>
      <ProductContext.Provider value={[productItem, setProductItem]}>
        {props.children}
      </ProductContext.Provider>
    </React.Fragment>
  );
};
