import React from "react";
import { useParams } from "react-router-dom";
import PostListItem from "../component/PostListItem";
import PaginationContainer from "../container/PaginationContainer";

import { Span } from "../style/TextStyle";
import { Section, Div } from "../style/LayoutStyle";

const postListData = [
  {
    id: "Post_1",
    title: "게시글제목_1",
    nickname: "작성자닉네임_1",
    view: "조회수_1",
    createdAt: "작성일_1",
  },
  {
    id: "Post_2",
    title: "게시글제목_2",
    nickname: "작성자닉네임_2",
    view: "조회수_2",
    createdAt: "작성일_2",
  },
  {
    id: "Post_3",
    title: "게시글제목_3",
    nickname: "작성자닉네임_3",
    view: "조회수_3",
    createdAt: "작성일_3",
  },
  {
    id: "Post_4",
    title: "게시글제목_4",
    nickname: "작성자닉네임_4",
    view: "조회수_4",
    createdAt: "작성일_4",
  },
  {
    id: "Post_5",
    title: "게시글제목_5",
    nickname: "작성자닉네임_5",
    view: "조회수_5",
    createdAt: "작성일_5",
  },
  {
    id: "Post_1",
    title: "게시글제목_1",
    nickname: "작성자닉네임_1",
    view: "조회수_1",
    createdAt: "작성일_1",
  },
  {
    id: "Post_2",
    title: "게시글제목_2",
    nickname: "작성자닉네임_2",
    view: "조회수_2",
    createdAt: "작성일_2",
  },
  {
    id: "Post_3",
    title: "게시글제목_3",
    nickname: "작성자닉네임_3",
    view: "조회수_3",
    createdAt: "작성일_3",
  },
  {
    id: "Post_4",
    title: "게시글제목_4",
    nickname: "작성자닉네임_4",
    view: "조회수_4",
    createdAt: "작성일_4",
  },
  {
    id: "Post_5",
    title: "게시글제목_5",
    nickname: "작성자닉네임_5",
    view: "조회수_5",
    createdAt: "작성일_5",
  },
];

const PostListContainer = (props) => {
  const { pageIdx } = useParams();

  const dummyData = {
    totalItems: 123,
    itemCountPerPage: 10,
    pageCount: 10,
    currentPage: { pageIdx },
  };
  return (
    <Section $width="100%">
      <Div
        $width="100%"
        $height="80px"
        $flex="h_center_center"
        $padding="0 30px"
        $margin="0 0 1px 0"
        $backgroundColor="major"
      >
        <Div $flex="h_between_center" $width="100%" $height="40px" $padding="10px 40px 10px 40px">
          <Span $fontSize="large" $width="50%" $color="white">
            제목
          </Span>
          <Div $flex="h_end_center" $width="50%">
            <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
              작성자
            </Span>
            <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
              조회
            </Span>
            <Span $fontSize="large" $flex="h_center_center" $color="white" $width="33.33%">
              작성일
            </Span>
          </Div>
        </Div>
      </Div>
      <Div $backgroundColor="major" $width="100%" $padding="30px">
        {postListData.map((elem, idx) => {
          return <PostListItem key={`${idx + elem}`} data={elem} />;
        })}
        <PaginationContainer
          {...{
            totalItems: dummyData.totalItems,
            itemCountPerPage: dummyData.itemCountPerPage,
            pageCount: dummyData.pageCount,
            currentPage: parseInt(dummyData.currentPage.pageIdx),
          }}
        />
      </Div>
    </Section>
  );
};

export default PostListContainer;
