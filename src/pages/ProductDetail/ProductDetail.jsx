/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../services/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import { GlobalContext } from '../../store';
import { setOneProduct } from '../../store/actions';
import Header from '../../components/Header/Header';

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
    <>
      <Header />
      {loading ? <div>Loading...</div> : <ProductCard product={state.oneProduct} />}
    </>
  );
}

export default ProductDetail;
