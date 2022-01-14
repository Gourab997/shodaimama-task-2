import React from "react";
import logo from "../../../image/logo.png";
import ssl from "../../../image/item/categories/SSLCommerz-Pay-With-logo-All-Size-05.b4efc4ca.png";
const Footer = () => {
  return (
    <div className='top-banner'>
      <div className='footer'>
        <div>
          <div className='footer-image'>
            <img src={logo} className='logo' alt='' />
          </div>

          <div className='social'>
            <i className='fab fa-facebook-square fabs'></i>
            <i className='fab fa-linkedin fabs'></i>
            <i className='fab fa-instagram fabs'></i>
            <i className='fab fa-youtube fabs'></i>
          </div>
          <div className='app-button'>
            <a>SHODAI MAMA APP</a>
            <div className='blur-effect'></div>
          </div>

          <p className='product-text'>ShodaiMama © 2021</p>
        </div>
        <div>
          <h3>Useful Links</h3>
          <a className='footer-link' href=''>
            About ShodaiMama
          </a>
          <a className='footer-link' href=''>
            FAQ
          </a>
          <a className='footer-link' href=''>
            Contact Us
          </a>
          <a className='footer-link' href=''>
            Career
          </a>
        </div>
        <div>
          <h3>Helpful Links</h3>
          <a className='footer-link' href=''>
            Why Choose ShodaiMama
          </a>
          <a className='footer-link' href=''>
            Privacy policy
          </a>
          <a className='footer-link' href=''>
            Terms & Condition
          </a>
          <a className='footer-link' href=''>
            Delivery, Return & Refund
          </a>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p className='contact'>
            <i className='fas fa-map-marker fabs'></i> House 18, block: k, South
            Banasree, Dhaka
          </p>
          <p className='contact'>
            <i className='far fa-envelope fabs'></i> info@shodaimama.com
          </p>
          <p className='contact'>
            <i className='fas fa-headset fabs'></i>support@shodaimama.com
          </p>
          <button className='contact-button'>Help : +8801894874999</button>
        </div>
      </div>
      <hr />
      <img className='ssl' src={ssl} alt='' />
    </div>
  );
};

export default Footer;
