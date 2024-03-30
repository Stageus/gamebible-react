import React, { useState } from "react";
import useFetch from "../../hook/useFetch";

import styled from "styled-components";
import { Div } from "../../style/LayoutStyle";
import { Button } from "../../style/ButtonStyle";
import { Img } from "../../style/ImgStyle";
import { Section } from "../../style/LayoutStyle";

import InputItem from "../../component/InputItem";
import MainLogo from "../../img/HeaderLogo.svg";
import KakaoLoginBtn from "../../img/kakaoLoginMediumWide.svg";

import {
  idValueValidation,
  pwValueValidation,
  emailValueValidation,
  nicknameValueValidation,
} from "../../util/ValidationUtil";
import TermsServiceContainer from "./TermsServiceContainer";
import { useInput } from "../../hook/useInput";
import { useClick } from "../../hook/useClick";

const dummyIdData = {
  id: {
    key: "id",
    type: "id",
    label: "아이디",
    button: "중복확인",
    placeholder: "4 ~ 20글자 제한",
  },
};

const dummyEmailData = {
  email: {
    key: "email",
    type: "email",
    label: "이메일",
    button: "인증전송",
    placeholder: "이메일 주소 입력",
  },
};

const dummyVerificationData = {
  verificationCond: {
    key: "verificationCode",
    type: "verificationCode",
    label: "인증번호",
    button: "인증확인",
  },
};

const dummyNameData = {
  name: {
    key: "nickname",
    type: "nickname",
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

const KakaoLoginStyleBtn = styled(Img)`
  width: 100%;
`;

const SignUpContainer = () => {
  const { data, error, status, request } = useFetch();

  // 인풋 상태
  const { value: idValue, onChangeEvent: onChangeIdEvent } = useInput("");
  const { value: emailValue, onChangeEvent: onChangeEmailEvent } = useInput("");
  const { value: pwValue, onChangeEvent: onChangePwEvent } = useInput("");
  const { value: nicknameValue, onChangeEvent: onChangeNicknameEvent } = useInput("");
  const { value: verificationValue, onChangeEvent: onChangeVerificationValue } = useInput("");
  // /인풋 상태

  // 인증 체크
  const [idCheck, setIdCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [verificationCheck, setVerificationCheck] = useState(false);

  const {
    click: termsServiceChecked,
    setClick: setTermsServiceChecked,
    clickEvent: termsServiceCheckedEvent,
  } = useClick(false);
  const {
    click: privacyPolicyChecked,
    setClick: setPrivacyPolicyChecked,
    clickEvent: privacyPolicyCheckedEvent,
  } = useClick(false);
  // /인증 체크

  const verificationClickEvent = (type, inputValue) => {
    switch (type) {
      case "id":
        if (idValueValidation(inputValue)) setIdCheck(true);
        break;
      case "email":
        if (emailValueValidation(emailValue)) setEmailCheck(true);
        break;
      case "verificationCode":
        if (verificationValue.length === 4) setVerificationCheck(true);
        else alert("인증번호를 바르게 입력해주세요");
        break;
      default:
        break;
    }
  };

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
      return alert("비밀번호는 8 ~ 20글자 제한입니다");
    }
    if (!nicknameValueValidation(nicknameValue)) {
      return alert("닉네임은 2 ~ 20글자 제한입니다");
    }
    accountEvent();
  };

  const accountEvent = async () => {
    await request("/account", "POST", { id: idValue, pw: pwValue, email: emailValue });
  };

  const emailVerificationCheck = (value) => {
    return value === "1234";
  };

  return (
    <>
      <Section $padding="50px 0" $margin="70px 0 0 0" $width="100vw" $flex="h_center_center">
        <Div $flex="v_center_center" $width="350px">
          <Img src={MainLogo} alt="MainLogo" />
          {/* 아이디 인풋 */}
          <InputItem
            {...{
              dummyInputData: dummyIdData,
              inputValue: idValue,
              inputChangeEvent: onChangeIdEvent,
              verificationCheckValue: idCheck,
              verificationClickEvent,
            }}
          ></InputItem>
          {/* /아이디 인풋 */}
          {/* 이메일 인풋 */}
          <InputItem
            {...{
              dummyInputData: dummyEmailData,
              inputValue: emailValue,
              inputChangeEvent: onChangeEmailEvent,
              verificationCheckValue: emailCheck,
              verificationClickEvent,
            }}
          ></InputItem>
          {/* /이메일 인풋 */}
          {/* 이메일 인증번호 인풋 */}
          <InputItem
            {...{
              dummyInputData: dummyVerificationData,
              inputValue: verificationValue,
              inputChangeEvent: onChangeVerificationValue,
              verificationCheckValue: verificationCheck,
              verificationClickEvent,
            }}
          ></InputItem>
          {/* /이메일 인증번호 인풋 */}
          {/* 닉네임 인풋 */}
          <InputItem
            {...{
              dummyInputData: dummyNameData,
              inputValue: nicknameValue,
              onChangeEvent: onChangeNicknameEvent,
            }}
          ></InputItem>
          {/* /닉네임 인풋 */}
          {/* 비밀번호 인풋 */}
          <InputItem
            {...{
              dummyInputData: dummyPWData,
              inputValue: pwValue,
              onChangeEvent: onChangePwEvent,
            }}
          ></InputItem>
          {/* 비밀번호 인풋 */}
          <Div $width="100%" $flex="v_start_start">
            {/* 약관 동의 컨테이너 */}
            <TermsServiceContainer
              {...{
                termsServiceChecked,
                setTermsServiceChecked,
                termsServiceCheckedEvent,

                privacyPolicyChecked,
                setPrivacyPolicyChecked,
                privacyPolicyCheckedEvent,
              }}
            />
            {/* /약관 동의 컨테이너 */}
            <Button
              $width="100%"
              $height="50px"
              $flex="h_center_center"
              $color="white"
              $margin="0 0 20px 0"
              $borderRadius="4px"
              onClick={SignUpClickEvent}
            >
              회원가입
            </Button>
            <Button $width="100%" $borderRadius="4px">
              <KakaoLoginStyleBtn src={KakaoLoginBtn} />
            </Button>
          </Div>
        </Div>
      </Section>
    </>
  );
};

export default SignUpContainer;
