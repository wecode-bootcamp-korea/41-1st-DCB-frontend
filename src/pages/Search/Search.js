import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Products } from './components/products';
import { API } from '../../config';
import './search.scss';

const Search = () => {
  const [items, setItems] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch(`${API.items}?${searchParams.toString()}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => setItems(result.data));
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
