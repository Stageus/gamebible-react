import React from "react";

import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Span } from "../style/TextStyle";
import { Div, Article } from "../style/LayoutStyle";

import deleteImg from "../img/deleteImg.svg";

import TimeStampUtil from "../util/TimestampUtil";

const CommentListItemLayout = styled(Article)`
  background-color: ${setColor("white")};
  border: 1px solid ${setColor("black")};
  border-radius: 5px;
`;

const CommentListItem = (props) => {
  const { data, userIdx, deleteClickEvent } = props;

  return (
    <CommentListItemLayout
      $flex="h_center_center"
      $width="100%"
      $padding="10px 40px 10px 40px"
      $margin="0 0 20px 0"
    >
      {/* 댓글 내용 */}
      <Span $width="65%" $margin="0 30px 0 0">
        {data.content}
      </Span>

      {/* 댓글 메타데이터 */}
      <Div $flex="h_between_center" $width="35%">
        {/* 댓글 작성자 */}
        <Span $flex="h_center_center" $width="35%">
          {data.nickname}
        </Span>

        {/* 댓글 작성일 */}
        <Span $flex="h_center_center" $width="fit-content" $padding="0 10px">
          {TimeStampUtil(data.createdAt)}
        </Span>

        {/* 작성자==사용자 일치 시 삭제 버튼 출력 */}
        <Span $flex="h_center_center" $height="30px">
          {userIdx === data.userIdx ? (
            <img src={deleteImg} alt="댓글 삭제하기" onClick={() => deleteClickEvent(data.idx)} />
          ) : null}
        </Span>
      </Div>
    </CommentListItemLayout>
  );
};

export default CommentListItem;
