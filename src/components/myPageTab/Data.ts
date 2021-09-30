import {icons} from '../../constants';

export const Btn_Big = [
  {id: 0, title: '구매한 강의', icon: icons.purchased, navigation: 'Purchased'},
  {id: 1, title: '위시리스트', icon: icons.wishlist, navigation: 'WishList'},
];

export const ListInfo = [
  {
    id: 0,
    title: '게시판 활동내역',
    navigation: 'DashBoardActivity',
    lastIdx: false,
  },
  {id: 1, title: '강의 요청', navigation: 'RequireClass', lastIdx: false},
  {id: 2, title: '설정', navigation: 'Setting', lastIdx: true},
];

export const ListExtra = [
  {id: 0, title: '공지사항', navigation: 'Notice', lastIdx: false},
  {id: 1, title: '이용약관', navigation: 'Terms', lastIdx: false},
  {id: 2, title: '문의하기', navigation: 'ContactUs', lastIdx: false},
];

export const Profile = {name: '김민영', image: null};

export default {Btn_Big, ListInfo, ListExtra, Profile};
