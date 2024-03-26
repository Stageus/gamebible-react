import React from "react";

import { styled } from "styled-components";
import { Div, Section } from "../style/LayoutStyle";
import { Img } from "../style/ImgStyle";

import HeaderItem from "../component/HeaderItem";
import GameListContainer from "../container/GameListNavContainer";
import FooterItem from "../component/FooterItem";
import YesGameContainer from "../container/inSearchResultsPage/YesGameContainer";
import ImgTextBtnUtil from "../util/ImgTextBtnUtil";

import noGameImg from "../img/noGameImg.svg";
import addGameImg from "../img/addGameImg.svg";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;
const NoGameSection = styled(Section)`
  // border: 2px solid red;
`;
const YesGameSection = styled(Section)`
  border: 2px solid red;
`;
const FooterWrapper = styled(Div)`
  position: absolute;
  bottom: 0;
`;

const SearchResultsPage = () => {
  const searchResultData = [];

  return (
    <PageWrapper>
      <HeaderItem />
      <GameListContainer />
      {searchResultData ? (
        <NoGameSection
          $flex="v_center_center"
          $margin="100px 0 0 0"
          $padding="0 60px"
          $width="100vw"
          $height="80vh"
        >
          <Div $flex="v_center_center">
            <Img src={noGameImg} $margin="0 0 30px 0" />
            <ImgTextBtnUtil
              img={addGameImg}
              text={"새로운 게임 요청하기"}
              color={"white"}
              backgroundColor={"major"}
            />
          </Div>
        </NoGameSection>
      ) : (
        <YesGameSection
          $flex="v_center_center"
          $margin="100px 0 0 0"
          $padding="0 60px"
          $width="100vw"
          $backgroundColor="major"
        >
          <YesGameContainer />
        </YesGameSection>
      )}
      <FooterWrapper>
        <FooterItem />
      </FooterWrapper>
    </PageWrapper>
  );
};

export default SearchResultsPage;
