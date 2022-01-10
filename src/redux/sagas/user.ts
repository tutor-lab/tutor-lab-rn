import axios from 'axios';
import {all, fork, put, takeLatest, call} from 'redux-saga/effects';

import {
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
  USER_REVIEW_REQUEST,
  USER_REVIEW_SUCCESS,
  USER_REVIEW_FAILURE,
} from '../actions/user';

function getUserApi() {
  return axios.get('/users/my-info');
}
function* getUserInfo({}) {
  try {
    const result = yield call(getUserApi);
    yield put({
      type: USER_INFO_SUCCESS, //
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: USER_INFO_FAILURE,
      error: err.message,
    });
  }
}
function* watchUserInfo() {
  yield takeLatest(USER_INFO_REQUEST, getUserInfo);
}

function getUserReviewApi(payload) {
  return axios.get(`/tutees/my-reviews?page=${payload.page}`);
}
function* getUserReview({payload}) {
  try {
    const result = yield call(getUserReviewApi, payload);
    yield put({
      type: USER_REVIEW_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: USER_REVIEW_FAILURE,
      error: err.message,
    });
  }
}

function* watchUserReview() {
  yield takeLatest(USER_REVIEW_REQUEST, getUserReview);
}

export default function* userSaga() {
  yield all([fork(watchUserInfo), fork(watchUserReview)]);
}
