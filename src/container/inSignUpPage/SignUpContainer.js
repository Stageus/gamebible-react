import React, { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import { useInput } from "../../hook/useInput";
import { useClick } from "../../hook/useClick";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Div } from "../../style/LayoutStyle";
import { Button } from "../../style/ButtonStyle";
import { Img } from "../../style/ImgStyle";
import { Section } from "../../style/LayoutStyle";

import IdInputContainer from "./IdInputContainer.js";
import EmailInputContainer from "../../container/inSignUpPage/EmailInputContainer";
import EmailAuthInputContainer from "../../container/inSignUpPage/EmailAuthInputContainer";
import NicknameInputContainer from "../../container/inSignUpPage/NicknameInputContainer.js";
import InputItem from "../../component/InputItem";
import MainLogo from "../../img/HeaderLogo.svg";
import KakaoLoginBtn from "../../img/kakaoLoginMediumWide.svg";

import { pwValueValidation } from "../../util/ValidationUtil";
import TermsServiceContainer from "./TermsServiceContainer";
import { useCookies } from "react-cookie";

const KakaoLoginStyleBtn = styled(Img)`
  width: 100%;
`;

const SignUpContainer = () => {
  const { data, error, status, request } = useFetch();
  const [cookies] = useCookies(["token"]);

  // 인풋 상태
  const { value: idValue, onChangeEvent: onChangeIdEvent } = useInput("");
  const { value: emailValue, onChangeEvent: onChangeEmailEvent } = useInput("");
  const { value: pwValue, onChangeEvent: onChangePwEvent } = useInput("");
  const { value: nicknameValue, onChangeEvent: onChangeNicknameEvent } = useInput("");
  // /인풋 상태
  const navigate = useNavigate();
  // 인증 체크
  const [idCheck, setIdCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [emailAuthCheck, setEmailAuthCheck] = useState(false);
  const [nicknameCheck, setNicknameCheck] = useState(false);
  // /인증 체크

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
    if (cookies.token) {
      alert("로그아웃 후 이용해주세요");
      navigate("/");
    }
  }, [cookies, navigate]);

  useEffect(() => {
    if (status === 200) {
      alert("회원가입에 성공하셨습니다.");
      navigate("/signIn");
    } else {
      console.log(error);
    }
  }, [data, error, status, navigate]);

  const submitSignUpEvent = async () => {
    if (!idCheck) {
      return alert("아이디 중복을 확인해주세요.");
    }
    if (!emailCheck) {
      return alert("이메일 인증을 확인해주세요");
    }
    if (!emailAuthCheck) {
      return alert("이메일 인증을 확인해주세요");
    }
    if (!nicknameCheck) {
      return alert("닉네임 중복을 확인해주세요");
    }
    if (!pwValueValidation(pwValue)) {
      return;
    }
    await request("/account", "POST", {
      id: idValue,
      pw: pwValue,
      email: emailValue,
      nickname: nicknameValue,
    });
  };

  return (
    <>
      <Section $padding="50px 0" $margin="70px 0 0 0" $width="100vw" $flex="h_center_center">
        <Div $flex="v_center_center" $width="350px">
          <Img src={MainLogo} alt="MainLogo" />
          {/* 아이디 인풋 */}
          <IdInputContainer {...{ idValue, onChangeIdEvent, idCheck, setIdCheck }} />
          {/* /아이디 인풋 */}
          {/* 이메일 인풋 */}
          <EmailInputContainer {...{ emailValue, onChangeEmailEvent, emailCheck, setEmailCheck }} />
          {/* /이메일 인풋 */}
          {/* 이메일 인증번호 인풋 */}
          <EmailAuthInputContainer {...{ emailAuthCheck, setEmailAuthCheck, emailValue }} />
          {/* /이메일 인증번호 인풋 */}
          {/* 닉네임 인풋 */}
          <NicknameInputContainer
            {...{ nicknameValue, onChangeNicknameEvent, nicknameCheck, setNicknameCheck }}
          />
          {/* /닉네임 인풋 */}
          {/* 비밀번호 인풋 */}
          <InputItem
            {...{
              key: "pw",
              type: "pw",
              label: "비밀번호",
              placeholder: "8 ~ 20글자 제한",
              inputValue: pwValue,
              inputChangeEvent: onChangePwEvent,
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
