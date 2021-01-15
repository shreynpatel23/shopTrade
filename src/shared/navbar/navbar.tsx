import * as React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import downArrow from "../../assets/images/arrow-down.svg";
import { CART, navItems } from "../../constants/nav-items";
import searchImage from "../../assets/images/search.svg";
import userImage from "../../assets/images/user.svg";
import cartImage from "../../assets/images/cart.svg";
import { AddProductToCartContext } from "../../context/addProductsToCart";
import Cart from "../../components/shop/cart/cart";

export default function Navbar({
  activeTab,
  setActiveTab,
  filterProduct
}: any) {
  const addProductToCartContext = React.useContext(AddProductToCartContext);
  const [toggleInput, setToggleInput] = React.useState(false);
  return (
    <div className="background">
      <img src={logo} alt="logo" className="logo" />
      <div className="horizontal_nav_items">
        <div className="nav_items">
          {navItems.map((item, index) => {
            return (
              <div
                key={index}
                className="nav_link"
                onClick={() => setActiveTab(item.toLowerCase())}
              >
                <p
                  className={`nav_item_text ${
                    item.toLowerCase() === activeTab ? "active" : ""
                  }`}
                >
                  {item}
                </p>
                <div
                  className={`${
                    item.toLowerCase() === activeTab
                      ? "showActiveArrow"
                      : "hideActiveArrow"
                  }`}
                >
                  <img src={downArrow} alt="down-arrow" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="external_links">
        <div className="external_link_spacing">
          {toggleInput ? (
            <div className="inputWrapper">
              <input
                type="text"
                placeholder="search product here"
                className="formControl"
                onChange={(event) => {
                  filterProduct(event.target.value);
                }}
              />
              <div
                style={{ padding: "0 7px", cursor: "pointer" }}
                onClick={() => {
                  filterProduct("");
                  setToggleInput(false);
                }}
              >
                &times;
              </div>
            </div>
          ) : (
            <div onClick={() => setToggleInput(true)}>
              <img
                src={searchImage}
                alt="search"
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </div>
        <div className="external_link_spacing">
          <a href="#user">
            <img src={userImage} alt="user" />
          </a>
        </div>
        <div className="external_link_spacing">
          <div style={{ position: "relative" }}>
            <a href="#cart" onClick={() => setActiveTab(CART.toLowerCase())}>
              <img src={cartImage} alt="cart" />
            </a>
            {addProductToCartContext.productList.length > 0 && (
              <div className="indicator">
                <p className="value">
                  {addProductToCartContext.productList.length}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="vertical_nav_items">
          <div className="external_link_spacing">
            <div className="dropdown">
              <div className="collapse_switch">
                <img src={downArrow} alt="down_arrow" />
              </div>
              <div className="dropdown-content">
                {navItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{ padding: "10px 0" }}
                      className="nav_link"
                      onClick={() => setActiveTab(item.toLowerCase())}
                    >
                      <div
                        style={{ transform: "rotate(90deg)" }}
                        className={`${
                          item.toLowerCase() === activeTab
                            ? "showActiveArrow"
                            : "hideActiveArrow"
                        }`}
                      >
                        <img src={downArrow} alt="down-arrow" />
                      </div>
                      <p
                        className={`nav_item_text ${
                          item.toLowerCase() === activeTab ? "active" : ""
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
