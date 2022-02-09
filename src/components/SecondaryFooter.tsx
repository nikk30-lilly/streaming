import React from "react";
import "../../css/style3860.css";

const SecondaryFooter: React.FC = () => {
  return (
    <nav className="nav nav--pictograms">
      <ul className="nav__list">
        <li className="nav__item ">
          <a href="channels.html" className="block">
            <div className="icon icon--filmbox"></div>
            <h3 className="nav__item_name">TV channels</h3>
          </a>
        </li>
        <li className="nav__item ">
          <a href="online-distribution.html" className="block">
            <div className="icon icon--online_media"></div>
            <h3 className="nav__item_name">online distribution</h3>
          </a>
        </li>
        <li className="nav__item ">
          <a href="content-sales.html" className="block">
            <div className="icon icon--content_dist"></div>
            <h3 className="nav__item_name">content sales</h3>
          </a>
        </li>
        <li className="nav__item ">
          <a href="news.html" className="block">
            <div className="icon icon--news"></div>
            <h3 className="nav__item_name">news</h3>
          </a>
        </li>
        <li className="nav__item ">
          <a href="about.html" className="block">
            <div className="icon icon--about_us"></div>
            <h3 className="nav__item_name">about us</h3>
          </a>
        </li>
        <li className="nav__item ">
          <a href="contacts.html" className="block">
            <div className="icon icon--contact"></div>
            <h3 className="nav__item_name">contacts and offices</h3>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryFooter;
