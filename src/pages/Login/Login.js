import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { API } from '../../config';
import './Login.scss';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    pw: '',
  });

  const handleInfo = e => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const gotoSignup = () => navigate('/signup');

  const loginClick = e => {
    e.preventDefault();
    fetch(`${API.signin}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: loginInfo.email, password: loginInfo.pw }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.accessToken) {
          localStorage.setItem('Token', result.accessToken);
          navigate('/');
        } else {
          alert('이메일, 비밀번호가 일치하지 않습니다.');
        }
      });
  };

  return (
    <form className="login">
      <div className="loginTitle">로그인</div>
      <input
        className="loginBox"
        type="text"
        placeholder="이메일을 입력해주세요"
        name="email"
        value={loginInfo.email}
        onChange={handleInfo}
      />
      <input
        className="loginBox"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        name="pw"
        value={loginInfo.pw}
        onChange={handleInfo}
      />
      <div className="checkId">
        <AiOutlineCheckCircle className="checkBtn" />
        <span className="checkIdSave">아이디 저장</span>
      </div>
      <button className="btnLogin" onClick={loginClick}>
        로그인
      </button>
      <button className="btnSignup" onClick={gotoSignup}>
        회원가입
      </button>
      <div className="memberFind">
        <Link to="/" className="colorWhite margin30">
          이메일 찾기
        </Link>
        <Link to="/" className="colorWhite">
          비밀번호 찾기
        </Link>
      </div>
    </form>
  );
};
export default Login;
