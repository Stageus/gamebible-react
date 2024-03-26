import React from "react";
import { styled } from "styled-components";
import { H1 } from "../style/TextStyle";
import { Aside, Div, Nav, Section } from "../style/LayoutStyle";
import GameListItem from "../component/GameListItem";
import { useRecoilValue } from "recoil";
import navToggleAtom from "../recoil/navToggleAtom";
import { Link } from "react-router-dom";

const GameListContainer = styled(Aside)`
  z-index: 100;
  position: fixed;
  // left: 30px;
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

  const GameListData = [
    {
      id: "1",
      name: "리그오브레전드(League of Legends)",
    },
    {
      id: "2",
      name: "피파 온라인(FIFA online)",
    },
    {
      id: "3",
      name: "오버워치(Overwatch)",
    },
    {
      id: "4",
      name: "Game_4",
    },
    {
      id: "5",
      name: "Game_5",
    },
    {
      id: "6",
      name: "Game_6",
    },
    {
      id: "7",
      name: "Game_7",
    },
    {
      id: "8",
      name: "Game_8",
    },
    {
      id: "9",
      name: "Game_9",
    },
    {
      id: "10",
      name: "Game_10",
    },
    {
      id: "11",
      name: "Game_11",
    },
    {
      id: "12",
      name: "Game_12",
    },
    {
      id: "13",
      name: "Game_13",
    },
    {
      id: "14",
      name: "Game_14",
    },
    {
      id: "15",
      name: "Game_15",
    },
    {
      id: "16",
      name: "Game_16",
    },
    {
      id: "17",
      name: "Game_17",
    },
    {
      id: "18",
      name: "Game_18",
    },
    {
      id: "19",
      name: "Game_19",
    },
    {
      id: "20",
      name: "Game_20",
    },
    {
      id: "21",
      name: "Game_21",
    },
    {
      id: "22",
      name: "Game_22",
    },
    {
      id: "23",
      name: "Game_23",
    },
    {
      id: "Game_24",
      name: "Game_24",
    },
    {
      id: "Game_25",
      name: "Game_25",
    },
  ];

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
          $flex="v_center_center"
          $width="100%"
          $backgroundColor="white"
          $padding="0 0 0 30px"
        >
          <NavSection $width="100%">
            {GameListData.map((elem) => {
              return (
                <Link key={`${elem.id}`} to={`/game/${elem.id}`}>
                  <GameListItem key={elem.id} data={elem} />
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
