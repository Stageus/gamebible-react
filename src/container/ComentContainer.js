import React, { useRef } from "react";

import styled from "styled-components";
import { Input } from "../style/InputStyle";
import { H1, P, Span } from "../style/TextStyle";
import { Div } from "../style/LayoutStyle";
import { Button } from "../style/ButtonStyle";
import { Section } from "../style/LayoutStyle";

import CommentListItem from "../component/CommentListItem";

const CommentInput = styled(Input)`
  &:focus {
    outline: none;
  }
  border-style: none;
  background: none;
  border-bottom: 1px solid white;
`;

const StyleBtn = styled(Button)`
  border-radius: 4px;
`;

const OverFlowDiv = styled(Div)`
  overflow: auto;
`;

const dummyCommentData = [
  {
    title: "댓글 좋아요",
    nickname: "민수",
    createdAt: "23/04/12",
  },
  {
    title: "안녕하세요",
    nickname: "용수",
    createdAt: "23/04/12",
  },
  {
    title: "세 번째 댓글입니다",
    nickname: "용광",
    createdAt: "23/04/12",
  },
  {
    title: "자신 댓글입니다",
    nickname: "작성자닉네임_2",
    createdAt: "23/04/12",
  },
  {
    title: "댓글 좋아요",
    nickname: "민수",
    createdAt: "23/04/12",
  },
  {
    title: "안녕하세요",
    nickname: "용수",
    createdAt: "23/04/12",
  },
  {
    title: "세 번째 댓글입니다",
    nickname: "용광",
    createdAt: "23/04/12",
  },
  {
    title: "자신 댓글입니다",
    nickname: "작성자닉네임_2",
    createdAt: "23/04/12",
  },
  {
    title: "댓글 좋아요",
    nickname: "민수",
    createdAt: "23/04/12",
  },
  {
    title: "안녕하세요",
    nickname: "용수",
    createdAt: "23/04/12",
  },
  {
    title: "세 번째 댓글입니다",
    nickname: "용광",
    createdAt: "23/04/12",
  },
  {
    title: "자신 댓글입니다",
    nickname: "작성자닉네임_2",
    createdAt: "23/04/12",
  },
  {
    title: "댓글 좋아요",
    nickname: "민수",
    createdAt: "23/04/12",
  },
  {
    title: "안녕하세요",
    nickname: "용수",
    createdAt: "23/04/12",
  },
  {
    title: "세 번째 댓글입니다",
    nickname: "용광",
    createdAt: "23/04/12",
  },
  {
    title: "자신 댓글입니다",
    nickname: "작성자닉네임_2",
    createdAt: "23/04/12",
  },
  {
    title: "댓글 좋아요",
    nickname: "민수",
    createdAt: "23/04/12",
  },
  {
    title: "안녕하세요",
    nickname: "용수",
    createdAt: "23/04/12",
  },
  {
    title: "세 번째 댓글입니다",
    nickname: "용광",
    createdAt: "23/04/12",
  },
  {
    title: "자신 댓글입니다",
    nickname: "작성자닉네임_2",
    createdAt: "23/04/12",
  },
];

const dummyUserData = { userName: "홍길금" };

const CommentContainer = () => {
  const commentRef = useRef(null);

  const test1 = () => {
    const { scrollTop, clientHeight, scrollHeight } = commentRef.current;
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("백엔드 소통");
    }
  };
  return (
    <Div $width="85%" $height="400px">
      <Div>
        <Span $fontSize="large" $color="white">
          댓글: {dummyCommentData.length}개
        </Span>
      </Div>
      <Div $flex="h_center_center" $width="100%">
        <Span $width="10%" $color="white">
          {dummyUserData.userName}
        </Span>
        <CommentInput
          type="text"
          $color="white"
          $margin="3% 0"
          $width="85%"
          $height="40px"
          $backgroundColor="none"
        />
        <StyleBtn
          $flex="h_center_center"
          $width="10%"
          $height="40px"
          $backgroundColor="white"
          $margin="0 0 0 1%"
        >
          댓글 추가
        </StyleBtn>
      </Div>
      <OverFlowDiv ref={commentRef} onScroll={test1} $width="100%" $height="240px">
        {dummyCommentData.map((elem, idx) => {
          return (
            <CommentListItem
              key={elem.nickname + idx}
              {...{ title: elem.title, nickname: elem.nickname, createdAt: elem.createdAt }}
            />
          );
        })}
      </OverFlowDiv>
    </Div>
  );
};

export default CommentContainer;
