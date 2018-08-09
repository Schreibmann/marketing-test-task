import { CHECK_USER, UPDATE_USER } from '../actions/types';

const initialState = {
  id: null,
  shared: false,
  email: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHECK_USER:
      return {
        ...state,
        ...action.usr,
      };
    case UPDATE_USER:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
