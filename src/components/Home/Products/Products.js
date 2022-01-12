import React, { useEffect, useState } from "react";

import Product from "../Product/Product";
import { addToDb, getStoredCart } from "../../../utilities/fakedb";
import Header from "../../Shared/Header/Header";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setProductsCart(data);
      });
  }, []);
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();

      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.filter((product) => product.id == key);
        console.log(key, addedProduct);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }

      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // save to local storage (for now)
    addToDb(product.id);
  };

  return (
    <div className='product'>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          handleAddToCart={handleAddToCart}
        ></Product>
      ))}
      <Header cart={cart}></Header>
    </div>
  );
};

export default Products;
