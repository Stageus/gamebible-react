import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Span } from "../../style/TextStyle";
import { Div } from "../../style/LayoutStyle";
import PostCommentContainer from "../../container/inReadPostPage/PostCommentContainer";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import userInfoAtom from "../../recoil/userInfoAtom";
import useFetch from "../../hook/useFetch";
import { useCookies } from "react-cookie";
import CommentListContainer from "./CommentListContainer";

const NicknameSpan = styled(Span)`
  white-space: nowrap;
`;

const OverFlowDiv = styled(Div)`
  overflow: auto;
`;

const CommentContainer = () => {
  const [commentListData, setCommentListData] = useState([]);
  const [userInfo, ,] = useRecoilState(userInfoAtom);
  const [lastidx, setLastIdx] = useState(0);
  const { data, status, request } = useFetch();
  const [deleteComment, setDeleteComment] = useState(false);

  const { postIdx } = useParams();
  const [cookies] = useCookies(["token"]);

  const getCommentFetch = () => {
    // 댓글을 가져오는 함수
    request(`/comment/all?postidx=${postIdx}&lastidx=${lastidx}`, "GET", null, {
      Authorization: `Bearer ${cookies.token}`,
    });
  };

  useEffect(() => {
    // 렌더링 시 호출
    getCommentFetch();
  }, [lastidx]);

  useEffect(() => {
    // 스크롤 다운 시 새롭게 호출
    const scrollDownEvent = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        setLastIdx(data?.lastIdx);
      }
    };
    window.addEventListener("scroll", scrollDownEvent);
    return () => {
      window.removeEventListener("scroll", scrollDownEvent);
    };
  }, [getCommentFetch]);

  // 데이터 넣기
  useEffect(() => {
    if (status === 200 && data?.data) {
      setCommentListData([...commentListData, ...data?.data]);
    } else {
      // console.log(data);
      // console.log(status);
    }
  }, [data, status]);

  return (
    <Div $width="100%" $height="100%">
      <Div>
        <Span $fontSize="large" $color="white">
          댓글: {commentListData.length}개
        </Span>
      </Div>
      <Div $flex="h_center_center" $width="100%">
        <NicknameSpan $color="white">{userInfo.nickname}</NicknameSpan>
        <PostCommentContainer {...{ getCommentFetch }} />
      </Div>
      <OverFlowDiv $width="100%" $height="100%">
        <CommentListContainer
          {...{ commentListData, deleteComment, setDeleteComment, getCommentFetch }}
        />
      </OverFlowDiv>
    </Div>
  );
};

export default CommentContainer;
