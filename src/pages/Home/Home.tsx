import React from "react";
import "../../../css/style3860.css";
import { ImageSlider } from "./ImageSlider";
import { VideoSlider } from "./VideoSlider";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import ImagePlayer from "../../components/VideoPlayer/ImagePlayer";
import filmFestival from "../../../assets/data/files/2.png";

export const Home: React.FC = () => {
  return (
    <main className="main" role="main">
      <VideoSlider />
      <VideoPlayer
        url={
          "https://vod-progressive.akamaized.net/exp=1644692413~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4321%2F26%2F671608214%2F3092979558.mp4~hmac=4e8308d6fe4de172cb5fd9e57fba9e09a0bcae500252e0d538b97d24c4ffe340/vimeo-prod-skyfire-std-us/01/4321/26/671608214/3092979558.mp4"
        }
      />
      <ImageSlider />
      <ImagePlayer url={filmFestival} />
    </main>
  );
};
