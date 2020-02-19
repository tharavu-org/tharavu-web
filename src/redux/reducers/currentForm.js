import { handleActions } from 'redux-actions';

const defaultState = {
  success: false,
  backendErrors: [],
};

export default handleActions(
  {
    SET_CURRENT_FORM_BACKEND_ERRORS: (state, action) => ({
      ...state,
      backendErrors: action.payload,
    }),
    SET_CURRENT_FORM_SUCCESS: state => ({
      ...state,
      success: true,
    }),
    DESTROY_CURRENT_FORM: state => ({
      ...state,
      success: false,
      backendErrors: [],
    }),
  },
  defaultState,
);
