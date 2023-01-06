import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineCheckCircle } from 'react-icons/ai';
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

  const loginClick = () => {
    fetch('http://152.67.208.118:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: loginInfo.email, password: loginInfo.pw }),
    })
      .then(response => response.json())
      .then(result => {
        localStorage.setItem('Token', result.accessToken);
        // result.message === 'userCreated'
        //   ? alert('회원가입 되었습니다!')
        //   : alert(messageList[result.message]);
      });
  };

  // const messageList = {
  //   ' userCreated ': '회원가입 되었습니다!',
  //   ' Email already exists ': '이미 존재하는 이메일입니다.',
  // };

  return (
    <div className="login">
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
    </div>
  );
};
export default Login;
