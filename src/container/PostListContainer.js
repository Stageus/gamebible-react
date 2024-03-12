import React from "react";
import { styled } from "styled-components";
import PostListItem from "../component/PostListItem";
import { Section } from "../style/LayoutStyle";

const PostListLayout = styled(Section)``;

const PostListContainer = () => {
  const PostListData = [
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
  return (
    <PostListLayout $flex="v_center_center">
      {PostListData.map((elem) => {
        return <PostListItem key={elem.id} data={elem} />;
      })}
    </PostListLayout>
  );
};

export default PostListContainer;
