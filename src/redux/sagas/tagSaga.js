import { takeLatest, call, put, select } from 'redux-saga/effects';

import { postAPISaga, getAPISaga } from './requestSaga';

function* getTagsWithPagination() {
  const pagination = yield select((state) => state.pagination.pagination);
  yield put({ type: 'GET_TAGS', payload: { page: pagination.currentPage } });
}

function* create(params) {
  yield call(postAPISaga, '/tharavu/tags', params.payload);
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({
    type: 'SHOW_TOAST',
    payload: { variant: 'success', msg: 'Tag created successfully' },
  });

  yield call(getTagsWithPagination);
}

function* update(params) {
  yield call(
    postAPISaga,
    `/tharavu/tags/${params.payload.id}`,
    params.payload,
    true,
  );
  yield put({ type: 'SET_CURRENT_FORM_SUCCESS' });
  yield put({
    type: 'SHOW_TOAST',
    payload: { variant: 'success', msg: 'Tag updated' },
  });
  yield call(getTagsWithPagination);
}

function* deleteTag(params) {
  yield call(getAPISaga, `/tharavu/tags/${params.payload}`, true);
  yield call(getTagsWithPagination);
  yield put({
    type: 'SHOW_TOAST',
    payload: { variant: 'warning', msg: 'Tag deleted!' },
  });
}

function* getTags({ page }) {
  const result = yield call(getAPISaga, `/tharavu/tags?page=${page}`);
  yield put({ type: 'SET_TAGS', payload: result.data.tharavuTags });
  yield put({ type: 'SET_PAGINATION', payload: result.data.pagination });
}

export default function* tagSaga() {
  yield takeLatest('CREATE_TAG', create);
  yield takeLatest('GET_TAGS', getTags);
  yield takeLatest('UPDATE_TAG', update);
  yield takeLatest('DELETE_TAG', deleteTag);
}
