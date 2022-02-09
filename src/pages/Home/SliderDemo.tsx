import React from "react";
import "../../../css/style3860.css";
import { Carousel } from "react-bootstrap";

import one from "../../../assets/data/files/1.png";
import two from "../../../assets/data/files/2.png";
import three from "../../../assets/data/files/3.png";
import four from "../../../assets/data/files/4.png";
import five from "../../../assets/data/files/5.png";

export const SliderDemo: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={one} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={two} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={three} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={four} alt="four" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={five} alt="five" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
