import React from "react";
import styled from "styled-components";
import { Img } from "../style/ImgStyle";
import { Link } from "react-router-dom";

const ThumbnailWrapper = styled(Link)`
  flex-basis: 23%;
  margin: 1%;
`;

const ThumbnailImg = styled(Img)`
  width: 100%;
  height: auto;
`;

const ThumbnailItem = (props) => {
  const { idx, imgProps } = props.data;
  return (
    <ThumbnailWrapper to={`game/${idx}`}>
      <ThumbnailImg src={imgProps} />
    </ThumbnailWrapper>
  );
};

export default ThumbnailItem;
