import {icons} from '../../constants';
export const DifficultyData = [
  {id: 0, title: 'BASIC', text: '기초'},
  {id: 1, title: 'BEGINNER', text: '초급'},
  {id: 2, title: 'INTERMEDIATE', text: '중급'},
  {id: 3, title: 'ADVANCED', text: '고급'},
];

export const GroupData = [
  {id: 0, boolean: true, text: '그룹'},
  {id: 1, boolean: false, text: '개인'},
];

export const Gender = [
  {id: 0, gender: 'FEMALE', text: '여성'},
  {id: 1, gender: 'MALE', text: '남성'},
];

export const WithdrawalDescription = [
  {
    id: 0,
    text: '탈퇴 시 현재 구매한 강의 및 관심 강의 목록이 모두 사라집니다. 탈퇴 후 환불은 불가하니 확인바랍니다.',
  },
  {
    id: 1,
    text: '탈퇴 시 작성한 리뷰 및 게시물은 자동 삭제되지 않으며, 추후 수정/삭제가 불가하니 탈퇴 전 확인바랍니다.',
  },
  {
    id: 2,
    text: '탈퇴사유를 선택해주시면, 앱 개선에 중요 자료로 활용 하겠습니다. 감사합니다.',
  },
];

export const WithdrawalCheckList = [
  {
    id: 1,
    text: '마음에 드는 강의가 없어서',
    isSelected: false,
  },
  {
    id: 2,
    text: '이용이 불편하고 오류가 많아서',
    isSelected: false,
  },
  {
    id: 3,
    text: '강의 이용료가 부담되서',
    isSelected: false,
  },
  {
    id: 4,
    text: '활용도가 낮아서',
    isSelected: false,
  },
  {
    id: 5,
    text: '다른 어플이 더 나아서',
    isSelected: false,
  },
  {
    id: 6,
    text: '기타',
    isSelected: false,
  },
];

export const Setting = [
  {
    id: 0,
    title: '채팅 알림',
    describe: '튜터를 포함한 타인에게 메세지가 도착하면 알려드립니다.',
    enabled: false,
  },
  {
    id: 1,
    title: '댓글 알림',
    describe: '자유게시판에 작성한 글에 새 댓글이 등록되면 알려드립니다.',
    enabled: false,
  },
];

export const MypageBtn_BigData = [
  {id: 0, title: '강의 내역', icon: icons.purchased, navigation: 'ClassReview'},
  // {id: 1, title: '위시리스트', icon: icons.wishlist, navigation: 'WishList'},
];
export const MypageListInfoData = [
  // {id: 0, title: '강의 요청', navigation: 'RequireClass', lastIdx: false},
  {
    id: 1,
    title: '강의 후기',
    navigation: 'ClassReview',
    lastIdx: false,
  },
];

export const MypageListExtraData = [
  {id: 0, title: '설정', navigation: 'Setting', lastIdx: false},
  {id: 1, title: '공지사항', navigation: 'Notice', lastIdx: false},
  {id: 2, title: '이용약관', navigation: 'Terms', lastIdx: false},
  {id: 3, title: '문의하기', navigation: 'ContactUs', lastIdx: false},
];

export const MypageProfile = {name: '김민영', image: null};

export const StarSelectData = [
  {id: 0, isSelected: true},
  {id: 1, isSelected: true},
  {id: 2, isSelected: true},
  {id: 3, isSelected: true},
  {id: 4, isSelected: true},
];

export default {
  DifficultyData,
  GroupData,
  Gender,
  WithdrawalDescription,
  WithdrawalCheckList,
  Setting,
  MypageBtn_BigData,
  MypageListInfoData,
  MypageListExtraData,
  MypageProfile,
  StarSelectData,
};
