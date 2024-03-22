import React from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Span } from "../style/TextStyle";
import { Div } from "../style/LayoutStyle";
import deleteImg from "../img/deleteImg.svg";

const CursorDiv = styled(Div)`
  cursor: pointer;
`;

const users = {
  id: ["admin", "작성자닉네임_2"],
};

const CommentListItem = (props) => {
  const { data } = props;

  return (
    <Div
      $flex="h_center_center"
      $width="100%"
      $height="40px"
      $padding="10px 40px 10px 40px"
      $margin="0 0 20px 0"
      $backgroundColor={`${setColor("white")}`}
      $borderStyle={`1px solid ${setColor("black")}`}
      $borderRadius="5px"
    >
      <Div $flex="h_between_center" $width="100%">
        <Span $flex="h_start_center" $width="70%">
          {data.title}
        </Span>
        <Div $flex="h_end_center" $width="30%">
          <Span $flex="h_center_center" $width="33.33%">
            {data.nickname}
          </Span>
          <Span $flex="h_center_center" $width="33.33%">
            {data.createdAt}
          </Span>
          <CursorDiv $flex="h_center_center" $width="33.33%" $height="30px">
            {users.id.includes(data.nickname) && <img src={deleteImg} alt="댓글 삭제하기" />}
          </CursorDiv>
        </Div>
      </Div>
    </Div>
  );
};

export default CommentListItem;
