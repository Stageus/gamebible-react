import React from "react";
import styled from "styled-components";
import { Img } from "../style/ImgStyle";
import { Link } from "react-router-dom";

const dummyData = {
  imgProps:
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt60f5d7e2095fa266/65556d537c884ff9070fc7bf/112023_SN24-GameplaySpotlight-Banner.jpg",
  idx: 1,
};

const ThumbnailWrapper = styled(Link)`
  flex-basis: 23%;
  margin: 1%;
`;

const ThumbnailImg = styled(Img)`
  width: 100%;
  height: auto;
`;

const ThumbnailItem = (props) => {
  return (
    <ThumbnailWrapper to={`ReadPostPage/${dummyData.idx}`}>
      <ThumbnailImg src={dummyData.imgProps} />
    </ThumbnailWrapper>
  );
};

export default ThumbnailItem;
