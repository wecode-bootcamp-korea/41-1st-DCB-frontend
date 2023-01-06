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

  const hoverCategory = () => {
    setIsMouseHover(true);
  };

  const removeCategory = () => {
    setIsMouseHover(false);
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
          <BsCart3 className="navCart" />
        </div>
      </div>
      <div className="categoryWrap">
        <div
          className="categoryWrapLeft"
          onMouseOver={hoverCategory}
          onMouseLeave={removeCategory}
        >
          <HiOutlineBars3 className="categoryWrapLeftBar" />
          <span className="categoryWrapLeftText">카테고리</span>
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
      <div
        className={isMouseHover ? null : 'hide'}
        onMouseEnter={hoverCategory}
        onMouseLeave={removeCategory}
      >
        <Category />
      </div>
    </div>
  );
};
export default Nav;
