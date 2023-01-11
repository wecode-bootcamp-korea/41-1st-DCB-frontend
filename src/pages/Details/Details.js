import React from 'react';
import { useEffect, useState } from 'react';
import {
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import TotalInfo from './components/TotalInfo';
import Option from './components/Option';
import './components/TotalInfo';
import './Detail.scss';
import { API } from '../../config';
import Cart from '../Cart/Cart';

const Details = () => {
  // TODO:MockData const [productDetails, setproductDeatils] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [productTheNumber, setProductTheNumber] = useState(1);
  const [selectOption, setSelectOption] = useState('');
  const [item, setItem] = useState({});
  const [options, setOptions] = useState([{}]);
  const [optionList, setOptionList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [fetchOptionId, setFetchOptionId] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const params = useParams();
  const productId = params.id;

  const passCart = () => {
    navigate(Cart);
  };

  useEffect(() => {
    fetch(`http://10.58.52.240:3000/carts`, {
      method: 'GET',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.NA.BTas9NAaYhQqppm4rSzCAqkvmLEO-Z6xVtYuKDnQvxI',
      },
    })
      .then(response => response.json())
      .then(cart => {
        setCartItems(cart.data);
      });
  }, []);
  console.log(cartItems);

  useEffect(() => {
    fetch(`http://10.58.52.240:3000/items/${productId}`)
      .then(result => {
        return result.json();
      })
      .then(data => {
        setItem(data.data);
        setOptions(data.data.options);
      });
  }, [productId]);

  const select = e => {
    e.preventDefault();
    setSelectOption(e.target);
  };

  const methodPicker = () => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].cartItemId === Number(productId)) {
        return 'PATCH';
      } else {
        return 'POST';
      }
    }
  };

  const incrementCount = e => {
    e.preventDefault();
    setProductTheNumber(productTheNumber => productTheNumber + 1);
  };
  const decrementCount = e => {
    e.preventDefault();
    const value = productTheNumber - 1;
    if (value < 1) return alert('최소 주문수량은 1개 입니다.');
    setProductTheNumber(value);
  };

  const option = item.option_category_id;

  const onAdd = () => {
    addToOrder(option);
  };

  const onRemove = value => {
    setOptionList(optionList.filter(one => one !== value));
  };

  const addToOrder = e => {
    const filteredItem = item.options.filter(
      item => item.option_content === e.target.value
    );

    setFetchOptionId(filteredItem[0].option_id);

    setOptionList([...optionList], filteredItem);
    const newSelectOptions = [...optionList];
    if (!newSelectOptions.includes(e.target.value)) {
      newSelectOptions.push(e.target.value);
      setOptionList(newSelectOptions);
    }
  };

  const fetchOption = fetchOptionId;
  const fetchItemId = Number(productId);
  const fetchQuantity = productTheNumber;

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

  const totalPrice = Number(item.price) * productTheNumber;

  const pass = () => {
    console.log(methodPicker());
    fetch(`http://10.58.52.240:3000/carts`, {
      method: methodPicker(),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiJ9.NA.BTas9NAaYhQqppm4rSzCAqkvmLEO-Z6xVtYuKDnQvxI',
      },
      body: JSON.stringify({
        optionId: fetchOptionId,
        quantity: fetchQuantity,
        itemId: fetchItemId,
      }),
    }).then(response => response.json());
  };

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
                          readOnly
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
                        // value={form.optionId}
                      >
                        <option disabled selected>
                          - 필수! 선택해주세요 -
                        </option>
                        {options.map(data => {
                          return (
                            <option
                              key={data.option_id}
                              onChange={onAdd}
                              option_id={data.option_id}
                            >
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
                  <button className="cartBtn" onClick={pass}>
                    장바구니
                  </button>
                  <button className="submitBtn" onClick={(pass, passCart)}>
                    구매하기
                  </button>
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
