import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px" }}>
      <ul style={{ 
        display: "flex", 
        justifyContent: "center", 
        listStyle: "none", 
        padding: 0 
      }}>
        <li style={{ margin: "0 15px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;