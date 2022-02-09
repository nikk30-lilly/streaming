import React from "react";
import "../../css/style3860.css";
import aboutUs from "../../assets/img/slides/about.jpg";
export const About: React.FC = () => {
  return (
    <main className="main" role="main">
      <article className="about_us">
        <header className="about_us__header">
          <picture>
            <source
              srcSet="../site/img/slides/about_land.jpg"
              media="(max-width: 1024px) and (orientation: landscape)"
              className="slider__slide_img img_fit img_fit--width"
            />
            <source
              srcSet="../site/img/slides/about_portrait.jpg"
              media="(max-width: 1024px) and (orientation: portrait)"
              className="slider__slide_img img_fit img_fit--width"
            />
            <img
              alt="About SPI"
              srcSet={aboutUs}
              className="img_fit img_fit--width"
            />
          </picture>
        </header>
        <div className="about_us__body">
          <h1 className="about_us__title">About Us</h1>
          <p className="about_us__lead">
            <strong>
              SPI International is a global media company operating 42 TV
              channels, multiple digital products across six continents, and a
              major player in content distribution and broadcasting worldwide.
            </strong>
          </p>
          <p>
            SPI was founded 28 years ago and has extensive experience in the TV
            and broadcasting industry. The company operates multiple free to air
            and pay TV channels in CEE, Western Europe, CIS and Ex-Yugo regions
            including key European markets such as Poland, Czechia, Romania,
            Serbia, the Netherlands and Russia. SPI is one of the premier movie
            service providers in the countries where it operates, with FilmBox
            being its flagship movie service. SPI Group owns a suite of legacy
            brands that have become household names such as FilmBox, Film1, Kino
            Polska, Stopklatka, Dizi along with different thematic channels and
            streaming services.
          </p>
          <p>
            SPI’s brands reach millions of households through operators, partner
            platforms and SPI’s own digital products globally. Working with over
            700 operators worldwide, SPI uses cutting edge technology providing
            its subscribers with access to SPI’s linear and on-demand content
            and FilmBox+ service that has over one million subscribers. The
            company recently launched a new digital service, Dizi, a
            state-of-the-art aggregator of the best Turkish series worldwide.
            SPI also owns and operates the brand assets of Film1 premium movie
            services in The Netherlands, including four linear channels and an
            on-demand service.
          </p>
          <p>
            For over 25 years, SPI International has been a leading supplier of
            theatrical films and television programming in the international
            markets. SPI’s solid alliances with major license suppliers provide
            compelling content, with strong recognition and high demand.
          </p>
          <h2>Our mission:</h2>
          <p>
            At SPI International, our goal is to cover the world with premium
            entertainment through innovative products and content solutions that
            shape future demands and cater to the ever-changing needs of the
            market. Designed with an agile mindset that embodies a focus on the
            consumer, SPI’s customizable portfolio of content solutions aims to
            make quality content accessible on all available screens at all
            times through stand-alone products, key alliances with major
            platforms and content aggregators.
          </p>
          <h2>Our vision:</h2>
          <p>
            We believe in a future where entertainment experiences converge and
            co-exist pushing viewers to look for more stimulating ways to
            discover quality content. In this future, SPI’s Home of Great
            Entertainment will complement the service offerings and
            entertainment bundles of key aggregators by providing additional
            windows of premium content curation to enrich user experience and
            optimize the discovery of quality programming.
          </p>
          <h2>SPI International brands and companies:</h2>
          <p>
            <strong>Filmbox International, Ltd</strong> - a U.K.-based
            broadcaster of FilmBox brand movie channels.
          </p>
          <p>
            <strong>Mediabox Broadcasting International, Ltd</strong> - a
            U.K.-based owner and broadcaster of worldwide thematic channels
            including FightBox HD, FashionBox HD, DocuBox HD, Funbox UHD, 360
            TuneBox, Fast’n’FunBox.
          </p>
          <p>
            <strong>Kino Polska TV S.A.</strong> - Kino Polska TV S.A. is a
            publicly-traded, modern, fast-developing media group which aspires
            to become the leading player in the Eastern and Central European
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            market. It broadcasts Kino Polska TV, Poland's leading movie channel
            and produces most of the Filmbox brand channels. Kino Polska TV S.A.
            is the owner of 100% of the shares in Stopklatka S.A. - broadcaster
            of the first widely available movie channel Stopklatka TV, and the
            owner of a film web portal Stopklatka.pl. Kino Polska TV S.A. is
            also the owner of CRF, a technology firm devoted to the digital
            remastering and reconstruction of movies.
          </p>
          <p>
            <strong>Stopklatka TV</strong> - media company co-owned by Kino
            Polska TV SA and one of the biggest Polish media groups, Agora S.A.
            The company produces the first DTT film channel in Poland,
            Stopklatka TV. Cult classics and recent blockbusters, arthouse fares
            and guilty pleasures, docs and cartoons – it’s all here! Stopklatka
            TV is available for free via DTT, as well as on cable and satellite
            platforms.
          </p>
          <p>
            <strong>Cyfrowe Repozytorium Filmowe</strong> - CRF digitally
            restores masterpieces of Polish cinema, to produce versions with
            perfect sound and picture quality. These versions are available to
            movie theatres, HD TV, Blu-ray discs and DVD. So far, CRF has
            restored over 70 classic Polish movies and 50 short films and
            cartoons.
          </p>
          <p>
            <strong>Cable Networks Television & Partners sp. z o.o.</strong> - a
            joint venture of Kino Polska TV as majority shareholder, and
            Fundacja Piksel, a foundation created by the trade association of
            Polish cable operators. CNTP produces the DTT lifestyle &
            infotainment channel Zoom TV. The channel brings local stories,
            advice and culinary shows, docusoaps, TV series, and movies.
          </p>
        </div>
      </article>
    </main>
  );
};
