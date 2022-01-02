export const Filter = [
  {id: 0, text: '전체', isSelected: true},
  {id: 1, text: '과목', isSelected: false},
  {id: 2, text: '수업 방식', isSelected: false},
  {id: 3, text: '레벨', isSelected: false},
];
const OnOffline = [
  {id: 0, text: '전체', isSelected: true},
  {id: 1, text: '온라인', isSelected: false},
  {id: 2, text: '오프라인', isSelected: false},
];
const GroupOrNot = [
  {id: 0, text: '전체', isSelected: true},
  {id: 1, text: '개인 강의', isSelected: false},
  {id: 2, text: '그룹 강의', isSelected: false},
];
const Level = [
  {id: 0, text: '전체', isSelected: true},
  {id: 1, text: '입문', isSelected: false},
  {id: 2, text: '초급', isSelected: false},
  {id: 3, text: '중급', isSelected: false},
  {id: 4, text: '고급', isSelected: false},
];

export default {Filter, OnOffline, GroupOrNot, Level};
