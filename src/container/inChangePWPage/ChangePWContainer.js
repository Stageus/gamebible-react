import React, { useState } from "react";
import InputItem from "../../component/InputItem";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";
import { pwValueValidation } from "../../util/ValidationUtil";

const dummyEmailData = {
  pw: {
    key: "pw",
    type: "pw",
    label: "비밀번호",
    placeholder: "8 ~ 20글자 제한",
  },
};

const ChangePWWrapper = styled(Div)`
  position: relative;
  top: 70px;
`;

const ChangePWContainer = () => {
  const [pwValue, setPwValue] = useState("");
  const ChangePWClickEvent = () => {
    if (!pwValueValidation(pwValue)) {
      return;
    }
    console.log("비밀번호 변경 API 호출");
  };
  return (
    <ChangePWWrapper $flex="v_center_center" $width="350px">
      <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
      <InputItem {...{ dummyInputData: dummyEmailData, inputValue: setPwValue }} />
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
