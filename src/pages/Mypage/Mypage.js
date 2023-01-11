import React from 'react';
import { Link } from 'react-router-dom';
import './Mypage.scss';

const Mypage = () => {
  return (
    <div className="mypage">
      <div className="grayBack">
        <div className="boxLeft">
          <p>
            안녕하세요
            <br />
            오늘도 가심비있는 하루 되세요!
          </p>
          <button>SIMPLE 회원</button>
        </div>
        <div className="boxRight">
          <div className="boxRightTop">
            <div className="boxRightTopFirst">
              <span>적립금</span>
              <Link>0원</Link>
            </div>
            <div className="boxRightTopSecond">
              <span>쿠폰</span>
              <Link>1개</Link>
            </div>
          </div>
          <div className="boxRightThird">
            <span>010-1234-5678</span>
            <Link>정보수정</Link>
          </div>
        </div>
      </div>
      <div className="d">
        <div className="boxLeft">
          <p>마이페이지</p>
          <div className="mypageCat">
            <li>주문/배송 조회</li>
            <li>최근 본 상품</li>
            <li>제휴/대량구매 문의</li>
            <li>고객센터</li>
          </div>
        </div>
        <div className="boxRight">
          <div>
            <span>주문배송현황</span>
            <button>취소교환반품 내역</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mypage;
