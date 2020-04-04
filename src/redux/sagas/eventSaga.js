import { takeLatest, call, put, select } from 'redux-saga/effects';
import queryString from 'query-string';

import { postAPISaga, getAPISaga } from './requestSaga';

function* create(params) {
  yield call(postAPISaga, '/tharavu/events', params.payload);
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({
    type: 'SHOW_TOAST',
    payload: { variant: 'success', msg: 'Event created successfully' },
  });
  yield put({ type: 'GET_EVENTS' });
}

function* filterEvents({ payload }) {
  const result = yield call(
    postAPISaga,
    `/tharavu/filter-events?page=${payload.page}`,
    payload.data,
  );
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({ type: 'SET_EVENTS', payload: result.data });
  yield put({ type: 'SET_PAGINATION', payload: result.pagination });
}

function* update(params) {
  yield call(
    postAPISaga,
    `/tharavu/events/${params.payload.id}`,
    params.payload,
    true,
  );
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({
    type: 'SHOW_TOAST',
    payload: { variant: 'success', msg: 'Event updated' },
  });
  yield put({ type: 'GET_EVENTS' });
}

function* deleteEvent(params) {
  yield call(getAPISaga, `/tharavu/events/${params.payload}`, true);
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
  const result = yield call(
    getAPISaga,
    `/tharavu/events?page=${currentPage}&${queryString.stringify(
      currentQuery,
    )}`,
  );
  yield put({ type: 'SET_EVENTS', payload: result.data });
  yield put({ type: 'SET_PAGINATION', payload: result.pagination });
}

function* resetEvents() {
  yield put({ type: 'SET_EVENTS', payload: [] });
  yield put({ type: 'SET_PAGINATION', payload: {} });
}

export default function* eventSaga() {
  yield takeLatest('CREATE_EVENT', create);
  yield takeLatest('GET_EVENTS', getEvents);
  yield takeLatest('UPDATE_EVENT', update);
  yield takeLatest('DELETE_EVENT', deleteEvent);
  yield takeLatest('RESET_EVENTS', resetEvents);
  yield takeLatest('FILTER_EVENTS', filterEvents);
}
