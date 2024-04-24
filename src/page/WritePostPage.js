import React from "react";
import styled from "styled-components";

import WritePostContainer from "../container/inWritePostPage/WritePostContainer";
import FooterItem from "../component/FooterItem";

import { Div, Section } from "../style/LayoutStyle";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;
const ContainerWrapper = styled(Section)`
  margin: 100px 0 0 0;
  padding: 0 60px 0 60px;
  width: 100vw;
`;

const WritePostPage = () => {
  return (
    <PageWrapper>
      <ContainerWrapper $flex="v_center_center">
        <WritePostContainer />
      </ContainerWrapper>
      <FooterItem />
    </PageWrapper>
  );
};

export default WritePostPage;
