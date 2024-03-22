import React from "react";
import HeaderItem from "../component/HeaderItem";
import SignUpContainer from "../container/inSignUpPage/SignUpContainer";
import FooterItem from "../component/FooterItem";

const userIdx = "null";

const SignUpPage = () => {
  return (
    <>
      <HeaderItem {...{ userIdx }} />
      <SignUpContainer />
      <FooterItem />
    </>
  );
};

export default SignUpPage;
