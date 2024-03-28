import React, { useState } from "react";
import { useClick } from "../../hook/useClick";

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

const dummyIdData = {
  id: {
    key: "id",
    label: "아이디",
    button: "중복확인",
    placeholder: "4 ~ 20글자 제한",
    type: "id",
  },
};

const dummyEmailData = {
  email: {
    key: "email",
    label: "이메일",
    button: "인증전송",
    placeholder: "이메일 주소 입력",
    type: "email",
  },
};

const dummyVerificationData = {
  verificationCond: {
    key: "verificationCode",
    label: "인증번호",
    button: "인증확인",
    type: "verificationCode",
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

const KakaoLoginStyleBtn = styled(Img)`
  width: 100%;
`;

const SignUpContainer = () => {
  // 인증 버튼 체크 유무
  const [idCheck, setIdCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [verificationCodeCheck, setVerificationCodeCheck] = useState(false);
  // /인증 버튼 체크 유무

  // 인풋 값
  const { value: idValue, onChangeEvent: idInputChangeEvent } = useInput("");
  const { value: emailValue, onChangeEvent: emailInputChangeEvent } = useInput("");
  const { value: pwValue, onChangeEvent: pwInputChangeEvent } = useInput("");
  const { value: nicknameValue, onChangeEvent: nicknameChangeEvent } = useInput("");
  const { value: verificationCodeValue, onChangeEvent: verificationCodeInputChangeEvent } =
    useInput("");
  // /인풋 값

  // 타입에 따른 유효성 검사 함수
  const verificationClickEvent = (type, value) => {
    if (type === "id") {
      if (idValueValidation(value)) {
        setIdCheck(true);
      }
    }
    if (type === "email") {
      if (emailValueValidation(value)) {
        setEmailCheck(true);
      }
    }
    if (type === "verificationCode") {
      setVerificationCodeCheck(true);
    }
  };
  // /타입에 따른 유효성 검사 함수

  // 이용약관 상태
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
  // /이용약관 상태

  // 회원가입 전 모든 인풋 유효성 검사
  const SignUpClickEvent = () => {
    if (!idCheck) {
      return alert("아이디 중복 인증을 확인해주세요.");
    }
    if (!emailCheck) {
      return alert("이메일 인증을 확인해주세요");
    }
    if (!verificationCodeCheck) {
      return alert("이메일 인증을 확인해주세요");
    }
    if (!pwValueValidation(pwValue)) {
      return;
    }
    if (!nicknameValueValidation(nicknameValue)) {
      return;
    }
    if (!termsServiceChecked) {
      return alert("이용약관에 동의해주세요");
    }
    if (!privacyPolicyChecked) {
      return alert("개인정보 수집에 동의해주세요");
    }
    accountEvent();
  };
  // /회원가입 전 모든 인풋 유효성 검사

  // 회원가입 백엔드 통신
  const accountEvent = async () => {
    let formData = new FormData();
    formData.append("id", idValue);
    formData.append("pw", pwValue);
    formData.append("email", emailValue);

    const response = await fetch(`${process.env.REACT_APP_API_KEY}/account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idValue,
        pw: pwValue,
        email: emailValue,
      }),
    });
    const result = await response.json();

    if (result.success) {
      console.log(result.message);
    } else {
      console.log(result);
      console.log(result.message);
    }
  };
  // /회원가입 백엔드 통신

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
              inputChangeEvent: idInputChangeEvent,
              verificationCheckValue: idCheck,
              verificationClickEvent: verificationClickEvent,
            }}
          ></InputItem>
          {/* /아이디 인풋 */}

          {/* 이메일 인풋 */}
          <InputItem
            {...{
              dummyInputData: dummyEmailData,
              inputValue: emailValue,
              inputChangeEvent: emailInputChangeEvent,
              verificationCheckValue: emailCheck,
              verificationClickEvent: verificationClickEvent,
            }}
          ></InputItem>
          {/* /이메일 인풋 */}

          {/* 인증번호 인풋 */}
          <InputItem
            {...{
              dummyInputData: dummyVerificationData,
              inputValue: verificationCodeValue,
              inputChangeEvent: verificationCodeInputChangeEvent,
              verificationCheckValue: verificationCodeCheck,
              verificationClickEvent: verificationClickEvent,
            }}
          ></InputItem>
          {/* /인증번호 인풋 */}

          {/* 닉네임 인풋 */}
          <InputItem
            {...{
              dummyInputData: dummyNameData,
              inputValue: nicknameValue,
              inputChangeEvent: nicknameChangeEvent,
            }}
          ></InputItem>
          {/* /닉네임 인풋 */}

          {/* 비밀번호 인풋 */}
          <InputItem
            {...{
              dummyInputData: dummyPWData,
              inputValue: pwValue,
              inputChangeEvent: pwInputChangeEvent,
            }}
          ></InputItem>
          {/* /비밀번호 인풋 */}

          <Div $width="100%" $flex="v_start_start">
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


