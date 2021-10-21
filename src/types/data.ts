export type LectureList = {
  content: string;
  difficultyType: string;
  id: number;
  introduce: string;
  lecturePrices: {
    groupNumber: number;
    isGroup: boolean;
    pertimeCost: number;
    pertimeLecture: number;
    totalCost: number;
    totalTime: number;
  }[];
  lectureSubjects: {krSubject: string; parent: string}[];
  subTitle: string;
  systemTypes: {name: string; type: string}[];
  thumbnail: string;
  title: string;
};

export type PaymentList = {
  id: number;
  lecturePrices: {
    groupNumber: number;
    isGroup: boolean;
    pertimeCost: number;
    pertimeLecture: number;
    totalCost: number;
    totalTime: number;
  };
  introduce: string;
}[];

export type MessageList = {
  chatroomId: number;
  id: string;
  message: string;
  sessionId: string;
  type: string;
  username: string;
};

export type TutorInfo = {
  careers: any[];
  educations: any[];
  specialist: boolean;
  subjects: string;
  user: {
    bio: string;
    email: string;
    gender: string;
    name: string;
    nickname: string;
    phoneNumber: string;
    username: string;
    zone: string;
  };
};

export type MyInfo = {
  data: {
    bio: string;
    birth: string;
    email: string;
    gender: string;
    name: string;
    nickname: string;
    phoneNumber: string;
    username: string;
    zone: string;
  };
};

export type Gender = {
  id: number;
  gender: string;
  text: string;
};

export type Zone = {
  label: string;
  value: string;
};

export type SettingType = {
  id: number;
  title: string;
  describe: string;
  enabled: boolean;
};
