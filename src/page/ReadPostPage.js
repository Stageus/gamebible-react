import React from "react";
import HeaderItem from "../component/HeaderItem";
import JunContentContainer from "../container/JunContentContainer";
import FooterItem from "../component/FooterItem";

import BannerImg from "../img/bannerImg.svg";
import { Img } from "../style/ImgStyle";
import { Div } from "../style/LayoutStyle";
import styled from "styled-components";

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
      <Div $padding="0 30px">
        <WideImg src={BannerImg} />
      </Div>
      <JunContentContainer />
      <FooterItem />
    </>
  );
};

export default ReadPostPage;
