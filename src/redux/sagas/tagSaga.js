import { takeLatest, call, put, select } from 'redux-saga/effects';

import { postAPI, getAPI } from '../../utils/restClient';

function* getTagsWithPagination() {
  const pagination = yield select(state => state.pagination.pagination);
  yield put({ type: 'GET_TAGS', payload: { page: pagination.currentPage } });
}

function* create(params) {
  try {
    yield call(postAPI, '/tharavu/tags', params.payload);
    yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
    yield call(getTagsWithPagination);
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
    yield call(getTagsWithPagination);
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
    yield call(getTagsWithPagination);
  } catch (error) {
    yield put({
      type: 'SET_CURRENT_FORM_BACKEND_ERRORS',
      payload: error.data.errors.errors,
    });
  }
}

function* getTags({ payload }) {
  try {
    const result = yield call(getAPI, `/tharavu/tags?page=${payload.page}`);
    yield put({ type: 'SET_TAGS', payload: result.data.tharavuTags });
    yield put({ type: 'SET_PAGINATION', payload: result.data.pagination });
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
