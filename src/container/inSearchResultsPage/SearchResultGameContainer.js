import { React, useState, useEffect } from "react";

import { styled } from "styled-components";
import { Div, Article } from "../../style/LayoutStyle";
import { setSize } from "../../style/SetStyle";

import NoResultNoGameContainer from "./NoResultNoGameContainer";
import YesGameContainer from "./YesGameContainer";

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

const SearchResultGameContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("title");

  // 게임 검색하기 GET
  const [searchGameData, setSearchGameData] = useState(null);

  const { data, error, status, request } = useFetch();
  useEffect(() => {
    // console.log(encodeURI(searchTerm));
    request(`/game/search?title=${encodeURI(searchTerm)}`, "GET", null);
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

  console.log("searchGameData: ", searchGameData);

  return (
    <Article $flex="v_center_start" $width={navToggle ? "90%" : "100%"} $margin="30px 0 30px 0">
      <ArticleLabel $flex="h_center_center" $backgroundColor="white" $width="150px" $height="50px">
        연관 게임
      </ArticleLabel>

      <ArticleContentLayout $width="100%" $height="556px" $backgroundColor="white">
        {searchGameData ? (
          <Div $padding="30px">
            <YesGameContainer {...{ searchGameData }} />
          </Div>
        ) : (
          <Div $width="100%" $height="100%" $flex="h_center_center">
            <NoResultNoGameContainer />
          </Div>
        )}
      </ArticleContentLayout>
    </Article>
  );
};

export default SearchResultGameContainer;
