import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div>
        <span>회원가입</span>
        <span>로그인</span>
        <span>고객센터</span>
      </div>
      <div>
        <p className="logo">SIMPLE</p>
        <div className="divbox">box</div>
        <CiSearch />
        <BsCart3 />
      </div>
      <div>
        <HiOutlineBars3 />
        <span>추천</span>
        <span>신제품</span>
      </div>
    </div>
  );
};
export default Nav;
