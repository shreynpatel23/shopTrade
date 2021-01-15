import React from "react";
import { AddProductToCartContext } from "../../../context/addProductsToCart";
import ProductCard from "../product-card/productCard";
import "./cart.css";

export default function Cart() {
  const addProductToCartContext = React.useContext(AddProductToCartContext);
  return (
    <div className="cart_background">
      <div className="heading_wrapper">
        <div>
          <p className="heading">Cart</p>
          <div style={{ padding: "20px" }}>
            <ProductCard
              products={addProductToCartContext.productList}
              canAddProductsToCart={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
