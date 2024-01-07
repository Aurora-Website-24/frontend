
import React, { useState } from "react";
import hamburgerIcon from "../images/burger-menu-right-svgrepo-com.svg";
import cancelIcon from "../images/cancel-svgrepo-com.svg";
import cupIcon from "../images/cup.svg";
import logo from "../images/Mask group.svg"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const commonStyle = {
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: 500,
    lineHeight: "24px",
    wordWrap: "break-word",
  };

  const styles = {
    home: {
      color: "#338EF7",
      ...commonStyle,
    },
    about: {
      color: "white",
      ...commonStyle,
    },
    partners: {
      color: "white",
      ...commonStyle,
    },
    timeline: {
      color: "white",
      ...commonStyle,
    },
    sponsors: {
      color: "white",
      ...commonStyle,
    },
    hackathon: {
      color: "#006FEE",
      ...commonStyle,
    },
    workshop: {
      color: "#006FEE",
      ...commonStyle,
    },
  };

  return (
    <nav className={`flex-container p-4 ${isMenuOpen ? "nav-open" : ""}`}>
      {logo}
      <a href="#" className="col-2">
       
        {<img src={logo} alt="Aurora Logo" width="76px" height="93px" /> }
      </a>

      {/* Navigation Menu */}
      <ul
        className={`nav-menu ${isMenuOpen ? "active" : ""}`}
        style={{ display: "flex" }}
      >
        <li className="nav-item">
          <a href="#" style={styles.home}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" style={styles.about}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" style={styles.partners}>
            Partners
          </a>
        </li>
        <li className="nav-item">
          <a href="#" style={styles.timeline}>
            Timeline
          </a>
        </li>
        <li className="nav-item">
          <a href="#" style={styles.sponsors}>
            Sponsors
          </a>
        </li>
        <li className="nav-item">
          <a href="#" style={styles.hackathon}>
            Hackathon
          </a>
          <div
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            {cupIcon}
          </div>
        </li>
        <li className="nav-item">
          <a href="#" style={styles.workshop}>
            Workshop
          </a>
          <div
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            {cupIcon}
          </div>
        </li>
      </ul>

      {/* Navigation Buttons */}
      <div className={`nav-btns hidden md:flex ${isMenuOpen ? "hidden" : ""}`}>
        <a href="#" style={styles.hackathon}>
          Hackathon
        </a>
        <a href="#" style={styles.workshop} className="main-btns">
          Workshops
        </a>
      </div>

      {/* Hamburger */}
      <div className="md:hidden">
        {isMenuOpen ? (
          <span className="hamburger" onClick={closeMenu}>
            <img
              src={cancelIcon}
              alt="Cancel"
              className="w-8 h-8 cursor-pointer active"
            />
          </span>
        ) : (
          <span className="hamburger" onClick={toggleMenu}>
            <img
              src={hamburgerIcon}
              alt="Menu Toggle"
              className={`w-8 h-8 cursor-pointer ${isMenuOpen ? "active" : ""}`}
            />
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
