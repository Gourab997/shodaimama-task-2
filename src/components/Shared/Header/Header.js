import React from "react";
import "./Header.css";
import logo from "../../../image/logo.png";
import arrow from "../../../image/arrow.png";

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

      total = total + product.price * product.quantity;
      totalQuantity = totalQuantity + product.quantity;
    }
  }

  return (
    <div>
      <nav className='top-bar'>
        <div className='topnav'>
          <img src={logo} alt='' className='logo' />
          <div className='link-top'>
            <a href='#home'>
              <i className='fas fa-search icons searched'></i>
            </a>
            <a href='#news' className='select-delivery'>
              <span className='delivery'>
                <i
                  className='fas fa-map-marker-alt'
                  style={{ paddingRight: "5px" }}
                ></i>
                Select Delivery Location
              </span>
            </a>
            <a href='#contact' className='select-delivery'>
              <span className='delivery'>
                <i className='fas fa-user' style={{ paddingRight: "5px" }}></i>{" "}
                Sign In
              </span>
            </a>
            <a href='#about'>
              <i
                className='fas fa-shopping-cart delivery searched'
                style={{ paddingTop: "15px" }}
              ></i>
            </a>
            <span>
              <a href=''>
                <img className='arrow' src={arrow} alt='' />
              </a>
              <a className='cart'>
                <div className='cart-inner'>
                  <p style={{ color: "white" }}>
                    <i className='fas fa-clipboard-list'></i> {totalQuantity}
                  </p>
                  <hr className='line' />
                  <p style={{ color: "white" }}>৳ {total.toFixed(2)}</p>
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
