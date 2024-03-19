import React from "react";
import { styled } from "styled-components";
import { Img } from "../style/ImgStyle";
import { setColor } from "../style/SetStyle";
import { Div, Article, Section } from "../style/LayoutStyle";
import bannerImg from "../img/bannerImg.svg";
import SwitchTabItem from "../component/SwitchTabItem";
import { useRecoilValue } from "recoil";
import navToggleAtom from "../recoil/navToggleAtom";

const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;
const ImgLayout = styled(Div)`
  width: 100%;
`;
const BannerImg = styled(Img)`
  width: 100%;
  height: auto;
`;
const ContentLayout = styled(Article)`
  background-color: ${setColor("major")};
  width: 100%;
  height: 500px;
`;
const MainLayout = styled(Article)`
  background-color: ${setColor("white")};
  width: 90%;
  height: 80%;
`;

const GameContentContainer = () => {
  const BtnText = ["커뮤니티", "위키"];
  const navToggle = useRecoilValue(navToggleAtom);

  return (
    <GameContentLayout $flex="v_center_center" $padding={navToggle && "0 0 0 250px"}>
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
