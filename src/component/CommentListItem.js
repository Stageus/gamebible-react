import React from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Article, Div } from "../style/LayoutStyle";
import deleteImg from "../img/deleteImg.svg";

const CommentListItemLayout = styled(Article)`
  background-color: ${setColor("white")};
  border: 1px solid ${setColor("black")};
  border-radius: 5px;
  cursor: pointer;
`;

const users = {
  id: ["admin", "작성자닉네임_2"],
};

const CommentListItem = (props) => {
  const { title, nickname, createdAt } = props;

  return (
    <CommentListItemLayout
      $flex="h_center_center"
      $width="100%"
      $height="40px"
      $padding="10px 40px 10px 40px"
      $margin="0 0 20px 0"
    >
      <Div $flex="h_between_center" $width="100%">
        <Div $flex="h_start_center" $width="550px">
          {title}
        </Div>
        <Div $flex="h_center_center" $width="200px">
          {nickname}
        </Div>
        <Div $flex="h_center_center" $width="100px">
          {createdAt}
        </Div>
        <Div $flex="h_center_center" $width="30px" $height="30px">
          {users.id.includes(nickname) && <img src={deleteImg} alt="댓글 삭제하기" />}
        </Div>
      </Div>
    </CommentListItemLayout>
  );
};

export default CommentListItem;
