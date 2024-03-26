import React from "react";

import { styled } from "styled-components";
import { Div, Article } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";
import { setSize } from "../../style/SetStyle";

import PostListContainer from "../inGamePage/PostListContainer";
import NoResultNoGameContainer from "./NoResultNoGameContainer";
import noPostImg from "../../img/noPostImg.svg";

const ArticleLabel = styled(Div)`
  font-size: ${setSize("large")};
`;
const ArticleContentLayout = styled(Div)`
  overflow: scroll;
`;

const YesResultContainer = () => {
  const searchResultData = [];

  return (
    <>
      <Article $flex="v_center_start" $width="100%" $margin="30px 0 30px 0">
        <ArticleLabel
          $flex="h_center_center"
          $backgroundColor="white"
          $width="150px"
          $height="50px"
        >
          연관 게임
        </ArticleLabel>
        <ArticleContentLayout $width="100%" $height="556px" $backgroundColor="white">
          {searchResultData ? <></> : <NoResultNoGameContainer />}
        </ArticleContentLayout>
      </Article>

      <Article $flex="v_center_start" $width="100%" $margin="0 0 30px 0">
        <ArticleLabel
          $flex="h_center_center"
          $backgroundColor="white"
          $width="150px"
          $height="50px"
        >
          연관 게시글
        </ArticleLabel>
        <ArticleContentLayout $width="100%" $height="556px" $backgroundColor="white">
          {searchResultData ? (
            <PostListContainer />
          ) : (
            <Div $flex="v_center_center">
              <Img src={noPostImg} $margin="0 0 30px 0" />
            </Div>
          )}
        </ArticleContentLayout>
      </Article>
    </>
  );
};

export default YesResultContainer;
