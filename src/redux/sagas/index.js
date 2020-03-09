import { all } from 'redux-saga/effects';

import sessionSaga from './sessionSaga';
import tagSaga from './tagSaga';
import eventSaga from './eventSaga';
import userLogSaga from './userLogSaga';

export default function* rootSaga() {
  yield all([sessionSaga(), tagSaga(), eventSaga(), userLogSaga()]);
}
