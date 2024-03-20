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
      $width="100%"
      $height="40px"
      $padding="10px 40px 10px 40px"
      $margin="0 0 20px 0"
    >
      <Div $flex="h_between_center" $width="100%">
        <Div $flex="h_start_center" $width="50%">
          {title}
        </Div>
        <Div $flex="h_end_center" $width="50%">
          <Div $flex="h_center_center" $width="33.33%">
            {nickname}
          </Div>
          <Div $flex="h_center_center" $width="33.33%">
            {view}
          </Div>
          <Div $flex="h_center_center" $width="33.33%">
            {createdAt}
          </Div>
        </Div>
      </Div>
    </PostListItemLayout>
  );
};

export default PostListItem;
