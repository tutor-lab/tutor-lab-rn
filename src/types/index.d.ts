declare module 'aj-email-validator';

type LoginStackParamList = {
  Login: undefined;
  LoginIntro: undefined;
  LoginMain: {user: string};
  FindId: undefined;
  FindPwd: undefined;
};

type EditProfileStackParamList = {
  EditProfileList: undefined;
  EditInfo: undefined;
  ChangePwd: {user: string};
  SetClass: undefined;
  Withdrawal: undefined;
};
