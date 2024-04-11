import React from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Span } from "../style/TextStyle";
import { Div, Article } from "../style/LayoutStyle";
import deleteImg from "../img/deleteImg.svg";

const CommentListItemLayout = styled(Article)`
  background-color: ${setColor("white")};
  border: 1px solid ${setColor("black")};
  border-radius: 5px;
`;
const CursorDiv = styled(Div)`
  cursor: pointer;
`;

const CommentListItem = (props) => {
  const { data, userIdx, deleteClickEvent } = props;

  return (
    <CommentListItemLayout
      $flex="h_center_center"
      $width="100%"
      $height="40px"
      $padding="10px 40px 10px 40px"
      $margin="0 0 20px 0"
    >
      <Div $flex="h_between_center" $width="100%">
        <Span $flex="h_start_center" $width="70%">
          {data.content}
        </Span>
        <Div $flex="h_end_center" $width="30%">
          <Span $flex="h_center_center" $width="33.33%">
            {data.nickname}
          </Span>
          <Span $flex="h_center_center" $width="33.33%">
            {data.createdAt}
          </Span>
          <CursorDiv $flex="h_center_center" $width="33.33%" $height="30px">
            {userIdx === data.userIdx ? (
              <img src={deleteImg} alt="댓글 삭제하기" onClick={() => deleteClickEvent(data.idx)} />
            ) : null}
          </CursorDiv>
        </Div>
      </Div>
    </CommentListItemLayout>
  );
};

export default CommentListItem;
