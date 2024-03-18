import React from "react";
import { Link, useLocation } from "react-router-dom";
import navToggleAtom from "../recoil/navToggleAtom";
import { useRecoilState } from "recoil";
import HeaderLogo from "../img/HeaderLogo.svg";
import SearchIcon from "../img/searchIcon.svg";
import MenuIcon from "../img/menuIcon.svg";
import NotiIcon from "../img/notiIcon.svg";
import UserIcon from "../img/userIcon.svg";

import styled from "styled-components";
import { Header, Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";
import { Input } from "../style/InputStyle";
import { Button } from "../style/ButtonStyle";
import { setColor } from "../style/SetStyle";

const FixedHeader = styled(Header)`
  position: fixed;
  top: 0;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  background-color: ${setColor("white")};
  z-index: 1000;
`;
const BtnLayout = styled(Div)``;
const SignBtn = styled(Button)`
  border-style: none;
  border-radius: 5px;
`;

const CursorPointerDiv = styled(Div)`
  cursor: pointer;
`;

const CenterDiv = styled(Div)`
  position: relative;
`;

const CenterInput = styled(Input)`
  border-radius: 15px;
  border-style: none;
`;

const SearchIconImg = styled(Img)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  right: 0;
`;

const MenuNullUrl = [
  "/SignInPage",
  "/SignUpPage",
  "/ResetPWPage",
  "/ChangePWPage",
  "/PersonalInfoPage",
  "/EditPersonalInfoPage",
];

const HeaderItem = (props) => {
  const { userIdx } = props;
  const location = useLocation();
  const [navToggle, setNavToggle] = useRecoilState(navToggleAtom);
  const menuIconClickEvent = () => {
    setNavToggle(!navToggle);
  };
  return (
    <FixedHeader $width="100%" $flex="h_between_center" $padding="15px 30px" $margin="0 0 30px 0">
      <Div $width="30%" $height="40px" $flex="h_start_center">
        <CursorPointerDiv $height="30px" $margin="0 5% 0 0">
          {MenuNullUrl.includes(location.pathname) ? null : (
            <Img src={MenuIcon} alt="MenuIcon" onClick={menuIconClickEvent} />
          )}
        </CursorPointerDiv>
        <CursorPointerDiv $height="50px">
          <Img src={HeaderLogo} alt="HeaderLogo" />
        </CursorPointerDiv>
      </Div>
      <CenterDiv $width="40%">
        <CenterInput
          $width="100%"
          $height="35px"
          $backgroundColor="lightGray"
          $fontSize="small"
          $padding="0 2%"
        />
        <SearchIconImg src={SearchIcon} alt="SearchIcon" $height="60%" />
      </CenterDiv>
      <Div $width="30%" $flex="h_end_center">
        {userIdx === "null" || " " ? (
          <BtnLayout $flex="h_between_center" $width="210px">
            <Link to="/SignInPage">
              <SignBtn $padding="10px" $flex="h_center_center" $color="white" $width="100%">
                로그인
              </SignBtn>
            </Link>
            <Link to="/SignUpPage">
              <SignBtn $padding="10px" $flex="h_center_center" $color="white" $width="100%">
                회원가입
              </SignBtn>
            </Link>
          </BtnLayout>
        ) : (
          <BtnLayout $flex="h_between_center" $width="210px">
            <CursorPointerDiv $height="30px">
              <Img src={NotiIcon} alt="NotiIcon" />
            </CursorPointerDiv>
            <CursorPointerDiv $height="30px">
              <Img src={UserIcon} alt="UserIcon" />
            </CursorPointerDiv>
            <SignBtn $padding="10px" $flex="h_center_center" $color="white">
              로그아웃
            </SignBtn>
          </BtnLayout>
        )}
      </Div>
    </FixedHeader>
  );
};

export default HeaderItem;
