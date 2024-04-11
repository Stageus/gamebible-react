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

  const [cookies, setCookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const onClick = async () => {
    await request("/account/auth/kakao", "get");
  };

  useEffect(() => {
    console.log(data);
    if (status === 400) {
      alert("유효하지 않은 아이디 입니다.");
    }
    if (status === 401) {
      alert("유효하지 않은 비밀번호 입니다.");
    }
  }, [data]);

  return (
    <Link
      // to={`${process.env.REACT_APP_API_KEY}/account/auth/kakao`}
      onClick={onClick}
      $width="100%"
      $borderRadius="4px"
    >
      <KakaoLoginStyleBtn src={KakaoLoginBtn} />
    </Link>
  );
};
export default SocialSignInBtnContainer;
