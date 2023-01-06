import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import TotalInfo from './components/TotalInfo';
import Option from './components/Option';
import './components/TotalInfo';
import './Detail.scss';

const Details = () => {
  const navigate = useNavigate();

  const [productDetails, setproductDeatils] = useState([{}]);
  const [productTheNumber, setproductTheNumber] = useState(1);
  const [selectOption, setselectOption] = useState([]);

  const totalPrice = Number(productDetails[0].price) * productTheNumber;

  console.log(totalPrice);

  const select = e => {
    e.preventDefault();
    setselectOption(e.target.value);
  };

  const incrementCount = e => {
    e.preventDefault();
    setproductTheNumber(productTheNumber => productTheNumber + 1);
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
  const option = productDetails[0].option;

  return (
    <div className="detail">
      <div className="contents">
        <div className="detailAreaPadding">
          <div className="detailArea">
            <img
              className="bigImg"
              src={productDetails[0].thumbnail}
              alt="상품사진"
            />
            <div className="infoArea">
              <div className="headingArea">
                <h3 className="brandName">{productDetails[0].brand_name}</h3>
                <h1 className="productName">
                  {productDetails[0].product_name}
                </h1>
              </div>
              <span className="info">{productDetails[0].contents}</span>
              <div className="productInfoDetail">
                <div className="productPrice">{productDetails[0].price}원</div>
                <div className="rate">
                  <AiFillStar size="16" color="rgb(143, 116, 87)" />
                  <span className="rateScore">4.8</span>
                </div>
              </div>
              {option == null ? (
                <>
                  <td className="productTheNumber">
                    <span className="quantity">
                      <button className="minus" onClick={decrementCount}>
                        -
                      </button>
                      <input
                        className="quantityNumber"
                        value={productTheNumber}
                      />
                      <button className="plus" onClick={incrementCount}>
                        +
                      </button>
                    </span>
                  </td>
                  <div className="totalPrice">
                    <strong className="totalTitle">총 상품금액:</strong>
                    <span className="total">
                      <strong>
                        <em className="price"> {totalPrice}</em>
                      </strong>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="productOption">
                    <span className="prductOptionName">타입-수량</span>
                    <select className="productOptionSelect" onChange={select}>
                      <option disabled selected>
                        -필수! 옵션을 선택해주세요.-
                      </option>

                      {productDetails[0].option.map((data, i) => {
                        return <option key={i}> {data} </option>;
                      })}
                    </select>
                  </div>

                  {{ selectOption }.selectOption == '' ? null : (
                    <Option
                      product={selectOption}
                      total={totalPrice}
                      number={productTheNumber}
                    />
                  )}
                </>
              )}

              <div className="actionBtn">
                <button className="cartBtn">장바구니 </button>
                <button className="submitBtn"> 구매하기 </button>
              </div>
            </div>
          </div>
        </div>
        <div className="detailTal" />
        <TotalInfo />
      </div>
    </div>
  );
};
export default Details;
