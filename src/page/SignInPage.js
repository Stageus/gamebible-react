import React from "react";
import HeaderItem from "../component/HeaderItem";
import InputItem from "../component/InputItem";
import HeaderLogo from "../img/HeaderLogo.svg";
import styled from "styled-components";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";

const dummyData = {
  userIdx: "null",
};
const dummyInputData = {
  id: {
    key: "id",
    label: "아이디",
    button: "중복확인",
    placeholder: "4 ~ 20글자 제한",
  },
  pw: {
    key: "pw",
    type: "pw",
    label: "비밀번호",
    placeholder: "8 ~ 20글자 제한",
  },
};
const Wrapper = styled(Div)`
  position: relative;
  top: 70px;
`;

const SignInPage = () => {
  return (
    <>
      <HeaderItem {...{ dummyData }}></HeaderItem>
      <Wrapper>
        <Img src={HeaderLogo} alt="HeaderLogo" />
        <InputItem {...{ dummyInputData }}></InputItem>
      </Wrapper>
    </>
  );
};

export default SignInPage;
