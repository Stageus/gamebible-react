import React from "react";

import { styled } from "styled-components";
import { Div, Section, Article } from "../style/LayoutStyle";

import HeaderItem from "../component/HeaderItem";
import GameListContainer from "../container/GameListNavContainer";
import FooterItem from "../component/FooterItem";
import noResultImg from "../img/noResultImg.svg";
import addGameImg from "../img/addGameImg.svg";
import ImgTextBtnUtil from "../util/ImgTextBtnUtil";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;
const SearchContainerWrapper = styled(Section)`
  margin: 100px 0;
  padding: 0 60px 0 60px;
  width: 100vw;
  box-sizing: border-box;
`;
const NoResultWrapper = styled(Article)`
  margin: 300px 0;
`;
const BtnWrapper = styled(Div)`
  padding: 30px 0;
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
      <SearchContainerWrapper $flex="v_center_center">
        <NoResultWrapper $flex="v_center_center">
          <img src={noResultImg} alt="검색결과가 없습니다" />
          <BtnWrapper>
            <ImgTextBtnUtil
              img={addGameImg}
              text="새로운 게임 요청하기"
              color="white"
              backgroundColor="major"
            />
          </BtnWrapper>
        </NoResultWrapper>
      </SearchContainerWrapper>
      <FooterWrapper>
        <FooterItem />
      </FooterWrapper>
    </PageWrapper>
  );
};

export default SearchResultsPage;
