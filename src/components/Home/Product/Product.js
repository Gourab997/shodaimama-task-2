import React from "react";

import Rating from "react-rating";
import "./Product.css";
const Product = (props) => {
  let quantity = 0;
  const { id, title, image, price, description, rating, category } =
    props.product;

  //quantity check for cart
  if (props?.cart) {
    for (const product of props?.cart) {
      if (product.id === id) {
        if (!product.quantity) {
          product.quantity = 1;
        }
        console.log(product.quantity);
        quantity = parseInt(quantity) + parseInt(product?.quantity);
      }
    }
  }

  return (
    <div className='product-card  '>
      <div className='tooltip'>
        <div></div>
        <span className='tooltip-text-regular'>{category}</span>
      </div>
      <div className='product-image-area'>
        <img className='product-image' src={image} alt='' />
      </div>

      <h4 className='product-text' style={{ padding: "10px" }}>
        {title.slice(0, 20)}
      </h4>
      <h6 className='product-text middle-text' style={{ padding: "10px" }}>
        {description.slice(0, 120)}
      </h6>
      <h3 className='product-text'>৳ {price}</h3>

      <div className='product-button'>
        <button className='details-button'>Details</button>
        <div></div>
      </div>
      <span className='delivery'>
        <div className='delivery-fast'>
          <i className='fas fa-users' style={{ paddingRight: "5px" }}></i>
          <p>{rating.count}</p>
        </div>
        <div>
          <Rating
            initialRating={rating.rate}
            emptySymbol='far fa-star icon-color'
            fullSymbol='fas fa-star icon-color'
            readonly
          ></Rating>
        </div>
      </span>

      {quantity == 0 ? (
        <div className='cart-button'>
          <button
            onClick={() => props.handleAddToCart(props.product)}
            className='card-button'
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <div className='cart-handle'>
          <button
            onClick={() => props.handleAddToCart(props.product)}
            className='card-button add-cart'
          >
            {quantity} in Cart
          </button>
          <button
            onClick={() => props.handleRemoveToCart(props.product)}
            className='card-button remove-cart'
          >
            Remove in cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
