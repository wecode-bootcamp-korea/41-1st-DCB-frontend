import React from 'react';
import UserInput from './component/UserInput';
import './Signup.scss';

const Signup = () => {
  return (
    <form className="Signup">
      <div className="container">
        <div className="title">
          <h2 className="mainTitle">회원가입</h2>
          <div className="subTitle">
            <h3 className="fontBold">기본정보</h3>
            <p className="fontRight">
              <span className="fontRed">*</span> 필수입력사항
            </p>
          </div>
        </div>
        <div className="inputTable">
          <UserInput title="이메일" placeholder="이메일을 입력해주세요" />
          <div>로그인 아이디로 사용할 이메일을 입력해 주세요.</div>
          <UserInput title="비밀번호" placeholder="비밀번호를 입력해주세요" />
          <div>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</div>
          <UserInput
            title="비밀번호 확인"
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
          <UserInput title="이름" placeholder="실명으로 기입해주세요" />
          <UserInput title="휴대전화" placeholder="휴대폰 번호를 입력하세요" />
        </div>
      </div>
    </form>
  );
};
export default Signup;

// const INFO_LIST = [
//   { id: 1, title: '이메일', placeholder: '이메일을 입력해주세요' },
//   { id: 2, title: '비밀번호', placeholder: '비밀번호를 입력해주세요' },
//   { id: 3, title: '비밀번호 확인', placeholder: '비밀번호를 입력해주세요' },
// ];
