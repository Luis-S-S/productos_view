import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/product';

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
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
