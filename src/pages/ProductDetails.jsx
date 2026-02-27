import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../Data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>

      <button onClick={() => navigate(-1)}>
        Back to Products
      </button>
    </div>
  );
}

export default ProductDetails;