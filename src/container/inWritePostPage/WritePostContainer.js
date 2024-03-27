import { React, useState } from "react";

import { styled } from "styled-components";
import { Img } from "../../style/ImgStyle";
import { Div, Article, Section } from "../../style/LayoutStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import bannerImg from "../../img/bannerImg.svg";
import SwitchTabItem from "../../component/SwitchTabItem";
import WikiContainer from "../inWikiPage/WikiContainer";
import WikiHistoryListContainer from "../inWikiPage/WikiHistoryListContainer";
import WikiEditContainer from "../WikiEditContainer";
import WriterContainer from "./WriterContainer";

const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;
const BannerImg = styled(Img)`
  width: 100%;
`;

const WritePostContainer = () => {
  const BtnText = ["커뮤니티", "위키"];
  const navToggle = useRecoilValue(navToggleAtom);

  const [tabBtnValue, setTabBtnValue] = useState(BtnText[0]);
  const [historyBtn, setHistoryBtn] = useState(false);
  const [editBtn, setEditBtn] = useState(false);
  const [backToWikiBtn, setBackToWikiBtn] = useState(false);

  const switchTabEvent = (btnText) => {
    setTabBtnValue(btnText);
    setHistoryBtn(false);
    setEditBtn(false);
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
      <Article $flex="v_center_center" $backgroundColor="major" $width="100%" $padding="50px">
        {tabBtnValue === "커뮤니티" && <WriterContainer />}
        {tabBtnValue === "위키" && !historyBtn && (
          <WikiContainer
            historyBtn={historyBtn}
            setHistoryBtn={setHistoryBtn}
            editBtn={editBtn}
            setEditBtn={setEditBtn}
          />
        )}
        {tabBtnValue !== "커뮤니티" && historyBtn && !editBtn && (
          <WikiHistoryListContainer
            backToWikiBtn={backToWikiBtn}
            setBackToWikiBtn={setBackToWikiBtn}
          />
        )}
        {tabBtnValue !== "커뮤니티" && editBtn && !historyBtn && <WikiEditContainer />}
        {backToWikiBtn && <WikiContainer />}
      </Article>
    </GameContentLayout>
  );
};

export default WritePostContainer;
