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
  }, []);

  // 백엔드 state가 업데이트 될 때 마다, page를 1 증가시킴
  useEffect(() => {
    // 백엔드 통신이 끝나고, 이를 state까지 반영하고나서 해줄 것
    // setGameListData(popularityListData?.gameList)   // 후처리 예시

    setPage(page + 1); // 필수
  }, [popularityListData]);

  // 백엔드 state가 업데이트 될 때 마다, 스크롤 이벤트를 refresh
  // useEffect(() => {
  //   const scrollDownEvent = async () => {
  //     const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  //     if (scrollTop + clientHeight >= scrollHeight) {
  //       // 백엔드 통신을 다시 해서, 기존 backend state에 추가해주는 작업 필요
  //       const response = await fetch(`${process.env.REACT_APP_API_KEY}/game/popular?page=${page}`);
  //       const result = await response.json();

  //       if (response.status === 200) {
  //         if (result.data.gameList.length !== 0) {
  //           // 백엔드에서 보내주는 데이터의 길이가 0이 아닐 때만 동작
  //           setPopularityListData([...popularityListData, ...result.data.gameList]);
  //         }
  //       }
  //       else if (result.data.gameList.length !== 0) {
  //         // popularityListData가 null인지 확인하고, 그렇다면 빈 배열로 초기화합니다.
  //         setPopularityListData((prevData) => {
  //           if (prevData === null) {
  //             return [...result.data.gameList];
  //           } else {
  //             return [...prevData, ...result.data.gameList];
  //           }
  //         });
  //       }
  //       else {
  //         alert(result.message);
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", scrollDownEvent);
  //   return () => {
  //     window.addEventListener("scroll", scrollDownEvent);
  //   };
  // });

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
