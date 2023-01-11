export const SIGNUP_LIST = [
  {
    id: 1,
    title: '이메일',
    placeholder: '이메일을 입력해주세요',
    info: '로그인 아이디로 사용할 이메일을 입력해 주세요.',
    name: 'email',
  },
  {
    id: 2,
    title: '비밀번호',
    placeholder: '비밀번호를 입력해주세요',
    info: ' (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)',
    name: 'password',
    type: 'password',
  },
  {
    id: 3,
    title: '비밀번호 확인',
    placeholder: '비밀번호를 입력해주세요',
    name: 'passwordCheck',
    type: 'password',
  },
  { id: 4, title: '이름', placeholder: '실명으로 기입해주세요', name: 'name' },
  {
    id: 5,
    title: '휴대전화',
    placeholder: '휴대폰 번호를 입력하세요',
    name: 'phone',
  },
];

export const AGREE_LIST = [
  {
    id: 1,
    title: '[필수] 이용약관 동의',
  },
  {
    id: 2,
    title: '[필수] 개인정보 수집 및 이용 동의',
  },
  {
    id: 3,
    title:
      '[선택] SMS (문자, 카카오톡 등)으로 혜택과 유용한 정보를 보내드려도 될까요?',
  },
  {
    id: 4,
    title: '[선택] 이메일로 혜택과 정보를 보내드려도 될까요?',
  },
];
