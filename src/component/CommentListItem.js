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
        {/* 댓글 내용 */}
        <Span $flex="h_start_center" $width="50%">
          {data.content}
        </Span>

        {/* 댓글 메타데이터 */}
        <Div $flex="h_end_center" $width="50%">
          {/* 댓글 작성자 */}
          <Span $flex="h_center_center" $width="35%">
            {data.nickname}
          </Span>

          {/* 댓글 작성일 */}
          <Span $flex="h_center_center" $width="25%">
            {TimeStampUtil(data.createdAt)}
          </Span>

          {/* 작성자==사용자 일치 시 삭제 버튼 출력 */}
          <CursorDiv $flex="h_center_center" $width="10%" $height="30px">
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
