import { takeLatest, call, put } from 'redux-saga/effects';

import { postAPISaga } from './requestSaga';

function* signin({ payload }) {
  const response = yield call(postAPISaga, '/tharavu/signin', payload);
  localStorage.setItem('currentUser', JSON.stringify(response.data));
  yield put({ type: 'SET_CURRENT_USER', payload: response.data });
}

export default function* sessionSaga() {
  yield takeLatest('SIGNIN', signin);
}
