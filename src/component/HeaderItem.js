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

const WhiteColorLink = styled(Link)`
  color: white;
`;

const MenuNullUrl = [
  "/SignInPage",
  "/SignUpPage",
  "/ResetPWPage",
  "/ChangePWPage",
  "/PersonalInfoPage",
  "/EditPersonalInfoPage",
  "/alarm",
];

const HeaderItem = (props) => {
  const { userIdx } = props;
  const location = useLocation();
  const [navToggle, setNavToggle] = useRecoilState(navToggleAtom);
  const menuIconClickEvent = () => {
    setNavToggle(!navToggle);
  };
  return (
    <FixedHeader $width="100%" $flex="h_between_center" $padding="15px 30px">
      <Div $width="30%" $height="40px" $flex="h_start_center">
        <CursorPointerDiv $height="30px">
          {MenuNullUrl.includes(location.pathname) ? null : (
            <Img src={MenuIcon} alt="MenuIcon" onClick={menuIconClickEvent} $margin="0 30px 0 0" />
          )}
        </CursorPointerDiv>
        <CursorPointerDiv $height="50px">
          <Link to="/">
            <Img src={HeaderLogo} alt="HeaderLogo" />
          </Link>
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
        <CursorPointerDiv>
          <SearchIconImg src={SearchIcon} alt="SearchIcon" $height="60%" />
        </CursorPointerDiv>
      </CenterDiv>
      <Div $width="30%" $flex="h_end_center">
        {userIdx === "null" || userIdx === " " ? (
          <>
            {" "}
            <SignBtn
              $padding="0 10px"
              $height="35px"
              $flex="h_center_center"
              $color="white"
              $margin="0 10% 0 0"
            >
              <WhiteColorLink to="/SignInPage">로그인</WhiteColorLink>
            </SignBtn>
            <SignBtn
              $padding="0 10px"
              $height="35px"
              $flex="h_center_center"
              $color="white"
              $margin="0 10% 0 0"
            >
              <WhiteColorLink to="/SignUpPage">회원가입</WhiteColorLink>
            </SignBtn>
          </>
        ) : (
          <BtnLayout $flex="h_between_center" $width="210px">
            <Link to="/alarm">
              <CursorPointerDiv $height="30px">
                <Img src={NotiIcon} alt="NotiIcon" />
              </CursorPointerDiv>
            </Link>
            <Link to="/PersonalInfoPage">
              <CursorPointerDiv $height="30px">
                <Img src={UserIcon} alt="UserIcon" />
              </CursorPointerDiv>
            </Link>
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
