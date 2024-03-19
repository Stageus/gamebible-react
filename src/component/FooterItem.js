import React from "react";
import { styled } from "styled-components";
import { Footer, Section, Div } from "../style/LayoutStyle";
import { A, Span } from "../style/TextStyle";
import { Img } from "../style/ImgStyle";
import notionImg from "../img/notionImg.svg";
import githubImg from "../img/githubImg.svg";
import emailImg from "../img/emailImg.svg";
import footerLogoImg from "../img/footerLogoImg.svg";

const FooterContainer = styled(Footer)`
  position: absolute;
  transform: translateY(30px);
`;
const TeamName = styled(Span)`
  font-size: large;
  font-weight: bold;
`;
const MemberName = styled(Div)`
  padding-left: 8px;
`;
const KorName = styled(Span)`
  font-weight: light;
`;
const EngName = styled(Span)`
  font-size: small;
  font-weight: light;
`;

const FooterItem = () => {
  return (
    <FooterContainer
      $backgroundColor="minorLight"
      $flex="h_center_center"
      $width="100vw"
      $height="300px"
    >
      <Section $flex="v_between_center" $height="230px">
        <Section $flex="v_between_center" $height="80px">
          <Div $flex="h_center_center">
            <TeamName>DESIGN |</TeamName>
            <MemberName $flex="h_start_center">
              <KorName>방준연</KorName> <EngName>Jun-yeon Bang</EngName>
            </MemberName>
            <MemberName $flex="h_start_center">
              <KorName>조경은</KorName> <EngName>Kyoung-eun Jo</EngName>
            </MemberName>
          </Div>
          <Div $flex="h_center_center">
            <TeamName>WEB FRONTEND |</TeamName>
            <MemberName $flex="h_start_center">
              <KorName> 방준연</KorName> <EngName>Jun-yeon Bang</EngName>
            </MemberName>
            <MemberName $flex="h_start_center">
              <KorName>조경은</KorName> <EngName>Kyoung-eun Jo</EngName>
            </MemberName>
          </Div>
          <Div $flex="h_center_center">
            <TeamName>BACKEND |</TeamName>
            <MemberName $flex="h_start_center">
              <KorName>김기주</KorName> <EngName>Ki-ju Kim</EngName>
            </MemberName>
            <MemberName $flex="h_start_center">
              <KorName>박해주</KorName> <EngName>Hae-ju Park</EngName>
            </MemberName>
            <MemberName $flex="h_start_center">
              <KorName>정태은</KorName> <EngName>Tae-eun Jung</EngName>
            </MemberName>
          </Div>
        </Section>
        <Section $flex="h_between_center" $width="300px">
          <Div>
            <A
              href="https://stageus.notion.site/de6ca2e84dce43bdacde52179a81cefc?pvs=4"
              target="_blank"
            >
              <Img src={notionImg} alt="노션 바로가기" />
            </A>
          </Div>
          <Div>
            <A href="https://github.com/orgs/Stageus/teams/gamebible/repositories" target="_blank">
              <Img src={githubImg} alt="깃허브 바로가기" />
            </A>
          </Div>
          <Div>
            <A href="mailto:kavvy99@naver.com" target="_blank">
              <Img src={emailImg} alt="이메일 작성하기" />
            </A>
          </Div>
        </Section>
        <Div $flex="h_center_center">
          Copyrights 2024.
          <Img $flex="h_center_center" src={footerLogoImg} />
          all rights reserved
        </Div>
      </Section>
    </FooterContainer>
  );
};

export default FooterItem;
