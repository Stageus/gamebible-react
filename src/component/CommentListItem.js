import React from "react";
import { styled } from "styled-components";
import { setColor } from "../style/SetStyle";
import { Article, Div } from "../style/LayoutStyle";
import deleteImg from "../img/deleteImg.svg";

const CommentListItemLayout = styled(Article)`
  background-color: ${setColor("white")};
  border-width: 1px;
  border-style: solid;
  border-color: ${setColor("black")};
  border-radius: 5px;
  cursor: pointer;
`;
const CommentContents = styled(Div)`
  border: 1px solid red;
`;
const CommentTitle = styled(Div)`
  border: 1px solid blue;
`;
const CommentNickname = styled(Div)`
  border: 1px solid blue;
`;
const CommentCreatedAt = styled(Div)`
  border: 1px solid blue;
`;
const CommentDelete = styled(Div)`
  border: 1px solid blue;
`;

const users = {
  id: ["admin", "작성자닉네임_2"],
};

if (users.id.includes("admin") || users.id.includes("작성자닉네임_2")) {
  console.log("댓글 삭제 가능함");
}

const CommentListItem = (props) => {
  const { title, nickname, createdAt } = props.data;

  return (
    <CommentListItemLayout
      $flex="h_center_center"
      $width="1100px"
      $height="40px"
      $padding="10px 40px 10px 40px"
      $margin="0 0 20px 0"
    >
      <CommentContents $flex="h_between_center" $width="100%">
        <CommentTitle $flex="h_start_center" $width="550px">
          {title}
        </CommentTitle>
        <CommentNickname $flex="h_center_center" $width="200px">
          {nickname}
        </CommentNickname>
        <CommentCreatedAt $flex="h_center_center" $width="100px">
          {createdAt}
        </CommentCreatedAt>
        <CommentDelete $flex="h_center_center" $width="30px" $height="30px">
          {users.id.includes(nickname) && <img src={deleteImg} alt="댓글 삭제하기" />}
        </CommentDelete>
      </CommentContents>
    </CommentListItemLayout>
  );
};

export default CommentListItem;
