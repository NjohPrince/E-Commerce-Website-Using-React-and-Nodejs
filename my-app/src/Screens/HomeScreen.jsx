import React from "react";
import Data from '../Data'

function HomeScreen(props) {
  return (
    <ul className="products">
      {Data.products.map((product) => (
        <li className="product">
          <img className="product-image" src={product.image} alt="product" />
          <div className="product-name">
            <a href="product.html">{product.name}</a>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-rating">
            {product.ratings} Stars {product.reviews} reviews
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomeScreen;