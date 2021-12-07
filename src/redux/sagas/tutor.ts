import axios from 'axios';
import {all, fork, put, takeLatest, call} from 'redux-saga/effects';

import {
  TUTOR_INFO_REQUEST,
  TUTOR_INFO_SUCCESS,
  TUTOR_INFO_FAILURE,
  TUTOR_LECTURES_REQUEST,
  TUTOR_LECTURES_SUCCESS,
  TUTOR_LECTURES_FAILURE,
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

function getTutorLecturesApi(payload) {
  return axios.get(`/tutors/${payload.id}/lectures?page=${payload.page}`);
}
function* getTutorLectures({payload}) {
  try {
    const result = yield call(getTutorLecturesApi, payload);
    yield put({
      type: TUTOR_LECTURES_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: TUTOR_LECTURES_FAILURE,
      error: err.message,
    });
  }
}
function* watchTutorLectures() {
  yield takeLatest(TUTOR_LECTURES_REQUEST, getTutorLectures);
}

export default function* tutorSaga() {
  yield all([fork(watchTutorInfo), fork(watchTutorLectures)]);
}
