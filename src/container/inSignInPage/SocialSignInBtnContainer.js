import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Img } from "../../style/ImgStyle";
import { Button } from "../../style/ButtonStyle";
import KakaoLoginBtn from "../../img/kakaoLoginMediumWide.svg";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import useFetch from "../../hook/useFetch";
const KakaoLoginStyleBtn = styled(Img)`
  width: 100%;
`;

const SocialSignInBtnContainer = () => {
  const { data, status, request } = useFetch();

  const navigate = useNavigate();

  const onClick = () => {
    request("/account/auth/kakao", "GET");
  };
  useEffect(() => {
    if (data && data.data) {
      window.location = data.data;
    }
  }, [data]);

  // useEffect(() => {
  //   if (status === 200) {
  //     window.location = data.data;
  //   }
  //   if (status === 400) {
  //     alert("유효하지 않은 아이디 입니다.");
  //   }
  //   if (status === 401) {
  //     alert("유효하지 않은 비밀번호 입니다.");
  //   }
  // }, [data]);

  return (
    <Button onClick={onClick} $width="100%" $borderRadius="4px">
      <KakaoLoginStyleBtn src={KakaoLoginBtn} />
    </Button>
  );
};
export default SocialSignInBtnContainer;
