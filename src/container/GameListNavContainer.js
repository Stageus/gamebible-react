import React from "react";
import { styled } from "styled-components";
import GameListItem from "../component/GameListItem";
import { Nav } from "../style/LayoutStyle";

const GameListNav = styled(Nav)`
  position: fixed;
  z-index: 100;
  overflow: scroll;
`;

const GameListNavContainer = () => {
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
  ];

  return (
    <GameListNav $flex="v_center_center">
      {GameListData.map((elem) => {
        return <GameListItem key={elem.id} data={elem} />;
      })}
    </GameListNav>
  );
};

export default GameListNavContainer;
