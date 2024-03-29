import { React, useState, useEffect } from "react";

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

  const [page, setPage] = useState(1);

  const [popularityListData, setPopularityListData] = useState(null);

  useEffect(() => {
    const gamePopular = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/game/popular?page=${page}`);
      const result = await response.json();

      if (response.status === 200) {
        setPopularityListData(result.data.gameList);
      } else {
        alert(result.message);
      }
    };

    gamePopular();

    // setPopularityListData([
    //   {
    //     idx: 1,
    //     imgProps: "https://images.kbench.com/kbench/article/2020_02/k207768p1n1.jpg",
    //   },
    //   {
    //     idx: 2,
    //     imgProps: "https://cdn.gameinsight.co.kr/news/photo/202006/20543_48449_1654.jpg",
    //   },
    //   {
    //     idx: 3,
    //     imgProps:
    //       "https://i.namu.wiki/i/2NhbPFwj28v-TPcQp7Cgxy8wKNzT8ET6jvEhMblx5PqPe-lIE1Iu2bT0qVMhCTSoihfXdEcFpeJxsODhycMVyQ.webp",
    //   },
    //   {
    //     idx: 4,
    //     imgProps:
    //       "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/bltfb727b21e793c7ad/6466b4e1d3c3ea26f40ed784/D4_Story-Launch-Trailer_Thumb_global.webp",
    //   },
    //   {
    //     idx: 5,
    //     imgProps:
    //       "https://www.nintendo.co.kr/switch/acbaa/happyhomeparadise/assets_top/img/modalcm/modalcm02_img.jpg",
    //   },
    //   {
    //     idx: 5,
    //     imgProps:
    //       "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc9ebc37d81a976c3/5e8cdc21baf2bd3cc4753c7a/IMAGE_2.jpg",
    //   },
    //   {
    //     idx: 6,
    //     imgProps: "https://images.kbench.com/kbench/article/2020_02/k207768p1n1.jpg",
    //   },
    //   {
    //     idx: 7,
    //     imgProps: "https://img.sa.nexon.com/images/common/sns2.jpg",
    //   },
    //   {
    //     idx: 8,
    //     imgProps: "https://m.ddaily.co.kr/2022/04/14/2022041420013889070_l.jpg",
    //   },
    //   {
    //     idx: 9,
    //     imgProps: "https://cdn.gameinsight.co.kr/news/photo/202006/20543_48449_1654.jpg",
    //   },
    //   {
    //     idx: 10,
    //     imgProps:
    //       "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1854283A50DD42E137",
    //   },
    //   {
    //     idx: 11,
    //     imgProps:
    //       "https://i.namu.wiki/i/2NhbPFwj28v-TPcQp7Cgxy8wKNzT8ET6jvEhMblx5PqPe-lIE1Iu2bT0qVMhCTSoihfXdEcFpeJxsODhycMVyQ.webp",
    //   },
    //   {
    //     idx: 12,
    //     imgProps:
    //       "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/bltfb727b21e793c7ad/6466b4e1d3c3ea26f40ed784/D4_Story-Launch-Trailer_Thumb_global.webp",
    //   },
    //   {
    //     idx: 13,
    //     imgProps:
    //       "https://www.nintendo.co.kr/switch/acbaa/happyhomeparadise/assets_top/img/modalcm/modalcm02_img.jpg",
    //   },
    //   {
    //     idx: 14,
    //     imgProps:
    //       "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc9ebc37d81a976c3/5e8cdc21baf2bd3cc4753c7a/IMAGE_2.jpg",
    //   },
    //   {
    //     idx: 15,
    //     imgProps: "https://img.sa.nexon.com/images/common/sns2.jpg",
    //   },
    //   {
    //     idx: 16,
    //     imgProps: "https://m.ddaily.co.kr/2022/04/14/2022041420013889070_l.jpg",
    //   },
    //   {
    //     idx: 17,
    //     imgProps:
    //       "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1854283A50DD42E137",
    //   },
    // ]);
  }, []);

  // 백엔드 state가 업데이트 될 때 마다, page를 1 증가시킴
  useEffect(() => {
    // 백엔드 통신이 끝나고, 이를 state까지 반영하고나서 해줄 것
    // setGameListData(popularityListData?.gameList)   // 후처리 예시

    setPage(page + 1); // 필수
  }, [popularityListData]);

  // 백엔드 state가 업데이트 될 때 마다, 스크롤 이벤트를 refresh
  useEffect(() => {
    const scrollDownEvent = async () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        // 백엔드 통신을 다시 해서, 기존 backend state에 추가해주는 작업 필요
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/game/popular?page=${page}`);
        const result = await response.json();

        if (response.status === 200) {
          if (result.data.gameList.length !== 0) {
            // 백엔드에서 보내주는 데이터의 길이가 0이 아닐 때만 동작
            setPopularityListData([...popularityListData, ...result.data.gameList]);
          }
        }
        // else if (result.data.gameList.length !== 0) {
        //   // popularityListData가 null인지 확인하고, 그렇다면 빈 배열로 초기화합니다.
        //   setPopularityListData((prevData) => {
        //     if (prevData === null) {
        //       return [...result.data.gameList];
        //     } else {
        //       return [...prevData, ...result.data.gameList];
        //     }
        //   });
        // }
        else {
          alert(result.message);
        }
      }
    };
    window.addEventListener("scroll", scrollDownEvent);
    return () => {
      window.addEventListener("scroll", scrollDownEvent);
    };
  }, [popularityListData]);

  // const addPopularGameDummyData = () => {
  //   //   const newData = [
  //   //     {
  //   //       idx: 1,
  //   //       imgProps: "https://images.kbench.com/kbench/article/2020_02/k207768p1n1.jpg",
  //   //     },
  //   //     {
  //   //       idx: 2,
  //   //       imgProps: "https://cdn.gameinsight.co.kr/news/photo/202006/20543_48449_1654.jpg",
  //   //     },
  //   //     {
  //   //       idx: 3,
  //   //       imgProps:
  //   //         "https://i.namu.wiki/i/2NhbPFwj28v-TPcQp7Cgxy8wKNzT8ET6jvEhMblx5PqPe-lIE1Iu2bT0qVMhCTSoihfXdEcFpeJxsODhycMVyQ.webp",
  //   //     },
  //   //     {
  //   //       idx: 4,
  //   //       imgProps:
  //   //         "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/bltfb727b21e793c7ad/6466b4e1d3c3ea26f40ed784/D4_Story-Launch-Trailer_Thumb_global.webp",
  //   //     },
  //   //     {
  //   //       idx: 5,
  //   //       imgProps:
  //   //         "https://www.nintendo.co.kr/switch/acbaa/happyhomeparadise/assets_top/img/modalcm/modalcm02_img.jpg",
  //   //     },
  //   //     {
  //   //       idx: 1,
  //   //       imgProps: "https://images.kbench.com/kbench/article/2020_02/k207768p1n1.jpg",
  //   //     },
  //   //     {
  //   //       idx: 2,
  //   //       imgProps: "https://cdn.gameinsight.co.kr/news/photo/202006/20543_48449_1654.jpg",
  //   //     },
  //   //     {
  //   //       idx: 3,
  //   //       imgProps:
  //   //         "https://i.namu.wiki/i/2NhbPFwj28v-TPcQp7Cgxy8wKNzT8ET6jvEhMblx5PqPe-lIE1Iu2bT0qVMhCTSoihfXdEcFpeJxsODhycMVyQ.webp",
  //   //     },
  //   //     {
  //   //       idx: 4,
  //   //       imgProps:
  //   //         "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/bltfb727b21e793c7ad/6466b4e1d3c3ea26f40ed784/D4_Story-Launch-Trailer_Thumb_global.webp",
  //   //     },
  //   //     {
  //   //       idx: 5,
  //   //       imgProps:
  //   //         "https://www.nintendo.co.kr/switch/acbaa/happyhomeparadise/assets_top/img/modalcm/modalcm02_img.jpg",
  //   //     },
  //   //   ];

  //   setPopularityListData((prevData) => [...prevData, ...newData]);
  // };

  return (
    <GameContentLayout $flex="v_center_start" $padding={navToggle && "0 0 0 250px"}>
      <H1 $fontSize="large" $fontWeight="bold" $padding="0 0 30px 0">
        💥인기 게임 순위💥
      </H1>
      <MainSection $width="100%">
        {popularityListData?.map((elem) => {
          return <ThumbnailItem key={elem.idx} data={elem} />;
        })}
      </MainSection>
    </GameContentLayout>
  );
};

export default PopularGameListContainer;
