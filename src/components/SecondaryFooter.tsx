import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/style3860.css";

const SecondaryFooter: React.FC = () => {
  return (
    <nav className="nav nav--pictograms">
      <ul className="nav__list">
        <li className="nav__item ">
          <NavLink to="/" className="block">
            <div className="icon icon--filmbox"></div>
            <h3 className="nav__item_name">Home</h3>
          </NavLink>
        </li>
        <li className="nav__item ">
          <NavLink to="/about" className="block">
            <div className="icon icon--about_us"></div>
            <h3 className="nav__item_name">About Us</h3>
          </NavLink>
        </li>
        <li className="nav__item ">
          <NavLink to="/film-festival" className="block">
            <div className="icon icon--online_media"></div>
            <h3 className="nav__item_name">Film Festival</h3>
          </NavLink>
        </li>
        <li className="nav__item ">
          <a href="/press-kit" className="block">
            <div className="icon icon--content_dist"></div>
            <h3 className="nav__item_name">Press Kit</h3>
          </a>
        </li>
        <li className="nav__item ">
          <NavLink to="/contact-us" className="block">
            <div className="icon icon--contact"></div>
            <h3 className="nav__item_name">Contact Us</h3>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryFooter;
