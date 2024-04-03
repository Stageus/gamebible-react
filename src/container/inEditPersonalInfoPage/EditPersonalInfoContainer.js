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

const EditPersonalInfoWrapper = styled(Div)`
  position: relative;
  top: 70px;
`;

const FullWideLink = styled(Link)`
  width: 100%;
`;

const EditPersonalInfoContainer = () => {
  const [cookies] = useCookies(["token"]);
  const { data, error, status, request } = useFetch();
  const [emailValue, setEmailValue] = useState("");
  const [nicknameValue, setNicknameValue] = useState("");
  const [initialData, setInitialData] = useState("");

  const { value: newEmailValue, onChangeEvent: newEmailOnChangeEvent } = useInput("");
  const { value: newNicknameValue, onChangeEvent: newNicknameOnChangeEvent } = useInput("");
  const navigate = useNavigate();

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
          setInitialData(result.data);
          if (response.status === 200) {
            setEmailValue(result.data.email);
            setNicknameValue(result.data.nickname);
          }
        } catch (error) {
          console.log(`Error: ${error.message}`);
        }
      } else {
        navigate("/");
      }
    };
    fetchData();
  }, []);

  //로그인 했을 때 리코일로 돌려라 준연아

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

  // useEffect(() => {
  //   if (status === 200) {
  //     alert("수정되었습니다");
  //     navigate("/personalInfo");
  //   }
  //   if (status === 400) {
  //     alert("요청이 유효하지 않습니다.");
  //   }
  //   if (status === 401) {
  //     alert("토큰이 만료되었습니다.");
  //   }
  // }, [data, error]);

  return (
    <EditPersonalInfoWrapper $flex="v_center_center" $width="350px">
      <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />

      <InputItem
        key="email"
        label="이메일"
        placeholder={emailValue}
        inputValue={newEmailValue}
        inputChangeEvent={newEmailOnChangeEvent}
      />
      <InputItem
        key="nickname"
        label="닉네임"
        placeholder={nicknameValue}
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
