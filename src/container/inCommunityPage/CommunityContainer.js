import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { styled } from "styled-components";
import { Div, Article, Section } from "../../style/LayoutStyle";
import { Button } from "../../style/ButtonStyle";
import { Span } from "../../style/TextStyle";
import { setColor } from "../../style/SetStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import BannerImgItem from "../../component/BannerImgItem";
import PostListContainer from "../inGamePage/PostListContainer";

const TabBtn = styled(Button)`
  border-right: 1px solid ${setColor("major")};
  border-left: 1px solid ${setColor("major")};
`;
const SwitchTabLayout = styled(Div)``;
const CommunityTitleWrapper = styled(Div)`
  border: none;
  border-bottom: 1px solid ${setColor("white")};
`;
const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;
const ButtonWrapper = styled(Div)``;

const CommunityContainer = () => {
  const { gameIdx, pageIdx } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_KEY}/post?gameidx=${gameIdx}&page=${pageIdx}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };
    fetchData();
  }, [pageIdx]);

  const navToggle = useRecoilValue(navToggleAtom);

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
          <Link to={`/game/${gameIdx}/wiki`}>
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
          <Section $flex="v_center_center" $width="100%">
            <CommunityTitleWrapper
              $width="100%"
              $height="60px"
              $flex="h_center_center"
              $padding="0 30px"
              $margin="0 0 1px 0"
              $backgroundColor="major"
            >
              <Div
                $flex="h_between_center"
                $width="100%"
                $height="40px"
                $padding="10px 40px 10px 40px"
              >
                <Span $fontSize="large" $width="50%" $color="white">
                  제목
                </Span>
                <Div $flex="h_end_center" $width="50%">
                  <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
                    작성자
                  </Span>
                  <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
                    조회
                  </Span>
                  <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
                    작성일
                  </Span>
                </Div>
              </Div>
            </CommunityTitleWrapper>
            <PostListContainer {...{ gameIdx, pageIdx }} />
            <ButtonWrapper $width="100%" $flex="h_end_center" $padding="0 30px">
              <Link to={`/game/${gameIdx}/writePost`}>
                <Button
                  $color="white"
                  $backgroundColor="orange"
                  $padding="9px 10px"
                  $borderRadius="5px"
                  $borderStyle="1px solid black"
                >
                  작성하기
                </Button>
              </Link>
            </ButtonWrapper>
          </Section>
        </Article>
      </Section>
    </GameContentLayout>
  );
};

export default CommunityContainer;
