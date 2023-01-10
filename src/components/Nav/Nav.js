import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { LINK_LIST, LOGIN_LIST, LINKBTM_LIST } from './NavData.js';
import './Nav.scss';

const Nav = () => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setCurrentScroll(window.scrollY);
  };

  const isTokenValid = localStorage.getItem('Token');

  const handleLoginUserNav = (e, to) => {
    if (e.target.title === '로그아웃') {
      localStorage.clear();
    }
    navigate(`${to}`);
  };

  return (
    <div className="nav">
      <div className="linkWrap">
        <div className="memberLink">
          {isTokenValid
            ? LOGIN_LIST.map(list => {
                return (
                  <span
                    className="memberLinkStyle"
                    key={list.id}
                    title={list.title}
                    onClick={e => handleLoginUserNav(e, list.to)}
                  >
                    {list.title}
                  </span>
                );
              })
            : LINK_LIST.map(list => {
                return (
                  <Link className="memberLinkStyle" key={list.id} to={list.to}>
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
