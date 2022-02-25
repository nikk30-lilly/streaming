import React from "react";
import "../../css/style3860.css";
import aboutUs from "../../assets/img/slides/ABOUT_US_new.png";
import img11 from "../../assets/img/11.png";
import img22 from "../../assets/img/22.png";
import img33 from "../../assets/img/33.png";
import drvk from "../../assets/img/drvk.jpg";
import vijayendra from "../../assets/img/vijayendra.png";
import preeti from "../../assets/img/preeti.jpg";
import irfan_marazi from "../../assets/img/irfan_marazi.png";
export const About: React.FC = () => {
  return (
    <main className="main" role="main">
      <article className="about_us">
        <header className="about_us__header">
          <picture>
            <img
              alt="About FLock"
              srcSet={aboutUs}
              className="img_fit img_fit--width"
            />
          </picture>
        </header>
        <div className="about_us__body">
          <h1 className="about_us__title">About Us</h1>
          <p>
            Founded in October 2020, we are a next-gen media company dedicated
            to creating content that will inspire the future of streaming and
            film-making. Over the last decade, and especially since 2020 hit the
            world, the way we consume content has changed significantly. Nearly
            every form of communication has moved online be it entertainment,
            education or even advertising.{" "}
          </p>
          <p>
            Streaming, OTT and other visual platforms have become every
            individual’s go-to mediums to stay entertained and informed. To meet
            these growing expectations from the post-pandemic consumer,
            management guru Dr. V Krishnamurthy and television star Vijayendra
            Kumeria came together to create a company to take visual
            story-telling to the next era.
          </p>
          <h2>Our Focus:</h2>
          <p>
            <strong>NEXT-GEN OTT PLATFORM</strong> - Dedicated to creating
            content that will inspire the future of streaming platforms and
            film-making. Entertainment handpicked for Indian youth.
          </p>
          <p>
            <strong>ENTERTAINMENT WAREHOUSE</strong> - Curate content that
            offers a wide range of genres, languages and formats for our
            viewers.
          </p>
          <p>
            <strong>ONE OF ITS KIND</strong> - An avenue for viewers to explore
            global and multicultural entertainment. Specially curated
            non-mainstream, off-beat content.
          </p>
        </div>
      </article>
      <section
        className="sec sec--loga"
        style={{ float: "left", width: "100%" }}
      >
        <h1 style={{ alignItems: "center" }}>What We Do</h1>
        <div
          className="row text-center minor_min"
          style={{
            width: "100%",
            float: "left",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <div className="col-md-4" style={{ width: "33%", float: "left" }}>
            <a href="javascript:;" id="FLOCKOTT">
              <div className="card" style={{}}>
                <div className="card-body">
                  <div className="sub-row pb-4">
                    <img src={img11} alt="" style={{ width: "30%" }} />
                  </div>
                  <strong>FLOCK OTT PLATFORM</strong>
                  <p className="card-text">
                    Come experience the magic of world class cinema.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4" style={{ width: "33%", float: "left" }}>
            <a href="content-sales.html">
              <div className="card" style={{}}>
                <div className="card-body">
                  <div className="sub-row pb-4">
                    <img src={img22} alt="" style={{ width: "30%" }} />
                  </div>
                  <strong>Content Sales</strong>
                  <p className="card-text">
                    We deliver the best of content across the world
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4" style={{ width: "33%", float: "left" }}>
            <a href="javascript:;" id="OTTSol">
              <div className="card" style={{}}>
                <div className="card-body">
                  <div className="sub-row pb-4">
                    <img src={img33} alt="" style={{ width: "30%" }} />
                  </div>
                  <strong>Production & OTT Solutions</strong>
                  <p className="card-text">
                    Our team of creative directors and content experts create
                    magic on-screen through their camera expertise. Also, we can
                    help you set up OTT solutions.{" "}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section
        className="sec sec--channels"
        style={{ float: "left", width: "100%" }}
      >
        <header className="sec__header cf">
          <h1 style={{ textAlign: "center" }}>The Team</h1>
          <h3 style={{ textAlign: "center" }} className="news__title">
            From management to marketing and television, our team is quirky mix
            of it all:
          </h3>
        </header>
        <ul className="channels cf">
          <li className="channels__item">
            <a href="javascript:;" className="block" id="drvk">
              <div className="img_wrapper img_wrapper--channels">
                <img src={drvk} className="img_fit img_fit--width" />
                <div className="shadow shadow--channels"></div>
              </div>
            </a>
          </li>
          <li className="channels__item">
            <a href="javascript:;" className="block" id="vk">
              <div className="img_wrapper img_wrapper--channels">
                <img src={vijayendra} className="img_fit img_fit--width" />
                <div className="shadow shadow--channels"></div>
              </div>
            </a>
          </li>
          <li className="channels__item">
            <a href="javascript:;" className="block" id="pk">
              <div className="img_wrapper img_wrapper--channels">
                <img src={preeti} className="img_fit img_fit--width" />
                <div className="shadow shadow--channels"></div>
              </div>
            </a>
          </li>
          <li className="channels__item">
            <a href="javascript:;" className="block" id="Im">
              <div className="img_wrapper img_wrapper--channels">
                <img src={irfan_marazi} className="img_fit img_fit--width" />
                <div className="shadow shadow--channels"></div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};
