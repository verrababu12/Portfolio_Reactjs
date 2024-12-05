import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1>
        <span className="name">V</span>eeru.
      </h1>
      <div className={`desktopMenu ${isMenuOpen ? "active" : ""}`}>
        <Link
          className="desktopMenuListItem"
          to="intro"
          smooth={true}
          duration={500}
          onClick={handleMenuToggle}
        >
          Home
        </Link>
        <Link
          className="desktopMenuListItem"
          to="about"
          smooth={true}
          duration={500}
          onClick={handleMenuToggle}
        >
          About
        </Link>
        <Link
          className="desktopMenuListItem"
          to="services"
          smooth={true}
          duration={500}
          onClick={handleMenuToggle}
        >
          Services
        </Link>
        <Link
          className="desktopMenuListItem"
          to="portfolio"
          smooth={true}
          duration={500}
          onClick={handleMenuToggle}
        >
          Portfolio
        </Link>
        <Link
          className="desktopMenuListItem"
          to="contact"
          smooth={true}
          duration={500}
          onClick={handleMenuToggle}
        >
          Contact
        </Link>
      </div>

      {/* Menu icon for small screens */}
      <div className="menu-icon" onClick={handleMenuToggle}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
