import React from "react";
import "../../../css/style3860.css";
import { Carousel } from "react-bootstrap";
import { videoProperty } from "./VideoProperty";
export const VideoSlider: React.FC = () => {
  return (
    <Carousel indicators={false}>
      {videoProperty.map((videoObj) => {
        return (
          <Carousel.Item key={videoObj.id}>
            <video src={videoObj.src} controls />
            <Carousel.Caption>
              <h3>{videoObj.title}</h3>
              <p>{videoObj.credit}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
