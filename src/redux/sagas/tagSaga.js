import { takeLatest, call, put } from 'redux-saga/effects';

import camelToSnakeCase from '../../utils/caseHelpers';
import { postAPI, getAPI } from '../../utils/restClient';

function* create(params) {
  try {
    yield call(
      postAPI,
      '/tharavu/tharavu-tags',
      camelToSnakeCase(params.payload),
    );
    yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  } catch (error) {
    yield put({
      type: 'SET_CURRENT_FORM_BACKEND_ERRORS',
      payload: error.data.errors.errors,
    });
  }
}

function* getTags() {
  try {
    const result = yield call(getAPI, '/tharavu/tharavu-tags');
    yield put({ type: 'SET_TAGS', payload: result.data.tharavuTags });
  } catch (error) {
    yield put({
      type: 'SET_TOAST_ERRORS',
      payload: error.data.errors.errors,
    });
  }
}

export default function* sessionSaga() {
  yield takeLatest('CREATE_TAG', create);
  yield takeLatest('GET_TAGS', getTags);
}
