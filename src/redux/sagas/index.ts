import {all} from 'redux-saga/effects';

import userSaga from './user';
import tutorSaga from './tutor';

export function* rootSaga() {
  yield all([userSaga(), tutorSaga()]);
}

export default rootSaga;
