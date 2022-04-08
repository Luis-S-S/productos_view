/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import handlerOnClick from '../services/handlers';

function ProductCard({ product }) {
  const {
    id, title, price, image,
  } = product;

  return (
    <div>
      <Link to={`/detalle/${id}`} onClick={handlerOnClick}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <p>{price}</p>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
