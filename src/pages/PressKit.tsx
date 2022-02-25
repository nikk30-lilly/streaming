import React from "react";
import "../../css/style3860.css";
import press_4 from "../../assets/img/slides/press_4.png";
import presssNews from "../../assets/data/files/presss-news.jpg";

export const PressKit: React.FC = () => {
  return (
    <main className="main" role="main">
      <section className="sec sec--news">
        <header className="sec__header">
          <picture>
            <img srcSet={press_4} />
          </picture>
        </header>
        <h1 className="sec__title" style={{ marginTop: 0 }}>
          NEWSCAST
        </h1>
        <div className="sec__body">
          <div id="fp_video" className="sec sec--fullpage_video">
            <video
              className="fullpage_video"
              controls
              loop
              autoPlay
              muted
              playsInline
            >
              <source
                src="https://player.vimeo.com/progressive_redirect/playback/675957097/rendition/1080p?loc=external&signature=1e1e95b48473e652be529265dbfc927f9b792a5906b05b7b565d9856b27273ab"
                type="video/mp4"
              />
            </video>
          </div>
          <article className="news">
            <figure>
              <img src={presssNews} />
            </figure>
          </article>
        </div>
      </section>
    </main>
  );
};
