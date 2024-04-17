import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import useFetch from "../../hook/useFetch";

import styled from "styled-components";
import { H1, P } from "../../style/TextStyle";
import { Div } from "../../style/LayoutStyle";
import { Section } from "../../style/LayoutStyle";

import CommentContainer from "./CommentContainer";
import DeletePostContainer from "./DeletePostContainer";

import TimeStampUtil from "../../util/TimeStampUtil";

const CommentSection = styled(Section)`
  border-radius: 10px;
`;

const TitleDiv = styled(Div)`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;
const PostContentDiv = styled(Div)`
  border: 1px solid black;
  border-radius: 10px;
`;

const PostDetailViewContainer = (props) => {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const { gameIdx, postIdx } = useParams();

  const { data, status, request } = useFetch();
  const [isAuthor, setIsAuthor] = useState(null);

  useEffect(() => {
    request(`/post/${postIdx}`, "GET", null, {
      Authorization: `Bearer ${cookies.token}`,
    });
  }, [postIdx]);

  useEffect(() => {
    if (status === 404) {
      alert("해당 페이지가 존재하지 않거나 삭제되었습니다.");
      navigate(`/game/${gameIdx}`);
    }
    if (status === 200) {
      setIsAuthor(data.isAuthor);
    }
  }, [data]);

  return (
    <>
      {/* 게시글 메타 데이터(제목, 작성자, 작성일) */}
      <TitleDiv $width="100%" $height="100px">
        <Div $flex="h_start_start" $margin="0 0 20px 0">
          <P $fontSize="large">제목:&nbsp;</P>
          <H1 $fontSize="large" $fontWeight="bold">
            {data?.data.title}
          </H1>
        </Div>
        <Div>
          <Div $flex="h_start_start">
            <P>작성자:&nbsp;</P>
            <P $fontWeight="bold">{data?.data.nickname}</P>
          </Div>
          <Div $flex="h_start_start">
            <P>작성일:&nbsp;</P>
            <P $fontWeight="bold">{TimeStampUtil(data?.data.createdAt)}</P>
          </Div>
        </Div>
        {isAuthor ? <DeletePostContainer /> : null}
      </TitleDiv>

      {/* 게시글 내용 */}
      <PostContentDiv $width="100%" $margin="30px 0 30px 0" $padding="10px">
        <Div
          $width="100%"
          $padding="5% 0"
          dangerouslySetInnerHTML={{ __html: data?.data.content }}
          contentEditable="false"
          $flex="h_start_start"
        />
      </PostContentDiv>

      {/* 댓글 목록 */}
      <CommentSection
        $width="100%"
        $padding="5% 30px"
        $backgroundColor="minorDark"
        $flex="v_center_center"
      >
        <CommentContainer />
      </CommentSection>
    </>
  );
};

export default PostDetailViewContainer;
