import React, { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";

import InputItem from "../../component/InputItem";
import { emailValueValidation } from "../../util/ValidationUtil";
import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";

const dummyEmailData = {
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
  const [emailValue, setEmailValue] = useState("");

  useEffect(() => {
    if (data) {
      console.log(data);
      console.log(status);
    } else if (error) {
      console.log(error);
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
      <InputItem {...{ dummyInputData: dummyEmailData, inputValue: setEmailValue }} />
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
