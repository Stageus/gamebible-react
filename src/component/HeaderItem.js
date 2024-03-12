import React from "react";
import { useLocation } from "react-router-dom";
import { navToggleAtom } from "../recoil/navToggleAtom";
import { useRecoilState } from "recoil";
import HeaderLogo from "../img/HeaderLogo.svg";
import SearchIcon from "../img/searchIcon.svg";
import MenuIcon from "../img/menuIcon.svg";
import NotiIcon from "../img/notiIcon.svg";
import UserIcon from "../img/userIcon.svg";

import { Header, Div } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";
import { Input } from "../style/InputStyle";
import { Button } from "../style/ButtonStyle";
import styled from "styled-components";

const FixedHeader = styled(Header)`
  position: fixed;
`;

const SignBtn = styled(Button)`
  border-style: none;
  border-radius: 15px;
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

const user = {
  id: "123",
};

const HeaderItem = () => {
  const location = useLocation();
  const [navToggle, setNavToggle] = useRecoilState(navToggleAtom);
  const menuIconClickEvent = () => {
    setNavToggle(!navToggle);
    console.log(navToggle);
  };
  return (
    <FixedHeader $width="100%" $flex="h_between_center" $padding="15px 5%">
      <Div $width="30%" $height="40px" $flex="h_start_center">
        <CursorPointerDiv $height="30px" $margin="0 5% 0 0">
          {MenuNullUrl.includes(location.pathname) ? null : (
            <Img src={MenuIcon} alt="MenuIcon" onClick={menuIconClickEvent} />
          )}
        </CursorPointerDiv>
        <CursorPointerDiv $height="35px">
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
        {user.id === null ? (
          <SignBtn
            $padding="0 10px"
            $height="35px"
            $flex="h_center_center"
            $color="white"
            $margin="0 10% 0 0"
          >
            로그인
          </SignBtn>
        ) : (
          <>
            <CursorPointerDiv $height="30px" $margin="0 10% 0 0">
              <Img src={NotiIcon} alt="NotiIcon" />
            </CursorPointerDiv>
            <CursorPointerDiv $height="30px" $margin="0 10% 0 0">
              <Img src={UserIcon} alt="UserIcon" />
            </CursorPointerDiv>
          </>
        )}
        <SignBtn $padding="0 10px" $height="35px" $flex="h_center_center" $color="white">
          로그아웃
        </SignBtn>
      </Div>
    </FixedHeader>
  );
};

export default HeaderItem;
