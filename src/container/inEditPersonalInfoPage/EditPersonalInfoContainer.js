import React from "react";
import InputItem from "../../component/InputItem";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";
import { Link } from "react-router-dom";

const dummyEmailData = {
  email: {
    key: "email",
    label: "이메일",
    placeholder: "qwer@email.com",
  },
  nickName: {
    key: "nickName",
    label: "닉네임",
    placeholder: "홍길동",
  },
};

const EditPersonalInfoWrapper = styled(Div)`
  position: relative;
  top: 70px;
`;

const FullWideLink = styled(Link)`
  width: 100%;
`;

const EditPersonalInfoContainer = () => {
  return (
    <EditPersonalInfoWrapper $flex="v_center_center" $width="350px">
      <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
      <InputItem {...{ dummyInputData: dummyEmailData }} />
      <Button
        $flex="h_center_center"
        $width="100%"
        $color="white"
        $height="50px"
        $borderRadius="4px"
        $margin="0 0 20px 0"
      >
        저장하기
      </Button>
      <FullWideLink to="/personalInfo">
        <Button
          $flex="h_center_center"
          $width="100%"
          $color="white"
          $height="50px"
          $borderRadius="4px"
        >
          취소하기
        </Button>
      </FullWideLink>
    </EditPersonalInfoWrapper>
  );
};

export default EditPersonalInfoContainer;
