import React from 'react';
import './ReviewBottom.scss';
import Comment from './Comment';

const ReviewBottom = () => {
  return (
    <div className="ReviewBottom">
      <ul className="commentList">
        {comment.map((value, i) => {
          return <Comment key={i} value={value} />;
        })}
      </ul>
    </div>
  );
};
export default ReviewBottom;

const comment = [
  {
    id: 1,
    comment: '너무 좋아요!',
    date: '2022.12.31',
    userName: '장찬영',
    product: '감성 두큰술',
    number: 41,
  },
  {
    id: 2,
    comment: '너무 좋아요!',
    date: '2022.12.31',
    userName: '장찬영',
    product: '감성 두큰술',
    number: 41,
  },
  {
    id: 3,
    comment: '너무 좋아요!',
    date: '2022.12.31',
    userName: '장찬영',
    product: '감성 두큰술',
    number: 41,
  },
  {
    id: 4,
    comment: '너무 좋아요!',
    date: '2022.12.31',
    userName: '장찬영',
    product: '감성 두큰술',
    number: 41,
  },
];
