import { authType } from '../types/authType';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case authType.LOGGED_IN_USER:
      return { ...state, ...action.payload };
    case authType.LOGOUT:
      return action.payload;
    default:
      return state;
  }
};
