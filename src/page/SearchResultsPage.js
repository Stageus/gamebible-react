import { React, useState, useEffect } from "react";

import { styled } from "styled-components";
import { Div, Section } from "../style/LayoutStyle";

import FooterItem from "../component/FooterItem";
import NoResultNoGameContainer from "../container/inSearchResultsPage/NoResultNoGameContainer";
import YesResultContainer from "../container/inSearchResultsPage/YesResultContainer";

import { useRecoilValue } from "recoil";
import navToggleAtom from "../recoil/navToggleAtom";

import { useSearchParams } from "react-router-dom";

import useFetch from "../hook/useFetch";

const PageWrapper = styled(Div)`
  min-height: 100vh;
  position: relative;
`;
const NoResultSection = styled(Section)``;
const YesResultSection = styled(Section)``;
const FooterWrapper = styled(Div)`
  position: absolute;
  bottom: 0;
`;

const SearchResultsPage = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("title");
  console.log("searchTerm: ", searchTerm);

  // 게임 검색하기 GET
  const [searchGameData, setSearchGameData] = useState([]);

  const { data, error, status, request } = useFetch();
  useEffect(() => {
    request(`/game/search?title=${searchTerm}`, "GET", null);
  }, []);

  useEffect(() => {
    if (status === 200) {
      setSearchGameData(data.data[0]);
    } else if (status === 204) {
      console.log("게임 검색결과가 없습니다.");
    } else if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    } else if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [searchTerm]);

  // 게시글 검색하기 GET
  const [searchPostData, setSearchPostData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPostResult = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/post/search?title=${searchTerm}&page=${page}`
      );
      const result = await response.json();
      setSearchPostData(result.data);

      if (status === 200) {
        setSearchPostData(result.data);
      } else if (status === 204) {
        console.log("게시글 검색결과가 없습니다.");
      } else if (status === 400) {
        alert("유효하지 않은 요청입니다.");
      } else if (status === 500) {
        console.log("서버 내부 에러입니다.");
      }
    };

    getPostResult();
  }, [searchTerm]);

  // useEffect(() => {
  //   setPage(page + 1);
  // });

  return (
    <PageWrapper>
      {searchGameData ? (
        <YesResultSection
          $flex="v_center_center"
          $margin={navToggle ? "100px 0 0 300px" : "100px 0 0 0"}
          $padding="0 60px"
          $width={navToggle ? "80vw" : "100vw"}
          $backgroundColor="major"
        >
          <YesResultContainer {...{ searchGameData, searchPostData }} />
        </YesResultSection>
      ) : (
        <NoResultSection
          $flex="v_center_center"
          $margin="100px 0 0 0"
          $padding="0 60px"
          $width="100vw"
          $height="80vh"
        >
          <NoResultNoGameContainer />
        </NoResultSection>
      )}
      <FooterWrapper>
        <FooterItem />
      </FooterWrapper>
    </PageWrapper>
  );
};

export default SearchResultsPage;
