import React from "react";
import { styled } from "styled-components";
import { Button } from "../style/ButtonStyle";
import { P } from "../style/TextStyle";
import { setColor } from "../style/SetStyle";
import useHover from "../hook/useHover";

const GameListItemContainer = styled(Button)`
  border: 1px solid ${setColor("major")};
  cursor: pointer;
  &:hover {
    border: none;
  }
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

  const btnHoverStyle = {
    backgroundColor: isHovered && `${setColor("minorLight")}`,
  };
  const nameHoverStyle = {
    color: isHovered && `${setColor("white")}`,
  };

  return (
    <GameListItemContainer
      $flex="h_center_center"
      $width="100%"
      $height="66px"
      $padding="0 20px"
      $backgroundColor="white"
      onMouseOver={gameBtnHoverEvent}
      onMouseOut={gameBtnHoverOutEvent}
      style={btnHoverStyle}
    >
      <GameListItemName
        $flex="h_start_center"
        $width="100%"
        $height="100%"
        onMouseOver={gameBtnHoverEvent}
        onMouseOut={gameBtnHoverOutEvent}
        style={nameHoverStyle}
      >
        {name}
      </GameListItemName>
    </GameListItemContainer>
  );
};

export default GameListItem;
