import React, { useState } from 'react';
import UserInput from './component/UserInput';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_LIST } from './component/SignupData';
import './Signup.scss';

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    phone: '',
  });

  const handleInfo = e => {
    const { name, value } = e.target;
    setSignupInfo(prev => ({ ...prev, [name]: value }));
  };

  const isPasswordCorrect = signupInfo.password === signupInfo.passwordCheck;

  const navigate = useNavigate();

  const loginClick = e => {
    e.preventDefault();
    fetch('http://152.67.208.118:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: signupInfo.email,
        password: signupInfo.passwordCheck,
        name: signupInfo.name,
        phoneNumber: signupInfo.phone,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'userCreated') {
          alert('회원가입 되었습니다!');
          navigate('/login');
        } else if (result.message === 'Email already exists') {
          alert('이미 존재하는 이메일입니다.');
        } else {
          alert('빈칸을 채워주세요.');
        }
        console.log(result);
      });
  };

  return (
    <form className="signup">
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
          {SIGNUP_LIST.map(({ id, title, placeholder, info, name, type }) => {
            return (
              <UserInput
                key={id}
                title={title}
                placeholder={placeholder}
                info={info}
                name={name}
                handleInfo={handleInfo}
                check={isPasswordCorrect}
                type={type}
              />
            );
          })}
        </div>
        <button className="inputButton" onClick={loginClick}>
          가입하기
        </button>
      </div>
    </form>
  );
};

export default Signup;
