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
