import { handleActions } from 'redux-actions';

const defaultState = {
  logs: [],
};

export default handleActions(
  {
    SET_USER_LOGS: (state, action) => ({
      ...state,
      logs: action.payload,
    }),
  },
  defaultState,
);
