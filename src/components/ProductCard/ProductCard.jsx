/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../App.css';
import './ProductCard.css';

function ProductCard({ product }) {
  const randomMinutes = () => {
    let minute = Math.floor(Math.random() * 4) * 60;
    if (minute === 0) {
      minute = 60;
      return minute;
    }
    if (minute === (4 * 60)) {
      minute = 3 * 60;
      return minute;
    }
    return minute;
  };

  const [time, setTime] = useState(randomMinutes());

  const text = () => {
    let minutes = Math.floor(time / 60);
    if (minutes < 10) { minutes = `0${minutes}`; }
    let seconds = time % 60;
    if (seconds < 10) { seconds = `0${seconds}`; }
    return `00:${minutes}:${seconds}`;
  };

  const timer = () => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  };

  timer();

  const {
    id, title, image,
  } = product;

  return (
    <div className="pro-card">
      <div className="card-container">
        <Link className={`${time === 0 ? 'disabled' : ''} card-container__title--link`} to={`/detalle/${id}`} target="_blank">
          <img className="card-container__img" src={image} alt={title} />
          <h3 className="card-container__title">{title}</h3>
        </Link>
        <div className="card-container__body">
          <p className="card-container__text">{text()}</p>
          <Link className={`${time === 0 ? 'disabled' : ''} card-container__text--link`} to={`/detalle/${id}`} target="_blank">Ver detalle</Link>
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
