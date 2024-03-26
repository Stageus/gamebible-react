import React from "react";
import CommentListItem from "../component/CommentListItem";

const CommentListContainer = () => {
  const CommentListData = [
    {
      id: "Comment_1",
      title: "댓글제목_1",
      nickname: "작성자닉네임_1",
      createdAt: "작성일_1",
    },
    {
      id: "Comment_2",
      title: "댓글제목_2",
      nickname: "작성자닉네임_2",
      createdAt: "작성일_2",
    },
    {
      id: "Comment_3",
      title: "댓글제목_3",
      nickname: "작성자닉네임_3",
      createdAt: "작성일_3",
    },
    {
      id: "Comment_4",
      title: "댓글제목_4",
      nickname: "작성자닉네임_4",
      createdAt: "작성일_4",
    },
    {
      id: "Comment_5",
      title: "댓글제목_5",
      nickname: "작성자닉네임_5",
      createdAt: "작성일_5",
    },
  ];

  return (
    <Section $flex="v_center_center">
      {CommentListData.map((elem) => {
        return <CommentListItem key={elem.id} data={elem} />;
      })}
    </Section>
  );
};

export default CommentListContainer;
