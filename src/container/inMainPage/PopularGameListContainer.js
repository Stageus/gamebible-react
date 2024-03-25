import React from "react";

import { styled } from "styled-components";
import { Section, Div } from "../../style/LayoutStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import ThumbnailItem from "../../component/ThumbnailItem";

const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;

const PopularGameListContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);
  return (
    <GameContentLayout $flex="v_center_center" $padding={navToggle && "0 0 0 250px"}>
      <Div $width="100%">
        <ThumbnailItem />
      </Div>
    </GameContentLayout>
  );
};

export default PopularGameListContainer;
