import React from "react";

import { styled } from "styled-components";
import { Div } from "../style/LayoutStyle";

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
      <PopularGameListContainer />
    </PageWrapper>
  );
};

export default MainPage;
