import { useState, useEffect, useContext } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { GlobalContext } from '../store';
import { setAllProducts } from '../store/actions';
import { fetchAllProducts } from '../services/products';

function Home() {
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetchAllProducts()
      .then((products) => {
        setLoading(false);
        dispatch(setAllProducts(products));
      })
      .catch((err) => { throw err; });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {loading ? <div>Loading...</div> : state.allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
