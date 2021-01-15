import * as React from "react";
import "./styles.css";
import Navbar from "./shared/navbar/navbar";
import { ABOUTUS, CONTACTUS, SHOP, STORE, CART } from "./constants/nav-items";
import Shop from "./components/shop/shop";
import About from "./components/about/about";
import Store from "./components/store/stores";
import Contact from "./components/contact/contact";
import AddProductToCartContextProvider from "./context/addProductsToCart";
import Cart from "./components/shop/cart/cart";

export default function App() {
  const [activeNav, setActiveNav] = React.useState(SHOP.toLowerCase());
  const [searchedProduct, setSearchedProduct] = React.useState("");
  return (
    <div className="app_wrapper">
      <AddProductToCartContextProvider>
        <Navbar
          activeTab={activeNav}
          setActiveTab={(value: string) => setActiveNav(value)}
          filterProduct={(productName: string) =>
            setSearchedProduct(productName)
          }
        />
        <div className="playground">
          {activeNav === SHOP.toLowerCase() && (
            <Shop searchedProduct={searchedProduct} />
          )}
          {activeNav === ABOUTUS.toLowerCase() && <About />}
          {activeNav === STORE.toLowerCase() && <Store />}
          {activeNav === CONTACTUS.toLowerCase() && <Contact />}
          {activeNav === CART.toLowerCase() && <Cart />}
        </div>
      </AddProductToCartContextProvider>
    </div>
  );
}
