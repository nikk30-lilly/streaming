import React, { useEffect } from "react";
import "../../css/style3860.css";
import fbImage from "../../assets/img/fb.png";
import twImage from "../../assets/img/tw.png";
import inImage from "../../assets/img/in.png";
import fpImage from "../../assets/img/fp_1.png";
import wpImage from "../../assets/img/wp.png";
import ytImage from "../../assets/img/yt.png";
import gp_ic1 from "../../assets/img/gp_ic1.png";
import apple_ic1 from "../../assets/img/apple_ic1.png";

const Footer: React.FC = () => {
  return (
    <div className="footer_wrapper">
      <footer className="footer cf">
        <div className="footer__adr footer__box cf">
          <h4 className="footer__box_title">
            <span>Flock Entertainment Private Limited</span>
          </h4>
          <ul className="footer__links ext_links">
            <li className="footer__links_item">
              <a href="privacy-policy.html" className="block">
                Privacy Policy
              </a>
            </li>
            <li className="footer__links_item">
              <a href="terms-of-use.html" className="block">
                Terms of Use
              </a>
            </li>
            <li className="footer__links_item">
              <a href="faq.html" className="block">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__box cf">
          <h4 className="footer__box_title">
            <span>Corporate information</span>
          </h4>
          <ul className="footer__links site_link">
            <li className="footer__links_item">
              <a href="#" className="block">
                Mumbai
              </a>
            </li>
            <li className="footer__links_item">
              <a href="#" className="block">
                Chennai
              </a>
            </li>
            <li className="footer__links_item">
              <a href="#" className="block">
                J&K
              </a>
            </li>
          </ul>
          <ul className="footer__links site_link">
            <li className="footer__links_item">
              <a href="#" className="block">
                Chandigarh
              </a>
            </li>
            <li className="footer__links_item ">
              <a href="#" className="block">
                Delhi
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer__social">
          <li
            className="footer__social_item"
            style={{ width: "43px", height: "43px" }}
          >
            <a
              href="https://www.facebook.com/FLOCK-Our-Prime-Focus-is-You-108510881507848/?ref=pages_you_manage"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fbImage} alt="" />
            </a>
          </li>
          <li
            className="footer__social_item"
            style={{ width: "43px", height: "43px" }}
          >
            <a
              href="https://twitter.com/FlockLtd"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twImage} alt="" />
            </a>
          </li>
          <li
            className="footer__social_item"
            style={{ width: "43px", height: "43px" }}
          >
            <a
              href="https://www.linkedin.com/company/flock-entertainment/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={inImage} alt="" />
            </a>
          </li>
          <li
            className="footer__social_item"
            style={{ width: "43px", height: "43px" }}
          >
            <a
              href="https://www.instagram.com/flock_ent/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fpImage} alt="" />
            </a>
          </li>
          <li
            className="footer__social_item"
            style={{ width: "43px", height: "43px" }}
          >
            <a
              href="https://wa.me/918591456181"
              target="_blank"
              rel="noreferrer"
            >
              <img src={wpImage} alt="" />
            </a>
          </li>
          <li
            className="footer__social_item"
            style={{ width: "43px", height: "43px" }}
          >
            <a
              href="https://www.youtube.com/channel/UCqdS8LngfmPz6QTP8B5wIjQ"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ytImage} alt="" />
            </a>
          </li>
        </ul>
        <a href="#" className="btn btn--back_top" id="go_top">
          back to top
        </a>
      </footer>
      <footer>
        <div className="footer footer_download_wrap">
          <h4 style={{ color: "white" }}>
            Download the Flock app for the best watching experience:
          </h4>
          <ul className="footer_download">
            <li className="footer__social_item">
              <a
                href="https://play.google.com/store/apps/details?id=flock.media.entertaintment"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gp_ic1} alt="" />
              </a>
            </li>
            <li className="footer__social_item">
              <a href="" target="_blank">
                <img src={apple_ic1} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
