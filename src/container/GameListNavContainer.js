import { React, useState, useEffect, useRef } from "react";

import { styled } from "styled-components";
import { H1, P } from "../style/TextStyle";
import { Aside, Div, Nav, Section } from "../style/LayoutStyle";

import GameListItem from "../component/GameListItem";

import { useRecoilState, useRecoilValue } from "recoil";
import navToggleAtom from "../recoil/navToggleAtom";

import { Link, useLocation } from "react-router-dom";
import useFetch from "../hook/useFetch";

const GameListContainer = styled(Aside)`
  z-index: 100;
  position: fixed;
  top: 0;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.2);
`;
const GameListNav = styled(Nav)`
  height: calc(100vh - 160px);
`;
const NavSection = styled(Section)`
  overflow: auto;
`;

const GameListNavContainer = (props) => {
  const [navToggle, setNavToggle] = useRecoilState(navToggleAtom);
  const { MenuNullUrl } = props;
  const location = useLocation();

  // 데이터(ㄱㄴㄷ순 게임 목록) 가져오기 GET
  const [gameListData, setGameListData] = useState([]);
  const [page, setPage] = useState(1);

  const { data, status, request } = useFetch();
  const navRef = useRef(null);

  useEffect(() => {
    // // 특정한 url nav토글 닫기
    if (MenuNullUrl?.includes(location.pathname)) {
      setNavToggle(false);
    }
  }, [location.pathname]);

  const getGameList = () => {
    // 서버에서 데이터 가져오는 함수
    request(`/game/all?page=${page}`, "GET", null);
  };

  useEffect(() => {
    // page가 갱신 될 때 실행
    getGameList();
  }, [page]);

  useEffect(() => {
    // 스크롤 위치에 따라 실행
    // useRef로 DOM요소 특정, 해당 요소를 기준으로 스크롤 값 계산
    // getGameList가 실행될 때 갱신
    const scrollDownEvent = () => {
      if (navRef.current) {
        const { scrollTop, clientHeight, scrollHeight } = navRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
          setPage(page + 1);
        }
      }
    };
    if (navRef.current) {
      navRef.current.addEventListener("scroll", scrollDownEvent);
    }
    return () => {
      if (navRef.current) {
        navRef.current.removeEventListener("scroll", scrollDownEvent);
      }
    };
  }, [getGameList]);

  useEffect(() => {
    if (status === 200 && data?.data.gameList) {
      setGameListData([...gameListData, ...data?.data.gameList]);
    }
    if (status === 204) {
      console.log("게임목록이 존재하지 않습니다.");
    }
    if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    }
    if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data]);

  return (
    navToggle && (
      <GameListContainer
        $width={navToggle ? "250px" : 0}
        $backgroundColor="white"
        $margin="70px 0 0 0"
      >
        <Div $flex="v_start_center" $padding="0 0 30px 20px">
          <H1 $fontSize="large" $fontWeight="bold" $margin="30px 0 0 0">
            게임 목록
          </H1>
        </Div>
        <GameListNav
          $flex="h_start_center"
          $width="100%"
          $backgroundColor="white"
          $padding="0 0 0 30px"
        >
          <NavSection $width="100%" $height="100%" ref={navRef}>
            {gameListData?.map((elem) => {
              return (
                <Link key={`${elem.idx}`} to={`/game/${elem.idx}/community?page=1`}>
                  <GameListItem key={elem.idx} data={elem} />
                </Link>
              );
            })}
          </NavSection>
        </GameListNav>
      </GameListContainer>
    )
  );
};

export default GameListNavContainer;
