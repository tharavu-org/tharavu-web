import { all } from 'redux-saga/effects';

import sessionSaga from './sessionSaga';
import tagSaga from './tagSaga';
import eventSaga from './eventSaga';

export default function* rootSaga() {
  yield all([sessionSaga(), tagSaga(), eventSaga()]);
}
