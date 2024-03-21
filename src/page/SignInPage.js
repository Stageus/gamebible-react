import React from "react";
import HeaderItem from "../component/HeaderItem";
import SignInContainer from "../container/inSignInPage/SignInContainer";
import FooterItem from "../component/FooterItem";
import { Div } from "../style/LayoutStyle";
import styled from "styled-components";
const userIdx = "null";

const CenterDiv = styled(Div)`
  position: relative;
  top: 70px;
`;

const SignInPage = () => {
  return (
    <>
      <HeaderItem {...{ userIdx }}></HeaderItem>
      <CenterDiv $width="100vw" $height="100vh" $flex="h_center_center">
        <SignInContainer></SignInContainer>
      </CenterDiv>
      <FooterItem></FooterItem>
    </>
  );
};

export default SignInPage;
