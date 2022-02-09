import React, { useEffect, useState } from "react";
import "../../css/style3860.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Header: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <header className="header">
      <a href="index.html" className="logo logo--spi" title="SPI International">
        <img src={logo} alt="Flock logo" />
      </a>
      <div id="menu_btn" className="btn btn--menu" onClick={() => toggleMenu()}>
        <div className="strips_bar"></div>
      </div>
      <div
        id="menu"
        className={show ? `menu menu-toggle-show` : `menu menu-toggle-hide`}
      >
        <ul className="nav nav--main" onClick={() => setShow(!show)}>
          <li className="nav__item">
            <NavLink to="/news" className="block">
              news
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/blog" className="block">
              blog
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/careers" className="block">
              Careers
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className="block">
              about us
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/contact" className="block">
              contacts and offices
            </NavLink>
          </li>
          <li className="nav__item is_last">
            <NavLink to="#" className="block">
              Partners Portal
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
