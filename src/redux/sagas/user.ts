import axios from 'axios';
import {all, fork, put, takeLatest, call} from 'redux-saga/effects';

import {
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
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

export default function* userSaga() {
  yield all([fork(watchUserInfo)]);
}
