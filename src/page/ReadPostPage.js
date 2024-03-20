import React, { useState } from "react";
import HeaderItem from "../component/HeaderItem";
import FooterItem from "../component/FooterItem";
import ReadPostContainer from "../container/ReadPostContainer";

import styled from "styled-components";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";

import BannerImg from "../img/bannerImg.svg";

const dummyData = {
  userIdx: "1234",
};
const WideImg = styled(Img)`
  width: 100%;
`;

const ReadPostPage = () => {
  return (
    <>
      <HeaderItem {...{ dummyData }} />
      <Div $padding="0 30px" $width="100%" $margin="70px 0 0 0">
        <WideImg src={BannerImg} />
      </Div>
      <ReadPostContainer />
      <FooterItem />
    </>
  );
};

export default ReadPostPage;
