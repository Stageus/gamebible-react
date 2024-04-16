import React, { useEffect, useState, useCallback } from "react";
import InputItem from "../../component/InputItem";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";
import { Link } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hook/useInput";

import { useRecoilState } from "recoil";
import userInfoAtom from "../../recoil/userInfoAtom";

const EditPersonalInfoWrapper = styled(Div)`
  position: relative;
  top: 70px;
`;

const FullWideLink = styled(Link)`
  width: 100%;
`;

const EditPersonalInfoContainer = () => {
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const { data, error, status, request } = useFetch();

  const { value: newEmailValue, onChangeEvent: newEmailOnChangeEvent } = useInput(userInfo.email);
  const { value: newNicknameValue, onChangeEvent: newNicknameOnChangeEvent } = useInput(
    userInfo.nickname
  );
  const navigate = useNavigate();

  const saveSubmitEvent = async () => {
    await request(
      "/account/info",
      "PUT",
      {
        email: newEmailValue,
        nickname: newNicknameValue,
      },
      { Authorization: `Bearer ${cookies.token}` }
    );
  };

  useEffect(() => {
    if (status === 200) {
      setUserInfo({
        email: newEmailValue,
        nickname: newNicknameValue,
      });
      alert("수정되었습니다");
      navigate("/personalInfo");
    }
    if (status === 400) {
      alert("요청이 유효하지 않습니다.");
    }
    if (status === 409) {
      alert("중복된 이메일입니다.");
    }
    if (status === 401) {
      alert("토큰이 만료되었습니다.");
      removeCookie("token", { path: "/" });
    }
  }, [data, error]);

  return (
    <EditPersonalInfoWrapper $flex="v_center_center" $width="350px">
      <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />

      <InputItem
        key="email"
        label="이메일"
        inputValue={newEmailValue}
        inputChangeEvent={newEmailOnChangeEvent}
      />
      <InputItem
        key="nickname"
        label="닉네임"
        inputValue={newNicknameValue}
        inputChangeEvent={newNicknameOnChangeEvent}
      />
      <Button
        $flex="h_center_center"
        $width="100%"
        $color="white"
        $height="50px"
        $borderRadius="4px"
        $margin="0 0 20px 0"
        onClick={saveSubmitEvent}
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
