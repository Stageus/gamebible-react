import React from "react";

import styled from "styled-components";
import { Img } from "../style/ImgStyle";
import { Div } from "../style/LayoutStyle";
import { Link } from "react-router-dom";

const ThumbnailLayout = styled(Div)`
  flex-basis: 250px;
  margin: 1%;
  width: 250px;
  position: relative;
  background-size: cover;
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
  aspect-ratio: 4 / 3;
`;

const ThumbnailItem = (props) => {
  const { idx, title, postCount, imgPath } = props.data;

  return (
    <ThumbnailLayout>
      <ThumbnailWrapper to={`../game/${idx}/community/page/1`}>
        <ThumbnailImg src={imgPath} alt={title} />
      </ThumbnailWrapper>
    </ThumbnailLayout>
  );
};

export default ThumbnailItem;
