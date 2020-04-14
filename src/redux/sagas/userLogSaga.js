import { takeLatest, call, put } from 'redux-saga/effects';

import { getAPISaga } from './requestSaga';

function* getUserLogs({ payload }) {
  const response = yield call(
    getAPISaga,
    `/tharavu/user-logs?page=${payload.page}`,
  );
  yield put({
    type: 'SET_USER_LOGS',
    payload: response.data,
  });
  yield put({ type: 'SET_PAGINATION', payload: response.pagination });
}

export default function* tagSaga() {
  yield takeLatest('GET_USER_LOGS', getUserLogs);
}
