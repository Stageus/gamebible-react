import React, { useState } from "react";
import styled from "styled-components";

import UnVisibleIcon from "../img/unVisibleIcon.svg";
import VisibleIcon from "../img/visibleIcon.svg";

import { Div } from "../style/LayoutStyle";
import { Input } from "../style/InputStyle";
import { Img } from "../style/ImgStyle";
import { Button } from "../style/ButtonStyle";

const InputDiv = styled(Div)`
  position: relative;
`;
const BorderStyleInput = styled(Input)`
  border-radius: 8px;
`;

const EyeIconBtn = styled(Button)`
  position: absolute;
  right: 0;
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
      text: "아이디",
      constraint: "4 ~ 20글자 제한",
    },
    pw: {
      key: "pw",
      label: "비밀번호",
      text: "비밀번호",
      constraint: "8 ~ 20글자 제한",
    },
  };
  return (
    <Div $width="100vw" $height="100vh" $flex="v_center_center">
      {Object.values(dummyData).map((data) => (
        <Div key={data.key} $flex="v_start_start" $margin="0 0 20px 0">
          {data.label !== null ? <Label htmlFor={data.key}>{data.label}</Label> : null}
          <InputDiv>
            <BorderStyleInput
              id={data.key}
              $width="400px"
              $height="40px"
              $padding="0 15px"
              type={data.key === "pw" ? "password" : "text"}
              placeholder={data.text}
            />
            {data.key === "pw" ? (
              <EyeIconBtn onClick={toggleClickEvent}>
                <Div $height="24px" $margin="0 10px 0 0">
                  {!toggle ? <Img src={VisibleIcon} /> : <Img src={UnVisibleIcon} />}
                </Div>
              </EyeIconBtn>
            ) : null}
          </InputDiv>
        </Div>
      ))}
    </Div>
  );
};

export default InputItem;
