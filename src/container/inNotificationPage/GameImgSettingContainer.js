import React from "react";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Img } from "../../style/ImgStyle";
import { P } from "../../style/TextStyle";
import { Div } from "../../style/LayoutStyle";
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
      <RelativeDiv $flex="v_start_center" $width="500px" $backgroundColor="white">
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
        <Section $flex="v_between_center" $height="230px" $padding="20px 10px" $margin="20px 0">
          <Div>
            <P $fontWeight="bold">게임 썸네일 이미지</P>
            <input type="file" />
          </Div>
          <Div>
            <P $fontWeight="bold">게임 배너 이미지</P>
            <input type="file" />
          </Div>
          <Div $width="100%" $flex="h_between_center">
            <Button $color="major" $backgroundColor="default" $padding="10px" $borderRadius="10px">
              취소
            </Button>
            <Button $color="white" $backgroundColor="major" $padding="10px" $borderRadius="10px">
              확인
            </Button>
          </Div>
        </Section>
      </RelativeDiv>
    </RelativeSection>
  );
};

export default GameImgSettingContainer;
