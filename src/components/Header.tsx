import React, { useEffect } from "react";
import "../../css/style3860.css";
import logo from "../../assets/img/logo.png";

const Header: React.FC = () => {
  useEffect(() => {
    // if (window && document) {
    //   $("#menu_btn").on("click", function (e) {
    //     const $btn = $(this);
    //     $btn.toggleClass("is_active");
    //
    //     if ($btn.hasClass("is_active")) {
    //       $("#menu").stop(true).fadeIn("fast");
    //     } else {
    //       $("#menu").stop(true).fadeOut("fast");
    //     }
    //   });
    // }
    //
    // $("#menu_part").on("click", function (e) {
    //   const $btn = $(this);
    //   $btn.toggleClass("is_active");
    //
    //   if ($btn.hasClass("is_active")) {
    //     $("#dropdown-menu").stop(true).fadeIn("fast");
    //   } else {
    //     $("#dropdown-menu").stop(true).fadeOut("fast");
    //   }
    // });
  }, []);
  return (
    <header className="header">
      <a href="index.html" className="logo logo--spi" title="SPI International">
        <img src={logo} alt="Flock logo" />
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
