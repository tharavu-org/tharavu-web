import { takeLatest, call, put } from 'redux-saga/effects';

import { postAPI } from '../../utils/restClient';

function* signin(params) {
  try {
    const result = yield call(postAPI, '/tharavu/signin', params.payload);
    localStorage.setItem('currentUser', JSON.stringify(result.data));
    yield put({ type: 'SET_CURRENT_USER', payload: result.data });
  } catch (error) {
    yield put({
      type: 'SET_CURRENT_FORM_BACKEND_ERRORS',
      payload: 'Invalid email address or password.',
    });
  }
}

export default function* sessionSaga() {
  yield takeLatest('SIGNIN', signin);
}
