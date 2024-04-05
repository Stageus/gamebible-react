import React from "react";

import { styled } from "styled-components";
import { Div, Article } from "../../style/LayoutStyle";
import { Span } from "../../style/TextStyle";

import PostListItem from "../../component/PostListItem";

import { Link } from "react-router-dom";

const SearchPostLayout = styled(Article)`
  transition: padding 0.1s ease;
`;
const MoveToReadPost = styled(Link)`
  width: 100%;
`;

const YesPostContainer = ({ searchPostData }) => {
  return (
    <SearchPostLayout $width="100%" $flex="v_center_center">
      <Article $flex="h_between_center" $width="100%" $height="40px" $padding="10px 40px 10px 40px">
        <Span $fontSize="large" $width="50%">
          제목
        </Span>
        <Div $flex="h_end_center" $width="50%">
          <Span $fontSize="large" $flex="h_center_center" $width="33.33%">
            작성자
          </Span>
          <Span $fontSize="large" $flex="h_center_center" $width="33.33%">
            조회
          </Span>
          <Span $fontSize="large" $flex="h_center_center" $width="33.33%">
            작성일
          </Span>
        </Div>
      </Article>
      <Article $flex="v_center_center" $width="100%">
        {searchPostData.map((elem) => {
          return (
            <MoveToReadPost
              key={`${elem.idx}`}
              //수정 필요!!!
              to={`/game/${elem.idx}/community/page/${elem.idx}/post/${elem.idx}`}
            >
              <PostListItem key={elem.idx} data={elem} />
            </MoveToReadPost>
          );
        })}
      </Article>
    </SearchPostLayout>
  );
};

export default YesPostContainer;
