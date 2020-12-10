import React from "react";
import Data from "../Data"

function ProductScreen(props) {
  const product = Data.products.find(x => x._id === props.match.params.id);
  return <div>{product.name}</div>;
}

export default ProductScreen;