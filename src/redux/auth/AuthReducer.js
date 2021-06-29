import {SET_ACTIVE_USER, SET_USER_LOGOUT_STATE} from './AuthTypes';

const initialState = {
  userName: null,
  userEmail: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return{
        ...state,
        userName: action.payload.userName,
        userEmail: action.payload.userEmail
      }
    case SET_USER_LOGOUT_STATE:
      return{
        ...state,
        userName: null,
        userEmail: null
      }
    default:
      return state;
  }
}

export default authReducer;