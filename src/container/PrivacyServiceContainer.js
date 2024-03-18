import React from "react";

import styled from "styled-components";
import { H1, P } from "../style/TextStyle";
import { Div } from "../style/LayoutStyle";
import { setColor } from "../style/SetStyle";
import { Button } from "../style/ButtonStyle";
import { Section } from "../style/LayoutStyle";

const RelativeDiv = styled(Div)`
  position: relative;
  background-color: ${setColor("white")};
  width: 500px;
  height: 600px;
  overflow: auto;
  padding: 10px 50px;
`;

const RelativeSection = styled(Section)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);
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
  const { privacyReadMoreEvent } = props;
  return (
    <RelativeSection $width="100vw" $height="100vh" $flex="h_center_center">
      <RelativeDiv $flex="v_start_start">
        <RightButton
          $width="30px"
          $height="30px"
          $flex="h_center_center"
          $backgroundColor="none"
          onClick={privacyReadMoreEvent}
        >
          ❌
        </RightButton>
        <H1 $margin="0 0 10px 0" $fontSize="large">
          서비스 이용
        </H1>
        <P>회사는 사용자의 개인정보를 다음 목적을 위해 수집 및 이용합니다:</P>
        <Ol>
          <Li>회원 가입 및 관리</Li>
          <Li>서비스 제공 및 운영</Li>
          <Li>고객 상담 및 민원 처리</Li>
          <Li>신규 서비스 개발 및 마케팅 활동 등</Li>
        </Ol>

        <P>
          회사는 이용자의 별도 동의 없이는 개인정보를 해당 목적 이외의 용도로 사용하지 않으며, 목적
          외 이용 시에는 사전 동의를 구할 것입니다.
        </P>

        <P>수집하는 개인정보의 항목</P>
        <Ol>
          <Li>이메일 주소</Li>
          <Li>사용자명</Li>
          <Li>비밀번호 등 서비스 이용을 위해 필요한 정보</Li>
        </Ol>

        <P>개인정보의 보유 및 이용 기간</P>
        <P>
          회사는 개인정보를 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만,
          관련 법령에서 정하는 바에 따라 일정 기간 동안 개인정보를 보관할 필요가 있는 경우에는 해당
          기간 동안 보관하고 안전하게 관리합니다.
        </P>

        <P>개인정보의 제공 및 공유</P>
        <P>
          회사는 이용자의 개인정보를 본 약관에서 명시한 범위를 초과하여 외부에 제공하지 않습니다.
          다만, 다음의 경우에는 예외적으로 개인정보를 제공할 수 있습니다:
        </P>
        <Ol>
          <Li>이용자 동의가 있는 경우</Li>
          <Li>법령의 규정에 따라 제공이 요구되는 경우</Li>
        </Ol>

        <P>개인정보의 안전성 확보 조치</P>
        <Ol>
          <Li>개인정보 처리 시스템 접근 제한</Li>
          <Li>개인정보의 암호화</Li>
          <Li>해킹 등에 대비한 대응책 마련 등</Li>
        </Ol>

        <P>이용자의 권리와 그 행사</P>
        <P>이용자는 회사에 대해 다음과 같은 권리를 가지고 있습니다:</P>
        <Ol>
          <Li>개인정보 열람, 정정, 삭제 요청</Li>
          <Li>개인정보 처리의 정지 및 개인정보 이용 동의 철회 등</Li>
        </Ol>
        <P>위 권리에 대한 행사는 회사가 제공하는 방법을 통해 할 수 있습니다.</P>

        <P>개인정보 보호책임자 연락처</P>
        <P>
          회사는 이용자의 개인정보를 보호하고 관리하기 위해 개인정보 보호책임자를 지정하고 있으며,
          아래 연락처를 통해 개인정보 보호 관련 문의 및 민원을 접수할 수 있습니다:
        </P>
        <ul>
          <Li>보호책임자 이름</Li>
          <Li>연락처</Li>
          <Li>이메일 주소</Li>
        </ul>

        <P>약관의 변경</P>
        <P>
          회사는 관련 법령의 개정 또는 서비스의 변경에 따라 약관을 변경할 수 있으며, 변경 사항은
          서비스 내 공지사항 등을 통해 고지할 것입니다.
        </P>
      </RelativeDiv>
    </RelativeSection>
  );
};

export default TermsServiceContainer;
