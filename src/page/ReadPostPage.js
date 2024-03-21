import React from "react";

import { styled } from "styled-components";
import { Div, Section } from "../style/LayoutStyle";

import HeaderItem from "../component/HeaderItem";
import GameListContainer from "../container/GameListNavContainer";
import ReadPostContainer from "../container/inReadPostPage/ReadPostContainer";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;
const GameContentContainerWrapper = styled(Section)`
  margin: 100px 0 0 0;
  padding: 0 60px 0 60px;
  width: 100vw;
`;

const ReadPostPage = () => {
  return (
    <PageWrapper>
      <HeaderItem />
      <GameListContainer />
      <GameContentContainerWrapper $flex="v_center_center">
        <ReadPostContainer />
      </GameContentContainerWrapper>
    </PageWrapper>
  );
};

export default ReadPostPage;
