import { takeLatest, call, put } from 'redux-saga/effects';

import camelToSnakeCase from '../../utils/caseHelpers';
import { postAPI } from '../../utils/restClient';

function* signin(params) {
  try {
    const result = yield call(
      postAPI,
      '/tharavu/signin',
      camelToSnakeCase(params.payload),
    );
    localStorage.setItem('currentUser', JSON.stringify(result.data));
    yield put({ type: 'SET_CURRENT_USER', payload: result.data });
  } catch (error) {
    yield put({ type: 'SIGNIN_FAILED', payload: 'Invalid email or password' });
  }
}

export default function* sessionSaga() {
  yield takeLatest('SIGNIN', signin);
}
