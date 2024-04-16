import React from "react";

import { styled } from "styled-components";
import { Div, Section } from "../style/LayoutStyle";

import FooterItem from "../component/FooterItem";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../recoil/navToggleAtom";

import SearchResultGameContainer from "../container/inSearchResultsPage/SearchResultGameContainer";
import SearchResultPostContainer from "../container/inSearchResultsPage/SearchResultPostContainer";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;
const YesResultSection = styled(Section)``;
const FooterWrapper = styled(Div)`
  position: absolute;
  bottom: 0;
`;

const SearchResultsPage = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  return (
    <PageWrapper>
      {/* 검색 결과: 게임 && 게시글 */}
      <YesResultSection
        $flex="v_center_center"
        $margin={navToggle ? "100px 0 0 300px" : "100px 0 0 0"}
        $padding="0 60px"
        $width={navToggle ? "80vw" : "100vw"}
        $backgroundColor="major"
      >
        {/* 연관 게임 */}
        <SearchResultGameContainer />
        {/* 연관 게시글 */}
        <SearchResultPostContainer />
      </YesResultSection>

      {/* 푸터 */}
      <FooterWrapper>
        <FooterItem />
      </FooterWrapper>
    </PageWrapper>
  );
};

export default SearchResultsPage;
