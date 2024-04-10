import { React, useState, useEffect } from "react";

import { styled } from "styled-components";
import { H1, P } from "../style/TextStyle";
import { Aside, Div, Nav, Section } from "../style/LayoutStyle";

import GameListItem from "../component/GameListItem";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../recoil/navToggleAtom";

import { Link } from "react-router-dom";
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

const GameListNavContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  const [gameListData, setGameListData] = useState(null);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   const gameList = async () => {
  //     const response = await fetch(`${process.env.REACT_APP_API_KEY}/game/all?page=${page}`);
  //     const result = await response.json();

  //     if (response.status === 200) {
  //       setGameListData(result.data.gameList);
  //     } else {
  //       alert(result.message);
  //     }
  //   };
  //   gameList();
  // }, []);

  const { data, error, status, request } = useFetch();
  useEffect(() => {
    request(`${process.env.REACT_APP_API_KEY}/game/all?page=${page}`, "GET", null);
  }, []);

  useEffect(() => {
    if (status === 200) {
      setGameListData(data);
    } else if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    } else if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data]);

  useEffect(() => {
    setPage(page + 1);
  }, [gameListData]);

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
          <NavSection $width="100%" $height="100%">
            {gameListData?.map((elem) => {
              return (
                <Link key={`${elem.idx}`} to={`/game/${elem.idx}/community/page/1`}>
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
