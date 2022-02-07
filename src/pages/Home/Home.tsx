import React from "react";
import "../../../css/style3860.css";

export const Home: React.FC = () => {
  return (
    <main className="main" role="main">
      <div id="fp_video" className="sec sec--fullpage_video">
        <video
          className="fullpage_video"
          poster="../../assets/img/2021.jpg"
          loop
          autoPlay
          muted
          playsInline
        >
          <source
            src="https://vod-progressive.akamaized.net/exp=1643881300~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4282%2F26%2F671410466%2F3091994476.mp4~hmac=474d86429ac76e6d6042b8c96f286ce019b70f3e916c284337ca7ac6fc197120/vimeo-prod-skyfire-std-us/01/4282/26/671410466/3091994476.mp4?filename=1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/*<script>document.querySelector('.fullpage_video').playbackRate = 0.8; w = window.innerWidth; img =*/}
        {/*  'video/2021.jpg'; if (w <= 412) {img = 'video/2021.jpg';} if (w > 412 &&*/}
        {/*  w <= 768) {img = 'video/2021.jpg';} if (w > 768 && w <= 1366) {img = 'video/2021.jpg';} if (w > 1366 &&*/}
        {/*  w <= 1920) {img = 'video/2021.jpg';} document.querySelector('.fullpage_video').setAttribute('poster', img);*/}
        {/*</script>*/}
        <header className="sec__header">
          <h1 className="sec__title">
            COVERING THE WORLD <br />
            <strong>WITH ENTERTAINMENT</strong>
          </h1>
          <button className="btn btn--get_spi">watch video</button>
        </header>
        <div className="jumping_btn"></div>
      </div>
      <section className="sec sec--slider slides">
        <div className="loader">
          <div className="pulse"></div>
        </div>
        <ul className="slides-container">
          <li>
            <picture>
              <source
                srcSet="../../assets/data/files/1c79fec749b032fcf4adc9e8b75b5140265d3614d35ec824bc7fbff94efec012_1024x768.jpg"
                media="(max-width: 1024px) and (orientation: landscape)"
              />
              <source
                srcSet="../../assets/data/files/1350a382e632c861ebe93590dea38e784f36ae2fc36eb9df88d10b99fee14447_768x1024.jpg"
                media="(max-width: 1024px) and (orientation: portrait)"
              />
              <img srcSet="../../assets/data/files/1.png" alt="Dizi" />
            </picture>
          </li>
          <li>
            <picture>
              <source
                srcSet="../../assets/data/files/a611217ba68669979b493a848a2b24fe8944b8440e6e2098f0a68a4a8459804d_1024x768.jpg"
                media="(max-width: 1024px) and (orientation: landscape)"
              />
              <source
                srcSet="../../assets/data/files/511fedaf38b22c8871302a7ebddebc57968a8490ae25dd6a74cadf4dd0a048be_768x1024.jpg"
                media="(max-width: 1024px) and (orientation: portrait)"
              />
              <img srcSet="../../assets/data/files/2.png" alt="FilmBox" />
            </picture>
          </li>
          <li>
            <picture>
              <source
                srcSet="../../assets/data/files/e990723de16b1841d934707c5d3e52c9c97415d03f4e0249efffda1a392b738b_1024x768.jpg"
                media="(max-width: 1024px) and (orientation: landscape)"
              />
              <source
                srcSet="../../assets/data/files/7873d4092165f6fb80b771ba19cbc774fb4f0962f36b38e5bef2f678251d4c04_768x1024.jpg"
                media="(max-width: 1024px) and (orientation: portrait)"
              />
              <img
                srcSet="../../assets/data/files/3.png"
                alt="FilmBox Premium"
              />
            </picture>
          </li>
          <li>
            <picture>
              <source
                srcSet="../../assets/data/files/36c6f9f4f0d14b3320089f47ecfa8932821b40666f70afc5f4d33b794425f5ed_1024x768.jpg"
                media="(max-width: 1024px) and (orientation: landscape)"
              />
              <source
                srcSet="../../assets/data/files/90b57c27afe6c32b09c2ba09bdaee214490e4bf9b04d815f9c00a90f4ca5d6fb_768x1024.jpg"
                media="(max-width: 1024px) and (orientation: portrait)"
              />
              <img srcSet="../../assets/data/files/4.png" alt="FightBox" />
            </picture>
          </li>
          <li>
            <picture>
              <source
                srcSet="../../assets/data/files/150f6fa153de2e94ce82ca921c33b2e64b047494e141a3fd25ed8d38f0d6bdb0_1024x768.jpg"
                media="(max-width: 1024px) and (orientation: landscape)"
              />
              <source
                srcSet="../../assets/data/files/0b77012569af2961c817d1818ab107a972d7d5cdeab39231f22058092a16de39_768x1024.jpg"
                media="(max-width: 1024px) and (orientation: portrait)"
              />
              <img
                srcSet="../../assets/data/files/5.png"
                alt="Fast\&amp;amp;amp;Fun Box"
              />
            </picture>
          </li>
        </ul>
        <nav className="slides-navigation">
          <a className="next">next</a>
          <a className="prev">prev</a>
        </nav>
        <div className="jumping_btn"></div>
      </section>
      <section className="sec sec--slider slides">
        <div className="loader">
          <div className="pulse"></div>
        </div>
        <ul className="slides-container">
          <li>
            <picture>
              <source
                srcSet="../../assets/data/files/faf7ddd6adc8840fb4dfb543fb91d12fffed8d293505b1be9be4e9314852bff0_1024x768.png"
                media="(max-width: 1024px) and (orientation: landscape)"
              />
              <source
                srcSet="../../assets/data/files/faaba9926eac165df879ee335056d1d1989a25fcee562e036301831c8c8a5664_768x1024.png"
                media="(max-width: 1024px) and (orientation: portrait)"
              />
              <img
                srcSet="../../assets/data/files/faf7ddd6adc8840fb4dfb543fb91d12fffed8d293505b1be9be4e9314852bff0.png"
                alt="Online Media 2"
              />
            </picture>
          </li>
          <li>
            <picture>
              <source
                srcSet="../../assets//data/files/2364d184596222ab8163944fe0a5d59997c8182511207dc87d63e57552a11687_1024x768.jpeg"
                media="(max-width: 1024px) and (orientation: landscape)"
              />
              <source
                srcSet="../../assets/data/files/d7151050762f5611d09b0194507e3aec085833a80799813b79b68a0c459a601a_768x1024.jpeg"
                media="(max-width: 1024px) and (orientation: portrait)"
              />
              <img
                srcSet="../../assets/data/files/2364d184596222ab8163944fe0a5d59997c8182511207dc87d63e57552a11687.jpeg"
                alt="Fast Channels"
              />
            </picture>
          </li>
        </ul>
        <nav className="slides-navigation">
          <a className="next">next</a>
          <a className="prev">prev</a>
        </nav>
      </section>
    </main>
  );
};
