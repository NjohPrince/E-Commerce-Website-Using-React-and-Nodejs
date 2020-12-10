import React from "react";

function ProductScreen(props) {
  console.log(props.match.params.id)
  return <div>TestDirect</div>;
}

export default ProductScreen;