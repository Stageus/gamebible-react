import React, { useState } from "react";

import { styled } from "styled-components";
import { Div, Article, Section } from "../../style/LayoutStyle";
import { Button } from "../../style/ButtonStyle";
import { Span } from "../../style/TextStyle";
import { setColor } from "../../style/SetStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import BannerImgItem from "../../component/BannerImgItem";
import WriterContainer from "./WriterContainer";

const TabBtn = styled(Button)`
  border-right: 1px solid ${setColor("major")};
  border-left: 1px solid ${setColor("major")};
`;
const SwitchTabLayout = styled(Div)``;
const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;

const WritePostContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);
  const { gameIdx } = useParams();

  return (
    <GameContentLayout $flex="v_center_center" $padding={navToggle && "0 0 0 250px"}>
      <BannerImgItem {...{ gameIdx }} />
      <Section $flex="v_center_start" $width="100%">
        <SwitchTabLayout $flex="h_center_center">
          <TabBtn
            $width="150px"
            $height="50px"
            $margin="0 -1px 0 0"
            $backgroundColor="major"
            $fontSize="large"
            $flex="h_center_center"
          >
            <Span $color="white" $fontSize="12px">
              커뮤니티
            </Span>
          </TabBtn>
          <Link to="/game/:idx/wiki">
            <TabBtn
              $width="150px"
              $height="50px"
              $margin="0 -1px 0 0"
              $backgroundColor="white"
              $fontSize="large"
              $flex="h_center_center"
            >
              <Span $color="black" $fontSize="12px">
                위키
              </Span>
            </TabBtn>
          </Link>
        </SwitchTabLayout>
        <Article $flex="v_center_center" $backgroundColor="major" $width="100%" $padding="50px">
          <WriterContainer />
        </Article>
      </Section>
    </GameContentLayout>
  );
};

export default WritePostContainer;
