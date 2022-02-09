import React from "react";
import "../../../css/style3860.css";
import { SliderDemo } from "./SliderDemo";

export const Home: React.FC = () => {
  return (
    <main className="main" role="main">
      <div id="fp_video" className="sec sec--fullpage_video">
        <video
          className="fullpage_video"
          poster="../../../assets/img/2021.jpg"
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
        <SliderDemo />
      </section>
    </main>
  );
};
