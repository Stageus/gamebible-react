import React from "react";

import { styled } from "styled-components";
import { Article, Section, Div } from "../style/LayoutStyle";
import { H1, P } from "../style/TextStyle";
import { Img } from "../style/ImgStyle";

import ImgTextBtnUtil from "../util/ImgTextBtnUtil";
import putByUserImg from "../img/putByUserImg.svg";
import historyImg from "../img/historyImg.svg";
import editImg from "../img/editImg.svg";

const WikiContainerLayout = styled(Section)``;
const InnerContentsLayout = styled(Div)``;
const FirstRow = styled(Article)``;
const TitleLayout = styled(H1)`
  font-size: 45px;
`;
const BtnsLayout = styled(Div)``;
const MainContentLayout = styled(Div)`
  line-height: 30px;
`;
const TextDiv = styled(P)`
  width: 100%;
  margin: 10px 0;
`;
const ImgDiv = styled(Div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;
const ImgByUser = styled(Img)`
  width: 100%;
`;

const WikiContainer = ({ historyBtn, setHistoryBtn, editBtn, setEditBtn }) => {
  const clickHistoryBtnEvent = () => {
    setHistoryBtn(!historyBtn);
    console.log("클릭이 되긴 하니?");
    console.log(historyBtn);
  };
  const clickEditBtnEvent = () => {
    setHistoryBtn(!editBtn);
  };

  return (
    <WikiContainerLayout $backgroundColor="white" $width="100%" $height="80%" $padding="40px">
      <InnerContentsLayout $width="100%">
        <FirstRow $flex="h_between_start" $width="100%" $margin="0 0 20px 0">
          <TitleLayout $width="60%" $fontWeight="bold">
            리그오브레전드(League of legends)
          </TitleLayout>
          <BtnsLayout $flex="h_between_start" $width="30%">
            <ImgTextBtnUtil
              img={historyImg}
              text={"HISTORY"}
              color={"major"}
              historyBtn={historyBtn}
              setHistoryBtn={setHistoryBtn}
              onClick={clickHistoryBtnEvent}
            />
            <ImgTextBtnUtil
              img={editImg}
              text={"EDIT"}
              color={"major"}
              editBtn={editBtn}
              setEditBtn={setEditBtn}
              onClick={clickEditBtnEvent}
            />
          </BtnsLayout>
        </FirstRow>
        <MainContentLayout $flex="v_start_center" $width="100%" $margin="20px 0 0 0">
          <TextDiv>
            5명의 플레이어가 각자 다른 포지션에서 성장을 통해 아이템과 레벨을 올려 상대의 기지를
            파괴하는 MOBA 장르의 게임. 게임 명칭의 앞 철자들을 따서 LoL(롤), 영어권에서는 League
            등의 약칭으로도 불린다.
          </TextDiv>
          <ImgDiv>
            <ImgByUser src={putByUserImg} />
          </ImgDiv>
          <TextDiv>
            소환사들의 티어 변동에 영향을 주는 게임으로, 2018 시즌까지는
            브론즈/실버/골드/플래티넘/다이아몬드/마스터/챌린저의 티어가 있었고 브론즈부터 다이아몬드
            티어까지는 각각의 티어를 세분화한 단계가 1단계(가장 상위)부터 5단계(가장 하위)까지
            있었다. 2019 시즌부터는 아이언/브론즈/실버/골드/플래티넘/다이아몬드/마스터/그랜드
            마스터/챌린저로 구분되며 2023년에는 다이아몬드와 플래티넘 사이에 에메랄드 티어가 새롭게
            도입되었다. 또한 아이언부터 다이아몬드 티어까지의 단계 구분이 4단계로 줄어들었다. 랭크
            게임 플레이 조건은 기존의 만렙이었던 30레벨 이상이고, 자신이 직접 소유한 챔피언 20개
            이상이다. 리그 오브 레전드에서는 1년이 1시즌이다. 이는 다른 게임들과 비교하면 긴
            기간이다. 배치를 받은 후 시즌이 끝날 때까지 랭크를 올리는 것이 랭크 게임의 주 플레이
            목적으로, 시즌 종료후 다음 시즌이 시작되면 다시 배치 게임을 치러야 한다. 물론 저번
            시즌에 받은 최종 랭크를 반영하여 배치 게임 점수가 계산되기 때문에 높은 랭크를 달성했다면
            다음 시즌을 좀 더 유리하게 플레이할 수 있다. 배치 게임은 2018 시즌까지는 모든 배치
            게임을 치른 후 최종 랭크가 나오는 방식이지만 2019 시즌부터는 '임시 랭크'라는 게 생겼다.
            임시 랭크란 첫 번째 배치 게임을 치르면 받는 랭크로, 저번 시즌의 최종 랭크를 반영해
            계산된다. 임시 랭크를 받고 이후 랭크 게임을 돌리게 되면 배치 게임 도중에는 승리 시 약
            60LP를 얻고(승리 횟수가 누적될수록 얻는 LP의 양이 30점대까지 감소한다.), 패배 시 LP를
            잃지 않는다. 승급전은 치르지 않는다. 따라서 임시 랭크 이하로는 배치 게임 도중 크게
            강등되지 않는다.
          </TextDiv>
        </MainContentLayout>
      </InnerContentsLayout>
    </WikiContainerLayout>
  );
};

export default WikiContainer;
