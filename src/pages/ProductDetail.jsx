/* eslint-disable react/jsx-one-expression-per-line */
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>
        This route refers to ID: {id}
      </p>
    </div>
  );
}

export default ProductDetail;
