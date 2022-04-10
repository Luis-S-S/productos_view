import PropTypes from 'prop-types';
import '../../App.css';
import './ProductDetailCard.css';

function ProductDetailCard({ product }) {
  const {
    title, image, description, category, price, rating,
  } = product;

  return (
    <div className="pro-detail">
      <img src={image} alt={image} className="pro-detail__img" />
      <div className="detail__container">
        <h3 className="pro-detail__title">{title}</h3>
        <p className="pro-detail__text">
          Category:
          {' '}
          {category}
        </p>
        <p className="pro-detail__text">{description}</p>
        <div className="detail__inner-container">
          <div className="inner-container__item">
            <img className="pro-detail__icon" src="/icons/cash-icon-colored.svg" alt="Price" />
            <p className="pro-detail__text">
              {price}
              {' '}
              USD
            </p>
          </div>
          <div className="inner-container__item">
            <img className="pro-detail__icon" src="/icons/star-badge-icon-colored.svg" alt="" />
            <p className="pro-detail__text">{rating?.rate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetailCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetailCard;
