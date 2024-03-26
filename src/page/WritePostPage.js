import React from "react";
import styled from "styled-components";

import HeaderItem from "../component/HeaderItem";
import GameListNavContainer from "../container/GameListNavContainer";
import WritePostContainer from "../container/inWritePostPage/WritePostContainer";
import FooterItem from "../component/FooterItem";

import { Section } from "../style/LayoutStyle";

const ContainerWrapper = styled(Section)`
  margin: 100px 0 0 0;
  padding: 0 60px 0 60px;
  width: 100vw;
`;

const WritePostPage = () => {
  const userIdx = "1";

  return (
    <>
      <HeaderItem {...{ userIdx }} />
      <GameListNavContainer />
      <ContainerWrapper $flex="v_center_center">
        <WritePostContainer />
      </ContainerWrapper>
      <FooterItem />
    </>
  );
};

export default WritePostPage;
