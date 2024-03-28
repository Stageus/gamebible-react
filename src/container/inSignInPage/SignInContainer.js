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
import usePost from "../../hook/useFetch";
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
  // 인풋 값
  const { value: idValue, onChangeEvent: onChangeIdValue } = useInput("");
  const { value: pwValue, onChangeEvent: onChangePwValue } = useInput("");
  // /인풋 값

  const { data, loading, error, postRequest } = usePost();

  const [cookies, setCookies] = useCookies(["token"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.token) {
      navigate("/");
    }
  }, [cookies.token, navigate]);

  useEffect(() => {
    if (loading) {
      console.log("로그인 중 입니다.");
    } else if (error) {
      console.error("Error:", error.message);
    } else if (data && data.token) {
      setCookies("token", data.token, { path: "/" });
      navigate("/");
    }
  }, [loading, error, data, setCookies, navigate]);

  const submitData = async () => {
    if (!idValueValidation(idValue)) {
      return;
    }
    if (!pwValueValidation(pwValue)) {
      return;
    }
    await postRequest(`${process.env.REACT_APP_API_KEY}/account/auth`, {
      id: idValue,
      pw: pwValue,
    });
  };

  return (
    <Section $flex="v_center_center" $width="350px">
      <Img src={HeaderLogo} alt="HeaderLogo" />
      <InputItem
        {...{
          dummyInputData: dummyIdData,
          inputValue: idValue,
          inputChangeEvent: onChangeIdValue,
        }}
      ></InputItem>
      <InputItem
        {...{
          dummyInputData: dummyPWData,
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
        <Link to="/SignUpPage">계정이 없으세요? 회원가입</Link>
        <Div>
          <Link to="/FindIDPage">아이디 찾기/</Link>
          <Link to="/ResetPWPage">비밀번호 찾기</Link>
        </Div>
      </Div>
      <Button $width="100%" $borderRadius="4px">
        <KakaoLoginStyleBtn src={KakaoLoginBtn} />
      </Button>
    </Section>
  );
};
export default SignInContainer;
