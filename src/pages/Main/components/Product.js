import './product.scss';

export const Product = ({ name, src, price }) => {
  return (
    <article className="product">
      <div
        className="productImage"
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="cartImage" />
      </div>
      <p className="productName">{name}</p>
      <p className="productPrice">{price}</p>
    </article>
  );
};
