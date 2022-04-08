import PropTypes from 'prop-types';
import './ProductDetailCard.css';

function ProductDetailCard({ product }) {
  const { title, image, description, category, price, rating } = product;
  // Unable to access rating.rate

  return (
    <div className="pro-detail">
      <img src={image} alt={image} className="pro-detail__img" />
      <h3 className="pro-detail__title">{title}</h3>
      <p className="pro-detail__text">{description}</p>
      <p className="pro-detail__text">{category}</p>
      <p className="pro-detail__text">{price}</p>
    </div>

  );
}

// PropValidation

export default ProductDetailCard;
