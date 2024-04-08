import React, { useEffect, useState } from "react";
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
  // const { data, error, status, request } = useFetch();
  const [data, setData] = useState("");

  const [cookies, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/");
    }
  }, [cookies]);

  const DeleteClickEvent = async () => {
    const result = window.confirm("정말로 탈퇴하시겠습니까?");
    if (result) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/account`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: cookies.token,
          },
        });
        const result = await response.json();
        setData(result);
        if (response.status === 200) {
          alert("탈퇴가 완료 되었습니다.");
          removeCookie("token");
          navigate("/");
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
  };
  console.log(userInfo);

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
