import React from 'react';
import { Link } from 'react-router-dom';
import { RxMagnifyingGlass } from 'react-icons/rx';
import {
  GiCampingTent,
  GiLanternFlame,
  GiLifeInTheBalance,
} from 'react-icons/gi';
import './category.scss';

export const Category = () => {
  return (
    <div className="category">
      <Link to="/" className="categoryList">
        <RxMagnifyingGlass size="25px" />
        <p>전체보기</p>
      </Link>
      <Link to="/" className="categoryList">
        <GiCampingTent size="25px" />
        <p>캠핑 용품</p>
      </Link>
      <Link to="/" className="categoryList">
        <GiLanternFlame size="25px" />
        <p>조명 + 랜턴</p>
      </Link>
      <Link to="/" className="categoryList">
        <GiLifeInTheBalance size="25px" />
        <p>라이프 스타일</p>
      </Link>
    </div>
  );
};
