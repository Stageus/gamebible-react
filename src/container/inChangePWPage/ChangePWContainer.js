import React, { useEffect, useState } from "react";
import { useInput } from "../../hook/useInput";
import InputItem from "../../component/InputItem";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Div } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";
import { pwValueValidation } from "../../util/ValidationUtil";
import { useCookies } from "react-cookie";

const ChangePWWrapper = styled(Div)`
  position: relative;
  top: 70px;
`;

const ChangePWContainer = () => {
  const [cookies] = useCookies(["token"]);
  const [data, setData] = useState(null);
  const { value: pwValue, onChangeEvent: onChangePwEvent } = useInput("");
  const ChangePWClickEvent = async () => {
    if (!pwValueValidation(pwValue)) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/account/pw`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
          body: JSON.stringify({
            pw: pwValue,
          }),
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (data.status === 200) {
      alert("비밀번호 변경이 완료되었습니다.");
    }
    if (data.status === 400) {
      alert("올바른 값을 입력해주세요.");
    }
    if (data.status === 401) {
      alert("토큰이 만료되었습니다");
    }
    if (data.status === 403) {
      alert("권한이 없습니다.");
    }
    if (data.status === 404) {
      alert("값을 찾을 수 없습니다.");
    }
    if (data.status === 500) {
      alert("네트워크가 불안정합니다 잠시후 다시 이용해주세요");
    }
  }, [data]);
  return (
    <ChangePWWrapper $flex="v_center_center" $width="350px">
      <Img $margin="0 0 20px 0" src={MainLogo} alt="MainLogo" />
      <InputItem
        {...{
          key: "pw",
          type: "pw",
          label: "비밀번호",
          placeholder: "8 ~ 20글자 제한",
          inputValue: pwValue,
          inputChangeEvent: onChangePwEvent,
        }}
      />
      <Button
        $flex="h_center_center"
        $width="100%"
        $color="white"
        $height="50px"
        $borderRadius="4px"
        onClick={ChangePWClickEvent}
      >
        비밀번호 변경하기
      </Button>
    </ChangePWWrapper>
  );
};

export default ChangePWContainer;
