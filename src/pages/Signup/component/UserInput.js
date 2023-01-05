import React from 'react';
import './UserInput.scss';

const UserInput = ({ title, placeholder }) => {
  return (
    <div className="UserInput">
      <p className="inputTitle">
        {title}
        <span className="fontRed">*</span>
      </p>
      <input placeholder={placeholder} className="inputBox" />
    </div>
  );
};

export default UserInput;
