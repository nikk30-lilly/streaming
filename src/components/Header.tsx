import React, { useEffect } from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="index.html" className="logo logo--spi" title="SPI International">
        <img src="img/logo.png" alt="Flock logo" />
      </a>
      <div id="menu_btn" className="btn btn--menu">
        <div className="strips_bar"></div>
      </div>
      <div id="menu" className="menu">
        <ul className="nav nav--main">
          <li className="nav__item">
            <a href="news.html" className="block">
              news
            </a>
          </li>
          <li className="nav__item">
            <a href="blog.html" className="block">
              blog
            </a>
          </li>
          <li className="nav__item">
            <a href="careers.html" className="block">
              Careers
            </a>
          </li>
          <li className="nav__item">
            <a href="about.html" className="block">
              about us
            </a>
          </li>
          <li className="nav__item">
            <a href="contacts.html" className="block">
              contacts and offices
            </a>
          </li>
          <li className="nav__item is_last">
            <a href="#" className="block">
              Partners Portal
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
