import React from "react";
import "../../../css/style3860.css";
import { Carousel } from "react-responsive-carousel";
import { imageProperty } from "./ImageProperty";
import ImagePlayer from "../../components/VideoPlayer/ImagePlayer";
import styled from "styled-components";

export const ImageSlider: React.FC = () => {
  return (
    <WrapperCarousel>
      {imageProperty.map((imageObj) => {
        return <ImagePlayer key={imageObj.src} url={imageObj.src} />;
      })}
    </WrapperCarousel>
  );
};

export const WrapperCarousel = styled(Carousel)`
  margin-top: -5px;
`;
