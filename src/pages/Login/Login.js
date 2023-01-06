import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <input
        className="loginBox"
        text="text"
        placeholder="이메일을 입력해주세요"
      />
      <input
        className="loginBox"
        text="text"
        placeholder="비밀번호를 입력해주세요"
      />
      <div className="checkId">
        <AiOutlineCheckCircle className="checkBtn" />
        <span className="checkIdSave">아이디 저장</span>
      </div>
      <button className="btnLogin">로그인</button>
      <button className="btnSignup">회원가입</button>
      <div className="memberFind">
        <Link to="#" className="colorWhite margin30">
          이메일 찾기
        </Link>
        <Link to="#" className="colorWhite">
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
};
export default Login;
