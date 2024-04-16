import { React, useEffect, useState } from "react";

import { useCookies } from "react-cookie";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import navToggleAtom from "../recoil/navToggleAtom";
import { useRecoilState, useResetRecoilState } from "recoil";

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
import userInfoAtom from "../recoil/userInfoAtom";

const FixedHeader = styled(Header)`
  position: fixed;
  top: 0;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  background-color: ${setColor("white")};
  z-index: 1000;
`;
const BtnLayout = styled(Div)``;

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

const HeaderItem = (props) => {
  const { MenuNullUrl } = props;
  // 네비게이션 토글
  const [navToggle, setNavToggle] = useRecoilState(navToggleAtom);
  const menuIconClickEvent = () => {
    setNavToggle(!navToggle);
  };

  // 검색 관련
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  // 검색결과 받기
  const onChangeEvent = (event) => {
    setSearchValue(event.target.value);
  };
  // 검색하기 클릭
  const onSearchClickEvent = () => {
    if (searchValue == "") {
      navigate("/");
    } else {
      navigate(`/searchResults?title=${searchValue}`);
    }
  };

  const location = useLocation();

  const [cookies, , removeCookie] = useCookies(["token"]);

  const resetUserInfo = useResetRecoilState(userInfoAtom);
  // 로그아웃
  const logoutClickEvent = () => {
    removeCookie("token", { path: "/" });
    resetUserInfo();
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
          <Link to="/" onClick={() => setSearchValue("")}>
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
          value={searchValue}
          onChange={onChangeEvent}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              onSearchClickEvent();
            }
          }}
        />
        <CursorPointerDiv onClick={onSearchClickEvent}>
          <SearchIconImg src={SearchIcon} alt="SearchIcon" $height="60%" />
        </CursorPointerDiv>
      </CenterDiv>

      <Div $width="30%" $flex="h_end_center">
        {cookies.token ? (
          <BtnLayout $flex="h_between_center" $width="210px">
            <Link to="/alarm">
              <CursorPointerDiv $height="30px">
                <Img src={NotiIcon} alt="NotiIcon" />
              </CursorPointerDiv>
            </Link>
            <Link to="/personalInfo">
              <CursorPointerDiv $height="30px">
                <Img src={UserIcon} alt="UserIcon" />
              </CursorPointerDiv>
            </Link>
            <Button
              $padding="10px"
              $flex="h_center_center"
              $color="white"
              $borderRadius="5px"
              onClick={logoutClickEvent}
            >
              로그아웃
            </Button>
          </BtnLayout>
        ) : (
          <>
            <Button
              $padding="0 10px"
              $height="35px"
              $flex="h_center_center"
              $color="white"
              $margin="0 10% 0 0"
              $borderRadius="5px"
            >
              <WhiteColorLink to="/signIn">로그인</WhiteColorLink>
            </Button>
            <Button
              $padding="0 10px"
              $height="35px"
              $flex="h_center_center"
              $color="white"
              $margin="0 10% 0 0"
              $borderRadius="5px"
            >
              <WhiteColorLink to="/signUp">회원가입</WhiteColorLink>
            </Button>
          </>
        )}
      </Div>
    </FixedHeader>
  );
};

export default HeaderItem;
