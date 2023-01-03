/* eslint-disable */
import React from 'react';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerInner">
        <div className="footerFirst">
          <Link
            className="logo"
            rel="stylesheet"
            type="text/html"
            href="/signup"
          >
            로그인
          </Link>
          <p>고객센터</p>
          <p>브랜드 스토리</p>
          <p>블로그</p>
          <p>인재채용</p>
        </div>
        <hr className="hr" />
        <div className="footerMid">
          <div className="footerMidLeft">
            <p className="fontSize15">(주)DCB컴퍼니 사업자정보</p>
            <div className="fontSize14">
              <p>서울특별시 강남구 테헤란로 427 대표자: 송은우</p>
              <p>
                사업자 등록번호: 530-81-01310, 통신판매업신고번호: 제
                2022-서울강남-06094
              </p>
              <p>
                개인정보보호책임자: security@wecode, 고객센터: 070-4323-4050
              </p>
              <p>E-mail: help@wecode.com</p>
              <p>제휴문의: help@wecode.com</p>
            </div>
          </div>
          <div className="footerMidRight">
            <div>
              <FaComment className="imgSize" />
              <p className="fontwhite">카카오톡 채널 'DCB컴퍼니'</p>
            </div>
            <div>
              <div className="flexStart">
                <p>고객센터 3333-3333</p>
                <p>[평일] 오전 9시 ~ 오후 6시</p>
              </div>
              <p className="flexEnd">[점심시간] 오후 12시 ~ 1시</p>
            </div>
          </div>
        </div>
        <div className="footerBtm">
          <div className="footerBtmLeft">
            <span className="borderBar">개인정보처리방침</span>
            <span className="borderBar">이용안내</span>
            <span className="borderBar">사업자정보확인</span>
            <span className="borderBar">이용약관</span>
            <span>이메일무단수집거부</span>
          </div>
          <div className="footerBtmRight">
            <span>
              ©2018-2022. <b>DCB COMPANY</b> All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
