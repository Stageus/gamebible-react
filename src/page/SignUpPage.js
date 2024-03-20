import React from "react";
import HeaderItem from "../component/HeaderItem";
import SignUpContainer from "../container/SignUpContainer";
import FooterItem from "../component/FooterItem";

const userIdx = "null";

const SignUpPage = () => {
  return (
    <>
      <HeaderItem {...{ userIdx }}></HeaderItem>
      <SignUpContainer></SignUpContainer>
      <FooterItem></FooterItem>
    </>
  );
};

export default SignUpPage;
