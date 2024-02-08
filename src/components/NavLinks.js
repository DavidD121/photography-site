import { useState } from "react";
import { NavLink } from "react-router-dom";
import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/city" onClick={() => setIsMenuOpen(false)}>
          City
        </NavLink>
        <NavLink to="/events" onClick={() => setIsMenuOpen(false)}>
          Events
        </NavLink>
        <NavLink to="/nature" onClick={() => setIsMenuOpen(false)}>
          Nature
        </NavLink>
        <NavLink to="/sports" onClick={() => setIsMenuOpen(false)}>
          Sports
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default NavLinks;
