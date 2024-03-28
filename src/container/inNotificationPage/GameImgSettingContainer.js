import React from "react";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Img } from "../../style/ImgStyle";
import { Div } from "../../style/LayoutStyle";
import { Input } from "../../style/InputStyle";
import { setColor } from "../../style/SetStyle";
import { Button } from "../../style/ButtonStyle";
import { Section } from "../../style/LayoutStyle";

const RelativeDiv = styled(Div)`
  position: relative;
`;
const RelativeSection = styled(Section)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);
`;

const RightButton = styled(Button)`
  position: absolute;
  right: 20px;
  top: 10px;
`;

const GameImgSettingContainer = (props) => {
  const { setGameImgEvent } = props;
  return (
    <RelativeSection $flex="h_center_center" $width="100vw" $height="100vh">
      <RelativeDiv $flex="v_start_center" $width="500px" $height="300px" $backgroundColor="white">
        <RightButton
          $width="30px"
          $height="30px"
          $flex="h_center_center"
          $backgroundColor="none"
          $borderStyle={`1px solid ${setColor("black")}`}
          onClick={setGameImgEvent}
        >
          ❌
        </RightButton>
        <Div $width="100%" $flex="h_center_center">
          <Img src={MainLogo} alt="MainLogo" />
        </Div>
        <Section $flex="v_between_center" $margin="40px 0">
          <Div $margin="0 0 20px 0">
            <Div>게임 썸네일 이미지</Div>
            <Input type="file" />
          </Div>
          <Div $margin="0 0 40px 0">
            <Div>게임 썸네일 이미지</Div>
            <Input type="file" />
          </Div>
          <Div $flex="h_between_center" $width="100%">
            <Button
              $padding="5px 10px"
              $backgroundColor="default"
              $color="major"
              $borderRadius="10px"
              onClick={setGameImgEvent}
            >
              취소
            </Button>
            <Button
              $padding="5px 10px"
              $backgroundColor="major"
              $color="white"
              $borderRadius="10px"
            >
              확인
            </Button>
          </Div>
        </Section>
      </RelativeDiv>
    </RelativeSection>
  );
};

export default GameImgSettingContainer;