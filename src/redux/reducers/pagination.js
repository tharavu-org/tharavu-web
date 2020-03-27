import { handleActions } from 'redux-actions';

const defaultState = {
  pagination: {},
  payload: null,
};

export default handleActions(
  {
    SET_PAGINATION: (state, action) => {
      return { ...state, pagination: action.payload };
    },
    SET_PAGINATION_PAYLOAD: (state, action) => {
      return { ...state, payload: action.payload };
    },
  },
  defaultState,
);
