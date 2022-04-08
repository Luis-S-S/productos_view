/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductCard({ product: { id, title, price } }) {
  return (
    <div>
      <Link to={`/detalle/${id}`}>{id}: {title}</Link>
      <p>{price}</p>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
