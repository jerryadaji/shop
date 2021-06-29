import React from "react";
import { connect } from "react-redux";

import { addToCart, removeFromCart, clearCart } from "../redux";

import Title from "./Title";
import Button from "./buttons/Button";

const Cart = (props) => {
  return (
    <>
      <Title>In Cart: {props.products}</Title>
      <Button title={"Add"} type={"primary"} onClick={props.addToCart} />
      <Button
        title={"Remove"}
        type={"secondary"}
        onClick={props.removeFromCart}
      />
      <Button
        title={"Remove All"}
        type={"secondary"}
        onClick={props.clearCart}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: () => dispatch(addToCart()),
    removeFromCart: () => dispatch(removeFromCart()),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
