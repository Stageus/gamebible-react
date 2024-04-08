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
import userInfoAtom from "../../recoil/userInfoAtom";
import useFetch from "../../hook/useFetch";
import { cookies, useCookies } from "react-cookie";

const NicknameSpan = styled(Span)`
  white-space: nowrap;
`;

const OverFlowDiv = styled(Div)`
  overflow: auto;
`;

const CommentContainer = () => {
  const [commentListData, setCommentListData] = useState([]);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [lastidx, setLastIdx] = useState(0);
  const { data, error, status, request } = useFetch();
  const [upDateComment, setUpDateComment] = useState(false);

  const { postIdx } = useParams();
  const [cookies] = useCookies(["token"]);

  const fetchData = async () => {
    await request(`/comment/all?postidx=${postIdx}&lastidx=${lastidx}`, "GET", null, {
      Authorization: `Bearer ${cookies.token}`,
    });
  };

  useEffect(() => {
    fetchData();
  }, [upDateComment]);

  useEffect(() => {
    const scrollDownEvent = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        fetchData();
      }
    };
    window.addEventListener("scroll", scrollDownEvent);
    return () => {
      window.removeEventListener("scroll", scrollDownEvent);
    };
  }, [lastidx]);
  console.log(data);

  useEffect(() => {
    if (status === 200) {
      const newData = data.data;
      setCommentListData((prevData) => [...prevData, ...newData]);
      setLastIdx(data.lastIdx);
    } else {
      console.log(data);
      console.log(status);
    }
  }, [data]);

  return (
    <Div $width="100%" $height="100%">
      <Div>
        <Span $fontSize="large" $color="white">
          댓글: {commentListData.length}개
        </Span>
      </Div>
      <Div $flex="h_center_center" $width="100%">
        <NicknameSpan $color="white">{userInfo.nickname}</NicknameSpan>
        <PostCommentContainer {...{ upDateComment, setUpDateComment }} />
      </Div>
      <OverFlowDiv $width="100%" $height="100%">
        {commentListData.map((elem) => {
          return <CommentListItem key={elem.idx} data={elem} />;
        })}
      </OverFlowDiv>
    </Div>
  );
};

export default CommentContainer;
