import { Link } from "react-router-dom";
import "./styles/navbar.css";

function Navbar() {
  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <strong className="h4 mb-0 font-weight-bold text-uppercase">
              Villa Inc.
            </strong>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/catalog" className="nav-link">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create Villa
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
