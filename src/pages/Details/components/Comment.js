import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsHandThumbsUp } from 'react-icons/bs';
import { BsHandThumbsDown } from 'react-icons/bs';
import './ReviewBottom.scss';

const Comment = ({ value }) => {
  return (
    <li className="comment">
      <div className="mainCommentLeft">
        <div className="mainCommentLeftContent">
          <div className="commentTop">
            <span className="shoppingmall">쇼핑몰 추천 리뷰</span>
          </div>
          <div className="starDate">
            <div className="rateScore">
              <div className="starScore">
                <AiFillStar className="starRate" />
                <AiFillStar className="starRate" />
                <AiFillStar className="starRate" />
                <AiFillStar className="starRate" />
                <AiFillStar className="starRate" />
              </div>
              <div className="veryGood">아주 좋아요</div>
            </div>
            <div className="uploadDater">
              <div className="uploadDate">{value.date}</div>
            </div>
          </div>
          <div className="commentContents">
            <div className="commentContent">{value.comment}</div>
          </div>
          <div className="goodToBadClick">
            <span className="good">
              <BsHandThumbsUp />
              도움돼요
            </span>
            <span className="bad">
              <BsHandThumbsDown />
              도움안돼요
            </span>
          </div>
        </div>
      </div>
      <div className="mainCommentRight">
        <div className="whatuserName"> {value.userName}</div>
        <div className="whatProduct">
          <b>타입 </b> {value.product}
        </div>
        <div className="whatcount">
          <b>수량 </b> {value.number}
        </div>
      </div>
    </li>
  );
};
export default Comment;
