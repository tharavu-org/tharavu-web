import { handleActions } from 'redux-actions';

const defaultState = {
  events: [],
  todayEvents: [],
  categoriesCount: {},
};

export default handleActions(
  {
    SET_EVENTS: (state, action) => ({
      ...state,
      events: action.payload,
    }),
    SET_TODAY_EVENTS: (state, action) => ({
      ...state,
      todayEvents: action.payload,
    }),
    SET_EVENT_CATEGORIES_COUNT: (state, action) => ({
      ...state,
      categoriesCount: action.payload,
    }),
  },
  defaultState,
);
