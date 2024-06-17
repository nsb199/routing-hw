
import logo from "../../src/assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="icons">
          <img src={logo} alt="Logo" />
          <h4>NitroGers</h4>
        </div>
        <div className="menu">
          <ul>
            <Link to="/" className="nav-link"><li>Home</li></Link>
            <Link to="/quote" className="nav-link"><li>Quote</li></Link>
            <Link to="/restaurant" className="nav-link"><li>Restaurant</li></Link>
            <Link to="/food" className="nav-link"><li>Foods</li></Link>
            <Link to="/contact" className="nav-link"><li>Contact</li></Link>
          </ul>
        </div>
        <button className="btn">Get Started</button>
      </nav>
    </>
  );
}

export default Navbar;
