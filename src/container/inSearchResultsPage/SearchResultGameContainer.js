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

const SearchResultGameContainer = () => {
  const navToggle = useRecoilValue(navToggleAtom);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("title");

  // 게임 검색하기 GET
  const [searchGameData, setSearchGameData] = useState(null);

  const { data, status, request } = useFetch();
  useEffect(() => {
    request(`/game/search?title=${encodeURI(searchTerm)}`, "GET", null);
  }, [searchParams]);

  useEffect(() => {
    console.log(status);
    if (status === 200) {
      setSearchGameData(data?.data); // 백엔드에서 온 데이터는 그대로 저장해야 함
    }
    if (status === 204) {
      setSearchGameData(null); // 백엔드에서 데이터가 오지 않았을 떄 state를 비워줘야 함
      console.log("게임 검색결과가 없습니다.");
    }
    if (status === 400) {
      alert("두 글자 이상 입력하시면 더 좋은 검색결과를 얻으실 수 있습니다!😊");
    }
    if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data, status]); // status 달아줘야함 ( 204는 응답 body가 없어서 반응을 안 하기 때문 )

  return (
    <Article $flex="v_center_start" $width={navToggle ? "90%" : "100%"} $margin="30px 0 30px 0">
      <ArticleLabel $flex="h_center_center" $backgroundColor="white" $width="150px" $height="50px">
        연관 게임
      </ArticleLabel>

      <Div $width="100%" $height="556px" $backgroundColor="white">
        {searchGameData ? (
          // 연관 게임 있을 경우
          <YesGameContainer {...{ searchGameData }} />
        ) : (
          // 연관 게임 없을 경우
          <Div $width="100%" $height="100%" $flex="h_center_center">
            <NoResultNoGameContainer />
          </Div>
        )}
      </Div>
    </Article>
  );
};

export default SearchResultGameContainer;
