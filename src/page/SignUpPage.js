import React, { useState } from "react";
import HeaderItem from "../component/HeaderItem";
import InputItem from "../component/InputItem";
import { Div } from "../style/LayoutStyle";
import styled from "styled-components";
import { Input } from "../style/InputStyle";

const dummyData = {
  userIdx: null,
};

const dummyIdData = {
  id: {
    key: "id",
    label: "아이디",
    button: "중복확인",
    placeholder: "4 ~ 20글자 제한",
  },
};

const dummyEmailData = {
  email: {
    key: "email",
    label: "이메일",
    button: "인증전송",
    placeholder: "이메일 주소 입력",
  },
};

const dummyVerificationData = {
  verificationCond: {
    key: "verificationCode",
    label: "인증번호",
    button: "인증확인",
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

const PositionDiv = styled(Div)`
  position: relative;
  top: 70px;
`;
const SignUpPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const agreeBtnClickEvent = () => {
    setIsChecked(!isChecked);
  };
  const agreeAllBtnClickEvent = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  return (
    <>
      <HeaderItem {...{ dummyData }}></HeaderItem>
      <PositionDiv $flex="v_center_center" $width="350px">
        <InputItem {...{ dummyInputData: dummyIdData }}></InputItem>
        <InputItem {...{ dummyInputData: dummyEmailData }}></InputItem>
        <InputItem {...{ dummyInputData: dummyVerificationData }}></InputItem>
        <InputItem {...{ dummyInputData: dummyNameData }}></InputItem>
        <InputItem {...{ dummyInputData: dummyPWData }}></InputItem>
        <Input
          checked={isChecked}
          onChange={agreeAllBtnClickEvent}
          $width="12px"
          $height="12px"
          type="radio"
        ></Input>
        <label onClick={agreeAllBtnClickEvent}>전체 동의</label>
        <Input
          checked={isChecked}
          onChange={agreeBtnClickEvent}
          $width="12px"
          $height="12px"
          type="radio"
        ></Input>
        <label onClick={agreeBtnClickEvent}>이용약관 (필수)</label>
        <Input onChange={agreeBtnClickEvent} $width="12px" $height="12px" type="radio"></Input>
        <label onClick={agreeBtnClickEvent}>개인정보 (필수)</label>
      </PositionDiv>
    </>
  );
};

export default SignUpPage;
