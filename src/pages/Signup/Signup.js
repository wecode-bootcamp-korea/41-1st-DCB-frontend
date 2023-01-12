import React, { Fragment, useState } from 'react';
import UserInput from './component/UserInput';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_LIST, AGREE_LIST } from './component/SignupData';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { API } from '../../config';
import './Signup.scss';

const Signup = () => {
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    phone: '',
  });
  const [isClick, setIsClick] = useState([]);

  const handleInfo = e => {
    const { name, value } = e.target;
    setSignupInfo(prev => ({ ...prev, [name]: value }));
  };

  const isPasswordCorrect = signupInfo.password === signupInfo.passwordCheck;
  const loginClick = e => {
    e.preventDefault();
    fetch(`${API.signup}`, {
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

  const makeButtonCheck = id => {
    if (isClick.includes(id)) {
      setIsClick(isClick.filter(i => i !== id));
      return;
    }
    setIsClick([...isClick, id]);
  };

  const isAllChecked = AGREE_LIST.length === isClick.length;
  const handleAllCheck = () => {
    isAllChecked ? setIsClick([]) : setIsClick(AGREE_LIST.map(item => item.id));
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
          <div className="agreementTitle">
            이용약관 동의<span className="agreementTitleRed">*</span>
          </div>
          <div className="agreementList">
            <div className="agreementListInfo">
              <div className="agreementListInfoBox">
                <div className="checkButtonWrapper">
                  <AiOutlineCheckCircle
                    className={isAllChecked ? 'checkButton' : 'disabled'}
                    onClick={handleAllCheck}
                  />
                </div>
                <span className="agreeList">전체 동의합니다</span>
              </div>
              <p className="agreeDetail">
                선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                이용할 수 있습니다.
              </p>
              {AGREE_LIST.map(list => {
                return (
                  <Fragment key={list.id}>
                    <div className="agreementListInfoBox">
                      <div className="checkButtonWrapper">
                        <AiOutlineCheckCircle
                          className={
                            isClick.includes(list.id)
                              ? 'checkButton'
                              : 'disabled'
                          }
                          onClick={() => makeButtonCheck(list.id)}
                        />
                      </div>
                      <span className="agreeList">{list.title}</span>
                    </div>
                    <p className="agreeDetail">{list.info}</p>
                  </Fragment>
                );
              })}
              <div className="agreeDetails">
                본인은 만 14세 이상이며, 이용약관, 개인정보 수집 및 이용을
                <br />
                확인하였으며, 동의합니다.
              </div>
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
