import React from "react";

import { styled } from "styled-components";
import { Section, Article } from "../../style/LayoutStyle";
import { H1 } from "../../style/TextStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import ThumbnailItem from "../../component/ThumbnailItem";

const GameContentLayout = styled(Section)`
  width: calc(100vw - 120px);
  transition: padding 0.1s ease;
`;
const MainSection = styled(Article)`
  display: flex;
  flex-wrap: wrap;
`;

const PopularGameListContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  const popularGameDummyData = [
    {
      idx: 1,
      imgProps: "https://images.kbench.com/kbench/article/2020_02/k207768p1n1.jpg",
    },
    {
      idx: 2,
      imgProps: "https://cdn.gameinsight.co.kr/news/photo/202006/20543_48449_1654.jpg",
    },
    {
      idx: 3,
      imgProps:
        "https://i.namu.wiki/i/2NhbPFwj28v-TPcQp7Cgxy8wKNzT8ET6jvEhMblx5PqPe-lIE1Iu2bT0qVMhCTSoihfXdEcFpeJxsODhycMVyQ.webp",
    },
    {
      idx: 4,
      imgProps:
        "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/bltfb727b21e793c7ad/6466b4e1d3c3ea26f40ed784/D4_Story-Launch-Trailer_Thumb_global.webp",
    },
    {
      idx: 5,
      imgProps:
        "https://www.nintendo.co.kr/switch/acbaa/happyhomeparadise/assets_top/img/modalcm/modalcm02_img.jpg",
    },
    {
      idx: 1,
      imgProps: "https://images.kbench.com/kbench/article/2020_02/k207768p1n1.jpg",
    },
    {
      idx: 2,
      imgProps: "https://cdn.gameinsight.co.kr/news/photo/202006/20543_48449_1654.jpg",
    },
    {
      idx: 3,
      imgProps:
        "https://i.namu.wiki/i/2NhbPFwj28v-TPcQp7Cgxy8wKNzT8ET6jvEhMblx5PqPe-lIE1Iu2bT0qVMhCTSoihfXdEcFpeJxsODhycMVyQ.webp",
    },
    {
      idx: 4,
      imgProps:
        "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/bltfb727b21e793c7ad/6466b4e1d3c3ea26f40ed784/D4_Story-Launch-Trailer_Thumb_global.webp",
    },
    {
      idx: 5,
      imgProps:
        "https://www.nintendo.co.kr/switch/acbaa/happyhomeparadise/assets_top/img/modalcm/modalcm02_img.jpg",
    },
  ];
  return (
    <GameContentLayout $flex="v_center_start" $padding={navToggle && "0 0 0 250px"}>
      <H1 $fontSize="large" $fontWeight="bold" $padding="0 0 30px 0">
        인기 게임 TOP 100
      </H1>
      <MainSection $width="100%">
        {popularGameDummyData.map((elem) => {
          return <ThumbnailItem key={elem.idx} data={elem} />;
        })}
      </MainSection>
    </GameContentLayout>
  );
};

export default PopularGameListContainer;
