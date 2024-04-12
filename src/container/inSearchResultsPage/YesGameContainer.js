import React from "react";

import { styled } from "styled-components";
import { Section, Article } from "../../style/LayoutStyle";

import ThumbnailItem from "../../component/ThumbnailItem";

const SearchGameLayout = styled(Section)`
  transition: padding 0.1s ease;
`;
const MainSection = styled(Article)``;

const YesGameContainer = ({ searchGameData }) => {
  return (
    <SearchGameLayout>
      <MainSection $flex="h_center_center" $width="100%">
        {searchGameData?.map((elem) => {
          return <ThumbnailItem key={elem.idx} data={elem} />;
        })}
      </MainSection>
    </SearchGameLayout>
  );
};

export default YesGameContainer;
