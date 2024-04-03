import React, { useEffect, useState } from "react";
import LabelText from "../../component/LabelText";

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
  const [emailInfo, setEmailInfo] = useState("");
  const [nicknameInfo, setNicknameInfo] = useState("");

  // const { data, error, status, request } = useFetch();
  const [data, setData] = useState("");

  const [cookies, removeCookie] = useCookies(["token"]);
  useEffect(() => {
    const fetchData = async () => {
      if (cookies.token) {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_KEY}/account/info`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${cookies.token}`,
            },
          });
          const result = await response.json();
          setData(result.data);
          if (response.status === 200) {
            setEmailInfo(result.data.email);
            setNicknameInfo(result.data.nickname);
          }
        } catch (error) {
          console.log(`Error: ${error.message}`);
        }
      } else {
        navigate("/");
      }
    };

    fetchData();
  }, [cookies.token, navigate]);

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

  const labelTextData = {
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
