import React, { useEffect, useRef } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
type props = {
  urlList: Array<any>;
};
export const VideoSlider: React.FC<props> = ({ urlList }: props) => {
  return (
    <Carousel>
      {urlList.map((videoObj) => {
        return <VideoPlayer key={videoObj.src} url={videoObj.src} />;
      })}
    </Carousel>
  );
};
