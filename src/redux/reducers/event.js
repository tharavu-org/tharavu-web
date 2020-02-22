import { handleActions } from 'redux-actions';

const defaultState = {
  events: [],
};

export default handleActions(
  {
    SET_EVENTS: (state, action) => ({
      ...state,
      events: action.payload,
    }),
  },
  defaultState,
);
