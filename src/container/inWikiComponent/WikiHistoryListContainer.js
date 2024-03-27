import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import { styled } from "styled-components";
import { Img } from "../../style/ImgStyle";
import { Article, Section, Div } from "../../style/LayoutStyle";
import { H1, P } from "../../style/TextStyle";

import backImg from "../../img/backImg.svg";
import ImgTextBtnUtil from "../../util/ImgTextBtnUtil";
import bannerImg from "../../img/bannerImg.svg";
import SwitchTabItem from "../../component/SwitchTabItem";

const GameTitleLayout = styled(H1)`
  font-size: 45px;
`;
const HistoryContentLayout = styled(P)`
  line-height: 30px;
`;
const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;
const BannerImg = styled(Img)`
  width: 100%;
`;

const WikiHistoryListContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);
  const navigate = useNavigate();

  const BtnText = ["커뮤니티", "위키"];
  const [tabBtnValue, setTabBtnValue] = useState(BtnText[1]);

  const WikiHistoryListDummyData = [
    {
      idx: "history_11",
      content: "2024-02-29 16:58:36 쩡태은",
    },
    {
      idx: "history_10",
      content: "2024-02-29 16:54:11 김기쭈",
    },
    {
      idx: "history_9",
      content: "2024-02-29 16:51:41 쪼경은",
    },
    {
      idx: "history_8",
      content: "2024-02-29 16:39:44 최민썩",
    },
    {
      idx: "history_7",
      content: "2024-02-28 21:11:25 뱅준연",
    },
    {
      idx: "history_6",
      content: "2024-02-28 21:03:15 박해쭈",
    },
    {
      idx: "history_5",
      content: "2024-02-29 16:58:36 쩡태은",
    },
    {
      idx: "history_4",
      content: "2024-02-28 21:02:01 김기쭈",
    },
    {
      idx: "history_3",
      content: "2024-02-28 20:58:27 쪼경은",
    },
    {
      idx: "history_2",
      content: "2024-02-24 11:58:27 최민썩",
    },
    {
      idx: "history_1",
      content: "2024-02-24 09:28:30 뱅준연",
    },
  ];

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
          if (tabText === "커뮤니티") {
            navigate("/game/:idx");
            console.log("커뮤니티로 이동할 거야");
          }
        }}
      />
      <Article $flex="h_center_center" $backgroundColor="major" $width="100%" $padding="50px">
        <Section $backgroundColor="white" $width="100%" $height="80%" $padding="40px">
          <Article $width="100%">
            <Div $flex="h_between_start" $width="100%" $margin="0 0 20px 0">
              <GameTitleLayout $width="60%" $fontWeight="bold">
                리그오브레전드(League of legends)
              </GameTitleLayout>
              <Link to={`../game/:idx`}>
                <Div $flex="h_end_start" $width="30%">
                  <ImgTextBtnUtil
                    img={backImg}
                    text={"BACK"}
                    color={"major"}
                    backgroundColor={"white"}
                  />
                </Div>
              </Link>
            </Div>
            <HistoryContentLayout $flex="v_center_start" $width="100%">
              {WikiHistoryListDummyData.map((elem) => {
                return (
                  <Link key={`${elem.idx}`} to={`./${elem.idx}`}>
                    <li>{elem.content}</li>
                  </Link>
                );
              })}
            </HistoryContentLayout>
          </Article>
        </Section>
      </Article>
    </GameContentLayout>
  );
};

export default WikiHistoryListContainer;
