import React, { useState } from "react";
import HeaderItem from "../component/HeaderItem";
import InputItem from "../component/InputItem";
import FooterItem from "../component/FooterItem";

import MainLogo from "../img/HeaderLogo.svg";
import styled from "styled-components";

import { setSize } from "../style/SetStyle";
import { Section } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";
import { Div } from "../style/LayoutStyle";
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

const Label = styled.label`
  margin-left: 10px;
  font-size: ${setSize("small")};
`;

const SignUpPage = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [termsServiceChecked, setTermsServiceChecked] = useState(false);
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);

  const termsServiceClickEvent = () => {
    setTermsServiceChecked(!termsServiceChecked);
  };
  const privacyPolicyClickEvent = () => {
    setPrivacyPolicyChecked(!privacyPolicyChecked);
  };
  const agreeAllBtnClickEvent = () => {
    if (!isAllChecked) {
      setTermsServiceChecked(!termsServiceChecked);
      setPrivacyPolicyChecked(!privacyPolicyChecked);
      setIsAllChecked(true);
    } else {
      setTermsServiceChecked(!termsServiceChecked);
      setPrivacyPolicyChecked(!privacyPolicyChecked);
      setIsAllChecked(false);
    }
  };
  return (
    <>
      <HeaderItem {...{ dummyData }}></HeaderItem>
      <Section $margin="70px 0 0 0" $width="100vw" $height="90vh" $flex="h_center_center">
        <Div $flex="v_center_center" $width="350px">
          <Img src={MainLogo} alt="MainLogo" />
          <InputItem {...{ dummyInputData: dummyIdData }}></InputItem>
          <InputItem {...{ dummyInputData: dummyEmailData }}></InputItem>
          <InputItem {...{ dummyInputData: dummyVerificationData }}></InputItem>
          <InputItem {...{ dummyInputData: dummyNameData }}></InputItem>
          <InputItem {...{ dummyInputData: dummyPWData }}></InputItem>
          <Div $width="100%" $flex="v_start_start">
            <Div $flex="h_between_center" $margin="0 0 10px 0">
              <Input
                type="checkbox"
                onChange={agreeAllBtnClickEvent}
                checked={isAllChecked}
              ></Input>
              <Label $fontSize="small" onClick={agreeAllBtnClickEvent}>
                전체 동의
              </Label>
            </Div>
            <Div $flex="h_between_center" $margin="0 0 10px 0">
              <Input
                type="checkbox"
                onChange={termsServiceClickEvent}
                checked={termsServiceChecked}
              ></Input>
              <Label $fontSize="small" onClick={termsServiceClickEvent}>
                이용약관 (필수)
              </Label>
            </Div>
            <Div $flex="h_between_center" $margin="0 0 10px 0">
              <Input
                type="checkbox"
                onChange={privacyPolicyClickEvent}
                checked={privacyPolicyChecked}
              ></Input>
              <Label $fontSize="small" onClick={privacyPolicyClickEvent}>
                개인정보 (필수)
              </Label>
            </Div>
          </Div>
        </Div>
      </Section>
      <FooterItem></FooterItem>
    </>
  );
};

export default SignUpPage;
