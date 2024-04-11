import React, { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import LabelText from "../../component/LabelText";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";

import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import userInfoAtom from "../../recoil/userInfoAtom";

const PersonalInfoWrapper = styled(Div)`
  position: relative;
  top: 70px;
`;

const FullWideLink = styled(Link)`
  width: 100%;
  color: white;
`;

const PersonalInfoContainer = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const { data, status, request } = useFetch();
  // const { data, error, status, request } = useFetch();

  const [cookies, , removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/");
    }
  }, [cookies]);

  const DeleteClickEvent = () => {
    const confirm = window.confirm("정말로 탈퇴하시겠습니까?");
    if (confirm) {
      request("/account", "DELETE", null, {
        Authorization: `Bearer ${cookies.token}`,
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    if (status === 200) {
      alert("탈퇴 되었습니다.");
      removeCookie("token", { path: "/" });
      window.location = "/";
    }
  }, [status]);

  const labelTextData = {
    email: {
      key: "email",
      label: "이메일",
      text: userInfo.email,
    },
    nickname: {
      key: "nickname",
      label: "닉네임",
      text: userInfo.nickname,
    },
  };
  return (
    <PersonalInfoWrapper $flex="v_center_center" $width="350px">
      <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
      <LabelText {...{ labelTextData }}></LabelText>
      <FullWideLink to="/editPersonalInfo">
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
    </PersonalInfoWrapper>
  );
};

export default PersonalInfoContainer;
