
import { Link } from "react-router-dom";

import logo from "/images/logo.jpg"; //

export default function Navbar() {
  return (
    <nav className="navbar">
      
      {/* ✅ LOGO + NAME CONTAINER */}
      <div className="logo-box">
        <img src={logo} alt="Shree Sai Sanstha Logo" className="logo-img" />
        <h2 className="logo-text">Shree Sai Sanstha</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      
    </nav>
  );
}
