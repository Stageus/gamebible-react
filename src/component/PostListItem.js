import React from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Article, Div } from "../style/LayoutStyle";

const PostListItemLayout = styled(Article)`
  background-color: ${setColor("white")};
  border-width: 1px;
  border-style: solid;
  border-color: ${setColor("black")};
  border-radius: 5px;
  cursor: pointer;
`;
const PostContents = styled(Div)``;
const PostTitle = styled(Div)``;
const PostNickname = styled(Div)``;
const PostView = styled(Div)``;
const PostCreatedAt = styled(Div)``;

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
      <PostContents $flex="h_between_center" $width="100%">
        <PostTitle $flex="h_start_center" $width="550px">
          {title}
        </PostTitle>
        <PostNickname $flex="h_center_center" $width="200px">
          {nickname}
        </PostNickname>
        <PostView $flex="h_center_center" $width="100px">
          {view}
        </PostView>
        <PostCreatedAt $flex="h_center_center" $width="100px">
          {createdAt}
        </PostCreatedAt>
      </PostContents>
    </PostListItemLayout>
  );
};

export default PostListItem;
