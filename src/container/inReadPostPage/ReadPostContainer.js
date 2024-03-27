import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { styled } from "styled-components";
import { Img } from "../../style/ImgStyle";
import { Div, Article, Section } from "../../style/LayoutStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import bannerImg from "../../img/bannerImg.svg";
import SwitchTabItem from "../../component/SwitchTabItem";
import PostDetailViewContainer from "./PostDetailViewContainer";

const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;
const BannerImg = styled(Img)`
  width: 100%;
`;

const ReadPostContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);
  const navigate = useNavigate();

  const BtnText = ["커뮤니티", "위키"];
  const [tabBtnValue, setTabBtnValue] = useState(BtnText[0]);

  return (
    <GameContentLayout $flex="v_center_center" $padding={navToggle && "0 0 0 250px"}>
      <Div $width="100%">
        <BannerImg src={bannerImg} />
      </Div>
      <SwitchTabItem
        {...{ BtnText }}
        tab={tabBtnValue}
        setTab={setTabBtnValue}
        onClick={(tabText) => {
          setTabBtnValue(tabText);
          if (tabText === "위키") {
            navigate("/game/:idx");
          }
        }}
      />
      <Article $flex="h_center_center" $backgroundColor="major" $width="100%" $padding="50px">
        <Section $backgroundColor="white" $width="100%" $height="80%" $padding="40px">
          <Article $width="100%">
            <PostDetailViewContainer />
          </Article>
        </Section>
      </Article>
    </GameContentLayout>
  );
};

export default ReadPostContainer;
