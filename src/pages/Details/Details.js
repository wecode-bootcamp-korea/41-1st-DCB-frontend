import React from 'react';
import './Detail.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
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
  const totalPrice = () => {
    return productTheNumber * productDetails[0].price;
  };

  useEffect(() => {
    fetch('data/details.json')
      .then(result => result.json())
      .then(data => setproductDeatils(data));
  }, []);
  const option = productDetails[0].option;

  return (
    <div id="Detail">
      <div className="contents">
        <div className="DetailAreaPadding">
          <div className="DetailArea">
            <img
              className="BigImg"
              src={productDetails[0].images}
              alt="상품사진"
            />
            <div className="infoArea">
              <div className="headingArea">
                <h3 className="brandName">{productDetails[0].brand}</h3>
                <h1 className="productName">{productDetails[0].itemName}</h1>
              </div>
              <span className="Info">{productDetails[0].shortDescription}</span>
              <div className="productInfo">
                <div className="productPrice">{productDetails[0].price}</div>
                <div className="rate"> 별점 </div>
              </div>
              {option == null ? (
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
              ) : (
                <div className="productOption">
                  <span className="prductOptionName">타입-수량</span>
                  <select className="productOptionSelect">
                    {productDetails[0].option.map((data, i) => {
                      return <option key={i}> {data} </option>;
                    })}
                  </select>
                </div>
              )}

              <div className="totalPrice">
                <strong className="totalTitle">총 상품금액:</strong>
                <span className="total">
                  <strong>
                    <em className="price"> {totalPrice}</em>
                  </strong>
                </span>
              </div>
              <div className="actionBtn">
                <button className="cartBtn">장바구니 </button>
                <button className="SubmitBtn"> 구매하기 </button>
              </div>
            </div>
          </div>
        </div>
        <div className="detailTab">
          <ul className="DetailedInformation">
            <li className="productInfo">
              <div className="productInfoDetail"> 상품설명</div>
            </li>
            <li className="review">
              <div className="reviewDetail"> 후기</div>
            </li>
            <li className="productDetailInfo">
              <div className="productDetailInfomation"> 상세정보</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Details;
