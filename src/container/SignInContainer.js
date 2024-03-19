import React from "react";
import InputItem from "../component/InputItem";
import HeaderLogo from "../img/HeaderLogo.svg";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Img } from "../style/ImgStyle";
import { Div, Section } from "../style/LayoutStyle";
import { Button } from "../style/ButtonStyle";
import KakaoLoginBtn from "../img/kakaoLoginMediumWide.svg";

const BorderBtn = styled(Button)`
  border-radius: 4px;
  border-style: none;
`;

const BorderStyleNoneBtn = styled(Button)`
  border-style: none;
  border-radius: 4px;
`;
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
  return (
    <Section $flex="v_center_center" $width="350px">
      <Img src={HeaderLogo} alt="HeaderLogo" />
      <InputItem {...{ dummyInputData: dummyIdData }}></InputItem>
      <InputItem {...{ dummyInputData: dummyPWData }}></InputItem>
      <BorderBtn
        $flex="h_center_center"
        $width="100%"
        $height="50px"
        $color="white"
        $margin="0 0 20px 0"
      >
        로그인
      </BorderBtn>
      <Div $width="100%" $flex="h_between_center" $margin="0 0 20px 0">
        <Link>계정이 없으세요? 회원가입</Link>
        <Div>
          <Link>아이디 찾기/</Link>
          <Link>비밀번호 찾기</Link>
        </Div>
      </Div>
      <BorderStyleNoneBtn $width="100%">
        <KakaoLoginStyleBtn src={KakaoLoginBtn} />
      </BorderStyleNoneBtn>
    </Section>
  );
};
export default SignInContainer;
