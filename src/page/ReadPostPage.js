import React from "react";

import { styled } from "styled-components";
import { Div, Section } from "../style/LayoutStyle";

import GameListContainer from "../container/GameListNavContainer";
import ReadPostContainer from "../container/inReadPostPage/ReadPostContainer";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;

const ReadPostPage = () => {
  return (
    <PageWrapper>
      <GameListContainer />
      <Section $flex="v_center_center" $margin="100px 0 0 0" $padding="0 60px" $width="100vw">
        <ReadPostContainer />
      </Section>
    </PageWrapper>
  );
};

export default ReadPostPage;
