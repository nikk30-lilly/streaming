import React from "react";
import { useRef, useState } from "react";
import "./videoPlayer.css";
type props = {
  url: string;
};
export const VideoPlayer: React.FC<props> = ({ url }: props) => {
  return <video id="video" className="video" src={url} controls />;
};

export default VideoPlayer;
