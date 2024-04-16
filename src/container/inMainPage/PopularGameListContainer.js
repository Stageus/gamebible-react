import { React, useState, useEffect } from "react";

import { styled } from "styled-components";
import { Section, Article } from "../../style/LayoutStyle";
import { H1 } from "../../style/TextStyle";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";

import ThumbnailItem from "../../component/ThumbnailItem";

import useFetch from "../../hook/useFetch";

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

  // 데이터(인기 게임 순 썸네일) 가져오기 GET
  const [popularityListData, setPopularityListData] = useState(null);
  const [page, setPage] = useState(1);

  const { data, status, request } = useFetch();

  const getPopularGameList = () => {
    request(`/game/popular?page=${page}`, "GET", null);
  };

  useEffect(() => {
    getPopularGameList();
  }, [page]);

  useEffect(() => {
    if (status === 200) {
      setPopularityListData(data?.data?.gameList);
    }
    if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    }
    if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data, status]);

  useEffect(() => {
    setPage(page + 1);
  }, [popularityListData]);

  useEffect(() => {
    console.log("ㅎㅇ");
    const scrollDownEvent = async () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        getPopularGameList();
      }
    };
    window.addEventListener("scroll", scrollDownEvent);
    return () => {
      window.removeEventListener("scroll", scrollDownEvent);
    };
  }, [page]);

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
