import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { LINK_LIST, LINKBTM_LIST } from './NavData.js';
import { Category } from './Category.js';
import './Nav.scss';

const Nav = () => {
  const [isMouseHover, setIsMouseHover] = useState(false);

  const hoverCategory = boolean => {
    setIsMouseHover(boolean);
  };

  return (
    <div className="nav">
      <div className="linkWrap">
        <div className="memberLink">
          {LINK_LIST.map(list => {
            return (
              <Link className="memberLinkStyle" to={list.to} key={list.id}>
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
          <Link to="/cart">
            <BsCart3 className="navCart" />
          </Link>
        </div>
      </div>
      <div className="categoryWrap">
        <div
          className="categoryWrapLeft"
          onMouseEnter={() => hoverCategory(true)}
        >
          <HiOutlineBars3 className="categoryWrapLeftBar" />
          <span className="categoryWrapLeftText">카테고리</span>
          <div
            className={isMouseHover ? null : 'hide'}
            onMouseLeave={() => hoverCategory(false)}
          >
            <Category />
          </div>
        </div>
        <div className="pageLink">
          {LINKBTM_LIST.map(listbtm => {
            return (
              <Link className="pageLinkLi" to={listbtm.to} key={listbtm.id}>
                {listbtm.title}
              </Link>
            );
          })}
        </div>
        <div className="blank" />
      </div>
    </div>
  );
};
export default Nav;
