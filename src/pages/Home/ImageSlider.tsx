import React from "react";
import "../../../css/style3860.css";
import { Carousel } from "react-responsive-carousel";
import ImagePlayer from "../../components/VideoPlayer/ImagePlayer";
import styled from "styled-components";

type props = {
  urlList: Array<any>;
};
export const ImageSlider: React.FC<props> = ({ urlList }: props) => {
  return (
    <WrapperCarousel>
      {urlList.map((imageObj) => {
        return <ImagePlayer key={imageObj.src} url={imageObj.src} />;
      })}
    </WrapperCarousel>
  );
};

export const WrapperCarousel = styled(Carousel)`
  margin-top: -3rem;
`;
