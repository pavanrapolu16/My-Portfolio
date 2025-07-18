// import React, { useState } from 'react';
// import Logo from "../assets/images/logo.png"
// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <nav>
//       <img src={Logo} alt="Logo" className="logo" />
//       <ul id="sidemenu" className={menuOpen ? 'show-menu' : ''}>
//         <li><a href="#header" onClick={closeMenu}>Home</a></li>
//         <li><a href="#about" onClick={closeMenu}>About</a></li>
//         <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
//         <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
//         <i className="fas fa-times" onClick={toggleMenu}></i>
//       </ul>
//       <i className="fas fa-bars" onClick={toggleMenu}></i>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <img src={Logo} alt="Logo" className="logo" />
      <ul id="sidemenu" className={menuOpen ? "show-menu" : ""}>
        <li>
          <Link to="header" smooth={true} duration={1000} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1000} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={1000} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000} onClick={closeMenu}>
            Contact
          </Link>
        </li>
        {menuOpen && <i className="fas fa-times close-icon" onClick={toggleMenu}></i>}
      </ul>
      {!menuOpen && <i className="fas fa-bars menu-icon" onClick={toggleMenu}></i>}
    </nav>
  );
};

export default Navbar;
