import React from "react";
import { styled } from "styled-components";
import { Img } from "../style/ImgStyle";
import { setColor } from "../style/SetStyle";
import { Div, Article, Section } from "../style/LayoutStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../recoil/navToggleAtom";

import bannerImg from "../img/bannerImg.svg";
import SwitchTabItem from "../component/SwitchTabItem";
import WikiContainer from "../container/WikiContainer";

const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;
const BannerImg = styled(Img)`
  width: 100%;
`;

const GameContentContainer = () => {
  const BtnText = ["커뮤니티", "위키"];
  const navToggle = useRecoilValue(navToggleAtom);

  return (
    <GameContentLayout $flex="v_center_center" $padding={navToggle && "0 0 0 250px"}>
      <Div $width="100%">
        <BannerImg src={bannerImg} />
      </Div>
      <SwitchTabItem {...{ BtnText }} />
      <Article $flex="h_center_center" $backgroundColor="major" $width="100%" $padding="50px">
        <WikiContainer />
      </Article>
    </GameContentLayout>
  );
};

export default GameContentContainer;
