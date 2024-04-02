import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { styled } from "styled-components";
import { setColor } from "../../style/SetStyle";
import { Button } from "../../style/ButtonStyle";
import { Div, Article, Section } from "../../style/LayoutStyle";
import { Span } from "../../style/TextStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import BannerImgItem from "../../component/BannerImgItem";
import PostDetailViewContainer from "./PostDetailViewContainer";
import { useCookies } from "react-cookie";

const TabBtn = styled(Button)`
  border-right: 1px solid ${setColor("major")};
  border-left: 1px solid ${setColor("major")};
`;
const SwitchTabLayout = styled(Div)``;
const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;

const ReadPostContainer = () => {
  const [cookies] = useCookies(["token"]);
  const navToggle = useRecoilValue(navToggleAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.token) {
      alert("게시글 보기는 회원만 이용 가능합니다.");
      navigate("/");
      return;
    }
  }, []);
  return (
    <GameContentLayout $flex="v_center_center" $padding={navToggle && "0 0 0 250px"}>
      <BannerImgItem />
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
        <Article $flex="h_center_center" $backgroundColor="major" $width="100%" $padding="50px">
          <Section $backgroundColor="white" $width="100%" $height="80%" $padding="40px">
            <PostDetailViewContainer />
          </Section>
        </Article>
      </Section>
    </GameContentLayout>
  );
};

export default ReadPostContainer;
