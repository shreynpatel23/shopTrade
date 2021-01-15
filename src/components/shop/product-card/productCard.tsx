import React, { useContext } from "react";
import * as Styles from "./productCard.module.scss";
import { Option, Product } from "../../../constants/product";
import SelectSize from "./select-size/selectSize";
import { AddProductToCartContext } from "../../../context/addProductsToCart";

export default function ProductCard({
  products,
  searchedProduct = "",
  selectedTag = "",
  canAddProductsToCart
}: any) {
  const addProductToCartContext = useContext(AddProductToCartContext);
  const [toggleAddToCart, setToggleAddToCart] = React.useState({
    toggle: false,
    data: {}
  });
  const filteredProducts = products.filter((product: Product) => {
    if (selectedTag) {
      return (
        product.tag.toLowerCase().includes(selectedTag.toLowerCase()) &&
        product.vendor.toLowerCase().includes(searchedProduct.toLowerCase())
      );
    }
    return product.vendor.toLowerCase().includes(searchedProduct.toLowerCase());
  });
  return (
    <div className={Styles.card_wrapper}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product: Product, index: number) => {
          return (
            <div key={index} style={{ padding: "25px 10px" }}>
              <div className={Styles.card}>
                <img
                  src={product.image_src[0]}
                  alt="post_image"
                  className={Styles.post_image}
                />
                {canAddProductsToCart && (
                  <div className={Styles.overlay}>
                    {toggleAddToCart.toggle &&
                    toggleAddToCart.data === product ? (
                      <SelectSize
                        options={product.options}
                        // selectedSize={(value: Option) => selectedProduct({...product, selectedSize: value})}
                        selectedSize={(value: Option) => {
                          setToggleAddToCart((toggleAddToCart) => ({
                            ...toggleAddToCart,
                            toggle: false,
                            data: product
                          }));
                          // updating the context here.
                          addProductToCartContext.setProducts([
                            ...addProductToCartContext.productList,
                            { ...product, selected_size: value }
                          ]);
                        }}
                      />
                    ) : (
                      <div style={{ textAlign: "center" }}>
                        <button
                          className={Styles.addToCart_button_back}
                          onClick={() =>
                            setToggleAddToCart((toggleAddToCart) => ({
                              ...toggleAddToCart,
                              toggle: true,
                              data: product
                            }))
                          }
                        >
                          <p className={Styles.addToCart_button_text}>
                            ADD TO CART
                          </p>
                        </button>
                      </div>
                    )}
                  </div>
                )}
                <div className={Styles.card_body}>
                  <p className={Styles.brand_vendor}>{product.vendor}</p>
                  <div className={Styles.name_wrapper}>
                    <p className={Styles.brand_name}>{product.name}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 0"
                    }}
                  >
                    <p
                      className={Styles.price}
                      style={{ padding: "0 5px 0 0" }}
                    >
                      ${product.price}
                    </p>
                    <p
                      className={Styles.compate_at_price}
                      style={{ padding: "0 5px" }}
                    >
                      ${product.compare_at_price}
                    </p>
                    <p className={Styles.discount} style={{ padding: "0 5px" }}>
                      (
                      {100 -
                        Math.round(
                          (Number(product.price) /
                            Number(product.compare_at_price)) *
                            100
                        )}
                      % OFF )
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className={Styles.empty_state_wrapper}>
          <h3>No products found</h3>
        </div>
      )}
    </div>
  );
}
