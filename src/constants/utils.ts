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

export default {numberWithCommas, parseToday, chkMeridiem, convertHours};
