import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Products } from './components/products';
import './search.scss';

const Search = () => {
  const [items, setItems] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch(`http://152.67.208.118:3000/items?search=텐트}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => setItems[result]);
    console.log(items);
  }, [searchParams]);

  return (
    <div className="searchList">
      <div className="titleArea">
        '{searchParams.get('search')}'에 대한 검색결과
      </div>
      <Products items={items} />
    </div>
  );
};
export default Search;
