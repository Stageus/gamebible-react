import React from "react";
import { styled } from "styled-components";
import { H1 } from "../style/TextStyle";
import { Aside, Div, Nav, Section } from "../style/LayoutStyle";
import GameListItem from "../component/GameListItem";
import { useRecoilValue } from "recoil";
import GameListItemAtom from "../recoil/GameListItemAtom";
import { Link } from "react-router-dom";

const GameListContainer = styled(Aside)`
  z-index: 100;
  position: absolute;
  left: 30px;
  top: 100px;
`;
const GameListNav = styled(Nav)`
  height: calc(100vh - 160px);
`;
const NavSection = styled(Section)`
  overflow: auto;
`;

const GameListNavContainer = () => {
  const GameListItemOpen = useRecoilValue(GameListItemAtom);

  const GameListData = [
    {
      id: "Game_1",
      name: "리그오브레전드(League of Legends)",
    },
    {
      id: "Game_2",
      name: "피파 온라인(FIFA online)",
    },
    {
      id: "Game_3",
      name: "오버워치(Overwatch)",
    },
    {
      id: "Game_4",
      name: "Game_4",
    },
    {
      id: "Game_5",
      name: "Game_5",
    },
    {
      id: "Game_6",
      name: "Game_6",
    },
    {
      id: "Game_7",
      name: "Game_7",
    },
    {
      id: "Game_8",
      name: "Game_8",
    },
    {
      id: "Game_9",
      name: "Game_9",
    },
    {
      id: "Game_10",
      name: "Game_10",
    },
    {
      id: "Game_11",
      name: "Game_11",
    },
    {
      id: "Game_12",
      name: "Game_12",
    },
    {
      id: "Game_13",
      name: "Game_13",
    },
    {
      id: "Game_14",
      name: "Game_14",
    },
    {
      id: "Game_15",
      name: "Game_15",
    },
    {
      id: "Game_16",
      name: "Game_16",
    },
    {
      id: "Game_17",
      name: "Game_17",
    },
    {
      id: "Game_18",
      name: "Game_18",
    },
    {
      id: "Game_19",
      name: "Game_19",
    },
    {
      id: "Game_20",
      name: "Game_20",
    },
    {
      id: "Game_21",
      name: "Game_21",
    },
    {
      id: "Game_22",
      name: "Game_22",
    },
    {
      id: "Game_23",
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
    GameListItemOpen && (
      <GameListContainer $width="250px">
        <Div $flex="v_start_center" $padding="0 0 30px 0">
          <H1 $fontSize="large" $fontWeight="bold">
            게임 목록
          </H1>
        </Div>
        <GameListNav $flex="v_center_center" $width="100%" $backgroundColor="white">
          <NavSection $width="100%">
            {GameListData.map((elem) => {
              return (
                <Link key={`${elem.id}`} to={`/${elem.id}`}>
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
