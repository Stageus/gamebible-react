import React from "react";

import styled from "styled-components";
import { setColor } from "../style/SetStyle";
import { Div } from "../style/LayoutStyle";
import { Input } from "../style/InputStyle";
import { Button } from "../style/ButtonStyle";
import { P } from "../style/TextStyle";
import { Img } from "../style/ImgStyle";
import { Section } from "../style/LayoutStyle";

import InputItem from "../component/InputItem";
import MainLogo from "../img/HeaderLogo.svg";
import KakaoLoginBtn from "../img/kakaoLoginMediumWide.svg";

import { useClick } from "../hook/useClick";
import AgreementContainer from "./AgreementContainer";

const dummyIdData = {
  id: {
    key: "id",
    label: "아이디",
    button: "중복확인",
    placeholder: "4 ~ 20글자 제한",
  },
};

const dummyEmailData = {
  email: {
    key: "email",
    label: "이메일",
    button: "인증전송",
    placeholder: "이메일 주소 입력",
  },
};

const dummyVerificationData = {
  verificationCond: {
    key: "verificationCode",
    label: "인증번호",
    button: "인증확인",
  },
};

const dummyNameData = {
  name: {
    key: "name",
    label: "닉네임",
    placeholder: "2 ~ 20글자 제한",
  },
};

const dummyPWData = {
  pw: {
    key: "pw",
    type: "pw",
    label: "비밀번호",
    placeholder: "8 ~ 20글자 제한",
  },
};

const BorderStyleBtn = styled(Button)`
  border: 1px solid ${setColor("black")};
  border-radius: 4px;
`;

const BorderStyleNoneBtn = styled(Button)`
  border-style: none;
  border-radius: 4px;
`;

const KakaoLoginStyleBtn = styled(Img)`
  width: 100%;
`;

const SignUpContainer = () => {
  // const [isAllChecked, setIsAllChecked] = useClick(false);

  // const agreeAllBtnClickEvent = () => {
  //   if (!isAllChecked) {₩
  //     setTermsServiceChecked(!termsServiceChecked);
  //     setPrivacyPolicyChecked(!privacyPolicyChecked);
  //     setIsAllChecked(true);
  //   } else {
  //     setTermsServiceChecked(!termsServiceChecked);
  //     setPrivacyPolicyChecked(!privacyPolicyChecked);
  //     setIsAllChecked(false);
  //   }
  // };

  return (
    <>
      <Section $padding="50px 0" $margin="70px 0 0 0" $width="100vw" $flex="h_center_center">
        <Div $flex="v_center_center" $width="350px">
          <Img src={MainLogo} alt="MainLogo" />
          <InputItem {...{ dummyInputData: dummyIdData }}></InputItem>
          <InputItem {...{ dummyInputData: dummyEmailData }}></InputItem>
          <InputItem {...{ dummyInputData: dummyVerificationData }}></InputItem>
          <InputItem {...{ dummyInputData: dummyNameData }}></InputItem>
          <InputItem {...{ dummyInputData: dummyPWData }}></InputItem>
          <Div $width="100%" $flex="v_start_start">
            <AgreementContainer />
            <BorderStyleNoneBtn
              $width="100%"
              $height="50px"
              $flex="h_center_center"
              $color="white"
              $margin="0 0 20px 0"
            >
              회원가입
            </BorderStyleNoneBtn>
            <BorderStyleNoneBtn $width="100%">
              <KakaoLoginStyleBtn src={KakaoLoginBtn} />
            </BorderStyleNoneBtn>
          </Div>
        </Div>
      </Section>
    </>
  );
};

export default SignUpContainer;
