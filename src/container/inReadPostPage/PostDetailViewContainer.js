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

const CommentSection = styled(Section)`
  border-radius: 10px;
`;

const TitleDiv = styled(Div)`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;
const PostContentDiv = styled(Div)``;

const PostDetailViewContainer = (props) => {
  const [cookies] = useCookies(["token"]);
  const { gameIdx, postIdx } = useParams();
  const { data, status, request } = useFetch();
  const [isAuthor, setIsAuthor] = useState(null);
  const navigate = useNavigate();

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
      console.log(data.isAuthor);
    }
  }, [data]);

  return (
    <>
      <TitleDiv $width="100%" $height="100px">
        <Div $flex="h_start_start" $margin="0 0 20px 0">
          <P $fontSize="large">제목:&nbsp;</P>
          <H1 $fontSize="large" $fontWeight="bold">
            {data?.data.title}
          </H1>
        </Div>
        <Div>
          <Div $flex="h_start_start">
            <P $fontSize="small">작성자:&nbsp;</P>
            <P $fontSize="small" $fontWeight="bold">
              {data?.data.nickname} | {data?.data.created_at}
            </P>
          </Div>
        </Div>
        {isAuthor ? <DeletePostContainer /> : null}
      </TitleDiv>
      <PostContentDiv>
        <Div
          $width="100%"
          $padding="5% 0"
          dangerouslySetInnerHTML={{ __html: data?.data.content }}
          contentEditable="false"
        ></Div>
      </PostContentDiv>
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
