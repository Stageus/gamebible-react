import React from "react";

import { styled } from "styled-components";
import { Div, Section } from "../style/LayoutStyle";

import HeaderItem from "../component/HeaderItem";
import GameListContainer from "../container/GameListNavContainer";
import FooterItem from "../component/FooterItem";
import GameCommunityContainer from "../container/inGamePage/GameCommunityContainer";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;

const CommunityPage = () => {
  return (
    <PageWrapper>
      <HeaderItem />
      <GameListContainer />
      <Section $flex="v_center_center" $margin="100px 0 0 0" $padding="0 60px" $width="100vw">
        <GameCommunityContainer />
      </Section>
      <FooterItem />
    </PageWrapper>
  );
};

export default CommunityPage;
