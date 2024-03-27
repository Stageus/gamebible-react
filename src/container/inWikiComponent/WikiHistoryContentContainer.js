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
const HistoryWriterLayout = styled(P)``;
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

const WikiHistoryContentContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);
  const navigate = useNavigate();

  const BtnText = ["커뮤니티", "위키"];
  const [tabBtnValue, setTabBtnValue] = useState(BtnText[1]);

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
              <Link to={`../game/:idx/history`}>
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
            <HistoryWriterLayout
              $flex="v_center_start"
              $width="100%"
              $fontWeight="bold"
              $fontSize="large"
              $margin="0 0 20px 0"
            >
              2024-02-29 16:51:41 쪼경은
            </HistoryWriterLayout>
            <HistoryContentLayout $flex="v_center_start" $width="100%">
              리그 오브 레전드에서는 1년이 1시즌이다. 이는 다른 게임들과 비교하면 긴 기간이다.
              배치를 받은 후 시즌이 끝날 때까지 랭크를 올리는 것이 랭크 게임의 주 플레이 목적으로,
              시즌 종료후 다음 시즌이 시작되면 다시 배치 게임을 치러야 한다.
            </HistoryContentLayout>
          </Article>
        </Section>
      </Article>
    </GameContentLayout>
  );
};

export default WikiHistoryContentContainer;
