import React from "react";

import styled from "styled-components";
import { Img } from "../../style/ImgStyle";
import { Div, Section } from "../../style/LayoutStyle";
import { setColor } from "../../style/SetStyle";
import { Button } from "../../style/ButtonStyle";
import { P } from "../../style/TextStyle";
import { Input } from "../../style/InputStyle";

import MainLogo from "../../img/HeaderLogo.svg";

const RelativeSection = styled(Section)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);
`;
const RelativeDiv = styled(Div)`
  position: relative;
`;
const OverFlowAutoSection = styled(Section)`
  overflow: auto;
`;
const RightButton = styled(Button)`
  position: absolute;
  right: 20px;
  top: 10px;
`;

const SuggestGameContainer = (props) => {
  const { suggestGameEvent } = props;

  return (
    <RelativeSection $flex="h_center_center" $width="100vw" $height="100vh">
      <RelativeDiv $flex="v_start_center" $width="500px" $backgroundColor="white">
        <RightButton
          $width="30px"
          $height="30px"
          $flex="h_center_center"
          $backgroundColor="none"
          $borderStyle={`1px solid ${setColor("black")}`}
          onClick={suggestGameEvent}
        >
          ❌
        </RightButton>
        <Div $width="100%" $flex="h_center_center">
          <Img src={MainLogo} alt="MainLogo" />
        </Div>
        <OverFlowAutoSection $flex="v_center_center" $padding="20px 10px">
          <P $fontWeight="bold">생성하고 싶은 게임의 정확한 이름을 입력해주세요</P>
          <Div $flex="h_center_center" $height="30px" $margin="20px">
            <Input type="text" $padding="5px" $width="250px" $height="100%" />
            <Button
              $flex="h_center_center"
              $margin="0 10px"
              $padding="5px 10px"
              $height="100%"
              $borderRadius="5px"
              $backgroundColor="minorDark"
              $color="white"
            >
              생성
            </Button>
          </Div>
          <Div $flex="v_center_center">
            <P>
              ✔ “한국어(영어)” 형식으로 작성해주세요
              <br />
              ✔︎ 이름과 괄호 사이에 띄어쓰기는 없습니다
              <br />
              ✔︎ 한글 이름은 띄어쓰기가 없습니다
              <br />
              ✔︎ 영문 이름의 첫 글자는 대문자를 사용하고
              <br />
              ✔︎ 필요 시 띄어쓰기를 사용해주세요
            </P>
            <P $margin="10px 0 20px 0">
              <br />
              ⭕️) 리그오브레전드(League of legends)
              <br /> ❌) 리그오부레전드 (leagueoflegends)
            </P>
            <P>
              ※ 관리자의 승인 시 알림 메시지가 전달됩니다
              <br />※ 거절 사유는 알려 드릴 수 없습니다🙏
            </P>
            <br />
          </Div>
        </OverFlowAutoSection>
      </RelativeDiv>
    </RelativeSection>
  );
};

export default SuggestGameContainer;
