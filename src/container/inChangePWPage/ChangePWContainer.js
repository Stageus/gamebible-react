import React, { useEffect, useState } from "react";
import { useInput } from "../../hook/useInput";
import InputItem from "../../component/InputItem";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";
import { pwValueValidation } from "../../util/ValidationUtil";
import { useCookies } from "react-cookie";
import useFetch from "../../hook/useFetch";
import { useNavigate } from "react-router-dom";

const ChangePWWrapper = styled(Div)`
  position: relative;
  top: 70px;
`;

const ChangePWContainer = () => {
  const [cookies, , removeCookie] = useCookies(["resetPWToken"]);
  const { data, status, request } = useFetch();
  const { value: pwValue, onChangeEvent: onChangePwEvent } = useInput("");

  const navigate = useNavigate();

  const ChangePWClickEvent = () => {
    if (pwValueValidation(pwValue)) {
      request(
        "/account/pw",
        "GET",
        { pw: pwValue },
        { Authorization: `Bearer ${cookies.resetPWToken}` }
      );
    } else {
      alert("비밀번호는 8 ~ 20글자 제한입니다");
    }
  };

  useEffect(() => {
    if (!cookies.resetPWToken) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (status === 200) {
      removeCookie("resetPWToken", { path: "/changePW" });
      alert("비밀번호 변경이 완료되었습니다.");
    }
    if (status === 400) {
      alert("올바른 값을 입력해주세요.");
    }
    if (status === 401) {
      alert("토큰이 만료되었습니다");
    }
    if (status === 403) {
      alert("권한이 없습니다.");
    }
    if (status === 404) {
      alert("값을 찾을 수 없습니다.");
    }
    if (status === 500) {
      alert("네트워크가 불안정합니다 잠시후 다시 이용해주세요");
    }
  }, [data, status]);
  return (
    <ChangePWWrapper $flex="v_center_center" $width="350px">
      <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
      <InputItem
        {...{
          key: "pw",
          type: "pw",
          label: "비밀번호",
          placeholder: "8 ~ 20글자 제한",
          inputValue: pwValue,
          inputChangeEvent: onChangePwEvent,
        }}
      />
      <Button
        $flex="h_center_center"
        $width="100%"
        $color="white"
        $height="50px"
        $borderRadius="4px"
        onClick={ChangePWClickEvent}
      >
        비밀번호 변경하기
      </Button>
    </ChangePWWrapper>
  );
};

export default ChangePWContainer;
