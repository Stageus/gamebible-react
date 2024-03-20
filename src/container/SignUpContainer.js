import React, { useState } from "react";

import styled from "styled-components";
import { Div } from "../style/LayoutStyle";
import { Button } from "../style/ButtonStyle";
import { Img } from "../style/ImgStyle";
import { Section } from "../style/LayoutStyle";

import InputItem from "../component/InputItem";
import MainLogo from "../img/HeaderLogo.svg";
import KakaoLoginBtn from "../img/kakaoLoginMediumWide.svg";

import {
  idValueValidation,
  pwValueValidation,
  emailValueValidation,
  nicknameValueValidation,
} from "../util/ValidationUtil";
import TermsServiceContainer from "./TermsServiceContainer";

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

const BorderStyleNoneBtn = styled(Button)`
  border-style: none;
  border-radius: 4px;
`;

const KakaoLoginStyleBtn = styled(Img)`
  width: 100%;
`;

const SignUpContainer = () => {
  const [idValue, setIdValue] = useState("");
  const [idCheck, setIdCheck] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);

  const [pwValue, setPwValue] = useState("");

  const [verificationValue, setVerificationValue] = useState("");
  const [verificationCheck, setVerificationCheck] = useState(false);

  const [nicknameValue, setNicknameValue] = useState("");
  const [nicknameCheck, setNicknameCheck] = useState(false);

  const SignUpClickEvent = () => {
    if (!idCheck) {
      return alert("아이디 중복 인증을 확인해주세요.");
    }
    if (!emailCheck) {
      return alert("이메일 인증을 확인해주세요");
    }
    if (!verificationCheck) {
      return alert("이메일 인증을 확인해주세요");
    }
    if (!pwValueValidation(pwValue)) {
      return;
    }
    if (!nicknameValueValidation(nicknameValue)) {
      return;
    }

    console.log("회원가입 성공!");
  };

  const emailVerificationCheck = (value) => {
    return value === "1234";
  };

  return (
    <>
      <Section $padding="50px 0" $margin="70px 0 0 0" $width="100vw" $flex="h_center_center">
        <Div $flex="v_center_center" $width="350px">
          <Img src={MainLogo} alt="MainLogo" />
          <InputItem
            {...{
              dummyInputData: dummyIdData,
              inputValue: setIdValue,
              validationCheck: setIdCheck,
              validationFcn: idValueValidation,
            }}
          ></InputItem>
          <InputItem
            {...{
              dummyInputData: dummyEmailData,
              inputValue: setEmailValue,
              validationCheck: setEmailCheck,
              validationFcn: emailValueValidation,
            }}
          ></InputItem>
          <InputItem
            {...{
              dummyInputData: dummyVerificationData,
              inputValue: setVerificationValue,
              validationCheck: setVerificationCheck,
              validationFcn: emailVerificationCheck,
            }}
          ></InputItem>
          <InputItem
            {...{
              dummyInputData: dummyNameData,
              inputValue: setNicknameValue,
            }}
          ></InputItem>
          <InputItem
            {...{
              dummyInputData: dummyPWData,
              inputValue: setPwValue,
            }}
          ></InputItem>
          <Div $width="100%" $flex="v_start_start">
            <TermsServiceContainer />
            <BorderStyleNoneBtn
              $width="100%"
              $height="50px"
              $flex="h_center_center"
              $color="white"
              $margin="0 0 20px 0"
              onClick={SignUpClickEvent}
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
