import { call, put, select, cancel } from 'redux-saga/effects';

import signout from '../../utils/session';
import { getAPI, postAPI } from '../../utils/restClient';

function* handleBadRequest(currentUser, response) {
  if (!currentUser && response.status === 401) {
    yield put({
      type: 'SET_CURRENT_FORM_BACKEND_ERRORS',
      payload: 'Invalid email address or password.',
    });
    yield cancel();
  }
  if (currentUser && response.status === 401) {
    signout();
  }
  if (response.status === 404) {
    yield put({
      type: 'SHOW_TOAST',
      payload: {
        variant: 'error',
        msg: 'Resource not found.',
      },
    });
    yield cancel();
  }
  if (response.status === 422) {
    const { errors } = yield response.json();
    yield put({
      type: 'SET_CURRENT_FORM_BACKEND_ERRORS',
      payload: errors,
    });
    yield cancel();
  }
  if (response.status === 500) {
    yield put({
      type: 'SHOW_TOAST',
      payload: {
        variant: 'error',
        msg: 'Internal Server Error Occurred.',
      },
    });
    yield cancel();
  }
}

export function* postAPISaga(url, data, patch = false) {
  try {
    const { currentUser } = yield select(state => state.session);
    const response = yield call(postAPI, currentUser, url, data, patch);
    if (!response.ok) {
      yield handleBadRequest(currentUser, response);
    }
    return yield response.json();
  } catch (error) {
    yield put({
      type: 'SHOW_TOAST',
      payload: {
        variant: 'error',
        msg: 'Network problem.',
      },
    });
    yield cancel();
  }
  return null;
}

export function* getAPISaga(url, del = false) {
  try {
    const { currentUser } = yield select(state => state.session);
    const response = yield call(getAPI, currentUser, url, del);
    if (!response.ok) {
      yield handleBadRequest(currentUser, response);
      yield cancel();
    }
    return yield response.json();
  } catch (error) {
    yield put({
      type: 'SHOW_TOAST',
      payload: {
        variant: 'error',
        msg: 'Network problem.',
      },
    });
    yield cancel();
  }
  return null;
}
