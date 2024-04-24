import React from "react";
import SignInContainer from "../container/inSignInPage/SignInContainer";
import FooterItem from "../component/FooterItem";

import styled from "styled-components";
import { Div } from "../style/LayoutStyle";

const CenterDiv = styled(Div)`
  position: relative;
  top: 70px;
`;

const SignInPage = () => {
  return (
    <>
      <CenterDiv $width="100vw" $height="100vh" $flex="h_center_center">
        <SignInContainer />
      </CenterDiv>
      <FooterItem />
    </>
  );
};

export default SignInPage;
