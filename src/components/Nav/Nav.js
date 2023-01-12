import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { LINK_LIST, LOGIN_LIST, LINKBTM_LIST } from './NavData.js';
import { Category } from './Category.js';
import './Nav.scss';

const Nav = () => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [inputValue, setInputValue] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMouseHover, setIsMouseHover] = useState(false);
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

  const handleChangeInput = e => {
    setInputValue(e.target.value);
  };

  const handleSubmitSearch = e => {
    e.preventDefault();
    searchParams.set('search', inputValue);
    setSearchParams(searchParams);
    setInputValue('');
    navigate(`/search-list?${searchParams.toString()}`);
  };

  const hoverCategory = boolean => {
    setIsMouseHover(boolean);
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
          <form className="navSearch" onSubmit={handleSubmitSearch}>
            <input
              className="navInput"
              value={inputValue || ''}
              onChange={handleChangeInput}
            />
            <button className="navButton">
              <CiSearch className="navButtonIcon" />
            </button>
          </form>
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
