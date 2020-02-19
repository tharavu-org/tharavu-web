import { takeLatest, call, put } from 'redux-saga/effects';

import camelToSnakeCase from '../../utils/caseHelpers';
import { postAPI } from '../../utils/restClient';

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
      payload: error.data.errors,
    });
  }
}

export default function* sessionSaga() {
  yield takeLatest('CREATE_TAG', create);
}
