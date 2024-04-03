import React from "react";

import { styled } from "styled-components";
import { Div, Section } from "../style/LayoutStyle";

import FooterItem from "../component/FooterItem";
import NoResultNoGameContainer from "../container/inSearchResultsPage/NoResultNoGameContainer";
import YesResultContainer from "../container/inSearchResultsPage/YesResultContainer";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../recoil/navToggleAtom";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;
const NoResultSection = styled(Section)``;
const YesResultSection = styled(Section)``;
const FooterWrapper = styled(Div)`
  position: absolute;
  bottom: 0;
`;

const SearchResultsPage = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  const searchResultData = [];

  return (
    <PageWrapper>
      {searchResultData ? (
        <YesResultSection
          $flex="v_center_center"
          $margin={navToggle ? "100px 0 0 300px" : "100px 0 0 0"}
          $padding="0 60px"
          $width={navToggle ? "80vw" : "100vw"}
          $backgroundColor="major"
        >
          <YesResultContainer />
        </YesResultSection>
      ) : (
        <NoResultSection
          $flex="v_center_center"
          $margin="100px 0 0 0"
          $padding="0 60px"
          $width="100vw"
          $height="80vh"
        >
          <NoResultNoGameContainer />
        </NoResultSection>
      )}
      <FooterWrapper>
        <FooterItem />
      </FooterWrapper>
    </PageWrapper>
  );
};

export default SearchResultsPage;
