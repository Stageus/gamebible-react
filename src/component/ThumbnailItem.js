import React from "react";

import styled from "styled-components";
import { Img } from "../style/ImgStyle";
import { Div } from "../style/LayoutStyle";
import { Link } from "react-router-dom";

const ThumbnailContainer = styled(Div)`
  flex-basis: 23%;
  margin: 1%;
  width: 250px;
  position: relative;
`;
const ThumbnailWrapper = styled(Link)`
  display: block;
  overflow: hidden;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.3);
    z-index: 2;
  }
`;
const ThumbnailImg = styled(Img)`
  width: 100%;
  height: auto;
`;

const ThumbnailItem = (props) => {
  const { idx, imgProps } = props.data;
  return (
    <ThumbnailContainer>
      <ThumbnailWrapper to={`game/${idx}`}>
        <ThumbnailImg src={imgProps} />
      </ThumbnailWrapper>
    </ThumbnailContainer>
  );
};

export default ThumbnailItem;
