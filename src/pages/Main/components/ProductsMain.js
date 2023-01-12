import { useState } from 'react';
import { ProductMain } from './ProductMain';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './productsMain.scss';

export const ProductsMain = ({ productsName, items }) => {
  const [px, setPx] = useState(0);

  const overFlowValue = items.length < 5 ? 0 : (items.length - 5) * 265;
  const CARDWIDTH = 265;

  const handleClickLeft = () => {
    if (px <= -overFlowValue) {
      setPx(prev => prev + CARDWIDTH);
    }
  };

  const handleClickRight = () => {
    if (px >= -overFlowValue) {
      setPx(prev => prev - CARDWIDTH);
    }
  };

  return (
    <div className="productsMain">
      <p className="productsName">{productsName}</p>
      <FiChevronLeft
        size="25px"
        className="carouselBtn"
        onClick={handleClickLeft}
      />
      <FiChevronRight
        size="25px"
        className="carouselBtn"
        onClick={handleClickRight}
      />
      <div className="carouselContainer">
        <div
          className="productLists"
          style={{ transform: `translate(${px}px)` }}
        >
          {items.map(items => (
            <ProductMain className="productCard" key={items.id} {...items} />
          ))}
        </div>
      </div>
    </div>
  );
};
