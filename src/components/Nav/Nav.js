import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { LINK_LIST, LINKBTM_LIST } from './NavData.js';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="navTop">
        <div className="memberLink">
          {LINK_LIST.map(list => {
            return (
              <Link className="memberLinkStyle" to={list.to} key={list}>
                {list.title}
              </Link>
            );
          })}
        </div>
        <div className="navMain">
          <Link to="/" className="navLogo">
            SIMPLE
          </Link>
          <div className="navSearch">
            <input className="navInput" />
            <button className="navButton">
              <CiSearch className="navButtonIcon" />
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
        <div className="pageLink">
          {LINKBTM_LIST.map(listbtm => {
            return (
              <Link className="pageLinkLi" to={listbtm.to} key={listbtm}>
                {listbtm.title}
              </Link>
            );
          })}
        </div>
        <div className="navThirdRight" />
      </div>
    </div>
  );
};
export default Nav;
