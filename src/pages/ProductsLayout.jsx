import { Outlet } from "react-router-dom";

function ProductsLayout() {
  return (
    <div>
      <h1>Products</h1>
      <p>Check the availible products below.</p>

      <Outlet />
    </div>
  );
}

export default ProductsLayout;