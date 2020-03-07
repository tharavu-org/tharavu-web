import { takeLatest, call, put } from 'redux-saga/effects';

import { postAPISaga } from './requestSaga';

function* signin(params) {
  const result = yield call(postAPISaga, '/tharavu/signin', params.payload);
  localStorage.setItem('currentUser', JSON.stringify(result.data));
  yield put({ type: 'SET_CURRENT_USER', payload: result.data });
}

export default function* sessionSaga() {
  yield takeLatest('SIGNIN', signin);
}
