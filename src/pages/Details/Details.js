import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import TotalInfo from './components/TotalInfo';
import Option from './components/Option';
import './components/TotalInfo';
import './Detail.scss';

const Details = () => {
  const navigate = useNavigate();

  const params = useParams();

  // TODO:MockData const [productDetails, setproductDeatils] = useState([]);
  const [productTheNumber, setproductTheNumber] = useState(1);
  const [selectOption, setselectOption] = useState('');
  const [item, setItem] = useState({});
  const [options, setOptions] = useState([{}]);
  const [optionList, setOptionList] = useState([]);

  useEffect(() => {
    fetch('http://152.67.208.118:3000/items/7', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(result => result.json())
      .then(data => {
        setItem(data.data[0]);
        setOptions(data.data[0].options);
      });
  }, []);

  const select = e => {
    e.preventDefault();
    setselectOption(e.target);
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

  const option = item.option_category_id;

  const onAdd = () => {
    addToOrder(option);
  };

  const onRemove = value => {
    setOptionList(optionList.filter(one => one !== value));
  };

  const addToOrder = e => {
    const newSelectOptions = [...optionList];
    if (!newSelectOptions.includes(e.target.value)) {
      newSelectOptions.push(e.target.value);
      setOptionList(newSelectOptions);
    }

    // setOptionList(optionList => {
    //   const find = optionList.find(one => one.option === selectOption);
    //   if (find === undefined) {
    //     return [
    //       ...optionList,
    //       {
    //         option: selectOption,
    //       },
    //     ];
    //   } else {
    //     return optionList.map(one => {
    //       if (one.option !== selectOption) {
    //         return [
    //           ...optionList,
    //           {
    //             option: selectOption,
    //           },
    //         ];
    //       } else if (one.option === selectOption) {
    //         return [
    //           optionList,
    //           {
    //             option: selectOption,
    //           },
    //         ];
    //       } else {
    //         return optionList;
    //       }
    //     });
    //   }
    // });
  };

  const totalPrice = Number(item.price) * productTheNumber;

  return (
    <div className="detail">
      <div className="contents">
        <div className="detailAreaPadding">
          {item.id && (
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
                        onChange={addToOrder}
                        onClick={select}
                      >
                        <option disabled selected>
                          - 필수! 선택해주세요 -
                        </option>
                        {options.map(data => {
                          return (
                            <option key={data.option_id} onChange={onAdd}>
                              {data.option_content}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div>
                      {selectOption.length === 0
                        ? null
                        : optionList.map((value, id) => {
                            return (
                              <Option
                                key={id}
                                product={value}
                                total={totalPrice}
                                number={productTheNumber}
                                item={item}
                                onRemove={onRemove}
                              />
                            );
                          })}
                      <div className="totalPrice">
                        <strong className="totalTitle">총 상품금액: </strong>
                        <span className="total">
                          <strong>
                            <em className="price"> {totalPrice}원</em>
                          </strong>
                        </span>
                      </div>
                    </div>
                  </>
                )}

                <div className="actionBtn">
                  <button className="cartBtn">장바구니 </button>
                  <button className="submitBtn"> 구매하기 </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="detailTal" />
        <TotalInfo items={item} />
      </div>
    </div>
  );
};

export default Details;
