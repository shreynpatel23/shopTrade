import React from "react";

export const AddProductToCartContext = React.createContext({
  productList: [],
  setProducts: (productList: any) => {}
});

const AddProductToCartContextProvider = (props: any) => {
  const [products, setProducts] = React.useState([]);
  return (
    <AddProductToCartContext.Provider
      value={{
        productList: products,
        setProducts: (value: any) => setProducts(value)
      }}
    >
      {props.children}
    </AddProductToCartContext.Provider>
  );
};

export default AddProductToCartContextProvider;
