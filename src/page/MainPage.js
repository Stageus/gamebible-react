import React from "react";

import { styled } from "styled-components";
import { Div, Section } from "../style/LayoutStyle";

import HeaderItem from "../component/HeaderItem";
import GameListContainer from "../container/GameListNavContainer";
import PopularGameListContainer from "../container/inMainPage/PopularGameListContainer";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;

const MainPage = () => {
  return (
    <PageWrapper>
      <HeaderItem />
      <GameListContainer />
      <Section $flex="v_center_center" $margin="100px 0 0 0" $padding="0 60px" $width="100vw">
        <PopularGameListContainer />
      </Section>
    </PageWrapper>
  );
};

export default MainPage;
