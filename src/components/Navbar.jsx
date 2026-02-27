import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = ({ isActive }) => ({
    marginRight: "15px",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "blue" : "black"
  });

  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink to="/" style={activeStyle}>
        Home
      </NavLink>

      <NavLink to="/products" style={activeStyle}>
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;