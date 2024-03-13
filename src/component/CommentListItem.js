import React from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Article, Div } from "../style/LayoutStyle";

const CommentListItemLayout = styled(Article)`
  background-color: ${setColor("white")};
  border-width: 1px;
  border-style: solid;
  border-color: ${setColor("black")};
  border-radius: 5px;
  cursor: pointer;
`;
const CommentContents = styled(Div)``;
const CommentTitle = styled(Div)``;
const CommentNickname = styled(Div)``;
const CommentCreatedAt = styled(Div)``;

const CommentListItem = (props) => {
  const { title, nickname, createdAt } = props.data;

  return (
    <CommentListItemLayout
      $flex="h_center_center"
      $width="1100px"
      $height="40px"
      $padding="10px 40px 10px 40px"
      $margin="0 0 20px 0"
    >
      <CommentContents $flex="h_between_center" $width="100%">
        <CommentTitle $flex="h_start_center" $width="550px">
          {title}
        </CommentTitle>
        <CommentNickname $flex="h_center_center" $width="200px">
          {nickname}
        </CommentNickname>
        <CommentCreatedAt $flex="h_center_center" $width="100px">
          {createdAt}
        </CommentCreatedAt>
      </CommentContents>
    </CommentListItemLayout>
  );
};

export default CommentListItem;
