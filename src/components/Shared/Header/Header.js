import React from "react";
import "./Header.css";
import logo from "../../../image/logo.png";
import arrow from "../../../image/leftArrow.ec08e6e9.svg";

const Header = (props) => {
  const { cart } = props;
  console.log(cart);
  let totalQuantity = 0;
  let total = 0;

  if (cart) {
    //  console.log(cart);
    for (const product of cart) {
      if (!product.quantity) {
        product.quantity = 1;
      }
      // for (const p of product) {
      //   let currentPrice = p.price;
      //   console.log(currentPrice);
      // }
      //  console.log(product);
      // for (let p in product) {
      //   // console.log(product[p]?.price, product.quantity);

      //   total = total + product[p]?.price * product.quantity;
      // }
      //total = total + p.price * product.quantity;
      total = total + product.price * product.quantity;
      totalQuantity = totalQuantity + product.quantity;
    }
  }

  return (
    <div>
      <nav class='top-bar'>
        <div class='topnav'>
          <img src={logo} alt='' class='logo' />
          <div class='link-top'>
            <a href='#home'>
              <i class='fas fa-search icons searched'></i>
            </a>
            <a href='#news' class='select-delivery'>
              <span class='delivery'>
                <i
                  class='fas fa-map-marker-alt'
                  style={{ paddingRight: "5px" }}
                ></i>
                Select Delivery Location
              </span>
            </a>
            <a href='#contact' class='select-delivery'>
              <span class='delivery'>
                <i class='fas fa-user' style={{ paddingRight: "5px" }}></i> Sign
                In
              </span>
            </a>
            <a href='#about'>
              <i
                class='fas fa-shopping-cart delivery searched'
                style={{ paddingTop: "15px" }}
              ></i>
            </a>
            <span>
              <a href=''>
                <img class='arrow' src={arrow} alt='' />
              </a>
              <a class='cart'>
                <div class='cart-inner'>
                  <p style={{ color: "white" }}>
                    <i class='fas fa-clipboard-list'></i> {totalQuantity}
                  </p>
                  <hr class='line' />
                  <p style={{ color: "white" }}>৳ {total}</p>
                </div>
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
