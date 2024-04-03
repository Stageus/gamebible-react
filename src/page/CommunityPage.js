import React from "react";

import { styled } from "styled-components";
import { Div, Section } from "../style/LayoutStyle";

import FooterItem from "../component/FooterItem";
import CommunityContainer from "../container/inCommunityPage/CommunityContainer";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;

const CommunityPage = () => {
  return (
    <PageWrapper>
      <Section $flex="v_center_center" $margin="100px 0 0 0" $padding="0 60px" $width="100vw">
        <CommunityContainer />
      </Section>
      <FooterItem />
    </PageWrapper>
  );
};

export default CommunityPage;
