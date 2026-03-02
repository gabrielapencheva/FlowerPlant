import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <div className="brand">
          <span className="brandDot" />
          <div>
            <div className="brandName">FlowerPlant</div>
            <div className="brandTag">Plant care guides & your personal collection</div>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
            Home
          </NavLink>
          <NavLink
            to="/my-plants"
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
          >
            My Plants
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}