import produce from 'immer';

import {
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
  USER_REVIEW_REQUEST,
  USER_REVIEW_SUCCESS,
  USER_REVIEW_FAILURE,
} from '../actions/user';

export const initialState = {
  userInfoSuccess: false,
  userInfoLodaing: false,
  userInfoError: null,
  userInfo: {},
  userReviewSuccess: false,
  userReviewLoading: false,
  userReviewError: null,
  userReviewList: [],
};

export const getUserInfoRequest = () => {
  return {
    type: USER_INFO_REQUEST,
  };
};

export const getUserReviewRequest = (page: number) => {
  return {
    type: USER_REVIEW_REQUEST,
    payload: {page: page},
  };
};

const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case USER_INFO_REQUEST:
        draft.userInfoLodaing = true;
        draft.userInfoError = null;
        break;
      case USER_INFO_SUCCESS:
        draft.userInfoLodaing = false;
        draft.userInfoSuccess = true;
        draft.userInfo = action.payload;
        break;
      case USER_INFO_FAILURE:
        draft.userInfoLodaing = false;
        draft.userInfoError = action.payload.message;
        break;
      case USER_REVIEW_REQUEST:
        const reviewListInit =
          action.payload.page === 1 ? [] : draft.userReviewList;
        draft.userReviewLoading = true;
        draft.userReviewError = null;
        draft.userReviewList = reviewListInit;
        break;
      case USER_REVIEW_SUCCESS:
        draft.userReviewLoading = false;
        draft.userReviewSuccess = true;
        if (action.payload.content[0]) {
          const reviewList = state.userReviewList.concat(
            action.payload.content,
          );
          draft.userReviewList = reviewList;
        }
        break;
      case USER_REVIEW_FAILURE:
        draft.userReviewLoading = false;
        draft.userReviewError = action.payload.message;
        break;
      default:
        break;
    }
  });

export default userReducer;
