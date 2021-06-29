import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from './wishListTypes';

const initialState = {list: [2,4]};

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        list: [...state.list, action.payload.id]
      }
    case REMOVE_FROM_WISHLIST:
      // Make Copy of list
      var tempArray = state.list;
      
      // Get index of item to remove
      const index = tempArray.findIndex((product) => product === action.payload.id);

      // Remove item from copy of list
      tempArray.splice(index, 1);

      // Update state with copy of list
      return {
        ...state,
        list: [...tempArray]
      }
    default:
      return state;
  }
}

export default wishListReducer;