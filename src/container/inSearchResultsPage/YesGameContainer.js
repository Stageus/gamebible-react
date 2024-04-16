import React from "react";

import { styled } from "styled-components";
import { Section, Article } from "../../style/LayoutStyle";

import ThumbnailItem from "../../component/ThumbnailItem";

const SearchGameLayout = styled(Section)`
  transition: padding 0.1s ease;
  border: 3px solid blue;
`;
const MainSection = styled(Article)`
  border: 2px solid red;
`;

const YesGameContainer = ({ searchGameData }) => {
  return (
    <SearchGameLayout $width="100%">
      <MainSection $flex="h_center_center">
        {searchGameData?.map((elem) => {
          return <ThumbnailItem key={elem.idx} data={elem} />;
        })}
      </MainSection>
    </SearchGameLayout>
  );
};

export default YesGameContainer;
