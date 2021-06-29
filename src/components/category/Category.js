import React from "react";
import Title from "../Title";
import ProductList from "../productList/ProductsList";

const Category = () => {
  return (
    <div className="container">
      <Title>Men's Fashion</Title>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Category;
