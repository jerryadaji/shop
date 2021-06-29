import React from "react";

import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import Title from "../Title";

const Home = () => {
  useFirestoreConnect([{
    collection: 'products'
  }])

  const products = useSelector((state) => state.firestore.ordered.products)

  console.log(products)

  return (
    <div className="container">
      <Title>Home</Title>
      {products && <ul>{products.map(product => <li key={product.id}>{product.name}</li>)}</ul>}
    </div>
  );
};

export default Home;
