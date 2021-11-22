import produce from 'immer';

import {
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
} from '../actions/user';

export const initialState = {
  userInfoSuccess: false,
  userInfoLodaing: false,
  userInfoError: null,
  userInfo: {},
};

export const getUserInfoRequest = () => {
  return {
    type: USER_INFO_REQUEST,
  };
};

const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case USER_INFO_REQUEST: // 요청
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
      default:
        break;
    }
  });

export default userReducer;
