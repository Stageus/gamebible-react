import React, { useEffect } from "react";
import InputItem from "../../component/InputItem";
import useFetch from "../../hook/useFetch";
import { useInput } from "../../hook/useInput";

import { emailValueValidation } from "../../util/ValidationUtil";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";
import { useCookies } from "react-cookie";

const PositionDiv = styled(Div)`
  position: relative;
  top: 70px;
`;

const ResetPWContainer = () => {
  const { data, status, request } = useFetch();
  const [, setCookies] = useCookies(["resetPWToken"]);
  const { value: emailValue, onChangeEvent: onChangeEmailEvent } = useInput("");

  useEffect(() => {
    if (status === 200) {
      setCookies("resetPWToken", data?.token, { path: "/changePW" });
      alert("가입된 이메일에 비밀번호 변경 링크를 전송했습니다.");
      console.log(data);
    } else if (status === 400) {
      alert("올바른 값이 아닙니다.");
    } else if (status === 409) {
      alert("가입되지 않은 이메일입니다.");
    }
  }, [data, status]);
  const resetPwSubmitEvent = () => {
    if (emailValueValidation(emailValue)) {
      request("/account/pw/email", "POST", { email: emailValue });
    }
  };
  return (
    <PositionDiv $flex="v_center_center" $width="350px">
      <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
      <InputItem
        {...{
          key: "email",
          label: "이메일",
          placeholder: "가입된 이메일 주소 입력",
          inputValue: emailValue,
          inputChangeEvent: onChangeEmailEvent,
        }}
      ></InputItem>
      <Button
        $flex="h_center_center"
        $width="100%"
        $color="white"
        $height="50px"
        $borderRadius="4px"
        onClick={resetPwSubmitEvent}
      >
        이메일 전송
      </Button>
    </PositionDiv>
  );
};

export default ResetPWContainer;
