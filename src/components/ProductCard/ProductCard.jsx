/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../App.css';
import './ProductCard.css';

function ProductCard({ product }) {
  const {
    id, title, image,
  } = product;

  return (
    <div className="pro-card">
      <div className="card-container">
        <Link className="card-container__title--link" to={`/detalle/${id}`}>
          <img className="card-container__img" src={image} alt={title} />
          <h3 className="card-container__title">{title}</h3>
        </Link>
        <div className="card-container__body">
          <p className="card-container__text">Time goes here</p>
          <Link className="card-container__text--link" to={`/detalle/${id}`}>Ver detalle</Link>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
