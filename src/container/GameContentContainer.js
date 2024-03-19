import { React, useState } from "react";

import { styled } from "styled-components";
import { Img } from "../style/ImgStyle";
import { Div, Article, Section } from "../style/LayoutStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../recoil/navToggleAtom";

import bannerImg from "../img/bannerImg.svg";
import SwitchTabItem from "../component/SwitchTabItem";
import CommunityContainer from "../container/CommunityContainer";
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
        {tabBtnValue == "커뮤니티" && <CommunityContainer />}
        {tabBtnValue == "위키" && <WikiContainer tab={tabBtnValue} setTab={setTabBtnValue} />}
        {/* {tabBtnValue == "history" && < />} */}
        {/* {tabBtnValue == "edit" && < />} */}
      </Article>
    </GameContentLayout>
  );
};

export default GameContentContainer;
