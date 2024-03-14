import React from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Article, Div } from "../style/LayoutStyle";

const PostListItemLayout = styled(Article)`
  background-color: ${setColor("white")};
  border: 1px solid ${setColor("black")};
  border-radius: 5px;
  cursor: pointer;
`;

const PostListItem = (props) => {
  const { title, nickname, view, createdAt } = props.data;

  return (
    <PostListItemLayout
      $flex="h_center_center"
      $width="1100px"
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
          {view}
        </Div>
        <Div $flex="h_center_center" $width="100px">
          {createdAt}
        </Div>
      </Div>
    </PostListItemLayout>
  );
};

export default PostListItem;
