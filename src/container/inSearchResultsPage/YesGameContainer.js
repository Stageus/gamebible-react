import React from "react";

import { styled } from "styled-components";
import { Section, Article } from "../../style/LayoutStyle";

import ThumbnailItem from "../../component/ThumbnailItem";

const SearchGameLayout = styled(Section)`
  transition: padding 0.1s ease;
`;
const MainSection = styled(Article)`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;

const YesGameContainer = ({ searchGameData }) => {
  return (
    <SearchGameLayout $width="100%" $height="100%" $padding="30px">
      <MainSection $flex="h_start_start" $width="100%" $height="100%">
        {searchGameData?.map((elem) => {
          return <ThumbnailItem key={elem.idx} data={elem} />;
        })}
      </MainSection>
    </SearchGameLayout>
  );
};

export default YesGameContainer;
