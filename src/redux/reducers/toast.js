import { handleActions } from 'redux-actions';

const defaultState = {
  open: false,
  variant: 'info',
  msg: '',
};

export default handleActions(
  {
    SHOW_TOAST: (state, action) => ({
      ...state,
      open: true,
      variant: action.payload.variant,
      msg: action.payload.msg,
    }),
    HIDE_TOAST: state => ({
      ...state,
      open: false,
    }),
  },
  defaultState,
);
