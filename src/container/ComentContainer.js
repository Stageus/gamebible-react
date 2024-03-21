import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { Input } from "../style/InputStyle";
import { Span } from "../style/TextStyle";
import { Div } from "../style/LayoutStyle";
import { Button } from "../style/ButtonStyle";
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

const dummyUserData = { userName: "홍길금" };

const CommentContainer = () => {
  const commentRef = useRef(null);
  const [commentListData, setCommentListData] = useState([]);

  useEffect(() => {
    setCommentListData([
      {
        id: "Comment_1",
        title: "댓글제목_1",
        nickname: "작성자닉네임_1",
        createdAt: "작성일_1",
      },
      {
        id: "Comment_7",
        title: "댓글제목_7",
        nickname: "작성자닉네임_7",
        createdAt: "작성일_7",
      },
      {
        id: "Comment_3",
        title: "댓글제목_3",
        nickname: "작성자닉네임_3",
        createdAt: "작성일_3",
      },
      {
        id: "Comment_4",
        title: "댓글제목_4",
        nickname: "작성자닉네임_4",
        createdAt: "작성일_4",
      },
      {
        id: "Comment_5",
        title: "댓글제목_5",
        nickname: "작성자닉네임_5",
        createdAt: "작성일_5",
      },
    ]);
  }, []);

  const test1 = () => {
    const { scrollTop, clientHeight, scrollHeight } = commentRef.current;
    if (scrollTop + clientHeight >= scrollHeight) {
      addDummyData();
    }
  };

  const addDummyData = () => {
    const newData = [
      {
        id: "Comment_6",
        title: "댓글제목_6",
        nickname: "작성자닉네임_6",
        createdAt: "작성일_6",
      },
      {
        id: "Comment_7",
        title: "댓글제목_7",
        nickname: "작성자닉네임_7",
        createdAt: "작성일_7",
      },
      {
        id: "Comment_8",
        title: "댓글제목_8",
        nickname: "작성자닉네임_8",
        createdAt: "작성일_8",
      },
      {
        id: "Comment_9",
        title: "댓글제목_9",
        nickname: "작성자닉네임_9",
        createdAt: "작성일_9",
      },
      {
        id: "Comment_10",
        title: "댓글제목_10",
        nickname: "작성자닉네임_10",
        createdAt: "작성일_10",
      },
    ];

    setCommentListData((prevData) => [...prevData, ...newData]);
  };
  return (
    <Div $width="85%" $height="400px">
      <Div>
        <Span $fontSize="large" $color="white">
          댓글: {commentListData.length}개
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
        {commentListData.map((elem, idx) => {
          return <CommentListItem key={elem.id + idx} data={elem} />;
        })}
      </OverFlowDiv>
    </Div>
  );
};

export default CommentContainer;
