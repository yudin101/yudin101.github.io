import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li><Link className="nav-links" to="/">Home</Link></li>
          <li><Link className="nav-links" to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </>
  );
}
