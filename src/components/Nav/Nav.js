import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { LINK_LIST, LOGIN_LIST, LINKBTM_LIST } from './NavData.js';
import './Nav.scss';

const Nav = () => {
  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setCurrentScroll(window.scrollY);
  };

  const logOut = () => {
    localStorage.clear();
  };

  const isTokenValid = () => {
    localStorage.getItem('Token');
  };

  return (
    <div className="nav">
      <div className="linkWrap">
        <div className="memberLink">
          {isTokenValid
            ? LOGIN_LIST.map(list => {
                return (
                  <Link className="memberLinkStyle" to={list.to} key={list.id}>
                    {list.title}
                  </Link>
                );
              })
            : LINK_LIST.map(list => {
                return (
                  <Link className="memberLinkStyle" to={list.to} key={list.id}>
                    {list.title}
                  </Link>
                );
              })}
          {/* {LOGIN_LIST.map(list => {
            return (
              <Link className="memberLinkStyle" to={list.to} key={list.id}>
                {list.title}
              </Link>
            );
          })} */}
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
        <div className="categoryWrapLeft">
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
        <div className="blank">
          {currentScroll >= 110 && (
            <Link to="/cart">
              <BsCart3 className="navCartScroll" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
