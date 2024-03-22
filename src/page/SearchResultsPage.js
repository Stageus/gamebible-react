import React from "react";

import { styled } from "styled-components";
import { Div, Section, Article } from "../style/LayoutStyle";
import { setSize } from "../style/SetStyle";

import HeaderItem from "../component/HeaderItem";
import GameListContainer from "../container/GameListNavContainer";
import FooterItem from "../component/FooterItem";
import YesGameContainer from "../container/inSearchResultsPage/YesGameContainer";
import NoGameContainer from "../container/inSearchResultsPage/NoGameContainer";
import PostListContainer from "../container/inGamePage/PostListContainer";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;
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
const FooterWrapper = styled(Div)`
  position: absolute;
  bottom: 0;
`;

const SearchResultsPage = () => {
  return (
    <PageWrapper>
      <HeaderItem />
      <GameListContainer />
      {/* <Section $flex="v_center_center" $margin="100px 0 0 0" $padding="0 60px" $width="100vw">
        <noGameContainer /> 
      </Section> */}
      <Section
        $flex="v_center_center"
        $margin="100px 30px 0 30px"
        $padding="30px"
        $width="100vw"
        $backgroundColor="major"
      >
        <Article $flex="v_end_" $width="100%" $margin="0 0 30px 0">
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
        <Article $flex="v_end_" $width="100%">
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
      </Section>
      <FooterWrapper>
        <FooterItem />
      </FooterWrapper>
    </PageWrapper>
  );
};

export default SearchResultsPage;
