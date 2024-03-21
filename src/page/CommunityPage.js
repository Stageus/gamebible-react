import React from "react";

import HeaderItem from "../component/HeaderItem";
import FooterItem from "../component/FooterItem";
import CommunityContainer from "../container/CommunityContainer";

import BannerImg from "../img/bannerImg.svg";

import styled from "styled-components";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";

const WideImg = styled(Img)`
  width: 100%;
`;

const CommunityPage = () => {
  return (
    <>
      <HeaderItem />
      <Div $padding="0 30px" $width="100%" $margin="70px 0 0 0">
        <WideImg src={BannerImg} />
      </Div>
      <CommunityContainer />
      <FooterItem />
    </>
  );
};

export default CommunityPage;
