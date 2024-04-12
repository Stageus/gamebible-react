import { React, useState, useEffect } from "react";

import { styled } from "styled-components";
import { Section, Article, Div } from "../../style/LayoutStyle";
import { Span } from "../../style/TextStyle";
import { setColor } from "../../style/SetStyle";

import PostListItem from "../../component/PostListItem";

const SearchGameLayout = styled(Section)`
  transition: padding 0.1s ease;
`;

const YesGameContainer = ({ searchPostData }) => {
  return (
    <SearchGameLayout $width="100%" $padding="30px">
      <Div
        $width="100%"
        $height="60px"
        $flex="h_center_center"
        $padding="0 30px"
        $margin="0 0 1px 0"
      >
        <Div $flex="h_between_center" $width="100%" $height="40px" $padding="10px 40px 10px 40px">
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
        </Div>
      </Div>

      <Article $flex="v_center_center" $width="100%">
        {searchPostData?.map((elem) => {
          return <PostListItem key={elem.postIdx} data={elem} />;
        })}
      </Article>
    </SearchGameLayout>
  );
};

export default YesGameContainer;
