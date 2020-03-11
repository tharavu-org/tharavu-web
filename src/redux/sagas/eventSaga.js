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
  const result = yield call(getAPISaga, `/tharavu/events?page=${payload.page}`);
  yield put({ type: 'SET_EVENTS', payload: result.data.tharavuEvents });
  yield put({ type: 'SET_PAGINATION', payload: result.data.pagination });
}

function* searchEvents({ payload }) {
  const result = yield call(
    getAPISaga,
    `/tharavu/events?page=${payload.page}&tharavu_tags_name_eq=${payload.name}`,
  );
  yield put({ type: 'SET_EVENTS', payload: result.data.tharavuEvents });
  yield put({ type: 'SET_PAGINATION', payload: result.data.pagination });
}

export default function* eventSaga() {
  yield takeLatest('CREATE_EVENT', create);
  yield takeLatest('GET_EVENTS', getEvents);
  yield takeLatest('SEARCH_EVENTS', searchEvents);
  yield takeLatest('UPDATE_EVENT', update);
  yield takeLatest('DELETE_EVENT', deleteEvent);
}
