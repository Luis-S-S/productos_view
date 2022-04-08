/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../services/product';

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
      <p>This route refers to ID: {id}</p>
      <p>This ID has title: {product.title}</p>
      <p>This ID has price: {product.price}</p>
    </div>
  );
}

export default ProductDetail;
