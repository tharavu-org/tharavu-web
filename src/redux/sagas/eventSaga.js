import { takeLatest, call, put, select } from 'redux-saga/effects';

import { postAPISaga, getAPISaga } from './requestSaga';

function* getEventsWithPagination() {
  const pagination = yield select(state => state.pagination.pagination);
  yield put({ type: 'GET_EVENTS', payload: { page: pagination.currentPage } });
}

function* create(params) {
  yield call(postAPISaga, '/tharavu/events', params.payload);
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({
    type: 'SHOW_TOAST',
    payload: { variant: 'success', msg: 'Event created successfully' },
  });

  yield call(getEventsWithPagination);
}

function* filterEvents(params) {
  const result = yield call(
    postAPISaga,
    '/tharavu/filter-events',
    params.payload,
  );
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({ type: 'SET_EVENTS', payload: result.data.tharavuEvents });
  yield put({ type: 'SET_PAGINATION', payload: result.data.pagination });
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
  yield call(getEventsWithPagination);
}

function* deleteEvent(params) {
  yield call(getAPISaga, `/tharavu/events/${params.payload}`, true);
  yield put({
    type: 'SHOW_TOAST',
    payload: { variant: 'warning', msg: 'Event deleted!' },
  });
  yield call(getEventsWithPagination);
}

function* getEvents({ payload }) {
  const result = yield call(
    getAPISaga,
    `/tharavu/events?page=${payload.page}&${payload.searchParams}`,
  );
  yield put({ type: 'SET_EVENTS', payload: result.data.tharavuEvents });
  yield put({ type: 'SET_PAGINATION', payload: result.data.pagination });
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
