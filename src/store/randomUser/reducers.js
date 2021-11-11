import actionTypes from './actionTypes';
import { History } from 'helpers';

const initialState = {
  data: [],
  pagination: {},
};

const setRandom = (state, payload) => {
  return {
    ...state,
    data: payload.data,
    pagination: payload.pagination,
  };
};

const randomUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RANDOM_SUCCESS:
      return setRandom(state, action.payload);
    default:
      return state;
  }
};

export default randomUserReducer;
