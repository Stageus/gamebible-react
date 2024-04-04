import React from "react";

import styled from "styled-components";
import { Img } from "../style/ImgStyle";
import { Div } from "../style/LayoutStyle";
import { Link } from "react-router-dom";

const ThumbnailContainer = styled(Div)`
  flex-basis: 250px;
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
  const { idx, title, post_count, imgPath } = props.data;
  return (
    <ThumbnailContainer>
      <ThumbnailWrapper to={`../game/${idx}/community/page/1`}>
        <ThumbnailImg src={imgPath} alt={title} />
      </ThumbnailWrapper>
    </ThumbnailContainer>
  );
};

export default ThumbnailItem;
