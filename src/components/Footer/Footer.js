/* eslint-disable */
import React from 'react';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LINK_LIST, INFO_LIST, LINKBTM_LIST } from './FooterData';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="linkBox">
          {LINK_LIST.map(list => {
            return (
              <Link className="linkBoxLi" to={list.to} key={list.id}>
                {list.title}
              </Link>
            );
          })}
        </div>
        <hr className="hr" />
        <div className="footerInfo">
          <div className="infoLeft">
            <p className="fontSize15">(주)DCB컴퍼니 사업자정보</p>
            <div className="fontSize14">
              {INFO_LIST.map(info => {
                return <p key={info.id}>{info.title}</p>;
              })}
            </div>
          </div>
          <div className="infoRight">
            <div>
              <FaComment className="imgSize" />
              <p className="fontWhite">카카오톡 채널 'DCB컴퍼니'</p>
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
        <div className="linkBoxBtm">
          <div className="linkBoxBtmLeft">
            {LINKBTM_LIST.map(listbtm => {
              return (
                <Link className="borderBar" to={listbtm.to} key={listbtm.id}>
                  {listbtm.title}
                </Link>
              );
            })}
          </div>
          <div className="linkBoxBtmRight">
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
