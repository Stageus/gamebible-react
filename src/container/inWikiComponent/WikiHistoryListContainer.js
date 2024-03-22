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

const WikiHistoryListContainer = ({ backToWikiBtn, setBackToWikiBtn }) => {
  const WikiHistoryListDummyData = [
    {
      id: "history_11",
      content: "2024-02-29 16:58:36 쩡태은",
    },
    {
      id: "history_10",
      content: "2024-02-29 16:54:11 김기쭈",
    },
    {
      id: "history_9",
      content: "2024-02-29 16:51:41 쪼경은",
    },
    {
      id: "history_8",
      content: "2024-02-29 16:39:44 최민썩",
    },
    {
      id: "history_7",
      content: "2024-02-28 21:11:25 뱅준연",
    },
    {
      id: "history_6",
      content: "2024-02-28 21:03:15 박해쭈",
    },
    {
      id: "history_5",
      content: "2024-02-29 16:58:36 쩡태은",
    },
    {
      id: "history_4",
      content: "2024-02-28 21:02:01 김기쭈",
    },
    {
      id: "history_3",
      content: "2024-02-28 20:58:27 쪼경은",
    },
    {
      id: "history_2",
      content: "2024-02-24 11:58:27 최민썩",
    },
    {
      id: "history_1",
      content: "2024-02-24 09:28:30 뱅준연",
    },
  ];
  const clickBackToWikiBtn = () => {
    setBackToWikiBtn(!backToWikiBtn);
  };
  console.log(backToWikiBtn);

  return (
    <Section $backgroundColor="white" $width="100%" $height="80%" $padding="40px">
      <Article $width="100%">
        <Div $flex="h_between_start" $width="100%" $margin="0 0 20px 0">
          <GameTitleLayout $width="60%" $fontWeight="bold">
            리그오브레전드(LEAGUE of LEGENDS)
          </GameTitleLayout>
          <Div $flex="h_end_start" $width="30%">
            <ImgTextBtnUtil
              img={backImg}
              text={"BACK"}
              color={"major"}
              backgroundColor={"white"}
              backToWikiBtn={backToWikiBtn}
              setBackToWikiBtn={setBackToWikiBtn}
              onClick={clickBackToWikiBtn}
            />
          </Div>
        </Div>
        <HistoryContentLayout $flex="v_center_start" $width="100%">
          {WikiHistoryListDummyData.map((elem) => {
            return <li>{`${elem.content}`}</li>;
          })}
        </HistoryContentLayout>
      </Article>
    </Section>
  );
};

export default WikiHistoryListContainer;
