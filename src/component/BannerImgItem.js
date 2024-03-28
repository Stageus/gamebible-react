import React from "react";

import { styled } from "styled-components";
import { Img } from "../style/ImgStyle";
import { Div } from "../style/LayoutStyle";
import bannerImg from "../img/bannerImg.svg";

const BannerImg = styled(Img)`
  width: 100%;
`;
const BannerImgItem = () => {
  return (
    <Div $width="100%">
      <BannerImg src={bannerImg} />
    </Div>
  );
};

export default BannerImgItem;
