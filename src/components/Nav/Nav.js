import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="navTop">
        <div className="navFirst">
          <Link to="/signup" className="navFirstStyle">
            회원가입
          </Link>
          <Link to="/login" className="navFirstStyle">
            로그인
          </Link>
          <Link to="#" className="navFirstStyle">
            고객센터
          </Link>
        </div>
        <div className="navSecond">
          <p className="navLogo">SIMPLE</p>
          <div className="navSearch">
            <input className="navInput" />
            <button className="navButton">
              <CiSearch className="navInputIcon" />
            </button>
          </div>
          <BsCart3 className="navCart" />
        </div>
      </div>
      <div className="navBtm">
        <div className="navBtmLeft">
          <HiOutlineBars3 className="navBtmLeftBar" />
          <span className="navBtmLeftCat">카테고리</span>
        </div>
        <div className="navBtmMid">
          <Link to="#" className="navBtmMidLi">
            추천
          </Link>
          <Link to="#" className="navBtmMidLi">
            신제품
          </Link>
          <Link to="#" className="navBtmMidLi">
            베스트
          </Link>
          <Link to="#" className="navBtmMidLast">
            심플NOW
          </Link>
        </div>
        <div className="navThirdRight" />
      </div>
    </div>
  );
};
export default Nav;
