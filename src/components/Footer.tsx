import React, { useEffect } from "react";

const Header: React.FC = () => {
  return (
    <div className="footer_wrapper">
      <footer className="footer cf">
        <address className="footer__adr">
          <span className="copy">
            SPI International
            <br />
            &copy; 2021
          </span>
        </address>
        <div className="footer__box cf">
          <h4 className="footer__box_title">
            <span>local spi sites</span>
          </h4>
          <ul className="footer__links">
            <li className="footer__links_item">
              <a
                href="http://kinopolska.pl/relacjeinwestorskie/lang,en"
                className="block"
              >
                poland
              </a>
            </li>
            <li className="footer__links_item">
              <a href="http://filmbox.cz/" className="block">
                CZ/SK
              </a>
            </li>
            <li className="footer__links_item">
              <a href="http://filmbox.hu/" className="block">
                hungary
              </a>
            </li>
            <li className="footer__links_item">
              <a href="http://filmboxtv.ro/" className="block">
                romania
              </a>
            </li>
            <li className="footer__links_item">
              <a href="http://filmbox.rs/" className="block">
                Serbia
              </a>
            </li>
          </ul>
          <ul className="footer__links">
            <li className="footer__links_item">
              <a href="http://www.filmboxturkiye.com/" className="block">
                Turkey
              </a>
            </li>
            <li className="footer__links_item ">
              <a href="http://bg.filmbox.pl/" className="block">
                bulgaria
              </a>
            </li>
            <li className="footer__links_item">
              <a href="brasil.html" className="block">
                brazil
              </a>
            </li>
            <li className="footer__links_item">
              <a href="latin-america.html" className="block">
                Latin America
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer__social">
          <li className="footer__social_item">
            <a
              href="https://www.facebook.com/spiint/"
              target="_blank"
              className="icon icon--fb"
              rel="noreferrer"
            ></a>
          </li>
          <li className="footer__social_item">
            <a
              href="https://twitter.com/SPI_INT"
              target="_blank"
              className="icon icon--twitter"
              rel="noreferrer"
            ></a>
          </li>
          <li className="footer__social_item">
            <a
              href="https://www.linkedin.com/company/spi-international/"
              target="_blank"
              className="icon icon--linkedin"
              rel="noreferrer"
            ></a>
          </li>
          <li className="footer__social_item">
            <a
              href="https://www.instagram.com/spiinternational/"
              target="_blank"
              className="icon icon--instagram"
              rel="noreferrer"
            ></a>
          </li>
        </ul>
        <a href="#" className="btn btn--back_top" id="go_top">
          back to top
        </a>
      </footer>
    </div>
  );
};

export default Header;
