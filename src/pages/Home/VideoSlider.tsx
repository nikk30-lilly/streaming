import React, { useEffect, useRef } from "react";
import { videoProperty } from "./VideoProperty";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export const VideoSlider: React.FC = () => {
  return (
    <Carousel>
      {videoProperty.map((videoObj) => {
        return <VideoPlayer key={videoObj.src} url={videoObj.src} />;
      })}
    </Carousel>
  );
};
