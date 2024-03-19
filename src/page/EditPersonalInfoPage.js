import React from "react";
import HeaderItem from "../component/HeaderItem";
import InputItem from "../component/InputItem";
import FooterItem from "../component/FooterItem";

import MainLogo from "../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../style/ButtonStyle";
import { Div, Section } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";
import { Link } from "react-router-dom";

const dummyData = {
  userIdx: "1234",
};

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

const PositionDiv = styled(Div)`
  position: relative;
  top: 70px;
`;

const FullWideLink = styled(Link)`
  width: 100%;
`;

const EditPersonalInfoPage = () => {
  return (
    <>
      <HeaderItem {...{ dummyData }}></HeaderItem>
      <Section $width="100vw" $height="90vh" $flex="h_center_center">
        <PositionDiv $flex="v_center_center" $width="350px">
          <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
          <InputItem {...{ dummyInputData: dummyEmailData }}></InputItem>
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
          <FullWideLink to="/PersonalInfoPage">
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
        </PositionDiv>
      </Section>
      <FooterItem></FooterItem>
    </>
  );
};

export default EditPersonalInfoPage;
