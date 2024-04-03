import React from "react";
import { styled } from "styled-components";
import { Button } from "../style/ButtonStyle";
import { setColor } from "../style/SetStyle";
import useHover from "../hook/useHover";

const GameListItemContainer = styled(Button)`
  border-bottom: 1px solid ${setColor("major")};
  &:hover {
    border: none;
  }
`;

const GameListItemName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const GameListItem = (props) => {
  const { idx, user_idx, title, content, created_at, deleted_at } = props.data;

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
      $flex="h_start_center"
      $width="100%"
      $height="66px"
      $padding="0 20px"
      $backgroundColor="white"
      onMouseOver={gameBtnHoverEvent}
      onMouseOut={gameBtnHoverOutEvent}
      style={btnHoverStyle}
      title={title}
    >
      <GameListItemName
        onMouseOver={gameBtnHoverEvent}
        onMouseOut={gameBtnHoverOutEvent}
        style={nameHoverStyle}
      >
        {title}
      </GameListItemName>
    </GameListItemContainer>
  );
};

export default GameListItem;
