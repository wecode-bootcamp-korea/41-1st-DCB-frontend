import React from 'react';
import { Link } from 'react-router-dom';
import './Mypage.scss';

const Mypage = () => {
  return (
    <div className="mypage">
      <div className="grayWrapper">
        <div className="grayLeft">
          <p>
            안녕하세요
            <br />
            오늘도 <span className="textBrown">가심비</span>있는 하루 되세요!
          </p>
          <button className="buttonStyle">SIMPLE 회원</button>
        </div>
        <div className="grayRight">
          <div className="grayRightTop">
            <div className="grayRightTopFirst">
              <span>적립금</span>
              <Link className="linkStyle" to="#">
                0원
              </Link>
            </div>
            <div className="grayRightTopSecond" to="#">
              <span>쿠폰</span>
              <Link className="linkStyle">1개</Link>
            </div>
          </div>
          <div className="grayRightThird">
            <p>010-1234-5678</p>
            <Link className="linkStyle" to="#">
              정보수정
            </Link>
          </div>
        </div>
      </div>
      <div className="whiteWrapper">
        <div className="whiteInner">
          <div className="whiteLeft">
            <p className="title">마이페이지</p>
            <div className="boxList">
              <div className="boxLists">주문/배송 조회</div>
              <div className="boxLists">최근 본 상품</div>
              <div className="boxLists">제휴/대량구매 문의</div>
              <div className="boxLists">고객센터</div>
            </div>
          </div>
          <div className="whiteRight">
            <div className="orderStatus">
              <p>
                주문배송현황<span>(최근 3개월 기준)</span>
              </p>
              <button>취소교환반품 내역</button>
            </div>
            <div className="blankPage" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mypage;
