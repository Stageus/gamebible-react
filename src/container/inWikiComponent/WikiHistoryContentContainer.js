import React from "react";

import { styled } from "styled-components";
import { Article, Section, Div } from "../../style/LayoutStyle";
import { H1, P } from "../../style/TextStyle";

import backImg from "../../img/backImg.svg";
import ImgTextBtnUtil from "../../util/ImgTextBtnUtil";

const GameTitleLayout = styled(H1)`
  font-size: 45px;
`;
const HistoryContentLayout = styled(P)`
  line-height: 30px;
`;

const WikiHistoryListContainer = () => {
  const WikiHistoryDummyData = [
    "리그 오브 레전드에서는 1년이 1시즌이다. 이는 다른 게임들과 비교하면 긴 기간이다. 배치를 받은 후 시즌이 끝날 때까지 랭크를 올리는 것이 랭크 게임의 주 플레이 목적으로, 시즌 종료후 다음 시즌이 시작되면 다시 배치 게임을 치러야 한다.",
  ];

  return (
    <Section $backgroundColor="white" $width="100%" $height="80%" $padding="40px">
      <Article $width="100%">
        <Div $flex="h_between_start" $width="100%" $margin="0 0 20px 0">
          <GameTitleLayout $width="60%" $fontWeight="bold">
            리그오브레전드(League of legends)
          </GameTitleLayout>
          <Div $flex="h_end_start" $width="30%">
            <ImgTextBtnUtil img={backImg} text={"BACK"} color={"major"} />
          </Div>
        </Div>
        <HistoryContentLayout $flex="v_center_start" $width="100%"></HistoryContentLayout>
      </Article>
    </Section>
  );
};

export default WikiHistoryListContainer;
