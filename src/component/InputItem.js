import React, { useState } from "react";

import styled from "styled-components";
import { setColor } from "../style/SetStyle";

import UnVisibleIcon from "../img/unVisibleIcon.svg";
import VisibleIcon from "../img/visibleIcon.svg";

import { Div } from "../style/LayoutStyle";
import { Input } from "../style/InputStyle";
import { Img } from "../style/ImgStyle";
import { Button } from "../style/ButtonStyle";

const RelativeDiv = styled(Div)`
  position: relative;
`;
const AbsoluteBtn = styled(Button)`
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translate(0, -50%);
  border-style: none;
  border-radius: 8px;
`;
const BorderStyleInput = styled(Input)`
  border-radius: 4px;
  border: 1px solid ${setColor("black")};
`;

const EyeIconBtn = styled(Button)`
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translate(0, -50%);
  border-style: none;
  background: none;
`;

const Label = styled.label`
  margin: 0 0 10px 0;
`;

const InputItem = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleClickEvent = () => {
    console.log(toggle);
    setToggle(!toggle);
  };
  const dummyData = {
    id: {
      key: "id",
      label: "아이디",
      placeholder: "4 ~ 20글자 제한",
      button: "중복확인",
    },
    id2: {
      key: "id2",
      placeholder: "아이디",
    },
    pw: {
      key: "pw",
      type: "pw",
      label: "비밀번호",
      placeholder: "비밀번호",
    },
    pw2: {
      key: "pw2",
      type: "pw",
      label: "비밀번호",
      placeholder: "8 ~ 20글자 제한",
    },
    nickName: {
      key: "nickName",
      label: "닉네임",
      placeholder: "2 ~ 20글자 제한",
      button: "중복확인",
    },
    email: {
      key: "email",
      label: "이메일",
      button: "인증전송",
    },
    verificationCode: {
      key: "verificationCode",
      label: "인증번호",
      button: "인증확인",
    },
  };
  return (
    <>
      {Object.values(dummyData).map((data) => (
        <Div key={data.key} $flex="v_start_start" $margin="0 0 20px 0">
          {data.label && <Label htmlFor={data.key}>{data.label}</Label>}
          <RelativeDiv>
            <RelativeDiv>
              <BorderStyleInput
                id={data.key}
                $width="350px"
                $height="50px"
                $padding="0 3%"
                type={data.type === "pw" && !toggle ? "password" : "text"}
                placeholder={data.placeholder}
              />
              {data.button && (
                <AbsoluteBtn $color="white" $fontSize="smail" $padding="6px 8px">
                  {data.button}
                </AbsoluteBtn>
              )}
            </RelativeDiv>
            {data.type === "pw" && (
              <EyeIconBtn onClick={toggleClickEvent}>
                <Div $height="24px">
                  {!toggle ? <Img src={VisibleIcon} /> : <Img src={UnVisibleIcon} />}
                </Div>
              </EyeIconBtn>
            )}
          </RelativeDiv>
        </Div>
      ))}
    </>
  );
};

export default InputItem;
