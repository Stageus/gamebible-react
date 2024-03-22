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
  background: none;
`;
const Label = styled.label`
  margin: 0 0 10px 0;
`;

const InputItem = (props) => {
  const { dummyInputData, inputValue, validationCheck, validationFcn } = props;
  const [absoluteValue, setAbsoluteValue] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleClickEvent = () => {
    setToggle(!toggle);
  };

  const inputChangeEvent = (event) => {
    inputValue(event.target.value);
    setCurrentValue(event.target.value);
  };

  const absoluteBtnClickEvent = () => {
    if (validationFcn(currentValue)) {
      setAbsoluteValue(true);
      validationCheck(true);
    }
  };

  return (
    <>
      {Object.values(dummyInputData).map((data) => (
        <Div key={data.key} $width="100%" $flex="v_start_start" $margin="0 0 20px 0">
          {/* 라벨 유무에 따라 출력 결정 */}
          {data.label && <Label htmlFor={data.key}>{data.label}</Label>}
          {/* /라벨 유무에 따라 출력 결정 */}
          <RelativeDiv $width="100%">
            <RelativeDiv $width="100%">
              <BorderStyleInput
                id={data.key}
                $width="100%"
                $height="50px"
                $padding="0 3%"
                onChange={inputChangeEvent}
                type={data.type === "pw" && !toggle ? "password" : "text"}
                $backgroundColor={absoluteValue ? "lightGray" : "white"}
                disabled={absoluteValue}
                placeholder={data.placeholder}
              />
              {/* 버튼 유무에 따라 출력 결정 */}
              {data.button && (
                <AbsoluteBtn
                  onClick={absoluteBtnClickEvent}
                  $color="white"
                  $fontSize="smail"
                  $padding="6px 8px"
                  $borderRadius="8px"
                >
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
