/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneProduct } from '../services/product';
import ProductCard from '../components/ProductCard';

function ProductDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => { throw err; });
  }, []);

  return (
    <div>
      <h1>Product Detail</h1>
      <ProductCard key={product.id} product={product} />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ProductDetail;
