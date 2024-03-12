import React from "react";
import { styled } from "styled-components";
import { Footer, Section, Div } from "../style/LayoutStyle";
import { Span } from "../style/TextStyle";
import { Img } from "../style/ImgStyle";
import notion from "../img/notion.svg";
import github from "../img/github.svg";
import email from "../img/email.svg";
import footerLogo from "../img/footerLogo.svg";

const FooterContainer = styled(Footer)``;
const FooterItemsContainer = styled(Section)``;
const FooterTeamsContainer = styled(Section)``;
const FooterTeam = styled(Div)``;
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
const FooterLinkContainer = styled(Section)``;
const FooterLinkIcon = styled(Div)``;
const FooterCopyRight = styled(Div)``;
const FooterLogo = styled(Img)``;

const FooterItem = () => {
  return (
    <FooterContainer
      $backgroundColor="minorLight"
      $flex="h_center_center"
      $width="100vw"
      $height="300px"
    >
      <FooterItemsContainer $flex="v_between_center" $height="230px">
        <FooterTeamsContainer $flex="v_between_center" $height="80px">
          <FooterTeam $flex="h_center_center">
            <TeamName>DESIGN |</TeamName>
            <MemberName>
              <KorName>방준연</KorName> <EngName>Jun-yeon Bang</EngName>
            </MemberName>
            <MemberName>
              <KorName>조경은</KorName> <EngName>Kyoung-eun Jo</EngName>
            </MemberName>
          </FooterTeam>
          <FooterTeam>
            <TeamName>WEB FRONTEND |</TeamName>
            <MemberName>
              <KorName> 방준연</KorName> <EngName>Jun-yeon Bang</EngName>
            </MemberName>
            <MemberName>
              <KorName>조경은</KorName> <EngName>Kyoung-eun Jo</EngName>
            </MemberName>
          </FooterTeam>
          <FooterTeam>
            <TeamName>BACKEND |</TeamName>
            <MemberName>
              <KorName>김기주</KorName> <EngName>Ki-ju Kim</EngName>
            </MemberName>
            <MemberName>
              <KorName>박해주</KorName> <EngName>Hae-ju Park</EngName>
            </MemberName>
            <MemberName>
              <KorName>정태은</KorName> <EngName>Tae-eun Jung</EngName>
            </MemberName>
          </FooterTeam>
        </FooterTeamsContainer>
        <FooterLinkContainer $flex="h_between_center" $width="300px">
          <FooterLinkIcon>
            <a
              href="https://stageus.notion.site/de6ca2e84dce43bdacde52179a81cefc?pvs=4"
              target="_blank"
            >
              <img src={notion} alt="노션 바로가기" />
            </a>
          </FooterLinkIcon>
          <FooterLinkIcon>
            <a href="https://github.com/orgs/Stageus/teams/gamebible/repositories" target="_blank">
              <img src={github} alt="깃허브 바로가기" />
            </a>
          </FooterLinkIcon>
          <FooterLinkIcon>
            <a href="mailto:kavvy99@naver.com" target="_blank">
              <img src={email} alt="이메일 작성하기" />
            </a>
          </FooterLinkIcon>
        </FooterLinkContainer>
        <FooterCopyRight $flex="h_center_center">
          Copyrights 2024.
          <FooterLogo $flex="h_center_center" src={footerLogo} />
          all rights reserved
        </FooterCopyRight>
      </FooterItemsContainer>
    </FooterContainer>
  );
};

export default FooterItem;
