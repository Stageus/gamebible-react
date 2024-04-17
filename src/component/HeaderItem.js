import { React, useEffect, useState } from "react";

import { useCookies } from "react-cookie";

import { Link, useLocation, useNavigate } from "react-router-dom";

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
  // 삼단바 버튼 없는 페이지
  const { MenuNullUrl } = props;
  const location = useLocation();

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
    // 검색내용이 없을 때
    if (searchValue == "") {
      navigate("/");
    } else {
      navigate(`/searchResults?title=${searchValue}`);
    }
  };
  // 페이지 변경 시 검색창 초기화
  useEffect(() => {
    return () => {
      setSearchValue("");
    };
  }, [location.pathname]);

  // 로그아웃 처리
  const [cookies, , removeCookie] = useCookies(["token"]);
  const resetUserInfo = useResetRecoilState(userInfoAtom);

  const logoutClickEvent = () => {
    removeCookie("token", { path: "/" });
    resetUserInfo();
  };

  return (
    <FixedHeader $width="100%" $flex="h_between_center" $padding="15px 30px">
      {/* 좌측 */}
      <Div $width="30%" $height="40px" $flex="h_start_center">
        {/* 페이지에 따른 삼단바, 사이드바 유무 결정 */}
        <CursorPointerDiv $height="30px">
          {MenuNullUrl.includes(location.pathname) ? null : (
            <Img src={MenuIcon} alt="MenuIcon" onClick={menuIconClickEvent} $margin="0 30px 0 0" />
          )}
        </CursorPointerDiv>

        {/* 메인로고 */}
        <CursorPointerDiv $height="50px">
          <Link to="/">
            <Img src={HeaderLogo} alt="HeaderLogo" />
          </Link>
        </CursorPointerDiv>
      </Div>

      {/* 중앙 */}
      <CenterDiv $width="40%">
        {/* 검색어 입력란 */}
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

        {/* 검색 버튼 */}
        <CursorPointerDiv onClick={onSearchClickEvent}>
          <SearchIconImg src={SearchIcon} alt="SearchIcon" $height="60%" />
        </CursorPointerDiv>
      </CenterDiv>

      {/* 우측 */}
      <Div $width="30%" $flex="h_end_center">
        {cookies.token ? (
          // 로그인 시
          <BtnLayout $flex="h_between_center" $width="210px">
            {/* 알람 페이지로 이동 */}
            <Link to="/alarm">
              <CursorPointerDiv $height="30px">
                <Img src={NotiIcon} alt="NotiIcon" />
              </CursorPointerDiv>
            </Link>

            {/* 개인정보 페이지로 이동 */}
            <Link to="/personalInfo">
              <CursorPointerDiv $height="30px">
                <Img src={UserIcon} alt="UserIcon" />
              </CursorPointerDiv>
            </Link>

            {/* 로그아웃 */}
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
          // 비로그인 시
          <>
            {/* 로그인 */}
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

            {/* 회원가입 */}
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
