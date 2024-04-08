import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Input } from "../../style/InputStyle";
import { Span } from "../../style/TextStyle";
import { Div } from "../../style/LayoutStyle";
import { Button } from "../../style/ButtonStyle";
import CommentListItem from "../../component/CommentListItem";
import PostCommentContainer from "../../container/inReadPostPage/PostCommentContainer";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useInput } from "../../hook/useInput";
import userInfoAtom from "../../recoil/userInfoAtom";
import useFetch from "../../hook/useFetch";
import { cookies, useCookies } from "react-cookie";

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

const CommentContainer = () => {
  const [commentListData, setCommentListData] = useState([]);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [lastidx, setLastIdx] = useState(0);
  const { data, error, status, request } = useFetch();

  const { gameIdx, pageIdx, postIdx } = useParams();
  const { value: contentValue, onChangeEvent: contentOnChangeEvent } = useInput("");
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const fetchData = async () => {
      await request(`/comment/all?postidx=${postIdx}&lastidx=${lastidx}`, "GET", null, {
        Authorization: `Bearer ${cookies.token}`,
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const scrollDownEvent = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        // addDummyData();
      }
    };
    window.addEventListener("scroll", scrollDownEvent);
    return () => {
      window.removeEventListener("scroll", scrollDownEvent);
    };
  }, [commentListData]);

  console.log(contentValue);
  // useEffect(() => {
  //   if (status === 200) {
  //     console.log(data.data);
  //   } else {
  //   }
  // }, [status]);

  // const addDummyData = () => {
  //   const newData = [
  //     {
  //       id: "Comment_6",
  //       title: "댓글제목_6",
  //       nickname: "작성자닉네임_6",
  //       createdAt: "작성일_6",
  //     },
  //     {
  //       id: "Comment_7",
  //       title: "댓글제목_7",
  //       nickname: "작성자닉네임_7",
  //       createdAt: "작성일_7",
  //     },
  //     {
  //       id: "Comment_8",
  //       title: "댓글제목_8",
  //       nickname: "작성자닉네임_8",
  //       createdAt: "작성일_8",
  //     },
  //     {
  //       id: "Comment_9",
  //       title: "댓글제목_9",
  //       nickname: "작성자닉네임_9",
  //       createdAt: "작성일_9",
  //     },
  //     {
  //       id: "Comment_10",
  //       title: "댓글제목_10",
  //       nickname: "작성자닉네임_10",
  //       createdAt: "작성일_10",
  //     },
  //   ];

  //   setCommentListData((prevData) => [...prevData, ...newData]);
  // };
  return (
    <Div $width="100%" $height="100%">
      <Div>
        <Span $fontSize="large" $color="white">
          댓글: {data?.data.length}개
        </Span>
      </Div>
      <Div $flex="h_center_center" $width="100%">
        <NicknameSpan $color="white">{userInfo.nickname}</NicknameSpan>
        <PostCommentContainer />
      </Div>
      <OverFlowDiv $width="100%" $height="100%">
        {data?.data.map((elem) => {
          return <CommentListItem key={elem.idx} data={elem} />;
        })}
      </OverFlowDiv>
    </Div>
  );
};

export default CommentContainer;
