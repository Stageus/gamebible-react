import React from "react";
import { styled } from "styled-components";
import HeaderItem from "../component/HeaderItem";
import GameListContainer from "../container/GameListNavContainer";
import FooterItem from "../component/FooterItem";
import { Div } from "../style/LayoutStyle";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
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
      <FooterWrapper>
        <FooterItem />
      </FooterWrapper>
    </PageWrapper>
  );
};

export default WikiPage;
