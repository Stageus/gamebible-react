import React from "react";
import HeaderItem from "../component/HeaderItem";
import InputItem from "../component/InputItem";
import FooterItem from "../component/FooterItem";

import MainLogo from "../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../style/ButtonStyle";
import { Div, Section } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";

const dummyData = {
  userIdx: null,
};

const dummyEmailData = {
  pw: {
    key: "email",
    label: "이메일",
    placeholder: "가입된 이메일 주소 입력",
  },
};

const InputSection = styled(Section)``;

const PositionDiv = styled(Div)`
  position: relative;
  top: 70px;
`;

const FindIDPage = () => {
  return (
    <>
      <HeaderItem {...{ dummyData }}></HeaderItem>
      <Section $width="100vw" $height="90vh" $flex="h_center_center">
        <PositionDiv $flex="v_center_center" $width="350px">
          <Img src={MainLogo} alt="MainLogo" />
          <InputItem {...{ dummyInputData: dummyEmailData }}></InputItem>
          <Button
            $flex="h_center_center"
            $width="100%"
            $color="white"
            $height="50px"
            $borderRadius="4px"
          >
            아이디 찾기
          </Button>
        </PositionDiv>
      </Section>
      <FooterItem></FooterItem>
    </>
  );
};

export default FindIDPage;
