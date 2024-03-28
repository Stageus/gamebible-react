import React, { useState } from "react";
import InputItem from "../../component/InputItem";
import HeaderLogo from "../../img/HeaderLogo.svg";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Img } from "../../style/ImgStyle";
import { Div, Section } from "../../style/LayoutStyle";
import { Button } from "../../style/ButtonStyle";
import { idValueValidation, pwValueValidation } from "../../util/ValidationUtil";
import KakaoLoginBtn from "../../img/kakaoLoginMediumWide.svg";

const KakaoLoginStyleBtn = styled(Img)`
  width: 100%;
`;
const dummyIdData = {
  id: {
    key: "id",
    placeholder: "아이디",
  },
};
const dummyPWData = {
  pw: {
    key: "pw",
    type: "pw",
    placeholder: "비밀번호",
  },
};

const SignInContainer = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const signInClickEvent = () => {
    if (!idValueValidation(idValue)) {
      return;
    }
    if (!pwValueValidation(pwValue)) {
      return;
    }
    console.log("로그인 성공!");
  };
  return (
    <Section $flex="v_center_center" $width="350px">
      <Img src={HeaderLogo} alt="HeaderLogo" />
      <InputItem
        {...{
          dummyInputData: dummyIdData,
          inputValue: setIdValue,
        }}
      ></InputItem>
      <InputItem {...{ dummyInputData: dummyPWData, inputValue: setPwValue }}></InputItem>
      <Button
        $flex="h_center_center"
        $width="100%"
        $height="50px"
        $color="white"
        $margin="0 0 20px 0"
        $borderRadius="4px"
        onClick={signInClickEvent}
      >
        로그인
      </Button>
      <Div $width="100%" $flex="h_between_center" $margin="0 0 20px 0">
        <Link to="/signUp">계정이 없으세요? 회원가입</Link>
        <Div>
          <Link to="/findID">아이디 찾기/</Link>
          <Link to="/resetPW">비밀번호 찾기</Link>
        </Div>
      </Div>
      <Button $width="100%" $borderRadius="4px">
        <KakaoLoginStyleBtn src={KakaoLoginBtn} />
      </Button>
    </Section>
  );
};
export default SignInContainer;
