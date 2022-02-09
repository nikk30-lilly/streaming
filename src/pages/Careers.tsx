import React from "react";
import "../../css/style3860.css";
import carrerImg from "../../assets/data/files/036c120a6cf636842bcb08f7986e8e0388e076154764c7a412d50616d6f74471.jpg";
export const Careers: React.FC = () => {
  return (
    <main className="main" role="main">
      <section className="sec sec--banner">
        <picture>
          <source
            srcSet="../site/data/files/1523922fc1b93eec480c21a7ac6cf03bf1a130b6c2f0d3719c8b839dd6c06a48.jpg"
            media="(max-width: 1024px) and (orientation: landscape)"
            className="slider__slide_img img_fit img_fit--width"
          />
          <source
            srcSet="../site/data/files/65f7aa1266fe793a3a86dc19849a1011a59c379232f8e34b2138eb05509f6427.jpg"
            media="(max-width: 1024px) and (orientation: portrait)"
            className="slider__slide_img img_fit img_fit--width"
          />
          <img srcSet={carrerImg} className="img_fit img_fit--width" />
        </picture>
      </section>
      <section className="sec sec--static">
        <article className="static cf">
          <div
            className="static__desc"
            style={{ width: "100%", paddingRight: 0 }}
          >
            <h1 className="static__title">Careers</h1>
            <p style={{ textAlign: "justify" }}>
              At SPI International, our goal is to cover the world with premium
              entertainment through innovative products and content solutions
              that shape future demands and cater to the ever-changing needs of
              the market. If you are looking to work in a dynamic, fast-paced
              environment that both excites and challenges you then you are at
              the right place.
            </p>

            <h1 style={{ fontSize: "31px" }}>
              <strong>Open Positions</strong>
            </h1>

            <p>
              <b>Platform &amp; YouTube Manager&nbsp;</b>
              <br />
              Istanbul, Turkey
              <br />
              <a
                href="https://www.linkedin.com/jobs/view/2774382962/?refId=x6dv5ZQt28xA7BTHmyLKmQ%3D%3D&amp;trackingId=eprudgkWrrUF5jEsdmxVSg%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Click here to apply
              </a>
            </p>

            <p>&nbsp;</p>

            <p>
              <b>Senior Brand Director</b>
              <br />
              Istanbul, Turkey
              <br />
              <a
                href="https://www.linkedin.com/jobs/view/2774391546/?refId=x6dv5ZQt28xA7BTHmyLKmQ%3D%3D&amp;trackingId=gTzkVVQNHqC%2BiqbjPJwCCg%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Click here to apply
              </a>
            </p>

            <p>&nbsp;</p>

            <p>
              <b>BI &amp; Reporting Specialist&nbsp;</b>
              <br />
              Istanbul, Turkey
              <br />
              <a
                href="https://www.linkedin.com/jobs/view/2774385492/?refId=x6dv5ZQt28xA7BTHmyLKmQ%3D%3D&amp;trackingId=f2kY%2BUjv3zMzYNQzzwBjGA%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Click here to apply
              </a>
            </p>
            <p>&nbsp;</p>
            <h1 style={{ fontSize: "31px" }}>
              <strong>Our Culture</strong>
            </h1>

            <p>
              <img
                alt=""
                src="data/files/kcfinderUploadDir/images/Our%20Culture.jpg"
                style={{ maxWidth: "100%", width: "100%", height: "auto" }}
              />
            </p>

            <p>&nbsp;</p>

            <p>
              SPI International is a global company with offices in 25 countries
              (and counting!) and over 300 employees from all around the world.
              Team SPI consists of culturally diverse and forward-thinking
              individuals with a shared passion for entertainment and the
              motivation to contribute positively to their environment.
            </p>

            <p>
              At the heart of our operations lies a simple yet absolutely
              necessary force of human nature: <strong>Empathy</strong>.
            </p>

            <p>
              At SPI, we listen, we understand and most importantly,{" "}
              <strong>WE CARE.</strong>
            </p>

            <p>
              <strong>WE CARE</strong> about elevating each other through our
              actions, catering to the demands of our global audience and
              clients, impacting the world for the better through social
              responsibility and sustainability projects.
            </p>

            <p>
              <strong style={{ fontSize: "1.3em" }}>AT SPI WE ARE...</strong>
            </p>

            <ul>
              <li>
                <p>
                  <strong>CONFIDENT</strong>
                </p>

                <p>
                  We develop all of our services and products with the consumer
                  in mind and are confident when it comes to their ability to
                  transcend expectations.
                </p>
              </li>
              <li>
                <p>
                  <strong>AGILE</strong>
                </p>

                <p>
                  We operate with an agile mindset that prioritizes adapting to
                  new trends and turning them into opportunities for new
                  ventures. We accomplish this by not only designing new
                  entertainment mixes and content solutions but also by
                  investing in the personal and professional development of our
                  team members.&nbsp;
                </p>
              </li>
              <li>
                <p>
                  <strong>RELEVANT and RESILIENT</strong>
                </p>

                <p>
                  We constantly enhance our product and service offerings
                  according to the demands of our global audience to remain
                  relevant and technologically vigilant in the industry.&nbsp;
                </p>
              </li>
              <li>
                <p>
                  <strong>EXPANDING</strong>
                </p>

                <p>
                  We value expanding the footprint of our company worldwide, as
                  well as our own individual horizons. We value expanding
                  conscientiously: By creating a positive impact on the world
                  and the communities we touch as we grow, through social
                  responsibility and sustainability projects.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
};
