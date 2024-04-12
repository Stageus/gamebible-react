import { React, useState, useEffect } from "react";

import { styled } from "styled-components";
import { Div, Article } from "../../style/LayoutStyle";
import { Img } from "../../style/ImgStyle";
import { setSize } from "../../style/SetStyle";

import noPostImg from "../../img/noPostImg.svg";
import YesPostContainer from "./YesPostContainer";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../../recoil/navToggleAtom";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";

const ArticleLabel = styled(Div)`
  font-size: ${setSize("large")};
`;
const ArticleContentLayout = styled(Div)`
  overflow: scroll;
`;

const SearchResultPostContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("title");

  // 게시글 검색하기 GET
  const [searchPostData, setSearchPostData] = useState(null);
  const [page, setPage] = useState(1);

  const { data, error, status, request } = useFetch();
  useEffect(() => {
    request(`/post/search?title=${searchTerm}&page=${page}`, "GET", null);
  }, [searchParams]);

  useEffect(() => {
    if (status === 200) {
      setSearchPostData(data?.data);
    } else if (status === 204) {
      setSearchPostData(null);
      console.log("게임 검색결과가 없습니다.");
    } else if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    } else if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data, status]);

  return (
    <Article $flex="v_center_start" $width={navToggle ? "90%" : "100%"} $margin="0 0 30px 0">
      <ArticleLabel $flex="h_center_center" $backgroundColor="white" $width="150px" $height="50px">
        연관 게시글
      </ArticleLabel>

      {searchPostData ? (
        <ArticleContentLayout
          $width="100%"
          $height="556px"
          $backgroundColor="white"
          $flex="v_start_center"
        >
          <YesPostContainer {...{ searchPostData }} />
        </ArticleContentLayout>
      ) : (
        <ArticleContentLayout
          $width="100%"
          $height="556px"
          $backgroundColor="white"
          $flex="v_center_center"
        >
          <Div $width="100%" $flex="h_center_center">
            <Img src={noPostImg} />
          </Div>
        </ArticleContentLayout>
      )}
    </Article>
  );
};

export default SearchResultPostContainer;
