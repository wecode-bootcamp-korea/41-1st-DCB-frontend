import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Products } from './components/products';
import './search.scss';

const Search = () => {
  const [items, setItems] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams;

  // useEffect(() => {
  //   console.log(searchParams.toString());
  //   // fetch(`http://152.67.208.118:3000/items/?${location.search}`, {
  //   //   method: 'GET',
  //   // })
  //   //   .then(res => res.json())
  //   //   .then(result => setItems[result]);
  // }, [searchParams]);

  return (
    <div className="searchList">
      <div className="titleArea">''에 대한 검색결과</div>
      {/* <Products items={items} /> */}
    </div>
  );
};
export default Search;
