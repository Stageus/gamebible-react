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
  // const { ...dummyData } = props;
  const dummyData = {
    id: {
      key: "id",
      label: "아이디",
      button: "중복확인",
      placeholder: "4 ~ 20글자 제한",
    },
    pw: {
      key: "pw",
      type: "pw",
      label: "비밀번호",
      placeholder: "8 ~ 20글자 제한",
    },
    email: {
      key: "email",
      label: "이메일",
      button: "인증전송",
      placeholder: "1234@email.com",
    },
  };
  const [toggle, setToggle] = useState(false);
  const toggleClickEvent = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {Object.values(dummyData).map((data) => (
        <Div key={data.key} $flex="v_start_start" $margin="0 0 20px 0">
          {/* 라벨 유무에 따라 출력 결정 */}
          {data.label && <Label htmlFor={data.key}>{data.label}</Label>}
          {/* /라벨 유무에 따라 출력 결정 */}
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
              {/* 버튼 유무에 따라 출력 결정 */}
              {data.button && (
                <AbsoluteBtn $color="white" $fontSize="smail" $padding="6px 8px">
                  {data.button}
                </AbsoluteBtn>
              )}
              {/* /버튼 유무에 따라 출력 결정 */}
            </RelativeDiv>
            {/* 타입 pw일 때 eye 아이콘 출력 */}
            {data.type === "pw" && (
              <EyeIconBtn onClick={toggleClickEvent}>
                <Div $height="24px">
                  {!toggle ? <Img src={VisibleIcon} /> : <Img src={UnVisibleIcon} />}
                </Div>
              </EyeIconBtn>
            )}
            {/* /타입 pw일 때 eye 아이콘 출력 */}
          </RelativeDiv>
        </Div>
      ))}
    </>
  );
};

export default InputItem;
