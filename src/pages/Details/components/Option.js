import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Option.scss';

const Option = ({ product }) => {
  const [productDetails, setproductDeatils] = useState([{}]);
  const [productTheNumber, setproductTheNumber] = useState(1);

  const incrementCount = e => {
    e.preventDefault();
    setproductTheNumber(productTheNumber => productTheNumber + 1);
    // setproductTheNumber(productTheNumber + 1);
  };
  const decrementCount = e => {
    e.preventDefault();
    const value = productTheNumber - 1;
    if (value < 0) return;
    setproductTheNumber(value);
  };
  useEffect(() => {
    fetch('data/details.json')
      .then(result => result.json())
      .then(data => setproductDeatils(data));
  }, []);

  return (
    <div className="option">
      <div className="productOptionSelect">
        <div className="productNameOption">
          <span className="selectproductName">
            {productDetails[0].itemName} -
          </span>
          <span className="optionName">{product}</span>
        </div>

        <div className="buttonSelectorDelete">
          <div className="buttonSelector">
            <button className="minus" onClick={decrementCount}>
              -
            </button>
            <input className="quantityNumber" value={productTheNumber} />
            <button className="plus" onClick={incrementCount}>
              +
            </button>
          </div>
          <div className="closeZone">
            <AiOutlineClose className="close" />
          </div>
        </div>
        <div className="optionTotalPrice">{productDetails[0].price}원</div>
      </div>
    </div>
  );
};
export default Option;
