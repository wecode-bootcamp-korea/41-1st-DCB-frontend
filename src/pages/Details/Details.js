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
  const [item, setItem] = useState([]);
  const [options, setOptions] = useState('');
  const totalPrice = Number(item.price) * productTheNumber;
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

  // const a = () => {
  //   fetch('http://127.0.0.1:3000/items/7')
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  //   a();
  //   console.log(a);

  useEffect(() => {
    fetch('http://152.67.208.118:3000/items/7', {
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(result => result.json())
      .then(data => {
        setItem(data.data);
        setOptions(item.options);
        console.log('a', options);
        console.log(item);
      });
  }, []);

  const option = item;
  return (
    <div className="detail">
      <div className="contents">
        <div className="detailAreaPadding">
          <div className="detailArea">
            <img className="bigImg" src={item.thumbnail} alt="상품사진" />
            <div className="infoArea">
              <div className="headingArea">
                <h3 className="brandName">
                  <div>{item.brand_name}</div>
                  <div>{item.product_category}</div>
                </h3>
                <h1 className="productName">{item.product_name}</h1>
              </div>
              <span className="info">{item.contents}</span>
              <div className="productInfoDetail">
                <div className="productPrice">
                  {parseInt(Number(item.price))}원
                </div>
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

                      {options.map(data => {
                        return (
                          <option key={data.option_id}>
                            {data.option_content}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {{ selectOption }.selectOption == '' ? null : (
                    <Option
                      product={selectOption}
                      total={totalPrice}
                      number={productTheNumber}
                      item={item}
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
        <TotalInfo items={item} />
      </div>
    </div>
  );
};

export default Details;
