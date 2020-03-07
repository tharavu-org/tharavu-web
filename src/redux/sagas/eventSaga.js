import { takeLatest, call, put } from 'redux-saga/effects';

import { postAPISaga, getAPISaga } from './requestSaga';

function* create(params) {
  yield call(postAPISaga, '/tharavu/events', params.payload);
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({ type: 'GET_EVENTS' });
}

function* update(params) {
  yield call(
    postAPISaga,
    `/tharavu/events/${params.payload.id}`,
    params.payload,
    true,
  );
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({ type: 'GET_EVENTS' });
}

function* deleteEvent(params) {
  yield call(getAPISaga, `/tharavu/events/${params.payload}`, true);
  yield put({ type: 'GET_EVENTS' });
}

function* getEvents() {
  const result = yield call(getAPISaga, '/tharavu/events');
  yield put({ type: 'SET_EVENTS', payload: result.data.tharavuEvents });
}

export default function* eventSaga() {
  yield takeLatest('CREATE_EVENT', create);
  yield takeLatest('GET_EVENTS', getEvents);
  yield takeLatest('UPDATE_EVENT', update);
  yield takeLatest('DELETE_EVENT', deleteEvent);
}
