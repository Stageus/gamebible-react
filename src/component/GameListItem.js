import React from "react";
import { styled } from "styled-components";
import { Button } from "../style/ButtonStyle";
import { P } from "../style/TextStyle";
import { setColor } from "../style/SetStyle";
import useHover from "../hook/useHover";

const GameListItemContainer = styled(Button)`
  border-bottom: 1px solid ${setColor("major")};
  cursor: pointer;
`;
const GameListItemName = styled(P)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const GameListItem = (props) => {
  const { name } = props.data;

  // ------------------- 호버 이벤트 -------------------
  const [isHovered, gameBtnHoverEvent, gameBtnHoverOutEvent] = useHover(false);

  const btnStyle = {
    backgroundColor: isHovered ? `${setColor("minorLight")}` : "transparent",
  };
  const nameStyle = {
    color: isHovered ? `${setColor("white")}` : "black",
  };

  return (
    <GameListItemContainer
      $flex="h_center_center"
      $width="100%"
      $height="66px"
      $padding="0 20px"
      onMouseOver={gameBtnHoverEvent}
      onMouseOut={gameBtnHoverOutEvent}
      style={btnStyle}
    >
      <GameListItemName
        $flex="h_start_center"
        $width="100%"
        $height="100%"
        onMouseOver={gameBtnHoverEvent}
        onMouseOut={gameBtnHoverOutEvent}
        style={nameStyle}
      >
        {name}
      </GameListItemName>
    </GameListItemContainer>
  );
};

export default GameListItem;
