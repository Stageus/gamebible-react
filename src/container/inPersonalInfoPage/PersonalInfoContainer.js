import React, { useCallback, useEffect, useState } from "react";
import LabelText from "../../component/LabelText";
import useFetch from "../../hook/useFetch";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";

import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

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
  const [idInfo, setIdInfo] = useState("");
  const [emailInfo, setEmailInfo] = useState("");
  const [nicknameInfo, setNicknameInfo] = useState("");

  const { data, error, status, request } = useFetch();

  const [cookies] = useCookies(["token"]);

  const DeleteClickEvent = async () => {
    const result = window.confirm("정말로 탈퇴하시겠습니까?");
    if (result) {
      await request("/account", "DELETE", null, { Authorization: cookies });
      navigate("/");
    } else {
      return;
    }
  };
  const getInfo = async () => {
    if (cookies.token) {
      await request("/account/info", "GET", null, { Authorization: cookies });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    getInfo();
    if (data) {
      setIdInfo(data.id);
      setEmailInfo(data.email);
      setNicknameInfo(data.nickname);
    }
  }, [cookies.token, navigate, data]);

  const labelTextData = {
    id: {
      key: "id",
      label: "아이디",
      text: idInfo,
    },
    email: {
      key: "email",
      label: "이메일",
      text: emailInfo,
    },
    nickname: {
      key: "nickname",
      label: "닉네임",
      text: nicknameInfo,
    },
  };
  return (
    <PersonalInfoWrapper $flex="v_center_center" $width="350px">
      <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
      <LabelText {...{ dummyTextData: labelTextData }}></LabelText>
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
