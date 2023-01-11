import React from 'react';
import { useState, useEffect } from 'react';
import ReviewBottom from './ReviewBottom';
import { AiFillStar } from 'react-icons/ai';
import './Review.scss';

const Review = () => {
  const [reviewData, setreviewData] = useState([]);

  useEffect(() => {
    fetch('/data/review.json')
      .then(result => result.json())
      .then(data => setreviewData(data));
  }, []);
  console.log(reviewData);

  return (
    <div className="reviewContent">
      <div className="content">
        <div className="widgetReviews">
          <div className="headerBasic">
            <div className="headerBasicTitle">
              <span className="spanHeaderTitle">후기</span>
              <span className="headerTitleNumber">(41)</span>
            </div>
          </div>
          <div className="renewedProduct">
            <div className="productReviewSummary">
              <div className="productReviewed">
                <div className="productReviewedStar">
                  <div className="productReviewScore">
                    <AiFillStar className="star" size="48" />
                    <span className="reviewStar">4.8</span>
                  </div>
                  <div className="likeProduct">
                    <b>94%</b>의 구매자가 이 상품을 좋아합니다.
                  </div>
                </div>
                <div className="veryBadToGood">
                  <ul className="veryBadToGoodlist">
                    {reviewData.map(value => {
                      return (
                        <li className="reteList" key={value.id}>
                          <div className="veryGoodText">{value.text}</div>
                          <div className="graph">
                            <div className="graphScore" />
                          </div>
                          <div className="howManyLike">{value.number}</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="productsReviews" />
          <div className="filterSortBasic" />
          <ReviewBottom />
        </div>
      </div>
    </div>
  );
};
export default Review;

// TODO: Mock데이터 사용 불가시 상수데이터 like 사용!
// const LIKE = [
//   { id: 1, text: '아주 좋아요', number: '79%' },
//   { id: 2, text: '마음에 들어요', number: '15%' },
//   { id: 3, text: '보통이에요', number: '4%' },
//   { id: 4, text: '그냥 그래요', number: '0%' },
//   { id: 5, text: '별로에요', number: '1%' },
// ];
