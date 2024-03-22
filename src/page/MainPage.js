import React from "react";

import { styled } from "styled-components";
import { Section } from "../style/LayoutStyle";

import HeaderItem from "../component/HeaderItem";
import GameListNavContainer from "../container/GameListNavContainer";
import FooterItem from "../component/FooterItem";

const ContainerWrapper = styled(Section)`
  margin: 100px 0 0;
  padding: 0 60px;
  width: 100vw;
  border: 3px solid red;
`;

const MainPage = () => {
  return (
    <>
      <HeaderItem />
      <GameListNavContainer />
      <ContainerWrapper>메인페이지임</ContainerWrapper>
      <FooterItem />
    </>
  );
};

export default MainPage;
