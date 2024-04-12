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
    request(`/game/search?title=${encodeURI(searchTerm)}`, "GET", null);
  }, [searchParams]); // navigate는 새로고침이 아니기 때문에, 이 이펙트를 재실행하지 않음

  useEffect(() => {
    console.log(status);
    if (status === 200) {
      setSearchGameData(data?.data); // 백엔드에서 온 데이터는 그대로 저장해야 함
    } else if (status === 204) {
      setSearchGameData(null); // 백엔드에서 데이터가 오지 않았을 떄 state를 비워줘야 함
      console.log("게임 검색결과가 없습니다.");
    } else if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    } else if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data, status]); // status 달아줬어야 함 ( 204는 응답 body가 없어서 반응을 안함 )

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
