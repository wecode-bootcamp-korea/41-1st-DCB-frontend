import React from 'react';
import './UserInput.scss';

const UserInput = ({
  title,
  placeholder,
  info,
  name,
  handleInfo,
  check,
  type,
}) => {
  return (
    <>
      <div className="UserInput">
        <p className="inputTitle">
          {title}
          <span className="fontRed">*</span>
        </p>
        <input
          name={name}
          placeholder={placeholder}
          className="inputBox"
          onChange={handleInfo}
          type={type}
        />
      </div>
      <div className="inputAdd">{info}</div>
      {title === '비밀번호 확인' && (
        <div className="inputAdd">
          {check ? '비밀번호가 일치합니다' : '비밀번호가 일치하지 않습니다'}
        </div>
      )}
    </>
  );
};

export default UserInput;
