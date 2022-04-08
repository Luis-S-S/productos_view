import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/product';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => { throw err; });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
