import React from 'react';
import { Products } from './components/Products';
import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="eventImages" />
      <div className="productsList">
        <Products productName="따끈따끈한 신상" />
        <Products productName="지갑은 가볍게 양손은 무겁게" />
      </div>
    </div>
  );
};
export default Main;
