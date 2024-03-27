import { React, useState } from "react";

import { styled } from "styled-components";
import { Img } from "../../style/ImgStyle";
import { Div, Article, Section } from "../../style/LayoutStyle";
import { Span } from "../../style/TextStyle";
import { setColor } from "../../style/SetStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import bannerImg from "../../img/bannerImg.svg";
import SwitchTabItem from "../../component/SwitchTabItem";
import PostListContainer from "./PostListContainer";

const CommunityTitleWrapper = styled(Div)`
  border: none;
  border-bottom: 1px solid ${setColor("white")};
`;
const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;
const BannerImg = styled(Img)`
  width: 100%;
`;

const GameCommunityContainer = () => {
  const BtnText = ["커뮤니티", "위키"];
  const navToggle = useRecoilValue(navToggleAtom);

  const [tabBtnValue, setTabBtnValue] = useState(BtnText[0]);

  const switchTabEvent = (btnText) => {
    setTabBtnValue(btnText);
  };

  return (
    <GameContentLayout $flex="v_center_center" $padding={navToggle && "0 0 0 250px"}>
      <Div $width="100%">
        <BannerImg src={bannerImg} />
      </Div>
      <SwitchTabItem
        {...{ BtnText }}
        tab={tabBtnValue}
        setTab={setTabBtnValue}
        onClick={(tab) => switchTabEvent(tab)}
      />
      <Article $flex="h_center_center" $backgroundColor="major" $width="100%" $padding="50px">
        <Section $flex="v_center_center" $width="100%">
          <CommunityTitleWrapper
            $width="100%"
            $height="60px"
            $flex="h_center_center"
            $padding="0 30px"
            $margin="0 0 1px 0"
            $backgroundColor="major"
          >
            <Div
              $flex="h_between_center"
              $width="100%"
              $height="40px"
              $padding="10px 40px 10px 40px"
            >
              <Span $fontSize="large" $width="50%" $color="white">
                제목
              </Span>
              <Div $flex="h_end_center" $width="50%">
                <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
                  작성자
                </Span>
                <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
                  조회
                </Span>
                <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
                  작성일
                </Span>
              </Div>
            </Div>
          </CommunityTitleWrapper>
          <PostListContainer />
        </Section>
      </Article>
    </GameContentLayout>
  );
};

export default GameCommunityContainer;
