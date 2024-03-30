import React, { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import useConfirm from "../../hook/useConfirm";
import { useInput } from "../../hook/useInput";
import { useClick } from "../../hook/useClick";
import { useNavigate } from "react-router-dom";

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
  const { value: emailAuth, onChangeEvent: onChangeEmailAuth } = useInput("");
  // /인풋 상태

  const navigate = useNavigate();

  // 인증 체크
  const [idCheck, setIdCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [emailAuthCheck, setEmailAuthCheck] = useState(false);

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

  useEffect(() => {
    if (data) {
      if (status === 200) {
      } else {
        return;
      }
    }
  }, [data, error, status, navigate]);

  //문제점 useEffect로 data의 상태를 나타내서 올바르면
  //해당 아이디,이메일 confirm창을 열어줘야 하는데
  //해당 통신이 아이디 중복체크인지, 이메일 중복체크인지 모름

  //해결 예상
  //컴포넌트를 하나 더 새로 파야할 것 같음

  // 인증 타입에 따른 인풋 비활성화
  const verificationClickEvent = (type, inputValue) => {
    if (type === "id") {
      if (idValueValidation(inputValue)) {
        setIdCheck(true);
      }
      return;
    }
    if (type === "email") {
      if (emailValueValidation(emailValue)) {
        setEmailCheck(true);
      }
      return;
    }
    if (type === "verificationCode") {
      console.log("인증번호가 맞는지?");
    }
  };

  // /인증 타입에 따른 인풋 비활성화

  const confirmId = useConfirm(
    "사용가능한 아이디입니다 사용하시겠습니까?",
    () => {
      setIdCheck(true);
    },
    () => {
      setIdCheck(false);
    }
  );
  const confirmEmail = useConfirm(
    "인증번호를 전송했습니다",
    () => {
      setEmailCheck(true);
    },
    () => {
      setEmailCheck(false);
    }
  );

  const submitIdCheckEvent = async () => {
    await request("/account/id/check", "POST", { id: idValue });
  };
  const submitEmailCheckEvent = async () => {
    await request("/account/email/check", "POST", { email: emailValue });
  };

  const submitEmailVerification = async () => {
    await request("/account/email/auth", "POST", {
      auth: emailAuth,
    });
  };

  const submitSignUpEvent = async () => {
    if (!idCheck) {
      return alert("아이디 중복 인증을 확인해주세요.");
    }
    if (!emailCheck) {
      return alert("이메일 인증을 확인해주세요");
    }
    if (!emailAuthCheck) {
      return alert("이메일 인증을 확인해주세요");
    }
    if (!pwValueValidation(pwValue)) {
      return alert("비밀번호는 8 ~ 20글자 제한입니다");
    }
    if (!nicknameValueValidation(nicknameValue)) {
      return alert("닉네임은 2 ~ 20글자 제한입니다");
    }
    await request("/account", "POST", { id: idValue, pw: pwValue, email: emailValue });
  };

  const emailemailAuthCheck = (value) => {
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
              inputValue: emailAuth,
              inputChangeEvent: onChangeEmailAuth,
              verificationCheckValue: emailAuthCheck,
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
              onClick={submitSignUpEvent}
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
