import axios from 'axios';
import {all, fork, put, takeLatest, call} from 'redux-saga/effects';

import {
  TUTOR_INFO_REQUEST,
  TUTOR_INFO_SUCCESS,
  TUTOR_INFO_FAILURE,
} from '../actions/tutor';

function getTutorInfoApi(id: number) {
  return axios.get(`/tutors/${id}`);
}
function* getTutorInfo({payload}) {
  try {
    const result = yield call(getTutorInfoApi, payload.id);
    yield put({
      type: TUTOR_INFO_SUCCESS, //
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: TUTOR_INFO_FAILURE,
      error: err.message,
    });
  }
}
function* watchTutorInfo() {
  yield takeLatest(TUTOR_INFO_REQUEST, getTutorInfo);
}

export default function* tutorSaga() {
  yield all([fork(watchTutorInfo)]);
}
