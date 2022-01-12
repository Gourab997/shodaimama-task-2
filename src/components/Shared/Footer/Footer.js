import React from "react";
import logo from "../../../image/logo.png";
import ssl from "../../../image/item/categories/SSLCommerz-Pay-With-logo-All-Size-05.b4efc4ca.png";
const Footer = () => {
  return (
    <div class='top-banner'>
      <div class='footer'>
        <div>
          <div class='footer-image'>
            <img src={logo} class='logo' alt='' />
          </div>

          <div class='social'>
            <i class='fab fa-facebook-square fabs'></i>
            <i class='fab fa-linkedin fabs'></i>
            <i class='fab fa-instagram fabs'></i>
            <i class='fab fa-youtube fabs'></i>
          </div>
          <div class='app-button'>
            <a>SHODAI MAMA APP</a>
            <div class='blur-effect'></div>
          </div>

          <p class='product-text'>ShodaiMama © 2021</p>
        </div>
        <div>
          <h3>Useful Links</h3>
          <a class='footer-link' href=''>
            About ShodaiMama
          </a>
          <a class='footer-link' href=''>
            FAQ
          </a>
          <a class='footer-link' href=''>
            Contact Us
          </a>
          <a class='footer-link' href=''>
            Career
          </a>
        </div>
        <div>
          <h3>Helpful Links</h3>
          <a class='footer-link' href=''>
            Why Choose ShodaiMama
          </a>
          <a class='footer-link' href=''>
            Privacy policy
          </a>
          <a class='footer-link' href=''>
            Terms & Condition
          </a>
          <a class='footer-link' href=''>
            Delivery, Return & Refund
          </a>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p class='contact'>
            <i class='fas fa-map-marker fabs'></i> House 18, block: k, South
            Banasree, Dhaka
          </p>
          <p class='contact'>
            <i class='far fa-envelope fabs'></i> info@shodaimama.com
          </p>
          <p class='contact'>
            <i class='fas fa-headset fabs'></i>support@shodaimama.com
          </p>
          <button class='contact-button'>Help : +8801894874999</button>
        </div>
      </div>
      <hr />
      <img class='ssl' src={ssl} alt='' />
    </div>
  );
};

export default Footer;
