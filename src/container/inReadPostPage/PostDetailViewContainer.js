import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

import styled from "styled-components";
import { H1, P } from "../../style/TextStyle";
import { Div } from "../../style/LayoutStyle";
import { Section } from "../../style/LayoutStyle";

import CommentContainer from "./CommentContainer";

const CommentSection = styled(Section)`
  border-radius: 10px;
`;

const TitleDiv = styled(Div)`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  // border: 2px solid green;
`;
const PostContentDiv = styled(Div)`
  // border: 3px solid red;
`;

const PostDetailViewContainer = (props) => {
  const [cookies] = useCookies(["token"]);
  const { gameIdx, postIdx } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.token) {
      alert("게시글 보기는 회원만 이용 가능합니다.");
      navigate("/");
      return;
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_KEY}/post/${postIdx}/?gameidx=${gameIdx}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookies.token}`,
              },
            }
          );
          const result = await response.json();
          setData(result.data[0]);
          console.log(result.data[0]);
        } catch (error) {
          console.log(`ReadPOst 에러임${error}`);
        }
      };
      fetchData();
    }
  }, []);
  return (
    <>
      <TitleDiv $width="100%" $height="100px">
        <Div $flex="h_start_start" $margin="0 0 20px 0">
          <P $fontSize="large">제목:&nbsp;</P>
          <H1 $fontSize="large" $fontWeight="bold">
            {data?.title}
          </H1>
        </Div>
        <Div>
          <Div $flex="h_start_start">
            <P $fontSize="small">작성자:&nbsp;</P>
            <P $fontSize="small" $fontWeight="bold">
              {data?.nickname} | {data?.created_at}
            </P>
          </Div>
        </Div>
      </TitleDiv>
      <hr />
      <PostContentDiv>
        <Div $padding="5% 0" dangerouslySetInnerHTML={{ __html: data?.content }}></Div>
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
