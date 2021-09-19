export type LectureList = {
  content: string;
  difficultyName: string;
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
  id: number;
  message: string;
  date: string;
  hour: string;
  minutes: string;
  username:string;
};

export type User = {
  name: string;
}
 