import { handleActions } from 'redux-actions';

const defaultState = {
  tags: [],
};

export default handleActions(
  {
    SET_TAGS: (state, action) => ({
      ...state,
      tags: action.payload,
    }),
  },
  defaultState,
);
