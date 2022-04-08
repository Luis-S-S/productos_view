import { useState, useEffect, useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { GlobalContext } from '../../store';
import { setAllProducts } from '../../store/actions';
import { fetchAllProducts } from '../../services/products';
import './Home.css';
import Header from '../../components/Header/Header';

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
    <>
      <Header />
      <div className="product-card-container">
        {loading ? <div>Loading...</div> : state.allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;
