import React from 'react';
import { useEffect, useState } from 'react';
import Delivery from './Delivery';
import Exchange from './Exchange';
import { FiPlus } from 'react-icons/fi';
import './ProductDescription.scss';

const ProductDescription = () => {
  const [productDetails, setproductDeatils] = useState([{}]);
  const [switchBtn, setswitchBtn] = useState(false);
  const [switchBtn2, setswitchBtn2] = useState(false);

  const turn = e => {
    return setswitchBtn(!switchBtn);
  };
  const turn2 = e => {
    return setswitchBtn2(!switchBtn2);
  };
  useEffect(() => {
    fetch('http://152.67.208.118:3000/items/7')
      .then(result => result.json())
      .then(data => {
        setproductDeatils(data.data);
      });
  }, []);

  return (
    <div className="productDescription">
      <div className="Description">
        <img className="img" src={productDetails.thumbnail} alt="대표사진" />
      </div>

      <div className="longDescription">{productDetails.descriptions}</div>
      <div className="shippingInformation">
        <div
          className="shippingInformationTextBtn"
          onClick={turn}
          value={switchBtn}
        >
          <div className="shippingInformationText"> 배송 정보 </div>

          <FiPlus className="plusTogle" />
        </div>
        <div className="deliveryInfo">
          {switchBtn ? (
            <Delivery className={switchBtn ? 'deliver' : 'deliveroff'} />
          ) : null}
        </div>
      </div>
      <div className="exchangeReturn">
        <div
          className="exchangeReturnTextBtn"
          onClick={turn2}
          value={switchBtn2}
        >
          <div className="exchangeReturnText">교환 및 반품정보</div>
          <FiPlus className="plusTogle" />
        </div>
        <div className="exchangeInfo">
          {switchBtn2 ? <Exchange className="Exchanger" /> : null}
        </div>
      </div>
    </div>
  );
};
export default ProductDescription;
