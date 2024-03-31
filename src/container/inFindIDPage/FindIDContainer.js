import React, { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import { useInput } from "../../hook/useInput";

import InputItem from "../../component/InputItem";
import { emailValueValidation } from "../../util/ValidationUtil";
import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";

const emailData = {
  pw: {
    key: "email",
    label: "이메일",
    placeholder: "가입된 이메일 주소 입력",
  },
};

const FindIDWarpper = styled(Div)`
  position: relative;
  top: 70px;
`;

const FindIDContainer = () => {
  const { data, error, status, request } = useFetch();
  const { value: emailValue, onChangeEvent: onChangeEmailEvent } = useInput("");

  useEffect(() => {
    if (status === 200) {
      alert(`가입된 아이디는 ${data.id}입니다.`);
    } else if (status === 400) {
      alert("일치하는 사용자가 존재하지 않습니다");
    } else if (status === 409) {
      alert("일치하는 사용자가 존재하지 않습니다");
    }
  }, [data, error, status]);

  const findIdClickEvent = async () => {
    if (!emailValueValidation(emailValue)) {
      return;
    }
    await request("/account/id", "GET");
  };

  return (
    <FindIDWarpper $flex="v_center_center" $width="350px">
      <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
      <InputItem
        {...{
          dummyInputData: emailData,
          inputValue: emailValue,
          inputChangeEvent: onChangeEmailEvent,
        }}
      />
      <Button
        $flex="h_center_center"
        $width="100%"
        $color="white"
        $height="50px"
        $borderRadius="4px"
        onClick={findIdClickEvent}
      >
        아이디 찾기
      </Button>
    </FindIDWarpper>
  );
};

export default FindIDContainer;
