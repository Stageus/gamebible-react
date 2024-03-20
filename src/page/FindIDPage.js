import React, { useState } from "react";
import HeaderItem from "../component/HeaderItem";
import InputItem from "../component/InputItem";
import FooterItem from "../component/FooterItem";
import { emailValueValidation } from "../util/ValidationUtil";

import MainLogo from "../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../style/ButtonStyle";
import { Div, Section } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";

const userIdx = "null";

const dummyEmailData = {
  pw: {
    key: "email",
    label: "이메일",
    placeholder: "가입된 이메일 주소 입력",
  },
};

const PositionDiv = styled(Div)`
  position: relative;
  top: 70px;
`;

const FindIDPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const findIdClickEvent = () => {
    if (!emailValueValidation(emailValue)) {
      return;
    }
    console.log("아이디 찾기 API 호출");
  };
  return (
    <>
      <HeaderItem {...{ userIdx }}></HeaderItem>
      <Section $width="100vw" $height="90vh" $flex="h_center_center">
        <PositionDiv $flex="v_center_center" $width="350px">
          <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
          <InputItem {...{ dummyInputData: dummyEmailData, inputValue: setEmailValue }}></InputItem>
          <Button
            $flex="h_center_center"
            $width="100%"
            $color="white"
            $height="50px"
            $borderRadius="4px"
            onClick={findIdClickEvent}
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
