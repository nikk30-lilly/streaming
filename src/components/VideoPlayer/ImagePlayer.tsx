import React from "react";
import { useRef, useState } from "react";
import "./videoPlayer.css";
type props = {
  url: string;
};
export const ImagePlayer: React.FC<props> = ({ url }: props) => {
  return <img id="video" className="video" src={url} />;
};

export default ImagePlayer;
