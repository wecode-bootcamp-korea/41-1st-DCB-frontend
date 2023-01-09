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

  // TODO:MockData const [productDetails, setproductDeatils] = useState([]);
  const [productTheNumber, setproductTheNumber] = useState(1);
  const [selectOption, setselectOption] = useState([]);
  const [item, setItem] = useState([]);
  const [options, setOptions] = useState([{}]);
  const [optionList, setOptionList] = useState([]);

  useEffect(() => {
    fetch('http://152.67.208.118:3000/items/7', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(result => result.json())
      .then(data => {
        setItem(data);
        console.log('A', data);
        console.log('B', item);
        setOptions(item.data[0].options);
      });
  }, []);

  const addList = e => {
    e.preventDefault();
    return setOptionList(...optionList, <Option />);
  };

  const totalPrice = Number(item.data[0].price) * productTheNumber;
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

  const option = item.data[0].option_category_id;

  return (
    <div className="detail">
      <div className="contents">
        <div className="detailAreaPadding">
          <div className="detailArea">
            <img
              className="bigImg"
              src={item.data[0].thumbnail}
              alt="상품사진"
            />
            <div className="infoArea">
              <div className="headingArea">
                <h3 className="brandName">
                  <div>{item.data[0].brand_name}</div>
                  <div>{item.data[0].product_category}</div>
                </h3>
                <h1 className="productName">{item.data[0].product_name}</h1>
              </div>
              <span className="info">{item.data[0].contents}</span>
              <div className="productInfoDetail">
                <div className="productPrice">
                  {parseInt(Number(item.data[0].price))}원
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
                        <em className="price"> {totalPrice} 원</em>
                      </strong>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="productOption">
                    <span className="prductOptionName">타입-수량</span>
                    <select
                      className="productOptionSelect"
                      onChange={select}
                      onClick={addList}
                    >
                      <option disabled selected>
                        -필수! 옵션을 선택해주세요.-
                      </option>
                      {console.log('v', options)}

                      {options.map(data => {
                        return (
                          <option key={data.option_id}>
                            {data.option_content}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    {{ selectOption } == '' ? null : (
                      <Option
                        product={selectOption}
                        total={totalPrice}
                        number={productTheNumber}
                        item={item}
                      />
                    )}
                  </div>
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
