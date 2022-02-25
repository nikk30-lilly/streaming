import React from "react";
import { ImageSlider } from "./ImageSlider";
import { VideoSlider } from "./VideoSlider";

import { urlListOne, urlListTwo } from "./VideoProperty";
import { imageListOne, imageListTwo } from "./ImageProperty";

export const Home: React.FC = () => {
  return (
    <main className="main" role="main">
      <VideoSlider urlList={urlListOne} />
      <ImageSlider urlList={imageListOne} />
      <VideoSlider urlList={urlListTwo} />
      <ImageSlider urlList={imageListTwo} />
    </main>
  );
};
