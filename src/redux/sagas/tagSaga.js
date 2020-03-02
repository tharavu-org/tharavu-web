import { takeLatest, call, put } from 'redux-saga/effects';

import { postAPI, getAPI } from '../../utils/restClient';

function* create(params) {
  try {
    yield call(postAPI, '/tharavu/tags', params.payload);
    yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
    yield put({ type: 'GET_TAGS' });
  } catch (error) {
    yield put({
      type: 'SET_CURRENT_FORM_BACKEND_ERRORS',
      payload: error.data.errors.errors,
    });
  }
}

function* update(params) {
  try {
    yield call(
      postAPI,
      `/tharavu/tags/${params.payload.id}`,
      params.payload,
      true,
    );
    yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
    yield put({ type: 'GET_TAGS' });
  } catch (error) {
    yield put({
      type: 'SET_CURRENT_FORM_BACKEND_ERRORS',
      payload: error.data.errors.errors,
    });
  }
}

function* deleteTag(params) {
  try {
    yield call(getAPI, `/tharavu/tags/${params.payload}`, true);
    yield put({ type: 'GET_TAGS' });
  } catch (error) {
    yield put({
      type: 'SET_CURRENT_FORM_BACKEND_ERRORS',
      payload: error.data.errors.errors,
    });
  }
}

function* getTags() {
  try {
    const result = yield call(getAPI, '/tharavu/tags');
    yield put({ type: 'SET_TAGS', payload: result.data.tharavuTags });
  } catch (error) {
    yield put({
      type: 'SET_TOAST_ERRORS',
      payload: error.data.errors.errors,
    });
  }
}

export default function* tagSaga() {
  yield takeLatest('CREATE_TAG', create);
  yield takeLatest('GET_TAGS', getTags);
  yield takeLatest('UPDATE_TAG', update);
  yield takeLatest('DELETE_TAG', deleteTag);
}
