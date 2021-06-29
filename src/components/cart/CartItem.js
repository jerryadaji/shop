import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CurrencyFormat from 'react-currency-format';
import Counter from "../Counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CartItemWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 2em;
  }

  a {
    color: ${({ theme }) => theme.color.black};
  }

  .remove-button {
    padding: 0;
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

const ProductInformation = styled.div`
  img {
    width: 3.5em;
  }

  .order-number {
    color: ${({ theme }) => theme.color.grey};
  }
`;

const CartItem = ({ order, product, removeItem, updateItem }) => {
  const counterCallback = (value) => {
    updateItem({ id: order.orderId, value });
  };
  return (
    <CartItemWrapper className="row align-items-center">
      <div className="col-10 col-md-4 order-1">
        <ProductInformation className="row align-items-center">
          <figure className="col-3">
            <img
              src={product.images[0].url}
              alt="Placeholder"
              className="rounded-circle"
            />
          </figure>
          <div className="col-9 product-details">
            <p className="product-name font-weight-bold mb-1">
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </p>
            <p className="order-number">#{order.orderId}</p>
          </div>
        </ProductInformation>
      </div>
      <div className="col-2 col-md-2 order-3 order-md-2">
        {order.selectedColor.name}
      </div>
      <div className="col-4 col-md-1 order-4 order-md-3">
        {order.selectedSize}
      </div>
      <div className="col-6 col-md-2 order-5 order-md-4">
        <Counter value={order.quantity} callback={counterCallback} />
      </div>
      <div className="col-6 col-md-2 order-6 order-md-5 font-weight-bold">
        <CurrencyFormat 
          value={order.quantity * product.price - (order.quantity * product.price * 0.1)} 
          displayType={'text'} 
          thousandSeparator={true} 
          prefix={'₦'} 
        />
      </div>
      <div className="col-2 col-md-1 order-2 order-md-6 font-weight-bold text-right">
        <button
          className="remove-button"
          onClick={() => removeItem(order.orderId)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </CartItemWrapper>
  );
};

export default CartItem;
