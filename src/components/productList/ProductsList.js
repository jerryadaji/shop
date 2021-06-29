import React from "react";
import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";

const ProductsList = (props) => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="row">
      {products.map(product => <ProductItem key={product.id} product={product}/> )}
    </div>
  );
};

export default ProductsList;
