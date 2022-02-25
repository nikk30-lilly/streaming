import React from "react";
import "../../css/style3860.css";
import con_1 from "../../assets/img/slides/con_1.png";
export const Contact: React.FC = () => {
  return (
    <main className="main" role="main">
      <article className="countries">
        <header className="countries__header">
          <picture>
            <img srcSet={con_1} className="img_fit img_fit--width" />
          </picture>
        </header>
        <div className="countries__body">
          <h1 className="countries__title">Contact and offices</h1>
          <section className="sec sec--regions" id="">
            <article className="region mix">
              <h3 className="region__name">Mumbai</h3>
              <p>
                306/307, Banarsi Heritage Ram Nagar, Nr. Inorbit Mall, New Link
                Rd, Malad, W, Mumbai, 400064
                <br />
                <a href="mailto:info@flockstudio.in">info@flockstudio.in</a>
                <br /> 022 4962 6895
              </p>
            </article>
            <article className="region mix">
              <h3 className="region__name">Chennai</h3>
              <p>
                Raheja Towers Delta A – Wing, Unit No 705, 177 Anna Salai,
                Chennai – 600002, Tamil Nadu
                <br />
                <a href="mailto:info@flockstudio.in">info@flockstudio.in</a>
                <br />
              </p>
            </article>
            <article className="region mix">
              <h3 className="region__name">J&K</h3>
              <p>
                453, Rose enclave, Shivpora
                <br /> Srinagar, J&k
                <br />
                <a href="mailto:info@flockstudio.in">info@flockstudio.in</a>
                <br />
              </p>
            </article>
            <article className="region mix">
              <h3 className="region__name">Chandigarh</h3>
              <p>
                195,2nd Floor, MDC Sector 6, Panchkula, Haryana - 134114
                <br />
                <a href="mailto:info@flockstudio.in">info@flockstudio.in</a>
                <br />{" "}
              </p>
            </article>
            <article className="region mix">
              <h3 className="region__name">Delhi</h3>
              <p>
                Pocket 9A, Jasola vihar
                <br /> new delhi, 110025
                <br />
                <a href="mailto:info@flockstudio.in">info@flockstudio.in</a>
                <br />{" "}
              </p>
            </article>
          </section>
        </div>
      </article>
    </main>
  );
};
