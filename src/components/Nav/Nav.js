import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { LINK_LIST, LINKBTM_LIST } from './NavData.js';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeInput = e => {
    setInputValue(e.target.value);
  };

  const handleSubmitSearch = e => {
    e.preventDefault();
    searchParams.set('search', inputValue);
    setSearchParams(searchParams);
    navigate(`/search-list?${searchParams.toString()}`);
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
          <form className="navSearch" onSubmit={handleSubmitSearch}>
            <input
              className="navInput"
              value={inputValue}
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
        <div className="blank" />
      </div>
    </div>
  );
};
export default Nav;
