import {SET_ACTIVE_USER, SET_USER_LOGOUT_STATE} from './AuthTypes';

export const setActiveUser = (payload = {}) => {
  return {
    type: SET_ACTIVE_USER,
    payload: payload
  }
} 

export const setUserLogoutState = () => {
  return {
    type: SET_USER_LOGOUT_STATE,
  }
} 