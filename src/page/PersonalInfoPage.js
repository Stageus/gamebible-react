import React from "react";
import HeaderItem from "../component/HeaderItem";
import FooterItem from "../component/FooterItem";
import LabelText from "../component/LabelText";

import MainLogo from "../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../style/ButtonStyle";
import { Div, Section } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";

import { Link } from "react-router-dom";

const duumyUserData = {
  id: {
    key: "id",
    label: "아이디",
    text: "qwer1234",
  },
  email: {
    key: "email",
    label: "이메일",
    text: "qwer@email.com",
  },
  nickname: {
    key: "nickname",
    label: "닉네임",
    text: "홍길동",
  },
};

const PositionDiv = styled(Div)`
  position: relative;
  top: 70px;
`;

const FullWideLink = styled(Link)`
  width: 100%;
  color: white;
`;

const DeleteClickEvent = () => {
  const result = window.confirm("정말로 탈퇴하시겠습니까?");
  if (result) {
    console.log("탈퇴 API 호출");
  } else {
    return;
  }
};

const ChangePWPage = () => {
  return (
    <>
      <HeaderItem {...{ userIdx: duumyUserData.nickname.text }}></HeaderItem>
      <Section $width="100vw" $height="90vh" $flex="h_center_center">
        <PositionDiv $flex="v_center_center" $width="350px">
          <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
          <LabelText {...{ dummyTextData: duumyUserData }}></LabelText>
          <FullWideLink to="/EditPersonalInfoPage">
            <Button
              $width="100%"
              $height="50px"
              $flex="h_center_center"
              $color="white"
              $borderRadius="4px"
              $margin="0 0 20px 0"
            >
              수정하기
            </Button>
          </FullWideLink>
          <Button
            $width="100%"
            $height="50px"
            $flex="h_center_center"
            $color="white"
            $borderRadius="4px"
            $margin="0 0 20px 0"
            onClick={DeleteClickEvent}
          >
            탈퇴하기
          </Button>
        </PositionDiv>
      </Section>
      <FooterItem></FooterItem>
    </>
  );
};

export default ChangePWPage;
