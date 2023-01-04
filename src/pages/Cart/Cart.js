import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="container">
      <div className="sectionContainer">
        <div className="contentsContainer">
          <div className="contentsCart">
            <h2 className="title">장바구니</h2>
            <div className="selectContainer">
              <input type="checkbox" className="checkAll" />
              <div className="selectAll">전체선택(7/7)</div>
              <button className="selectedDelete">선택삭제</button>
            </div>
            <div className="cartItemContainer">
              <div className="cartItemWrap">
                <input type="checkbox" className="check" />
                <div className="thumbnail">
                  <a href="">
                    <img
                      className="thumbnailImg"
                      src="https://www.wiselycompany.com/web/product/tiny/202212/417b79482396985d181c901fe9485504.png"
                      alt="콜라겐"
                    />
                  </a>
                </div>
                <div className="prdboxWrap">
                  <div className="prdName">콜라겐·히알루론산</div>
                  <div className="quantityPriceWrap">
                    <div className="quantity">
                      <button className="controlBtn">-</button>
                      <input
                        className="amount"
                        type="text"
                        value="5"
                        size="2"
                      />
                      <button className="controlBtn">+</button>
                    </div>
                    <div className="priceDelWrap">
                      <div className="price">9,790(단가)원</div>
                      <button className="deleteBtn">x</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cartItemWrap">
                <input type="checkbox" className="check" />
                <div className="thumbnail">
                  <a href="">
                    <img
                      className="thumbnailImg"
                      src="https://www.wiselycompany.com/web/product/tiny/202212/3a7f335cd78f718d0c0fc647dae1658c.png"
                      alt="콜라겐"
                    />
                  </a>
                </div>
                <div className="prdboxWrap">
                  <div className="prdName">자연유래 성분 치약</div>
                  <div className="quantityPriceWrap">
                    <div className="quantity">
                      <button className="controlBtn">-</button>
                      <input
                        className="amount"
                        type="text"
                        value="5"
                        size="2"
                      />
                      <button className="controlBtn">+</button>
                    </div>
                    <div className="priceDelWrap">
                      <div className="price">9,790(단가)원</div>
                      <button className="deleteBtn">x</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cartItemWrap">
                <input type="checkbox" className="check" />
                <div className="thumbnail">
                  <a href="">
                    <img
                      className="thumbnailImg"
                      src="https://www.wiselycompany.com/web/product/tiny/202212/4efe5e8ccd7f95e389734321b5d2903b.png"
                      alt="콜라겐"
                    />
                  </a>
                </div>
                <div className="prdboxWrap">
                  <div className="prdName">도톰한 물티슈 100매 X 10팩</div>
                  <div className="quantityPriceWrap">
                    <div className="quantity">
                      <button className="controlBtn">-</button>
                      <input
                        className="amount"
                        type="text"
                        value="5"
                        size="2"
                      />
                      <button className="controlBtn">+</button>
                    </div>
                    <div className="priceDelWrap">
                      <div className="price">9,790(단가)원</div>
                      <button className="deleteBtn">x</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cartItemWrap">
                <input type="checkbox" className="check" />
                <div className="thumbnail">
                  <a href="">
                    <img
                      className="thumbnailImg"
                      src="https://www.wiselycompany.com/web/product/tiny/202212/de717ea9c91901cf3f09596135efd0f6.png"
                      alt="콜라겐"
                    />
                  </a>
                </div>
                <div className="prdboxWrap">
                  <div className="prdName">체지방 감소 가르시니아</div>
                  <div className="quantityPriceWrap">
                    <div className="quantity">
                      <button className="controlBtn">-</button>
                      <input
                        className="amount"
                        type="text"
                        value="5"
                        size="2"
                      />
                      <button className="controlBtn">+</button>
                    </div>
                    <div className="priceDelWrap">
                      <div className="price">9,790(단가)원</div>
                      <button className="deleteBtn">x</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cartItemWrap">
                <input type="checkbox" className="check" />
                <div className="thumbnail">
                  <a href="">
                    <img
                      className="thumbnailImg"
                      src="https://www.wiselycompany.com/web/product/tiny/202212/414927a0fa620b50d16435c5de15d034.png"
                      alt="콜라겐"
                    />
                  </a>
                </div>
                <div className="prdboxWrap">
                  <div className="prdName">장 건강 유산균</div>
                  <div className="quantityPriceWrap">
                    <div className="quantity">
                      <button className="controlBtn">-</button>
                      <input
                        className="amount"
                        type="text"
                        value="5"
                        size="2"
                      />
                      <button className="controlBtn">+</button>
                    </div>
                    <div className="priceDelWrap">
                      <div className="price">9,790(단가)원</div>
                      <button className="deleteBtn">x</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="message">장바구니에 담긴 상품이 없습니다</p>
          </div>
          <div className="contentsOrder">
            <h2 className="title">주문서</h2>
            <div className="billingInfo">주문자 정보</div>
            <div className="shippingInfo">배송 정보</div>
            <div className="discountInfo">쿠폰/적립금</div>
            <div className="paymethod">결제수단</div>
          </div>
        </div>
        <div className="cartTotal">
          <div className="totalSummaryContainer">
            <div className="totalContainer">
              <div className="sumPriceWrap">
                <div className="title">합계</div>
                <div className="dataWrap">
                  <span className="data">69,810</span>원
                </div>
              </div>
              <div className="discountWrap">
                <div className="title">할인금액</div>
                <div className="dataWrap">
                  <span>-</span>
                  <span className="data">0</span>원
                </div>
              </div>
              <div className="shippingWrap">
                <div className="title">배송비</div>
                <div className="dataWrap">
                  <span className="data">3,000</span>원
                </div>
              </div>
            </div>
            <div className="paymentDueAmount">
              <div className="title">결제예정금액</div>
              <div className="dataWrap">
                <span className="data">72,810</span>원
              </div>
            </div>
          </div>
          <div className="buyButtonWrap">
            <button className="buyButton" disabled={false}>
              구매하기
            </button>
            <button className="buyButton" disabled={true}>
              상품을 담아주세요
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
