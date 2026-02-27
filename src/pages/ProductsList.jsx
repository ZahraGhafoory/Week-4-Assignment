import { Link } from "react-router-dom";
import products from "../Data/products";

function ProductsList() {
  return (
    <div>
      {products.map((product) => (
        <div  className="productcard"
            key={product.id}
        >
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>

          <Link className="boton" to={`/products/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;