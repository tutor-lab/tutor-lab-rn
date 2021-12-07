export type LectureListType = {
  id: number;
  thumbnail: string;
  title: string;
  subTitle: string;
  introduce: string;
  content: string;
  difficultyType: string;
  systemTypes: {name: string; type: string}[];
  lecturePrices: {
    lecturePriceId: number;
    isGroup: boolean;
    groupNumber: number;
    totalTime: number;
    pertimeLecture: number;
    pertimeCost: number;
    totalCost: number;
    isGroupStr: string;
    content: string;
  }[];
  lectureSubjects: {
    learningKindId: null | number;
    learningKind: string;
    krSubject: string;
  }[];
  reviewCount: number;
  scoreAverage: number;
  lectureTutor: {
    tutorId: number;
    lectureCount: number;
    reviewCount: number;
    nickname: string;
    image: string;
  };
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

export type ClassDetailType = {
  discount: number;
  explain: string;
  hashtag: string[];
  heart: number;
  lectureSubjects: {id: number; krSubject: string; parent: number}[];
  lecture_count: number;
  price: string;
  rating: number;
  remote: string[];
  review: number;
  review_count: number;
  store_count: number;
  tag: string[];
  title: string;
  tutor: string;
};

export type TutorInfoType = {
  tutorId: number;
  user: {
    email: string | null;
    userId: number;
    username: string | null;
    role: string | null;
    name: string | null;
    gender: string | null;
    birthYear: string | null;
    phoneNumber: string | null;
    nickname: string | null;
    bio: string | null;
    image: string | null;
    zone: string | null;
  };
  careers: {
    job: string | null;
    companyName: string | null;
    others: string | null;
    license: string | null;
  }[];
  educations: {
    educationLevel: string | null;
    schoolName: string | null;
    major: string | null;
    others: string | null;
  }[];
};
