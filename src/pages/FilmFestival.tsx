import React from "react";
import "../../css/style3860.css";
import FLOCK_new from "../../assets/img/slides/FLOCK_new.png";

export const FilmFestival: React.FC = () => {
  return (
    <main className="main" role="main">
      <article className="about_us">
        <header className="about_us__header">
          <picture>
            <img alt="" srcSet={FLOCK_new} className="img_fit img_fit--width" />
          </picture>
        </header>
        <h1
          className="about_us__title"
          style={{ marginTop: "42px", textAlign: "center" }}
        >
          Flock OTT Film Festival
        </h1>
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
              src="https://player.vimeo.com/progressive_redirect/playback/675453473/rendition/1080p?loc=external&signature=4d13b0e88f8eefb9bac104d51d45b87698854948714fd72761f72e8c93e5c950"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="about_us__body">
          <h2 className="about_us__title" style={{ textAlign: "center" }}>
            MORE ABOUT THE FLOCK OTT FILM FESTIVAL
          </h2>
          <div
            style={{
              boxShadow: "0px 2px 9px 7px #808080",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <p style={{ textAlign: "center" }}>
              Flock OTT Film Festival is a one of a kind festival aimed for
              cinephiles to create content, irrespective of cost, language or
              medium. The festival aims to usher in the next generation of
              filmmaking by encouraging participants to shoot a short film on
              any device be it a mobile phone or a professional camera.
              Prominent members of IDPA will be on the advisory council and
              jury.
            </p>
            <p style={{ textAlign: "center" }}>
              This festival is open to emerging filmmakers all over the world
              where we give them a platform to tell their stories and get an
              opportunity to have their films streamed on Flock OTT.We’re aiming
              to encourage a future of filmmaking where storytelling is equally
              accessible to all.
            </p>
            <p style={{ textAlign: "center" }}>
              The journey has just begun and we can’t wait to have you join us.
              So make the most of this opportunity and get started!
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};
