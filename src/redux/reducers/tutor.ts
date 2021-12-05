import produce from 'immer';

import {
  TUTOR_INFO_REQUEST,
  TUTOR_INFO_SUCCESS,
  TUTOR_INFO_FAILURE,
} from '../actions/tutor';

export const initialState = {
  tutorInfoSuccess: false,
  tutorInfoLodaing: false,
  tutorInfoError: null,
  tutorInfo: null,
};

export const getTutorInfoRequest = (id: number) => {
  return {
    type: TUTOR_INFO_REQUEST,
    payload: {id: id},
  };
};

const tutorReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TUTOR_INFO_REQUEST: // 요청
        draft.tutorInfoLodaing = true;
        draft.tutorInfoError = null;
        break;
      case TUTOR_INFO_SUCCESS:
        draft.tutorInfoLodaing = false;
        draft.tutorInfoSuccess = true;
        draft.tutorInfo = action.payload;
        break;
      case TUTOR_INFO_FAILURE:
        draft.tutorInfoLodaing = false;
        draft.tutorInfoError = action.payload.message;
        break;
      default:
        break;
    }
  });

export default tutorReducer;
