import React from "react";
import "../../../css/style3860.css";
import { SliderDemo } from "./SliderDemo";
import { VideoSlider } from "./VideoSlider";

export const Home: React.FC = () => {
  return (
    <main className="main" role="main">
      <div id="fp_video" className="sec sec--fullpage_video">
        <VideoSlider />
        <header className="sec__header">
          <h1 className="sec__title">
            COVERING THE WORLD <br />
            <strong>WITH ENTERTAINMENT</strong>
          </h1>
          <button className="btn btn--get_spi">watch video</button>
        </header>
        <div className="jumping_btn"></div>
      </div>
      <video
        src={
          "https://player.vimeo.com/progressive_redirect/playback/671410466/rendition/1080p?loc=external&signature=666c4a094a8eea5b6cd1463218abdf2115f9846e63205a94af34e64b8428af63"
        }
        controls
      />
      <section className="sec sec--slider slides">
        <SliderDemo />
      </section>
    </main>
  );
};
