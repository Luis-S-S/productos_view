/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneProduct } from '../services/product';
import ProductCard from '../components/ProductCard';
import { useGlobalContext } from '../store';
import { loadingFalse } from '../store/actions';
import handlerOnClick from '../services/handlers';

function ProductDetail() {
  const { state, dispatch } = useGlobalContext();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id)
      .then((res) => {
        dispatch(loadingFalse());
        setProduct(res);
      })
      .catch((err) => { throw err; });
  }, []);

  return (
    <div>
      <h1>Product Detail</h1>
      {state.loading ? <div>Loading...</div> : <ProductCard product={product} />}
      <Link to="/" onClick={handlerOnClick}>Back to Home</Link>
    </div>
  );
}

export default ProductDetail;
