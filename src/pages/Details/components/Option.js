import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Option.scss';

const Option = ({ product, total, item, onRemove, id }) => {
  const [productDetails, setproductDeatils] = useState([{}]);
  const [productTheNumbers, setproductTheNumbers] = useState(1);

  const totalPrice = parseInt(Number(item.price)) * productTheNumbers;

  const incrementCount = e => {
    e.preventDefault();
    setproductTheNumbers(productTheNumbers => productTheNumbers + 1);
  };
  const decrementCount = e => {
    e.preventDefault();
    const value = productTheNumbers - 1;
    if (value < 1) return alert('최소 주문수량은 1개 입니다.');
    setproductTheNumbers(value);
  };
  // TODO: Mockdata 사용
  // useEffect(() => {
  //   fetch('data/details.json')
  //     .then(result => result.json())
  //     .then(data => setproductDeatils(data));
  // }, []);

  return (
    <div className="option">
      <div className="productOptionSelect">
        <div className="productNameOption">
          <span className="selectproductName">{item.product_name} -</span>
          <span className="optionName">{product}</span>
        </div>

        <div className="buttonSelectorDelete">
          <div className="buttonSelector">
            <button className="minus" onClick={decrementCount}>
              -
            </button>
            <input className="quantityNumber" value={productTheNumbers} />
            <button className="plus" onClick={incrementCount}>
              +
            </button>
          </div>
          <div className="closeZone">
            <AiOutlineClose
              className="close"
              onClick={() => onRemove(product)}
            />
          </div>
        </div>
        <div className="optionTotalPrice">{totalPrice}원</div>
      </div>
    </div>
  );
};
export default Option;
