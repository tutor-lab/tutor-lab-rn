export const Detail = {
  tag: ['무료', '그룹'],
  remote: ['ONLINE', 'OFFLINE'],
  title: '금융권 취업을 위한 데이터 분석 및 모델링',
  lectureSubjects: [
    {id: 0, krSubject: 'Python', parent: 1},
    {id: 1, krSubject: 'crawling', parent: 1},
  ],
  explain: '기초부터 실무에서 사용하는 데이터 분석 기술 파헤치기',
  tutor: '김하나',
  hashtag: ['SQL', 'Python', 'SQLLite', 'S사 10년근무', 'SW개발및품질경력'],
  heart: 56,
  rating: 5,
  review: 28,
  discount: 20,
  price: '197,000',
  lecture_count: 4,
  review_count: 67,
  store_count: 122,
};

export const Count = {
  tag: ['무료', '그룹'],
  remote: ['ONLINE', 'OFFLINE'],
  title: '금융권 취업을 위한 데이터 분석 및 모델링 SQL, R, Python',
  explain: '기초부터 실무에서 사용하는 데이터 분석 기술 파헤치기',
  tutor: '김하나',
  hashtag: ['SQL', 'Python', 'SQLLite', 'S사 10년근무', 'SW개발및품질경력'],
  heart: 56,
  rating: 5,
  review: 28,
  discount: 20,
  price: '197,000',
  lecture_count: 4,
  review_count: 67,
  store_count: 122,
};

export const Review = [
  {
    id: 0,
    tutee: {
      name: '박민지',
      image: '',
      date: '2021.07.01',
      rating: 4.5,
      text: '질문이 많았는데도 친절하게 잘 설명해주시고, 초보자인 저도 커리큘럼대로 잘 따라갈 수 있도록 자세히 가르쳐주십니다.다른 수업도 듣고 싶어요:)',
    },
    tutor: {
      name: '김하나',
      image: '',
      date: '2021.07.02',
      text: `박민지 튜티님, 후기 감사합니다!!!!`,
    },
  },
  {
    id: 1,
    tutee: {
      name: '박민지',
      image: '',
      date: '2021.07.01',
      rating: 4.5,
      text: '질문이 많았는데도 친절하게 잘 설명해주시고, 초보자인 저도 커리큘럼대로 잘 따라갈 수 있도록 자세히 가르쳐주십니다.다른 수업도 듣고 싶어요:)',
    },
    tutor: null,
  },
  {
    id: 2,
    tutee: {
      name: '박민지',
      image: '',
      date: '2021.07.01',
      rating: 4.5,
      text: '질문이 많았는데도 친절하게 잘 설명해주시고, 초보자인 저도 커리큘럼대로 잘 따라갈 수 있도록 자세히 가르쳐주십니다.다른 수업도 듣고 싶어요:)',
    },
    tutor: null,
  },
  {
    id: 3,
    tutee: {
      name: '박민지',
      image: '',
      date: '2021.07.01',
      rating: 4.5,
      text: '질문이 많았는데도 친절하게 잘 설명해주시고, 초보자인 저도 커리큘럼대로 잘 따라갈 수 있도록 자세히 가르쳐주십니다.다른 수업도 듣고 싶어요:)',
    },
    tutor: {
      name: '김하나',
      image: '',
      date: '2021.07.02',
      text: `박민지 튜티님, 후기 감사합니다.${'\n'}다른 수업에서도 최선을 다해서 알려드릴게요ㅎㅎ`,
    },
  },
  {
    id: 4,
    tutee: {
      name: '박민지',
      image: '',
      date: '2021.07.01',
      rating: 4.5,
      text: '질문이 많았는데도 친절하게 잘 설명해주시고, 초보자인 저도 커리큘럼대로 잘 따라갈 수 있도록 자세히 가르쳐주십니다.다른 수업도 듣고 싶어요:)',
    },
    tutor: {
      name: '김하나',
      image: '',
      date: '2021.07.02',
      text: `박민지 튜티님, 후기 감사합니다.${'\n'}다른 수업에서도 최선을 다해서 알려드릴게요ㅎㅎ`,
    },
  },
];

export default {Detail, Count, Review};
