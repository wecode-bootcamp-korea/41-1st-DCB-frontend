import React from 'react';
import { useState, useEffect } from 'react';
import Comment from './Comment';
import './ReviewBottom.scss';

const ReviewBottom = () => {
  const [reviewComment, setreviewComment] = useState([]);

  useEffect(() => {
    fetch('/data/reviewComments.json')
      .then(result => result.json())
      .then(data => setreviewComment(data));
  }, []);

  return (
    <div className="reviewBottom">
      <ul className="commentList">
        {reviewComment.map((value, i) => {
          return <Comment key={i} value={value} />;
        })}
      </ul>
    </div>
  );
};
export default ReviewBottom;

// TODO: MockData 사용불가 시 상수데이터 COMMENT 사용!
// const COMMENT = [
//   {
//     id: 1,
//     comment: '너무 좋아요!',
//     date: '2022.12.31',
//     userName: '장찬영',
//     product: '감성 두큰술',
//     number: 41,
//   },
//   {
//     id: 2,
//     comment: '너무 좋아요!',
//     date: '2022.12.31',
//     userName: '장찬영',
//     product: '감성 두큰술',
//     number: 41,
//   },
//   {
//     id: 3,
//     comment: '너무 좋아요!',
//     date: '2022.12.31',
//     userName: '장찬영',
//     product: '감성 두큰술',
//     number: 41,
//   },
//   {
//     id: 4,
//     comment: '너무 좋아요!',
//     date: '2022.12.31',
//     userName: '장찬영',
//     product: '감성 두큰술',
//     number: 41,
//   },
// ];
