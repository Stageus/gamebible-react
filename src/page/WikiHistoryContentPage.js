import React from "react";

import { styled } from "styled-components";
import { Div, Section } from "../style/LayoutStyle";

import FooterItem from "../component/FooterItem";
import WikiHistoryContentContainer from "../container/inWikiPage/WikiHistoryContentContainer";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;

const WikiHistoryContentPage = () => {
  return (
    <PageWrapper>
      <Section $flex="v_center_center" $margin="100px 0 0 0" $padding="0 60px" $width="100vw">
        <WikiHistoryContentContainer />
      </Section>
      <FooterItem />
    </PageWrapper>
  );
};

export default WikiHistoryContentPage;
