import { takeLatest, call, put, select } from 'redux-saga/effects';
import queryString from 'query-string';

import { postAPISaga, getAPISaga } from './requestSaga';

function* create({ payload }) {
  yield call(postAPISaga, '/tharavu/events', payload);
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({
    type: 'SHOW_TOAST',
    payload: { variant: 'success', msg: 'Event created successfully' },
  });
  yield put({ type: 'GET_EVENTS' });
}

function* filterEvents({ payload }) {
  const response = yield call(
    postAPISaga,
    `/tharavu/filter-events?page=${payload.page}`,
    payload.data,
  );
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({ type: 'SET_EVENTS', payload: response.data });
  yield put({ type: 'SET_PAGINATION', payload: response.pagination });
}

function* update({ payload }) {
  yield call(postAPISaga, `/tharavu/events/${payload.id}`, payload, true);
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({
    type: 'SHOW_TOAST',
    payload: { variant: 'success', msg: 'Event updated' },
  });
  yield put({ type: 'GET_EVENTS' });
}

function* deleteEvent({ payload }) {
  yield call(getAPISaga, `/tharavu/events/${payload}`, true);
  yield put({
    type: 'SHOW_TOAST',
    payload: { variant: 'warning', msg: 'Event deleted!' },
  });
  yield put({ type: 'GET_EVENTS' });
}

function* getEvents({ payload }) {
  const pagination = yield select((state) => state.pagination.pagination);
  const currentPage = (payload && payload.page) || pagination.currentPage;
  const currentQuery = (payload && payload.query) || pagination.query;
  const response = yield call(
    getAPISaga,
    `/tharavu/events?page=${currentPage}&${queryString.stringify(
      currentQuery,
    )}`,
  );
  yield put({ type: 'SET_EVENTS', payload: response.data });
  yield put({ type: 'SET_PAGINATION', payload: response.pagination });
}

function* resetEvents() {
  yield put({ type: 'SET_EVENTS', payload: [] });
  yield put({ type: 'SET_PAGINATION', payload: {} });
}

function* getEventCategoriesCount({ payload }) {
  const response = yield call(
    getAPISaga,
    `/tharavu/event-categories-count?start_date=${payload}`,
  );
  yield put({ type: 'SET_EVENT_CATEGORIES_COUNT', payload: response.data });
}

function* getTodayEvents({ payload }) {
  const response = yield call(
    getAPISaga,
    `/tharavu/today-events?page=${payload.page}&${queryString.stringify(
      payload.query,
    )}`,
  );
  yield put({ type: 'SET_TODAY_EVENTS', payload: response.data });
  yield put({ type: 'SET_PAGINATION', payload: response.pagination });
}

export default function* eventSaga() {
  yield takeLatest('CREATE_EVENT', create);
  yield takeLatest('GET_EVENTS', getEvents);
  yield takeLatest('UPDATE_EVENT', update);
  yield takeLatest('DELETE_EVENT', deleteEvent);
  yield takeLatest('RESET_EVENTS', resetEvents);
  yield takeLatest('FILTER_EVENTS', filterEvents);
  yield takeLatest('GET_EVENT_CATEGORIES_COUNT', getEventCategoriesCount);
  yield takeLatest('GET_TODAY_EVENTS', getTodayEvents);
}
