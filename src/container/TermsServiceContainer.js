import React from "react";

import styled from "styled-components";
import { H1 } from "../style/TextStyle";
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

const Ol = styled.ol`
  padding: 50px;
  overflow: auto;
`;

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
        <H1>서비스 이용약관</H1>
        <Ol>
          <Li>
            서비스 이용: 본 사이트는 이용자가 14세 이상이어야 사용할 수 있습니다.서비스 이용 시간은
            특별한 제한 없이 24시간 가능하며, 이용자의 행동이 다른 이용자의 서비스 이용을
            방해하거나, 사이트의 정상적인 운영을 방해하는 경우 이용 제한 조치가 취해질 수 있습니다.
          </Li>
          <Li>
            계정 및 이용자 정보: 본 사이트에서는 이용자의 개인정보를 중요하게 보호하며, 이에 대한
            자세한 사항은 개인정보 보호정책에서 확인하실 수 있습니다. 계정 생성 및 관리는 이용자
            개인의 책임입니다.
          </Li>
          <Li>
            내용 생성 및 공유: 본 사이트에서는 이용자가 생성하고 공유하는 모든 내용에 대한 저작권을
            존중합니다. 부적절한 내용, 음란물, 허위 정보 등은 엄격히 금지되며, 이를 위반할 경우
            이용제한 조치가 취해질 수 있습니다.
          </Li>
          <Li>
            서비스의 변경 및 중단: 본 사이트는 서비스 개선을 위해 이용약관을 변경하거나 서비스를
            일시 중단하거나 업그레이드할 수 있습니다. 이러한 변경 사항은 사이트 안내 또는 이메일을
            통해 사전에 공지됩니다.
          </Li>
          <Li>
            면책 조항: 본 사이트는 이용자가 서비스를 이용함에 있어 발생하는 손해에 대해 책임을 지지
            않습니다. 이용자는 서비스 이용으로 인한 모든 위험을 스스로 감수해야 합니다.
          </Li>
          <Li>
            기타: 법률적인 문제나 분쟁이 발생할 경우, 해당 문제의 관할 법원은 본 사이트의 위치에
            따라 결정됩니다.
          </Li>
          <Li>
            기타: 법률적인 문제나 분쟁이 발생할 경우, 해당 문제의 관할 법원은 본 사이트의 위치에
            따라 결정됩니다.
          </Li>
          <Li>
            기타: 법률적인 문제나 분쟁이 발생할 경우, 해당 문제의 관할 법원은 본 사이트의 위치에
            따라 결정됩니다.
          </Li>
          <Li>
            기타: 법률적인 문제나 분쟁이 발생할 경우, 해당 문제의 관할 법원은 본 사이트의 위치에
            따라 결정됩니다.
          </Li>
          <Li>
            기타: 법률적인 문제나 분쟁이 발생할 경우, 해당 문제의 관할 법원은 본 사이트의 위치에
            따라 결정됩니다.
          </Li>
        </Ol>
      </RelativeDiv>
    </RelativeSection>
  );
};

export default TermsServiceContainer;
