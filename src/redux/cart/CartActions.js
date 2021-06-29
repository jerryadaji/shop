import {
  ADD_TO_CART,
  UPDATE_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "./CartTypes";

export const addToCart = (payload={}) => {
  return {
    type: ADD_TO_CART,
    payload: payload
  };
};

export const updateQuantity = (payload = {}) => {
  return {
    type: UPDATE_QUANTITY,
    payload: payload,
  };
};

export const removeFromCart = (orderId = 0) => {
  return {
    type: REMOVE_FROM_CART,
    payload: orderId,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
