import React from "react";
import { styled } from "styled-components";
import HeaderItem from "../component/HeaderItem";
import GameListContainer from "../container/GameListNavContainer";
import FooterItem from "../component/FooterItem";
import { Div, Section } from "../style/LayoutStyle";
import GameContentContainer from "../container/GameContentContainer";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;
const GameContentContainerWrapper = styled(Section)`
  margin: 100px 30px 0 300px;
  flex-grow: 1;
  border: 3px solid blue;
  width: calc(100% - 330px); /* 추가 */
`;
const FooterWrapper = styled(Div)`
  position: absolute;
  bottom: 0;
`;

const WikiPage = () => {
  return (
    <PageWrapper>
      <HeaderItem />
      <GameListContainer />
      <GameContentContainerWrapper>
        <GameContentContainer />
      </GameContentContainerWrapper>
      <FooterWrapper>
        <FooterItem />
      </FooterWrapper>
    </PageWrapper>
  );
};

export default WikiPage;
