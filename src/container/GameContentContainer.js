import React from "react";
import { styled } from "styled-components";
import { Img } from "../style/ImgStyle";
import { setColor } from "../style/SetStyle";
import { Div, Article, Section } from "../style/LayoutStyle";
import bannerImg from "../img/bannerImg.svg";
import SwitchTabItem from "../component/SwitchTabItem";

const GameContentLayout = styled(Article)`
  width: 1200px;
`;
const ImgLayout = styled(Div)`
  flex-grow: 1;
  width: 100%;
`;
const BannerImg = styled(Img)`
  width: 100%;
  height: auto;
`;
const ContentLayout = styled(Section)`
  background-color: ${setColor("major")};
  width: 100%;
  height: 500px;
`;
const MainLayout = styled(Section)`
  background-color: ${setColor("white")};
  width: 90%;
  height: 80%;
`;

const GameContentContainer = () => {
  const BtnText = ["커뮤니티", "위키"];

  return (
    <GameContentLayout $flex="v_center_center">
      <ImgLayout>
        <BannerImg src={bannerImg} />
      </ImgLayout>
      <SwitchTabItem {...{ BtnText }} />
      <ContentLayout $flex="h_center_center">
        <MainLayout></MainLayout>
      </ContentLayout>
    </GameContentLayout>
  );
};

export default GameContentContainer;
