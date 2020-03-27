import { takeLatest, call, put } from 'redux-saga/effects';

import { getAPISaga } from './requestSaga';

function* getUserLogs({ page }) {
  const result = yield call(getAPISaga, `/tharavu/user-logs?page=${page}`);
  yield put({
    type: 'SET_USER_LOGS',
    payload: result.data.tharavuUserAccessLogs,
  });
  yield put({ type: 'SET_PAGINATION', payload: result.data.pagination });
}

export default function* tagSaga() {
  yield takeLatest('GET_USER_LOGS', getUserLogs);
}
