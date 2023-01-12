import React, { useEffect, useState } from 'react';
import { ProductsMain } from './components/ProductsMain';
import { EventImages } from './components/EventImages';
import { API } from '../../config';
import './main.scss';

const Main = () => {
  const [productData, setProductData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch(`${API.items}/?page=&sort=`)
      .then(res => res.json())
      .then(result => {
        setProductData(result.data);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.items}/?page=&sort=cheap`)
      .then(res => res.json())
      .then(result => {
        setSelectedItems(result.data);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      currentImageIndex >= EVENTIMAGES.length - 1
        ? setCurrentImageIndex(0)
        : setCurrentImageIndex(prev => prev + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <div className="main">
      <div className="imageWrap">
        <div
          className="eventImages"
          style={{ transform: `translateX(${currentImageIndex * -100}vw)` }}
        >
          {EVENTIMAGES.map(({ id, src, alt }) => (
            <EventImages key={id} src={src} alt={alt} />
          ))}
        </div>
      </div>
      <div className="productsList">
        <ProductsMain productsName="따끈따끈한 신상" items={productData} />
        <div className="adBanner">
          <span className="bannerComment">Wanna go camping?</span>
          <img className="bannerImg" src="./images/선물.png" alt="선물" />
        </div>
        <ProductsMain
          productsName="지갑은 가볍게 양손은 무겁게"
          items={selectedItems}
        />
      </div>
    </div>
  );
};
export default Main;

const EVENTIMAGES = [
  { id: 1, src: './images/10.jpg', alt: '하늘' },
  { id: 2, src: './images/12.jpg', alt: '바다' },
  { id: 3, src: './images/14.jpg', alt: '하늘과 바다' },
];
