import React from "react";

import { styled } from "styled-components";
import { Div, Article } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";
import { setSize } from "../../style/SetStyle";

import PostListContainer from "../inGamePage/PostListContainer";
import NoResultNoGameContainer from "./NoResultNoGameContainer";
import noPostImg from "../../img/noPostImg.svg";
import YesGameContainer from "./YesGameContainer";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

const ArticleLabel = styled(Div)`
  font-size: ${setSize("large")};
`;
const ArticleContentLayout = styled(Div)`
  overflow: scroll;
`;

const YesResultContainer = (props) => {
  const navToggle = useRecoilValue(navToggleAtom);

  const { searchGameData, searchPostData } = props;
  console.log("전달받은 검색 게시글 결과: ", searchPostData.length);
  console.log("전달받은 검색 게임 결과: ", searchGameData.length);

  return (
    <>
      <Article $flex="v_center_start" $width={navToggle ? "90%" : "100%"} $margin="30px 0 30px 0">
        <ArticleLabel
          $flex="h_center_center"
          $backgroundColor="white"
          $width="150px"
          $height="50px"
        >
          연관 게임
        </ArticleLabel>
        <ArticleContentLayout $width="100%" $height="556px" $backgroundColor="white">
          {searchGameData.length == 0 ? (
            <NoResultNoGameContainer />
          ) : (
            <Div $padding="30px">
              <YesGameContainer searchGameData={searchGameData} />
            </Div>
          )}
        </ArticleContentLayout>
      </Article>

      <Article $flex="v_center_start" $width={navToggle ? "90%" : "100%"} $margin="0 0 30px 0">
        <ArticleLabel
          $flex="h_center_center"
          $backgroundColor="white"
          $width="150px"
          $height="50px"
        >
          연관 게시글
        </ArticleLabel>
        <ArticleContentLayout
          $width="100%"
          $height="556px"
          $backgroundColor="white"
          $flex="v_center_center"
        >
          {searchPostData.length == 0 ? (
            <Div $width="100%" $flex="h_center_center">
              <Img src={noPostImg} />
            </Div>
          ) : (
            <PostListContainer searchPostData={searchPostData} />
          )}
        </ArticleContentLayout>
      </Article>
    </>
  );
};

export default YesResultContainer;
