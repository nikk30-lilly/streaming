import React from "react";
import "../../css/style3860.css";
import contactImage from "../../assets/img/slides/spi.jpg";
export const Contact: React.FC = () => {
  return (
    <main className="main" role="main">
      <article className="countries">
        <header className="countries__header">
          <picture>
            <source
              srcSet="../site/img/slides/spi_land.jpg"
              media="(max-width: 1024px) and (orientation: landscape)"
              className="slider__slide_img img_fit img_fit--width"
            />
            <source
              srcSet="../site/img/slides/spi_portrait.jpg"
              media="(max-width: 1024px) and (orientation: portrait)"
              className="slider__slide_img img_fit img_fit--width"
            />
            <img srcSet={contactImage} className="img_fit img_fit--width" />
          </picture>
        </header>
        <div className="countries__body">
          <h1 className="countries__title">Contacts and offices</h1>
          <section className="sec sec--regions" id="regions">
            <article className="region mix">
              <h3 className="region__name">africa</h3>
              <p>
                Georgina Twiss
                <br />
                <a href="mailto:georgina.twiss@spiintl.com">
                  georgina.twiss@spiintl.com
                </a>
                <br /> +39 334 689 12 47
              </p>
            </article>
            <article className="region mix">
              <h3 className="region__name">asia</h3>
              <p>
                Murat Muratoglu
                <br />
                <a href="mailto:murat.muratoglu@spiintl.com">
                  murat.muratoglu@spiintl.com
                </a>
                <br /> +90 532 314 1457
              </p>
            </article>
            <article className="region mix">
              <h3 className="region__name">middle east</h3>
              <p>
                Murat Muratoglu
                <br />
                <a href="mailto:murat.muratoglu@spiintl.com">
                  murat.muratoglu@spiintl.com
                </a>
                <br /> +90 532 314 1457
              </p>
            </article>
            <article className="region mix">
              <h3 className="region__name">WESTERN EUROPE</h3>
              <p>
                Georgina Twiss
                <br />
                <a href="mailto:georgina.twiss@spiintl.com">
                  georgina.twiss@spiintl.com
                </a>
                <br /> +39 334 689 12 47
              </p>
            </article>
            <article className="region mix">
              <h3 className="region__name">LATIN AMERICA AND CARIBBEAN</h3>
              <p>
                Pablo Zehle
                <br />
                <a href="mailto:pablo.zehle@spiintl.com">
                  pablo.zehle@spiintl.com
                </a>
                <br /> +52 1 55 4345 8494
              </p>
            </article>
            <article className="region mix">
              <h3 className="region__name">Ex YUGO countries AND ALBANIA</h3>
              <p style={{ paddingTop: "8px" }}>
                Murat Muratoglu
                <br />
                <a href="mailto:murat.muratoglu@spiintl.com">
                  murat.muratoglu@spiintl.com
                </a>
                <br /> +90 532 314 1457
              </p>
            </article>
            <article className="region mix">
              <h3 className="region__name">SCANDINAVIA</h3>
              <p>
                Filipe Barbosa
                <br />
                <a href="mailto:filipe.barbosa@spiintl.com">
                  filipe.barbosa@spiintl.com
                </a>
                <br /> +351 935 431 011
              </p>
            </article>
          </section>
        </div>
      </article>
    </main>
  );
};
