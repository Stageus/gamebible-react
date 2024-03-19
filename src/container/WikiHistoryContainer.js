import React from "react";
import { Link } from "react-router-dom";

import { styled } from "styled-components";
import { Article, Section, Div } from "../style/LayoutStyle";
import { H1, P } from "../style/TextStyle";

import backImg from "../img/backImg.svg";
import ImgTextBtnUtil from "../util/ImgTextBtnUtil";

const WikiContainerLayout = styled(Section)``;
const InnerContentsLayout = styled(Div)``;
const FirstRow = styled(Article)``;
const TitleLayout = styled(H1)`
  font-size: 45px;
`;
const BtnsLayout = styled(Div)``;
const HistoryContentLayout = styled(P)`
  line-height: 30px;
`;

const WikiHistoryListContainer = () => {
  const WikiHistoryDummyData = [];

  return (
    <WikiContainerLayout $backgroundColor="white" $width="100%" $height="80%" $padding="40px">
      <InnerContentsLayout $width="100%">
        <FirstRow $flex="h_between_start" $width="100%" $margin="0 0 20px 0">
          <TitleLayout $width="60%" $fontWeight="bold">
            리그오브레전드(LEAGUE of LEGENDS)
          </TitleLayout>
          <BtnsLayout $flex="h_end_start" $width="30%">
            <ImgTextBtnUtil img={backImg} text={"BACK"} color={"major"} />
          </BtnsLayout>
        </FirstRow>
        <HistoryContentLayout $flex="v_center_start" $width="100%">
          {WikiHistoryDummyData.map((elem) => {
            return (
              <Link key={`${elem.id}`} to={`./${elem.id}`}>
                <li>{`${elem.content}`}</li>
              </Link>
            );
          })}
        </HistoryContentLayout>
      </InnerContentsLayout>
    </WikiContainerLayout>
  );
};

export default WikiHistoryListContainer;
