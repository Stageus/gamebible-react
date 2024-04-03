import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderItem from "../component/HeaderItem";
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
      <HeaderItem />
      <CenterDiv $width="100vw" $height="100vh" $flex="h_center_center">
        <SignInContainer />
      </CenterDiv>
      <FooterItem />
    </>
  );
};

export default SignInPage;
