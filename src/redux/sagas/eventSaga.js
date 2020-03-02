import { takeLatest, call, put } from 'redux-saga/effects';

import { postAPI, getAPI } from '../../utils/restClient';

function* create(params) {
  try {
    yield call(postAPI, '/tharavu/events', params.payload);
    yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
    yield put({ type: 'GET_EVENTS' });
  } catch (error) {
    yield put({
      type: 'SET_CURRENT_FORM_BACKEND_ERRORS',
      payload: error.data.errors.errors,
    });
  }
}

function* update(params) {
  try {
    yield call(
      postAPI,
      `/tharavu/events/${params.payload.id}`,
      params.payload,
      true,
    );
    yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
    yield put({ type: 'GET_EVENTS' });
  } catch (error) {
    yield put({
      type: 'SET_CURRENT_FORM_BACKEND_ERRORS',
      payload: error.data.errors.errors,
    });
  }
}

function* deleteEvent(params) {
  try {
    yield call(getAPI, `/tharavu/events/${params.payload}`, true);
    yield put({ type: 'GET_EVENTS' });
  } catch (error) {
    yield put({
      type: 'SET_CURRENT_FORM_BACKEND_ERRORS',
      payload: error.data.errors.errors,
    });
  }
}

function* getEvents() {
  try {
    const result = yield call(getAPI, '/tharavu/events');
    yield put({ type: 'SET_EVENTS', payload: result.data.tharavuEvents });
  } catch (error) {
    yield put({
      type: 'SET_TOAST_ERRORS',
      payload: error.data.errors.errors,
    });
  }
}

export default function* eventSaga() {
  yield takeLatest('CREATE_EVENT', create);
  yield takeLatest('GET_EVENTS', getEvents);
  yield takeLatest('UPDATE_EVENT', update);
  yield takeLatest('DELETE_EVENT', deleteEvent);
}
