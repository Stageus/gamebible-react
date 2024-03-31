import React, { useEffect, useState, useCallback } from "react";
import InputItem from "../../component/InputItem";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";
import { Link } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { Cookies, useCookies } from "react-cookie";
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
  const { data, error, status, request } = useFetch();
  const [cookies] = useCookies(["token"]);
  const [emailValue, setEmailValue] = useState("");
  const [nicknameValue, setNicknameValue] = useState("");
  const { value: newEmailValue, onChangeEvent: newEmailOnChangeEvent } = useInput("");
  const { value: newNicknameValue, onChangeEvent: newNicknameOnChangeEvent } = useInput("");
  const navigate = useNavigate();

  const getInfo = useCallback(async () => {
    if (cookies.token) {
      await request("/account/info/", "GET", null, {
        Authorization: cookies,
      });
    } else {
      navigate("/");
    }
  }, [cookies.token]);

  const saveSubmitEvent = async () => {
    await request(
      "/account/info",
      "PUT",
      {
        email: emailValue,
        nickname: nicknameValue,
      },
      {
        Authorization: cookies.token,
      }
    );
  };

  useEffect(() => {
    getInfo();
    setEmailValue(data);
    setNicknameValue(data);
  }, [data, error]);

  const inputEmailData = {
    key: "email",
    label: "이메일",
    placeholder: emailValue,
  };
  const inputNicknameData = {
    nickName: {
      key: "nickName",
      label: "닉네임",
      placeholder: nicknameValue,
    },
  };
  return (
    <EditPersonalInfoWrapper $flex="v_center_center" $width="350px">
      <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
      <InputItem
        {...{
          dummyInputData: inputEmailData,
          inputValue: newEmailValue,
          inputChangeEvent: newEmailOnChangeEvent,
        }}
      />
      <InputItem
        {...{
          dummyInputData: inputNicknameData,
          inputValue: newNicknameValue,
          inputChangeEvent: newNicknameOnChangeEvent,
        }}
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
