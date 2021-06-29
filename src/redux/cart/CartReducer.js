import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_QUANTITY,
} from "./CartTypes";

const initialState = {
  orders: [
    {
      productId: 0,
      orderId: "89834567",
      selectedColor: {
        name: "Black",
        code: "#000000"
      },
      selectedSize: "XL",
      quantity: 5,
      orderPrice: 2497500,
    },
    {
      productId: 1,
      orderId: "67898345",
      selectedColor: "White",
      selectedSize: "XL",
      quantity: 2,
      orderPrice: 6000,
    },
    {
      productId: 2,
      orderId: "90843845",
      selectedColor: "Green",
      selectedSize: "M",
      quantity: 3,
      orderPrice: 6000,
    },
    {
      productId: 3,
      orderId: "67843100",
      selectedColor: "Blue",
      selectedSize: "SM",
      quantity: 1,
      orderPrice: 2000,
    },
  ],
};

const CartReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const temp = state.orders;
      const index = temp.findIndex((order) => order.orderId === action.payload.orderId)

      if(index > -1){
        temp[index] = action.payload;
        return {
          ...state,
          orders: temp
        };
      }else{
        return {
          ...state,
          orders: [...state.orders, action.payload]
        };
      }

    case UPDATE_QUANTITY:
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order.orderId === action.payload.id) {
            return ({...order, quantity: action.payload.value});
          } else {
            return order;
          }
        }),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order.orderId !== action.payload
        ),
      };

    case CLEAR_CART:
      return {
        ...state,
        products: 0,
      };

    default:
      return state;
  }
};

export default CartReducer;
