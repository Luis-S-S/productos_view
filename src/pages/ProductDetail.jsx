/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchOneProduct } from '../services/products';
import ProductCard from '../components/ProductCard';
import { GlobalContext } from '../store';
import { setOneProduct } from '../store/actions';

function ProductDetail() {
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    fetchOneProduct(id)
      .then((product) => {
        setLoading(false);
        dispatch(setOneProduct(product));
      })
      .catch((err) => { throw err; });
  }, []);

  return (
    <div>
      <h1>Product Detail</h1>
      {loading ? <div>Loading...</div> : <ProductCard product={state.oneProduct} />}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ProductDetail;
