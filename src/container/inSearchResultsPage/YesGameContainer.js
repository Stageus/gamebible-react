import React from "react";

import { styled } from "styled-components";
import { Div, Article } from "../../style/LayoutStyle";
import { setSize } from "../../style/SetStyle";
import { Img } from "../../style/ImgStyle";

import PostListContainer from "../inGamePage/PostListContainer";

const ArticleLabel = styled(Div)`
  font-size: ${setSize("large")};
`;
const ArticleContentLayout = styled(Div)`
  overflow: scroll;
`;
const ImgLayout = styled(Div)`
  border: 2px solid red;
  width: 100%;
  height: 100%;
`;

const YesGameContainer = () => {
  return (
    <>
      <Article $flex="v_end_center" $width="100%" $margin="0 0 30px 0">
        <ArticleLabel
          $flex="h_center_center"
          $backgroundColor="white"
          $width="150px"
          $height="50px"
        >
          연관 게임
        </ArticleLabel>
        <ArticleContentLayout $width="100%" $height="556px" $backgroundColor="white">
          <ImgLayout>
            <YesGameContainer />
          </ImgLayout>
        </ArticleContentLayout>
      </Article>
      <Article $flex="v_end_center" $width="100%">
        <ArticleLabel
          $flex="h_center_center"
          $backgroundColor="white"
          $width="150px"
          $height="50px"
        >
          연관 게시글
        </ArticleLabel>
        <ArticleContentLayout $width="100%" $height="556px" $backgroundColor="white">
          <PostListContainer />
        </ArticleContentLayout>
      </Article>
    </>
  );
};

export default YesGameContainer;
