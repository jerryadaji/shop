import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from './wishListTypes';

export const add_to_wishList = (payload = {}) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: payload
  }
}

export const remove_from_wishList = (payload = {}) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: payload
  }
}