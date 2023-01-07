import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Option.scss';

const Option = ({ product, total, item }) => {
  const [productDetails, setproductDeatils] = useState([{}]);
  const [productTheNumbers, setproductTheNumbers] = useState(1);
  console.log('atotal', item);
  console.log('productTheNumbers', productTheNumbers);

  const totalPrice = parseInt(Number(item.price)) * productTheNumbers;

  // const able = () => {
  //   Number(item.price) * productTheNumbers
  //   pr();
  // };

  const incrementCount = e => {
    e.preventDefault();
    setproductTheNumbers(productTheNumbers => productTheNumbers + 1);
    // setproductTheNumber(productTheNumber + 1);
  };
  const decrementCount = e => {
    e.preventDefault();
    const value = productTheNumbers - 1;
    if (value < 0) return;
    setproductTheNumbers(value);
  };
  useEffect(() => {
    fetch('data/details.json')
      .then(result => result.json())
      .then(data => setproductDeatils(data));
  }, []);

  return (
    <>
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
              <AiOutlineClose className="close" />
            </div>
          </div>
          <div className="optionTotalPrice">{totalPrice}원</div>
        </div>
      </div>
      <div className="totalPrice">
        <strong className="totalTitle">총 상품금액: </strong>
        <span className="total">
          <strong>
            <em className="price"> {totalPrice}원</em>
          </strong>
        </span>
      </div>
    </>
  );
};
export default Option;
