import React from "react";
import HeaderItem from "../component/HeaderItem";
import SignUpContainer from "../container/SignUpContainer";
import FooterItem from "../component/FooterItem";

const dummyData = {
  userIdx: null,
};

const SignUpPage = () => {
  return (
    <>
      <HeaderItem {...{ dummyData }}></HeaderItem>
      <SignUpContainer></SignUpContainer>
      <FooterItem></FooterItem>
    </>
  );
};

export default SignUpPage;
