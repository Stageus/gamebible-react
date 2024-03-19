import React from "react";

import MainLogo from "../img/HeaderLogo.svg";

import styled from "styled-components";
import { Img } from "../style/ImgStyle";
import { P } from "../style/TextStyle";
import { Div } from "../style/LayoutStyle";
import { setColor } from "../style/SetStyle";
import { Button } from "../style/ButtonStyle";
import { Section } from "../style/LayoutStyle";

const RelativeDiv = styled(Div)`
  position: relative;
  background-color: ${setColor("white")};
  width: 500px;
  height: 600px;
`;

const RelativeSection = styled(Section)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);
`;

const OverFlowAutoSection = styled(Section)`
  overflow: auto;
`;

const Ol = styled.ol``;

const Li = styled.li`
  margin: 20px 0;
`;

const RightButton = styled(Button)`
  position: absolute;
  right: 20px;
  top: 10px;
  border: 1px solid ${setColor("black")};
`;
const TermsServiceContainer = (props) => {
  const { termsReadMoreEvent } = props;
  return (
    <RelativeSection $width="100vw" $height="100vh" $flex="h_center_center">
      <RelativeDiv $flex="v_start_center">
        <RightButton
          $width="30px"
          $height="30px"
          $flex="h_center_center"
          $backgroundColor="none"
          onClick={termsReadMoreEvent}
        >
          ❌
        </RightButton>
        <Div $width="100%" $flex="h_center_center">
          <Img src={MainLogo} alt="MainLogo" />
        </Div>
        <OverFlowAutoSection $flex="v_start_start" $padding="20px 10px">
          <P $fontWeight="bold">서비스의 제공 및 이용</P>
          <Ol>
            <Li>본 웹 페이지는 게임 정보 제공 및 커뮤니티 서비스를 목적으로 제공됩니다.</Li>
            <Li>
              웹 페이지의 모든 콘텐츠는 사용자들에게 제공되며, 이용자는 해당 콘텐츠를 개인적으로만
              이용할 수 있습니다.
            </Li>
          </Ol>
          <P $fontWeight="bold">이용자의 권리와 의무</P>
          <Ol>
            <Li>이용자는 본 웹 페이지를 이용함으로써 다른 이용자들에게 피해를 줄 수 없습니다.</Li>
            <Li>이용자는 웹 페이지를 이용함에 있어 관련 법률 및 규정을 준수해야 합니다.</Li>
            <Li>
              이용자는 개인정보를 정확하게 제공하고 관리하여야 하며, 제공한 정보의 정확성에 대한
              책임을 져야 합니다.
            </Li>
          </Ol>
          <P $fontWeight="bold">개인정보 보호 및 처리</P>
          <Ol>
            <Li>이용자의 개인정보는 본 웹 페이지의 개인정보 처리 방침에 따라 보호됩니다.</Li>
            <Li>
              이용자의 개인정보는 웹 페이지의 운영 및 개선, 고객 서비스 제공 등을 위해 수집될 수
              있습니다.
            </Li>
          </Ol>
          <P $fontWeight="bold">책임과 면책 조항</P>
          <Ol>
            <Li>
              본 웹 페이지는 이용자들에게 제공되는 콘텐츠의 질과 안전성에 대한 책임을 부담하지
              않습니다.
            </Li>
            <Li>
              이용자가 본 웹 페이지를 이용함으로써 발생하는 모든 손해에 대해 서비스 제공자는 책임을
              지지 않습니다.
            </Li>
          </Ol>
          <P $fontWeight="bold">저작권 및 지적재산권</P>
          <Ol>
            <Li>본 웹 페이지의 콘텐츠에 대한 저작권 및 지적재산권은 서비스 제공자에게 있습니다.</Li>
            <Li>이용자는 본 웹 페이지에서 제공되는 콘텐츠를 상업적으로 이용할 수 없습니다.</Li>
          </Ol>
          <P $fontWeight="bold">분쟁 해결 방법</P>
          <Ol>
            <Li>본 웹 페이지와 관련된 분쟁은 상호 협의를 통해 해결되어야 합니다.</Li>
          </Ol>
          <P $fontWeight="bold">이용약관의 변경과 공지</P>
          <Ol>
            <Li>
              본 웹 페이지의 이용약관은 필요 시 변경될 수 있으며, 변경 사항은 웹 페이지에
              공지됩니다.
            </Li>
            <Li>변경된 이용약관은 공지 후 즉시 효력을 발생합니다.</Li>
          </Ol>
          <P $fontWeight="bold">
            본 이용약관에 동의하신다면, 웹 페이지를 이용하실 수 있습니다. 동의하지 않을 경우 웹
            페이지를 이용하실 수 없습니다.
          </P>
        </OverFlowAutoSection>
      </RelativeDiv>
    </RelativeSection>
  );
};

export default TermsServiceContainer;
