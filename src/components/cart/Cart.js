import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateQuantity, removeFromCart } from "../../redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../Title";
import CartListHeader from "./CartListHeader";
import CartListFooter from "./CartListFooter";
import CartItem from "./CartItem";

const Cart = (props) => {
  const products = useSelector((state) => state.products.products);
  const orders = useSelector((state) => state.cart.orders);
  const dispatch = useDispatch();
  var totalPrice = 0;

  const removeItem = (orderId) => {
    dispatch(removeFromCart(orderId));
  };

  const updateItem = (payload) => {
    dispatch(updateQuantity(payload));
  };

  return (
    <section className="container">
      <Title>Shopping Cart</Title>
      {orders.length > 0 && 
        <>
        <CartListHeader className="row" />
        <div className="mb-5">
          {orders.map((order) => {
            // Get product
            const product = products.find(
              (product) => product.id === order.productId
            );

            // Update Total Price
            totalPrice += product.price * order.quantity;

            // Render Cart Item
            return (
              <CartItem
                key={order.orderId}
                order={order}
                product={product}
                removeItem={removeItem}
                updateItem={updateItem}
              />
            );
          })}
        </div>
        <CartListFooter totalPrice={totalPrice} />
        </>
      }
      
      {orders.length < 1 && 
        <div className="text-center mt-5">
          <div className="display-1 text-color-light mt-5 mb-4"><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></div>
          <h2 className="h6">Your cart is empty. Go forth and shop!</h2>
        </div>
      }
    </section>
  );
};

export default Cart;
