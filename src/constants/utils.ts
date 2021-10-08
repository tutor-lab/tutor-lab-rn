import {Data} from '../components/common';
import {Gender} from '../types/data';

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const parseToday = (time: number) => {
  return time < 10 ? `0${time}` : `${time}`;
};

export const chkMeridiem = (
  h: string,
  setValue: (value: React.SetStateAction<string>) => void,
) => {
  const convertMer = Number(h) < 12 ? '오전' : '오후';
  setValue(convertMer);
};

export const convertHours = (
  h: string,
  setValue: (value: React.SetStateAction<string>) => void,
) => {
  const convertH = Number(h) < 12 ? h : `0${12 - Number(h)}`;
  setValue(convertH);
};

const pwdValidator = (value: string) => {
  if (value.length < 6 || value.length > 14) {
    return true;
  } else {
    return false;
  }
};

const genderValdator = (value: string) => {
  const data = Data.Gender.filter((curr: Gender) => {
    return curr.gender === value;
  });
  return data[0];
};

const toggleGender = (value: Gender) => {
  const data = Data.Gender.filter((curr: Gender) => {
    return curr.gender !== value.gender;
  });
  return data[0];
};

export default {
  numberWithCommas,
  parseToday,
  chkMeridiem,
  convertHours,
  pwdValidator,
  genderValdator,
  toggleGender,
};
