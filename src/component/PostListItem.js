import React from "react";

import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Article, Div } from "../style/LayoutStyle";
import TimeStampUtil from "../util/TimestampUtil";

const PostListItemLayout = styled(Article)`
  background-color: ${setColor("white")};
  border: 1px solid ${setColor("black")};
  border-radius: 5px;
  cursor: pointer;
`;

const PostTitleDiv = styled(Div)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MetaDataDiv = styled(Div)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
        <PostTitleDiv $width="50%">{title}</PostTitleDiv>
        <Div $flex="h_end_center" $width="50%">
          <Div $width="33.33%" $flex="h_center_center">
            <MetaDataDiv>{nickname}</MetaDataDiv>
          </Div>
          <Div $width="33.33%" $flex="h_center_center">
            <MetaDataDiv>{view}</MetaDataDiv>
          </Div>
          <Div $width="33.33%" $flex="h_center_center">
            <MetaDataDiv>{TimeStampUtil(createdAt)}</MetaDataDiv>
          </Div>
        </Div>
      </Div>
    </PostListItemLayout>
  );
};

export default PostListItem;
