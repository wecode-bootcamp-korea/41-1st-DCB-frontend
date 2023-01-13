import React, { useEffect, useState } from 'react';
import Delivery from './Delivery';
import Exchange from './Exchange';
import { FiPlus } from 'react-icons/fi'; // 별 이미지입니다!
import './ProductDescription.scss';
import { API } from '../../../config';
import { useParams } from 'react-router-dom';

const ProductDescription = () => {
  const [productDetails, setproductDeatils] = useState([{}]);

  const [infoValues, setInfoValues] = useState({
    isDeliveryOpen: false,
    isExchangeOpen: false,
  });
  const handleInfoContent = e => {
    setInfoValues(prev => ({
      ...prev,
      [e.target.title]: !prev[e.target.title],
    }));
  };

  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    fetch(`${API.items}/${productId}`)
      .then(result => result.json())
      .then(data => {
        setproductDeatils(data.data[0]);
      });
  }, []);

  return (
    <div className="productDescription">
      <div className="Description">
        <img className="img" src={productDetails.thumbnail} alt="대표사진" />
      </div>

      <div className="longDescription">{productDetails.descriptions}</div>
      {INFO_LIST.map(info => {
        return (
          <div className="shippingInformation" key={info.id}>
            <div
              className="shippingInformationTextBtn"
              title={info.name}
              onClick={handleInfoContent}
            >
              <div className="shippingInformationText"> {info.title} </div>

              <FiPlus className="plusTogle" />
            </div>
            {infoValues[info.name] && (
              <div className="deliveryInfo">{info.component}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ProductDescription;

const INFO_LIST = [
  {
    id: 1,
    title: '배송 정보',
    name: 'isDeliveryOpen',
    component: <Delivery className="deliver" />,
  },
  {
    id: 2,
    title: '교환 및 반품',
    name: 'isExchangeOpen',
    component: <Exchange className="exchanger" />,
  },
];
