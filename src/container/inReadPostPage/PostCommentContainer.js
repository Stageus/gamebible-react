import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Input } from "../../style/InputStyle";
import { Span } from "../../style/TextStyle";
import { Div } from "../../style/LayoutStyle";
import { Button } from "../../style/ButtonStyle";
import { useParams } from "react-router-dom";
import { useInput } from "../../hook/useInput";
import useFetch from "../../hook/useFetch";
import { useCookies } from "react-cookie";

const CommentInput = styled(Input)`
  &:focus {
    outline: none;
  }
  border-style: none;
  background: none;
  border-bottom: 1px solid white;
`;

const NicknameSpan = styled(Span)`
  white-space: nowrap;
`;

const StyleBtn = styled(Button)`
  border-radius: 4px;
`;

const OverFlowDiv = styled(Div)`
  overflow: auto;
`;

const PostCommentContainer = (props) => {
  const { getCommentFetch } = props;
  const { data, error, status, request } = useFetch();
  const { gameIdx, postIdx } = useParams();
  const {
    value: contentValue,
    onChangeEvent: contentOnChangeEvent,
    setValue: setContentValue,
  } = useInput("");
  const [cookies] = useCookies(["token"]);

  const commentClickEvent = async () => {
    await request(
      `/comment/?gameidx=${gameIdx}&postidx=${postIdx}`,
      "POST",
      {
        content: contentValue,
      },
      { Authorization: `Bearer ${cookies.token}` }
    );
    setContentValue("");
    getCommentFetch();
  };

  return (
    <>
      <CommentInput
        type="text"
        $color="white"
        $margin="3% 1%"
        $width="85%"
        $height="40px"
        $backgroundColor="none"
        value={contentValue}
        onChange={contentOnChangeEvent}
      />
      <StyleBtn
        $flex="h_center_center"
        $width="10%"
        $height="40px"
        $backgroundColor="white"
        $margin="0 0 0 1%"
        onClick={commentClickEvent}
      >
        댓글 추가
      </StyleBtn>
    </>
  );
};

export default PostCommentContainer;
