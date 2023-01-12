import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { RxMagnifyingGlass } from 'react-icons/rx';
import {
  GiCampingTent,
  GiLanternFlame,
  GiLifeInTheBalance,
} from 'react-icons/gi';
import './category.scss';

export const Category = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const setCategoryParams = id => {
    searchParams.set('category', id);
    navigate(`/item-list?category=${searchParams.get('category')}`);
  };

  return (
    <div className="category">
      {CATEGORY.map(({ id, text, icon }) => {
        return (
          <div
            className="categoryList"
            onClick={() => {
              setCategoryParams(id);
            }}
            key={id}
          >
            {icon}
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

const CATEGORY = [
  { id: 0, text: '전체보기', icon: <RxMagnifyingGlass size="25px" /> },
  { id: 1, text: '캠핑 용품', icon: <GiCampingTent size="25px" /> },
  { id: 2, text: '조명 + 랜턴', icon: <GiLanternFlame size="25px" /> },
  { id: 3, text: '라이프 스타일', icon: <GiLifeInTheBalance size="25px" /> },
];
