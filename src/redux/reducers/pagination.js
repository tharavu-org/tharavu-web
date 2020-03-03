import { handleActions } from 'redux-actions';

const defaultState = {
  pagination: {},
};

export default handleActions(
  {
    SET_PAGINATION: (state, action) => {
      return { ...state, pagination: action.payload };
    },
  },
  defaultState,
);
