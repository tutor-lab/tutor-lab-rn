import produce from 'immer';

import {
  TUTOR_INFO_REQUEST,
  TUTOR_INFO_SUCCESS,
  TUTOR_INFO_FAILURE,
  TUTOR_LECTURES_REQUEST,
  TUTOR_LECTURES_SUCCESS,
  TUTOR_LECTURES_FAILURE,
} from '../actions/tutor';

export const initialState = {
  tutorInfoSuccess: false,
  tutorInfoLodaing: false,
  tutorInfoError: null,
  tutorInfo: null,
  tutorLecturesSuccess: false,
  tutorLecturesLodaing: false,
  tutorLecturesError: null,
  tutorLectures: [],
};

export const getTutorInfoRequest = (id: number) => {
  return {
    type: TUTOR_INFO_REQUEST,
    payload: {id: id},
  };
};

export const getTutorLecturesRequest = (id: number, page: number) => {
  return {
    type: TUTOR_LECTURES_REQUEST,
    payload: {id: id, page: page},
  };
};

const tutorReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TUTOR_INFO_REQUEST:
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
      case TUTOR_LECTURES_REQUEST:
        const lectures = action.payload.page === 1 ? [] : draft.tutorLectures;
        draft.tutorLecturesLodaing = true;
        draft.tutorLecturesError = null;
        draft.tutorLectures = lectures;
        break;
      case TUTOR_LECTURES_SUCCESS:
        draft.tutorLecturesLodaing = false;
        draft.tutorLecturesSuccess = true;
        action.payload.content[0] &&
          draft.tutorLectures.push(action.payload.content[0]);
        break;
      case TUTOR_LECTURES_FAILURE:
        draft.tutorLecturesLodaing = false;
        draft.tutorLecturesError = action.payload.message;
        break;
      default:
        break;
    }
  });

export default tutorReducer;
