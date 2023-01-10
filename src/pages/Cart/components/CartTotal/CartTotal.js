import React from 'react';
import './CartTotal.scss';

const CartTotal = ({ cartItems, checkedItems }) => {
  const totalPrice = cartItems.reduce((totalPrice, item) => {
    return checkedItems.includes(item.cartItemId)
      ? totalPrice + item.cartQuantity * parseInt(item.itemsPrice)
      : totalPrice;
  }, 0);
  const deliveryCharge = checkedItems.length ? 3000 : 0;

  const toStrPrice = price => price.toLocaleString();
  const orderHandler = () => {
    if (!checkedItems.length) alert('선택된 상품이 없습니다.');
    // TODO: 체크아이템 배열의 길이가 1 이상이면 구매(결제) API 호출
    else {
      console.log('결제 API 호출!!!');
    }
  };

  return (
    <div className="cartTotal">
      <div className="totalSummaryContainer">
        <div className="totalContainer">
          <div className="sumPriceWrap">
            <div className="title">합계</div>
            <div className="dataWrap">
              <span className="data">{toStrPrice(totalPrice)}</span>원
            </div>
          </div>
          <div className="discountWrap">
            <div className="title">할인금액</div>
            <div className="dataWrap">
              <span>-</span>
              <span className="data">0</span>원
            </div>
          </div>
          <div className="shippingWrap">
            <div className="title">배송비</div>
            <div className="dataWrap">
              <span className="data">{toStrPrice(deliveryCharge)}</span>원
            </div>
          </div>
        </div>
        <div className="paymentDueAmount">
          <div className="title">결제예정금액</div>
          <div className="dataWrap">
            <span className="data">
              {toStrPrice(totalPrice + deliveryCharge)}
            </span>
            원
          </div>
        </div>
      </div>
      <div className="buyButtonWrap">
        {cartItems.length ? (
          <button className="buyButton" disabled={false} onClick={orderHandler}>
            구매하기
          </button>
        ) : (
          <button className="buyButton" disabled={true} onClick={orderHandler}>
            상품을 담아주세요
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotal;

// const CartTotal = ({ totalPrice, cartItems, checkedItems }) => {
//   const toStrPrice = price => price.toLocaleString();

//   const orderHandler = () => {
//     if (!checkedItems.size) alert('선택된 상품이 없습니다.');
//   };

//   return (
//     <div className="cartTotal">
//       <div className="totalSummaryContainer">
//         <div className="totalContainer">
//           <div className="sumPriceWrap">
//             <div className="title">합계</div>
//             <div className="dataWrap">
//               <span className="data">{toStrPrice(totalPrice)}</span>원
//             </div>
//           </div>
//           <div className="discountWrap">
//             <div className="title">할인금액</div>
//             <div className="dataWrap">
//               <span>-</span>
//               <span className="data">0</span>원
//             </div>
//           </div>
//           <div className="shippingWrap">
//             <div className="title">배송비</div>
//             <div className="dataWrap">
//               <span className="data">3,000</span>원
//             </div>
//           </div>
//         </div>
//         <div className="paymentDueAmount">
//           <div className="title">결제예정금액</div>
//           <div className="dataWrap">
//             <span className="data">{toStrPrice(totalPrice + 3000)}</span>원
//           </div>
//         </div>
//       </div>
//       <div className="buyButtonWrap">
//         {cartItems.length ? (
//           <button className="buyButton" disabled={false} onClick={orderHandler}>
//             구매하기
//           </button>
//         ) : (
//           <button className="buyButton" disabled={true}>
//             상품을 담아주세요
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };
