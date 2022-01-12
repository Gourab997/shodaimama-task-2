import React from "react";
import fast from "../../../image/item/fast-delivery.86065e4e.png";
import cardImg from "../../../image/item/download.png";
import cards from "../../../image/item/cash.png";
import Rating from "react-rating";
const Product = (props) => {
  const { title, image, price, description, rating, category } = props.product;
  let quantity = 0;
  for (const product of props.cart) {
    quantity = product.quantity;
    console.log(quantity);
  }
  return (
    <div class='product-card'>
      <div class='tooltip'>
        <div></div>
        <span class='tooltip-text-regular'>{category}</span>
      </div>
      <div class='product-image-area'>
        <img class='product-image' src={image} alt='' />
      </div>

      <h4 class='product-text' style={{ padding: "10px" }}>
        {title.slice(0, 20)}
      </h4>
      <h6 class='product-text middle-text' style={{ padding: "10px" }}>
        {description.slice(0, 120)}
      </h6>
      <h3 class='product-text'>৳ {price}</h3>

      <div class='product-button'>
        <button class='details-button'>Details</button>
        <div></div>
      </div>
      <span class='delivery'>
        <div class='delivery-fast'>
          <i class='fas fa-users' style={{ paddingRight: "5px" }}></i>
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
      {props.cart.quantity ? (
        <button
          onClick={() => props.handleAddToCart(props.product)}
          class='card-button'
        >
          Add to Cart
        </button>
      ) : (
        <button
          onClick={() => props.handleAddToCart(props.product)}
          class='card-button'
        >
          Cart
        </button>
      )}
    </div>
  );
};

export default Product;
