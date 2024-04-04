import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputItem from "../../component/InputItem";
import HeaderLogo from "../../img/HeaderLogo.svg";

import { useInput } from "../../hook/useInput";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Img } from "../../style/ImgStyle";
import { Div, Section } from "../../style/LayoutStyle";
import { Button } from "../../style/ButtonStyle";
import { idValueValidation, pwValueValidation } from "../../util/ValidationUtil";
import KakaoLoginBtn from "../../img/kakaoLoginMediumWide.svg";
import { useCookies } from "react-cookie";
import useFetch from "../../hook/useFetch";
const KakaoLoginStyleBtn = styled(Img)`
  width: 100%;
`;

const SignInContainer = () => {
  const { data, error, status, request } = useFetch();

  // 인풋 값
  const { value: idValue, onChangeEvent: onChangeIdValue } = useInput("");
  const { value: pwValue, onChangeEvent: onChangePwValue } = useInput("");
  // /인풋 값

  const [cookies, setCookies] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.token) {
      navigate("/");
    }
  }, [cookies.token, navigate]);

  useEffect(() => {
    if (status === 400) {
      alert("유효하지 않은 아이디 입니다.");
    }
    if (status === 401) {
      alert("유효하지 않은 비밀번호 입니다.");
    } else if (data && data.token) {
      setCookies("token", data.token, { path: "/" });
      navigate("/");
    }
  }, [data, error, status, setCookies, navigate]);

  const submitData = async () => {
    if (!idValueValidation(idValue)) {
      return;
    }
    if (!pwValueValidation(pwValue)) {
      return;
    }
    await request(`/account/auth`, "POST", {
      id: idValue,
      pw: pwValue,
    });
  };

  return (
    <Section $flex="v_center_center" $width="350px">
      <Img src={HeaderLogo} alt="HeaderLogo" />
      <InputItem
        {...{
          key: "id",
          type: "id",
          placeholder: "아이디",
          inputValue: idValue,
          inputChangeEvent: onChangeIdValue,
        }}
      ></InputItem>
      <InputItem
        {...{
          key: "pw",
          type: "pw",
          placeholder: "비밀번호",
          inputValue: pwValue,
          inputChangeEvent: onChangePwValue,
        }}
      ></InputItem>
      <Button
        $flex="h_center_center"
        $width="100%"
        $height="50px"
        $color="white"
        $margin="0 0 20px 0"
        $borderRadius="4px"
        onClick={submitData}
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
