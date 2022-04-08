import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/product';
import ProductCard from '../components/ProductCard';
import { useGlobalContext } from '../store';
import { loadingFalse } from '../store/actions';

function Home() {
  const { state, dispatch } = useGlobalContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        dispatch(loadingFalse());
        setProducts(res);
      })
      .catch((err) => { throw err; });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {state.loading ? <div>Loading...</div> : products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
