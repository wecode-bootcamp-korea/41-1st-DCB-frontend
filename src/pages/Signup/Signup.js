import React, { useState } from 'react';
import UserInput from './component/UserInput';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_LIST } from './component/SignupData';
import { AiOutlineCheckCircle } from 'react-icons/ai';
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
    fetch('http://10.58.52.89:3000/signup', {
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
        } else if (messageList[result.message]) {
          alert(messageList[result.message]);
        } else {
          alert('빈칸을 입력해주세요.');
        }
      });
  };

  const messageList = {
    ' Email already exists ': '이미 존재하는 이메일입니다.',
    'name must be provided! ': '이름이 입력되지 않았습니다.',
    ' email must be provided! ': '이메일이 입력되지 않았습니다.',
    ' password must be provided! ': '비밀번호가 입력되지 않았습니다.',
    ' phoneNumber must be provided!2 ': '핸드폰 번호를 입력해주세요.',
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
        <div className="agreement">
          <div>이용약관 동의</div>
          <div>
            <AiOutlineCheckCircle />
            <div>전체동의합니다</div>
            <div>
              선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
              이용할 수 있습니다.
            </div>
            <AiOutlineCheckCircle />
            <div>[필수] 이용약관 동의</div>
            <AiOutlineCheckCircle />
            <div>[필수] 개인정보 수집 및 이용 동의</div>
            <AiOutlineCheckCircle />
            <div>
              [선택] SMS (문자, 카카오톡 등)으로 혜택과 유용한 정보를 보내드려도
              될까요?
            </div>
            <AiOutlineCheckCircle />
            <div>[선택] 이메일로 혜택과 정보를 보내드려도 될까요?</div>
            <div>
              본인은 만 14세 이상이며, 이용약관, 개인정보 수집 및 이용을
              확인하였으며, 동의합니다.
            </div>
          </div>
        </div>
        <button className="inputButton" onClick={loginClick}>
          가입하기
        </button>
      </div>
    </form>
  );
};

export default Signup;
