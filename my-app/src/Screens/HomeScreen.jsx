import React from "react";
import {Link} from 'react-router-dom';
import Data from '../Data'

function HomeScreen(props) {
  return (
    <ul className="products">
      {Data.products.map((product) => (
        <li className="product">
          <img className="product-image" src={product.image} alt="product" />
          <div className="product-name">
            <Link to={'/product/' + product._id}>{product.name}</Link>
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