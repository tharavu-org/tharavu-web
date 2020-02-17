import { handleActions } from 'redux-actions';

const defaultState = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')),
  signinFailedMsg: null,
};

export default handleActions(
  {
    SET_CURRENT_USER: (state, action) => {
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return { ...state, currentUser: action.payload };
    },
    SIGNIN_FAILED: (state, action) => {
      return { ...state, signinFailedMsg: action.payload };
    },
  },
  defaultState,
);
